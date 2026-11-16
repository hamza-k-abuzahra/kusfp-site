import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EVENTS_DATA, UPCOMING_EVENTS_DATA } from '../constants';
import type { Event } from '../types';
import { SEASON_ORDER, parseDate, termOf, tagsOf, GLASS, UpcomingCard, EventCard } from '../components/EventCards';
import type { Term } from '../components/EventCards';

// ---------- Page ----------
const EventsListPage: React.FC = () => {
  const [params, setParams] = useSearchParams();
  const selectedTerm = params.get('term') ?? 'all';
  const selectedTag = params.get('type') ?? 'all';

  const setFilter = (key: 'term' | 'type', value: string) => {
    const next = new URLSearchParams(params);
    if (value === 'all') next.delete(key); else next.set(key, value);
    setParams(next, { replace: true });
  };

  // Past events with their term, newest first.
  const archive = useMemo(() => EVENTS_DATA
    .map(event => {
      const date = parseDate(event.date);
      return { event, date, term: date ? termOf(date) : null };
    })
    .sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0)), []);

  // Academic years → semesters (with counts) for the side panel.
  const years = useMemo(() => {
    const map = new Map<string, { academicYear: string; startYear: number; terms: Map<string, { term: Term; count: number }> }>();
    archive.forEach(({ term }) => {
      if (!term) return;
      if (!map.has(term.academicYear)) map.set(term.academicYear, { academicYear: term.academicYear, startYear: term.startYear, terms: new Map() });
      const y = map.get(term.academicYear)!;
      const t = y.terms.get(term.key) ?? { term, count: 0 };
      t.count++;
      y.terms.set(term.key, t);
    });
    return [...map.values()]
      .sort((a, b) => b.startYear - a.startYear)
      .map(y => ({ ...y, terms: [...y.terms.values()].sort((a, b) => SEASON_ORDER[b.term.season] - SEASON_ORDER[a.term.season]) }));
  }, [archive]);

  const allTags = useMemo(() => [...new Set(EVENTS_DATA.flatMap(tagsOf))].sort(), []);

  const filtered = archive.filter(({ event, term }) =>
    (selectedTerm === 'all' || term?.key === selectedTerm) &&
    (selectedTag === 'all' || tagsOf(event).includes(selectedTag))
  );

  // Group the visible events by semester (keeps newest-first order).
  const groups: { label: string; items: Event[] }[] = [];
  filtered.forEach(({ event, term }) => {
    const label = term ? `${term.season} ${term.season === 'Fall' ? term.startYear : term.startYear + 1}` : 'Undated';
    const last = groups[groups.length - 1];
    if (last && last.label === label) last.items.push(event); else groups.push({ label, items: [event] });
  });

  const termButton = (key: string, label: string, count: number, compact = false) => {
    const active = selectedTerm === key;
    return (
      <button
        key={key}
        type="button"
        onClick={() => setFilter('term', key)}
        aria-pressed={active}
        className={`flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${compact ? 'shrink-0' : 'w-full'} ${
          active ? 'bg-[#940d0d] text-white' : 'text-[#3b2f22] hover:bg-[rgba(74,58,40,0.08)]'
        }`}
      >
        <span>{label}</span>
        <span className={`text-xs ${active ? 'text-white/80' : 'text-[#6b5a45]'}`}>{count}</span>
      </button>
    );
  };

  const hasUpcoming = UPCOMING_EVENTS_DATA.length > 0;
  // Which tab is open: from the URL (?view=past), defaulting to Upcoming when there are upcoming events.
  const view = params.get('view') ?? (hasUpcoming ? 'upcoming' : 'past');
  const setView = (v: string) => setParams(v === 'past' ? { view: 'past' } : {}, { replace: true });

  const tabs = [
    { key: 'upcoming', label: 'Upcoming', count: UPCOMING_EVENTS_DATA.length },
    { key: 'past', label: 'Past', count: archive.length },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
      {/* Compact header with tabs */}
      <header className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-5 border-b border-[rgba(74,58,40,0.15)] pb-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#940d0d]">Events</p>
          <h1 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight text-[#111827]">Gatherings, talks &amp; screenings</h1>
        </div>
        <div role="tablist" className={`inline-flex self-start md:self-auto p-1 ${GLASS}`}>
          {tabs.map(t => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={view === t.key}
              onClick={() => setView(t.key)}
              className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                view === t.key ? 'bg-[#940d0d] text-white' : 'text-[#3b2f22] hover:bg-[rgba(74,58,40,0.08)]'
              }`}
            >
              {t.label} <span className={view === t.key ? 'text-white/75' : 'text-[#6b5a45]'}>{t.count}</span>
            </button>
          ))}
        </div>
      </header>

      {/* Upcoming tab */}
      {view === 'upcoming' && (
        hasUpcoming ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {UPCOMING_EVENTS_DATA.map(event => <UpcomingCard key={event.id} event={event} />)}
          </div>
        ) : (
          <div className={`p-10 text-center ${GLASS}`}>
            <p className="text-lg font-semibold text-[#111827]">No upcoming events announced yet.</p>
            <button type="button" onClick={() => setView('past')} className="mt-3 font-semibold text-[#940d0d] hover:underline">Browse past events &rarr;</button>
          </div>
        )
      )}

      {/* Past tab */}
      {view === 'past' && (
      <section>

        {/* Mobile: semester chips */}
        <div className="lg:hidden -mx-4 px-4 mb-4 flex gap-2 overflow-x-auto pb-2">
          {termButton('all', 'All', archive.length, true)}
          {years.flatMap(y => y.terms.map(({ term, count }) =>
            termButton(term.key, `${term.season} ${y.academicYear}`, count, true)))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 items-start">
          {/* Desktop: year / semester panel */}
          <aside className={`hidden lg:block sticky top-24 p-4 ${GLASS}`}>
            {termButton('all', 'All events', archive.length)}
            {years.map(y => (
              <div key={y.academicYear} className="mt-4">
                <p className="px-3 mb-1 text-xs font-bold uppercase tracking-[0.15em] text-[#940d0d]">{y.academicYear}</p>
                {y.terms.map(({ term, count }) => termButton(term.key, term.season, count))}
              </div>
            ))}
          </aside>

          <div>
            {/* Type filter */}
            {allTags.length > 1 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {['all', ...allTags].map(tag => {
                  const active = selectedTag === tag;
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setFilter('type', tag)}
                      aria-pressed={active}
                      className={`rounded-md border px-3 py-1.5 text-sm font-semibold transition-colors ${
                        active ? 'border-[#111827] bg-[#111827] text-white' : 'border-[rgba(74,58,40,0.2)] text-[#3b2f22] hover:bg-[rgba(74,58,40,0.08)]'
                      }`}
                    >
                      {tag === 'all' ? 'All types' : tag}
                    </button>
                  );
                })}
              </div>
            )}

            {groups.length === 0 ? (
              <div className={`p-10 text-center ${GLASS}`}>
                <p className="text-lg font-semibold text-[#111827]">No events match these filters.</p>
                <button type="button" onClick={() => setParams({ view: 'past' }, { replace: true })} className="mt-3 font-semibold text-[#940d0d] hover:underline">
                  Clear filters
                </button>
              </div>
            ) : (
              groups.map(group => (
                <div key={group.label} className="mb-10 last:mb-0">
                  <div className="mb-4 flex items-baseline gap-3 border-b border-[rgba(74,58,40,0.15)] pb-2">
                    <h3 className="text-lg font-extrabold text-[#111827]">{group.label}</h3>
                    <span className="text-sm text-[#6b5a45]">{group.items.length} {group.items.length === 1 ? 'event' : 'events'}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {group.items.map(event => <EventCard key={event.id} event={event} />)}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      )}
    </div>
  );
};

export default EventsListPage;
