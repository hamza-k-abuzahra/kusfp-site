import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ANNOUNCEMENTS, EVENTS_DATA, UPCOMING_EVENTS_DATA, SLIDER_CONTENT } from '../constants';
import SectionHeader from './SectionHeader';
import { parseDate } from './EventCards';
import { SYMBOLS } from './patternBackground';

const MAX_SLIDES = 6;

interface FeedItem {
  key: string;
  type: 'Coming up' | 'Announcement' | 'Event' | 'Highlight';
  title: string;
  text: string;
  date?: string;
  imageUrl?: string;
  to?: string;
  rank: number; // sort order: higher shows first
}

// Builds the "What's Happening" feed automatically:
// upcoming events first, then announcements and past events by date (newest first), then hand-picked highlights.
const buildFeed = (): FeedItem[] => {
  const time = (d: string) => parseDate(d)?.getTime() ?? 0;
  const items: FeedItem[] = [
    ...UPCOMING_EVENTS_DATA.map(e => ({
      key: `up-${e.id}`, type: 'Coming up' as const, title: e.title, text: [e.date, e.location].filter(Boolean).join(' · '),
      imageUrl: e.imageUrl || undefined, to: `/events/${e.id}`, rank: Number.MAX_SAFE_INTEGER - (time(e.date) || 0),
    })),
    ...ANNOUNCEMENTS.map(a => ({
      key: `an-${a.id}`, type: 'Announcement' as const, title: a.title, text: a.content, date: a.date,
      imageUrl: a.imageUrl, to: `/announcements#announcement-${a.id}`, rank: time(a.date),
    })),
    ...EVENTS_DATA.map(e => ({
      key: `ev-${e.id}`, type: 'Event' as const, title: e.title, text: e.description, date: e.date,
      imageUrl: e.imageUrl || undefined, to: `/events/${e.id}`, rank: time(e.date),
    })),
    ...SLIDER_CONTENT.map(s => ({
      key: `hl-${s.id}`, type: 'Highlight' as const, title: s.title, text: s.description, imageUrl: s.imageUrl, rank: -1,
    })),
  ];
  return items.sort((a, b) => b.rank - a.rank).slice(0, MAX_SLIDES);
};

const TYPE_STYLE: Record<FeedItem['type'], string> = {
  'Coming up': 'bg-[#940d0d] text-white',
  Announcement: 'bg-white text-[#111827]',
  Event: 'bg-[#14940d] text-white',
  Highlight: 'bg-[#111827] text-white',
};

const ContentSlider: React.FC = () => {
  const feed = useMemo(buildFeed, []);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent(i => (i + 1) % feed.length), [feed.length]);
  const prev = () => setCurrent(i => (i - 1 + feed.length) % feed.length);

  useEffect(() => {
    if (paused || feed.length < 2) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, paused, feed.length]);

  if (feed.length === 0) return null;

  return (
    <section className="py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Community updates"
          title="What's Happening"
          subtitle="Events, announcements and moments from our community."
        />
        <div
          className="relative rounded-[10px] overflow-hidden border border-white/60 shadow-[0_8px_30px_rgba(74,58,40,0.18)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative w-full h-80 md:h-[460px]">
            <div className="w-full h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {feed.map((item, i) => (
                <div key={item.key} className="relative w-full h-full flex-shrink-0 bg-[#1f1a14]" aria-hidden={i !== current}>
                  {item.imageUrl ? (
                    <img src={item.imageUrl} alt="" className="w-full h-full object-cover" />
                  ) : (
                    // No photo: dark panel with a large line-art symbol
                    <svg aria-hidden viewBox="-30 -30 60 60" fill="none" stroke="currentColor" strokeWidth={0.8} strokeLinecap="round" strokeLinejoin="round"
                      className="absolute -right-10 top-1/2 -translate-y-1/2 h-[140%] text-white/10"
                      dangerouslySetInnerHTML={{ __html: SYMBOLS[item.type === 'Coming up' ? 'key' : 'olive'] }} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent flex items-end p-8 md:p-12">
                    <div className="text-white max-w-2xl">
                      <div className="flex items-center gap-3">
                        <span className={`rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${TYPE_STYLE[item.type]}`}>{item.type}</span>
                        {item.date && <span className="text-sm font-semibold text-white/80">{item.date}</span>}
                      </div>
                      <h3 className="mt-3 text-2xl md:text-4xl font-bold leading-tight">{item.title}</h3>
                      <p className="mt-2 text-base md:text-lg text-white/85 line-clamp-2">{item.text}</p>
                      {item.to && (
                        <Link to={item.to} tabIndex={i === current ? 0 : -1} className="mt-4 inline-block rounded-lg border border-white/60 px-4 py-2 text-sm font-bold hover:bg-white hover:text-[#111827] transition-colors">
                          {item.type === 'Announcement' ? 'Read announcement' : 'View event'} &rarr;
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {feed.length > 1 && (
            <>
              <button onClick={prev} aria-label="Previous" className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/25 hover:bg-white/45 backdrop-blur text-white p-3 rounded-lg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={next} aria-label="Next" className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/25 hover:bg-white/45 backdrop-blur text-white p-3 rounded-lg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
              <div className="absolute bottom-4 right-6 flex gap-2">
                {feed.map((item, i) => (
                  <button key={item.key} onClick={() => setCurrent(i)} aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${current === i ? 'bg-white w-6' : 'bg-white/50 w-2'}`} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContentSlider;
