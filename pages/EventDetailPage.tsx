import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EVENTS_DATA, UPCOMING_EVENTS_DATA } from '../constants';
import NotFoundPage from './NotFoundPage';
import { GLASS, EventCard, UpcomingCard, parseDate, termOf, tagsOf } from '../components/EventCards';

// Full-screen photo viewer: click outside or press Esc to close, arrow keys to move.
const Lightbox: React.FC<{ images: { url: string; title: string }[]; index: number; onClose: () => void; onMove: (i: number) => void }> = ({ images, index, onClose, onMove }) => {
  const prev = useCallback(() => onMove((index - 1 + images.length) % images.length), [index, images.length, onMove]);
  const next = useCallback(() => onMove((index + 1) % images.length), [index, images.length, onMove]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose, prev, next]);

  const navBtn = 'absolute top-1/2 -translate-y-1/2 rounded-lg bg-white/10 hover:bg-white/25 p-3 text-white transition-colors';
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(20,16,12,0.92)] p-4" onClick={onClose} role="dialog" aria-modal="true">
      <img src={images[index].url} alt={images[index].title} className="max-h-[85vh] max-w-full rounded-[10px] object-contain shadow-2xl" onClick={e => e.stopPropagation()} />
      <button type="button" aria-label="Close" onClick={onClose} className="absolute right-4 top-4 rounded-lg bg-white/10 hover:bg-white/25 px-3 py-2 text-white">✕</button>
      {images.length > 1 && (
        <>
          <button type="button" aria-label="Previous photo" onClick={e => { e.stopPropagation(); prev(); }} className={`${navBtn} left-4`}>&larr;</button>
          <button type="button" aria-label="Next photo" onClick={e => { e.stopPropagation(); next(); }} className={`${navBtn} right-4`}>&rarr;</button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">{index + 1} / {images.length}</p>
        </>
      )}
    </div>
  );
};

const EventDetailPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLightbox(null);
  }, [eventId]);

  const id = eventId ? parseInt(eventId, 10) : NaN;
  const pastEvent = EVENTS_DATA.find(e => e.id === id);
  const event = pastEvent ?? UPCOMING_EVENTS_DATA.find(e => e.id === id);
  if (!event) return <NotFoundPage />;
  const upcoming = !pastEvent;

  const date = parseDate(event.date);
  const term = date ? termOf(date) : null;
  const photos = event.images;
  const others = (upcoming ? UPCOMING_EVENTS_DATA : EVENTS_DATA).filter(e => e.id !== event.id).slice(0, 3);

  const facts = [
    { label: 'Date', value: event.date },
    { label: 'Time', value: event.time },
    { label: 'Location', value: event.location },
  ].filter(f => f.value);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
      {/* Breadcrumb */}
      <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#6b5a45]">
        <Link to={upcoming ? '/events' : '/events?view=past'} className="hover:text-[#940d0d] transition-colors">&larr; All events</Link>
        {term && !upcoming && (
          <>
            <span aria-hidden>/</span>
            <Link to={`/events?view=past&term=${term.key}`} className="hover:text-[#940d0d] transition-colors">{term.season} {term.academicYear}</Link>
          </>
        )}
      </nav>

      {/* Header */}
      <header className="max-w-4xl">
        <div className="flex flex-wrap items-center gap-2">
          {upcoming && <span className="rounded-md bg-[#940d0d] px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">Coming up</span>}
          {tagsOf(event).map(tag => (
            <span key={tag} className="rounded-md border border-[rgba(74,58,40,0.2)] px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#3b2f22]">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-[#111827]">{event.title}</h1>
      </header>

      {/* Key facts band */}
      <dl className={`mt-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(74,58,40,0.15)] ${GLASS}`}>
        {facts.map(f => (
          <div key={f.label} className="px-6 py-4">
            <dt className="text-xs font-bold uppercase tracking-[0.15em] text-[#940d0d]">{f.label}</dt>
            <dd className="mt-1 text-lg font-semibold text-[#111827]">{f.value}</dd>
          </div>
        ))}
      </dl>

      {/* Article + side column */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-start">
        <article className="max-w-[68ch]">
          {event.summary && (
            <p className="text-xl md:text-2xl font-semibold leading-snug text-[#111827]">{event.summary}</p>
          )}
          <div className={`${event.summary ? 'mt-5' : ''} space-y-4 text-lg leading-relaxed text-[#374151]`}>
            {event.description.split(/\n\s*\n/).map((para, i) => <p key={i} className="whitespace-pre-line">{para}</p>)}
          </div>

          {event.highlights && event.highlights.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#940d0d]">Highlights</h2>
              <ul className="mt-3 divide-y divide-[rgba(74,58,40,0.12)] border-y border-[rgba(74,58,40,0.12)]">
                {event.highlights.map((h, i) => (
                  <li key={i} className="flex gap-4 py-3 text-[#374151]">
                    <span className="font-bold text-[#940d0d]">{String(i + 1).padStart(2, '0')}</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {event.speakers && event.speakers.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#940d0d]">Speakers</h2>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {event.speakers.map(sp => (
                  <li key={sp.name} className={`px-4 py-3 ${GLASS}`}>
                    <p className="font-bold text-[#111827]">{sp.name}</p>
                    {sp.role && <p className="text-sm text-[#6b5a45]">{sp.role}</p>}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {event.reflections && (
            <section className="mt-10">
              <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#940d0d]">Reflections</h2>
              <div className="mt-3 space-y-4 border-l-2 border-[#940d0d] pl-5 text-lg leading-relaxed text-[#374151]">
                {event.reflections.split(/\n\s*\n/).map((para, i) => <p key={i} className="whitespace-pre-line">{para}</p>)}
              </div>
            </section>
          )}

          {event.remarks && (
            <section className="mt-10">
              <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#940d0d]">Remarks</h2>
              <p className="mt-3 whitespace-pre-line text-[#4b5563] leading-relaxed">{event.remarks}</p>
            </section>
          )}

          {upcoming && (
            <Link to="/contact" className="mt-10 inline-block bg-[#940d0d] hover:bg-[#b81414] text-white font-bold py-3 px-6 rounded-lg shadow-[0_10px_30px_-8px_rgba(148,13,13,0.5)] transition-all duration-300 hover:-translate-y-0.5">
              Stay in the loop &rarr;
            </Link>
          )}
        </article>

        {/* Side column: cover photo + links to social media posts (each button only shows if its link is set) */}
        <aside className="lg:sticky lg:top-24 space-y-3">
          {event.imageUrl && <img src={event.imageUrl} alt={event.title} className="w-full max-h-[420px] object-cover rounded-[10px] border border-white/60 shadow-[0_8px_30px_rgba(74,58,40,0.18)]" />}
          {event.links?.instagram && (
            <a href={event.links.instagram} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-between px-4 py-3 font-semibold text-[#111827] hover:text-[#940d0d] transition-colors ${GLASS}`}>
              <span className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/></svg>
                See on Instagram
              </span>
              <span aria-hidden>&#8599;</span>
            </a>
          )}
          {event.links?.linkedin && (
            <a href={event.links.linkedin} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-between px-4 py-3 font-semibold text-[#111827] hover:text-[#940d0d] transition-colors ${GLASS}`}>
              <span className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>
                See on LinkedIn
              </span>
              <span aria-hidden>&#8599;</span>
            </a>
          )}
        </aside>
      </div>

      {/* Photo gallery */}
      {photos.length > 0 && (
        <section className="mt-14">
          <div className="mb-5 flex items-baseline gap-3 border-b border-[rgba(74,58,40,0.15)] pb-2">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#111827]">Moments from the event</h2>
            <span className="text-sm text-[#6b5a45]">{photos.length} photos</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((photo, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`Open photo ${i + 1}`}
                className={`group relative overflow-hidden rounded-[10px] border border-white/60 shadow-[0_8px_30px_rgba(74,58,40,0.12)] ${i === 0 && photos.length > 2 ? 'col-span-2 row-span-2' : ''}`}
              >
                <img src={photo.url} alt={`Photo ${i + 1} from ${event.title}`} loading="lazy" className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* More events */}
      {others.length > 0 && (
        <section className="mt-14">
          <div className="mb-5 flex items-baseline justify-between gap-3 border-b border-[rgba(74,58,40,0.15)] pb-2">
            <h2 className="text-2xl font-extrabold tracking-tight text-[#111827]">{upcoming ? 'Also coming up' : 'More events'}</h2>
            <Link to={upcoming ? '/events' : '/events?view=past'} className="text-sm font-semibold text-[#940d0d] hover:underline">See all &rarr;</Link>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${upcoming ? 'gap-4' : 'gap-6'}`}>
            {others.map(e => upcoming ? <UpcomingCard key={e.id} event={e} /> : <EventCard key={e.id} event={e} />)}
          </div>
        </section>
      )}

      {lightbox !== null && (
        <Lightbox images={photos} index={lightbox} onClose={() => setLightbox(null)} onMove={setLightbox} />
      )}
    </div>
  );
};

export default EventDetailPage;
