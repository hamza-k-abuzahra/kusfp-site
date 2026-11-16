import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { ANNOUNCEMENTS } from '../constants';
import { GLASS, parseDate } from '../components/EventCards';

const AnnouncementsPage: React.FC = () => {
  const { hash } = useLocation();
  const items = [...ANNOUNCEMENTS].sort(
    (a, b) => (parseDate(b.date)?.getTime() ?? 0) - (parseDate(a.date)?.getTime() ?? 0)
  );

  // Scroll to a specific announcement when linked as /announcements#announcement-3
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [hash]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
      <SectionHeader eyebrow="News" title="Announcements" subtitle="Calls, updates and news from the community." />

      {items.length === 0 ? (
        <div className={`p-10 text-center ${GLASS}`}>
          <p className="text-lg font-semibold text-[#111827]">No announcements right now.</p>
          <Link to="/events" className="mt-3 inline-block font-semibold text-[#940d0d] hover:underline">See our events &rarr;</Link>
        </div>
      ) : (
        <ol className="relative border-l-2 border-[rgba(74,58,40,0.15)] ml-2 md:ml-28 space-y-8">
          {items.map(a => {
            const d = parseDate(a.date);
            const isLink = a.link && /^https?:/.test(a.link.url);
            return (
              <li key={a.id} id={`announcement-${a.id}`} className="relative pl-6 md:pl-8 scroll-mt-28">
                {/* timeline dot */}
                <span className="absolute -left-[7px] top-6 h-3 w-3 rounded-full bg-[#940d0d] ring-4 ring-[#f3ebdd]" />
                {/* date (left column on desktop) */}
                <p className="md:absolute md:-left-32 md:top-5 md:w-24 md:text-right mb-2 md:mb-0 text-xs font-bold uppercase tracking-[0.15em] text-[#940d0d]">
                  {d ? d.toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' }) : a.date}
                </p>
                <article className={`overflow-hidden ${GLASS}`}>
                  {a.imageUrl && <img src={a.imageUrl} alt="" className="h-56 w-full object-cover" />}
                  <div className="p-6">
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#111827]">{a.title}</h2>
                    <div className="mt-3 space-y-3 leading-relaxed text-[#374151]">
                      {a.content.split(/\n\s*\n/).map((para, i) => <p key={i} className="whitespace-pre-line">{para}</p>)}
                    </div>
                    {a.link && (
                      isLink ? (
                        <a href={a.link.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-lg bg-[#940d0d] hover:bg-[#b81414] px-5 py-2.5 font-bold text-white transition-colors">
                          {a.link.label} &#8599;
                        </a>
                      ) : (
                        <Link to={a.link.url} className="mt-5 inline-block rounded-lg bg-[#940d0d] hover:bg-[#b81414] px-5 py-2.5 font-bold text-white transition-colors">
                          {a.link.label} &rarr;
                        </Link>
                      )
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};

export default AnnouncementsPage;
