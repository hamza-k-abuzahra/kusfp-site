import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROLES_DATA } from '../constants';
import SectionHeader from './SectionHeader';

// Ring diameters (as % of the container), from the innermost ("You") outward.
const RING_SIZES = [30, 54, 77, 100];

const RolesSection: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    // Full-width band (slightly deeper, warmer tone; pattern still shows through) to mark this as the page's key moment
    <section className="my-6 md:my-10 py-14 md:py-20 bg-[rgba(176,140,96,0.12)] border-y border-[rgba(74,58,40,0.12)] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get involved"
          title="Your Role"
          subtitle="Change is not driven by a single voice, but by the collective effort of individuals taking responsibility in their own spaces."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Expanding rings: drawn outermost first so inner rings sit on top and stay clickable */}
          <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[420px]">
            {ROLES_DATA.map((_, i) => i).reverse().map(i => {
              const size = RING_SIZES[i];
              const inner = RING_SIZES[i - 1] ?? 0;
              // Put the label in the middle of this ring's visible band (top side).
              const labelTop = i === 0 ? 50 : ((size - inner) / 4 / size) * 100;
              const isActive = i === active;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={isActive}
                  aria-label={ROLES_DATA[i].title}
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border backdrop-blur-[2px] transition-all duration-300 ${
                    isActive
                      ? 'border-2 border-[#940d0d] bg-[rgba(148,13,13,0.10)] shadow-[0_0_0_6px_rgba(148,13,13,0.06)]'
                      : 'border-[rgba(74,58,40,0.22)] bg-[rgba(255,255,255,0.22)] hover:bg-[rgba(255,255,255,0.4)]'
                  }`}
                  style={{ width: `${size}%`, height: `${size}%` }}
                >
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-bold uppercase tracking-widest transition-colors ${
                      i === 0 ? 'text-sm sm:text-base' : 'text-[10px] sm:text-xs'
                    } ${isActive ? 'text-[#940d0d]' : 'text-[#4a3a28]/70'}`}
                    style={{ top: `${labelTop}%` }}
                  >
                    {ROLES_DATA[i].ring}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Details of the selected role. All roles are rendered in the same grid cell (stacked),
              so the panel is always as tall as the longest role and nothing shifts when switching. */}
          <div
            className="rounded-[10px] border border-white/60 bg-[rgba(255,255,255,0.35)] backdrop-blur-[3px] p-6 md:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_30px_rgba(74,58,40,0.10)]"
          >
            <div className="grid">
              {ROLES_DATA.map((r, idx) => (
                <div
                  key={r.ring}
                  aria-hidden={idx !== active}
                  className={`col-start-1 row-start-1 transition-opacity duration-300 ${idx === active ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-[#940d0d]">
                    {String(idx + 1).padStart(2, '0')} / {String(ROLES_DATA.length).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight text-[#111827]">{r.title}</h3>
                  <p className="mt-3 text-lg text-[#4b5563]">{r.description}</p>
                  <ul className="mt-6 divide-y divide-[rgba(74,58,40,0.12)] border-t border-[rgba(74,58,40,0.12)]">
                    {r.actions.map((action, i) => (
                      <li key={i}>
                        {action.to ? (
                          <Link to={action.to} tabIndex={idx === active ? 0 : -1} className="group flex items-center justify-between gap-4 py-3 font-medium text-[#111827] hover:text-[#940d0d] transition-colors">
                            {action.text}
                            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                          </Link>
                        ) : (
                          <p className="py-3 text-[#374151]">{action.text}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Step-through controls (handy on touch screens) */}
            <div className="mt-6 flex flex-wrap gap-2">
              {ROLES_DATA.map((r, i) => (
                <button
                  key={r.ring}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`rounded-md px-3 py-1.5 text-sm font-semibold transition-colors ${
                    i === active ? 'bg-[#940d0d] text-white' : 'text-[#4a3a28] hover:bg-[rgba(74,58,40,0.08)]'
                  }`}
                >
                  {r.ring}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Closing call to action */}
        <div className="mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-xl md:text-2xl font-bold text-[#111827]">Found your place?</p>
          <Link to="/contact" className="bg-[#940d0d] hover:bg-[#b81414] text-white font-bold py-3 px-8 rounded-lg shadow-[0_10px_30px_-8px_rgba(148,13,13,0.5)] transition-all duration-300 hover:-translate-y-0.5">
            Join the community &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
