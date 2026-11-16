import React from 'react';
import { Link } from 'react-router-dom';
import type { Event } from '../types';

// ---------- Semester helpers ----------
// Semesters are worked out from each event's `date` text (e.g. "December 9, 2025"), so nothing extra needs to be filled in.
// Academic year runs Fall (Sep–Jan) → Spring (Feb–Jun) → Summer (Jul–Aug).
export type Season = 'Fall' | 'Spring' | 'Summer';
export const SEASON_ORDER: Record<Season, number> = { Fall: 0, Spring: 1, Summer: 2 };

export interface Term {
  key: string;          // e.g. "2025-fall" (used in the URL)
  academicYear: string; // e.g. "2025–26"
  startYear: number;    // first calendar year of the academic year
  season: Season;
}

export const parseDate = (date: string): Date | null => {
  const d = new Date(date);
  return isNaN(d.getTime()) ? null : d;
};

export const termOf = (date: Date): Term => {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  let season: Season;
  let startYear: number;
  if (month >= 9) { season = 'Fall'; startYear = year; }
  else if (month === 1) { season = 'Fall'; startYear = year - 1; }
  else if (month <= 6) { season = 'Spring'; startYear = year - 1; }
  else { season = 'Summer'; startYear = year - 1; }
  return {
    key: `${startYear}-${season.toLowerCase()}`,
    academicYear: `${startYear}–${String(startYear + 1).slice(2)}`,
    startYear,
    season,
  };
};

// "Seminar - Panel" → ["Seminar", "Panel"]
export const tagsOf = (event: Event) => event.category.split('-').map(t => t.trim()).filter(Boolean);

export const GLASS = 'rounded-[10px] border border-white/60 bg-[rgba(255,255,255,0.35)] backdrop-blur-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_30px_rgba(74,58,40,0.10)]';

// ---------- Cards ----------
export const UpcomingCard: React.FC<{ event: Event }> = ({ event }) => {
  const d = parseDate(event.date);
  return (
    <Link to={`/events/${event.id}`} className={`group flex gap-5 p-5 ${GLASS} hover:-translate-y-0.5 transition-all duration-300`}>
      <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-lg bg-[#940d0d] text-white shadow-md">
        {d ? (
          <>
            <span className="text-xs font-bold uppercase tracking-widest">{d.toLocaleString('en', { month: 'short' })}</span>
            <span className="text-3xl font-extrabold leading-none">{d.getDate()}</span>
          </>
        ) : (
          <span className="text-lg font-extrabold tracking-wider">TBD</span>
        )}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#940d0d]">{tagsOf(event).join(' · ')}</p>
        <h3 className="mt-1 text-lg font-bold leading-snug text-[#111827] group-hover:text-[#940d0d] transition-colors">{event.title}</h3>
        <p className="mt-1 text-sm text-[#4b5563]">
          {[event.time, event.location].filter(Boolean).join(' · ')}
        </p>
      </div>
    </Link>
  );
};

export const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <Link to={`/events/${event.id}`} className={`group flex flex-col overflow-hidden ${GLASS} hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_14px_40px_rgba(74,58,40,0.18)] transition-all duration-300`}>
    <div className="relative overflow-hidden">
      <img src={event.imageUrl} alt={event.title} loading="lazy" className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
        {tagsOf(event).map(tag => (
          <span key={tag} className="rounded-md bg-white/85 backdrop-blur px-2 py-0.5 text-xs font-bold text-[#111827]">{tag}</span>
        ))}
      </div>
    </div>
    <div className="flex flex-grow flex-col p-5">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#940d0d]">{event.date}</p>
      <h3 className="mt-2 text-xl font-bold leading-snug text-[#111827]">{event.title}</h3>
      <p className="mt-1 text-sm text-[#6b5a45]">{event.location}</p>
      <p className="mt-3 flex-grow text-[#4b5563] line-clamp-3">{event.description}</p>
      <span className="mt-4 font-semibold text-[#940d0d]">View details <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span></span>
    </div>
  </Link>
);
