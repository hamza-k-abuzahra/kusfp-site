import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { ABOUT_TEXT, TEAMS } from '../constants';
import { GLASS } from '../components/EventCards';
import { SYMBOLS } from '../components/patternBackground';

const WhoAreWePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
      {/* About the group */}
      <SectionHeader eyebrow="About us" title="Who We Are" />
      <div className="mx-auto max-w-3xl space-y-4 text-center text-lg leading-relaxed text-[#374151]">
        {ABOUT_TEXT.map((para, i) => (
          <p key={i} className={i === 0 ? 'text-xl md:text-2xl font-semibold leading-snug text-[#111827]' : ''}>{para}</p>
        ))}
      </div>

      {/* Teams */}
      <section className="mt-16 md:mt-20">
        <SectionHeader
          eyebrow="Get involved"
          title="Our Teams"
          subtitle="We're organized in teams. Find the one that fits what you enjoy, or what you want to learn, and apply to join."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEAMS.map(team => (
            <article key={team.name} className={`relative flex flex-col p-6 md:p-7 ${GLASS}`}>
              {team.symbol && SYMBOLS[team.symbol] && (
                <svg aria-hidden viewBox="-30 -30 60 60" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"
                  className="pointer-events-none absolute right-5 top-5 h-14 w-14 text-[#940d0d] opacity-70"
                  dangerouslySetInnerHTML={{ __html: SYMBOLS[team.symbol] }} />
              )}
              <h3 className="pr-16 text-2xl font-extrabold tracking-tight text-[#111827]">{team.name}</h3>
              <p className="mt-2 pr-16 text-[#4b5563]">{team.description}</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[rgba(74,58,40,0.12)] pt-5">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#940d0d]">Roles</h4>
                  <ul className="mt-2 space-y-1.5 text-[#374151]">
                    {team.roles.map(r => (
                      <li key={r} className="flex gap-2"><span className="text-[#940d0d]">—</span>{r}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#14940d]">Skills</h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {team.skills.map(s => (
                      <li key={s} className="rounded-md border border-[rgba(20,148,13,0.3)] bg-[rgba(20,148,13,0.08)] px-2.5 py-1 text-sm font-semibold text-[#0f7618]">{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Join call to action */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-xl md:text-2xl font-bold text-[#111827]">See a team you'd fit in?</p>
          <Link to="/contact" className="bg-[#940d0d] hover:bg-[#b81414] text-white font-bold py-3 px-8 rounded-lg shadow-[0_10px_30px_-8px_rgba(148,13,13,0.5)] transition-all duration-300 hover:-translate-y-0.5">
            Apply to join &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhoAreWePage;
