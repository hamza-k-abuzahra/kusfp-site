import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import groupPhoto from "../resources/imgs/background.jpeg";
import { SYMBOLS } from './patternBackground';
import SectionHeader from './SectionHeader';

// Photos shown in the hero mosaic (4 tiles, in reading order).
// Replace `src` with other event photos; `position` controls which part of the photo stays visible when cropped.
const MOSAIC_PHOTOS: { src: string; alt: string; position?: string }[] = [
  { src: groupPhoto, alt: 'KUSFP+ members on campus', position: '30% 70%' },
  { src: groupPhoto, alt: 'KUSFP+ members with the Free Palestine banner', position: '50% 70%' },
  { src: groupPhoto, alt: 'KUSFP+ community gathering', position: '45% 75%' },
  { src: groupPhoto, alt: 'KUSFP+ members on campus', position: '85% 65%' },
];

// Tile layout on a 5-column, 2-row grid: wide/narrow on top, narrow/wide below.
const TILE_SPANS = ['col-span-2', 'col-span-3', 'col-span-3', 'col-span-2'];

// Glass cards, each tinted with a color of the Palestinian flag.
const ACTION_CARDS = [
  {
    label: 'Learn',
    text: 'Read our articles and analysis on Palestine and struggles for justice worldwide.',
    to: '/educational-posts',
    cta: 'Start reading',
    tint: 'bg-[rgba(20,148,13,0.14)] text-[#111827]',
    symbol: 'olive',
    symbolColor: 'text-[#14940d]',
    accent: 'text-[#0f7618]',
  },
  {
    label: 'Act',
    text: 'Use our boycott guide and campaigns to turn everyday choices into pressure.',
    to: '/boycott',
    cta: 'See the boycott guide',
    tint: 'bg-[rgba(212,45,45,0.14)] text-[#111827]',
    symbol: 'watermelon',
    symbolColor: 'text-[#940d0d]',
    accent: 'text-[#940d0d]',
  },
  {
    label: 'Organize',
    text: 'Come to our events, screenings and meetings. Meet people who care like you do.',
    to: '/events',
    cta: 'Upcoming events',
    tint: 'bg-[rgba(17,24,39,0.66)] text-white',
    symbol: 'key',
    symbolColor: 'text-white',
    accent: 'text-white',
  },
];

const Counter: React.FC<{ end: number; label: string; start: boolean }> = ({ end, label, start }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;
        let startTime: number | undefined;
        let raf: number;
        const duration = 2000;
        const frame = (timestamp: number) => {
            if (startTime === undefined) startTime = timestamp;
            const t = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3); // ease-out: fast start, gentle finish
            setCount(Math.floor(eased * end));
            if (t < 1) raf = requestAnimationFrame(frame);
        };
        raf = requestAnimationFrame(frame);
        return () => cancelAnimationFrame(raf);
    }, [end, start]);

    return (
        <div className="text-center py-8 px-4">
            <p className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827]">
                {count.toLocaleString()}+
            </p>
            <p className="mt-2 text-xs md:text-sm font-bold text-[#940d0d] uppercase tracking-[0.15em]">{label}</p>
        </div>
    );
};

// Becomes true once the element has scrolled into view (and stays true).
const useInView = <T extends Element>(threshold = 0.4) => {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el || inView) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.disconnect();
            }
        }, { threshold });
        observer.observe(el);
        return () => observer.disconnect();
    }, [inView, threshold]);
    return [ref, inView] as const;
};

const Hero: React.FC = () => {
  const [statsRef, statsInView] = useInView<HTMLDivElement>();

  return (
    <>
      {/* Transparent so the page-wide pattern background (Layout) shows through */}
      <section className="relative text-[#111827]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 md:pt-8 md:pb-12">
          {/* Tagline + subtext + main CTA */}
          <div className="mb-6 md:mb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-2xl md:text-3xl font-bold leading-snug">
                Rooted in Palestine. Connected to global struggles for justice.
              </p>
              <p className="mt-2 text-base md:text-lg text-[#4b5563]">
                A justice-oriented student community building political and social awareness for collective action, on campus and beyond.
              </p>
            </div>
            <Link to="/contact" className="shrink-0 w-full sm:w-auto text-center bg-[#940d0d] hover:bg-[#b81414] text-white font-bold py-3.5 px-10 rounded-lg shadow-[0_10px_30px_-8px_rgba(148,13,13,0.5)] transition-all duration-300 hover:-translate-y-0.5">
              Join the Community
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
            {/* Left: Learn / Act / Organize glass cards, stacked */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              {ACTION_CARDS.map(card => (
                <Link
                  key={card.label}
                  to={card.to}
                  className={`group relative flex flex-1 items-start gap-4 rounded-[10px] border border-white/60 ${card.tint} p-4 md:p-5 backdrop-blur-[3px] backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_30px_rgba(74,58,40,0.10)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_14px_40px_rgba(74,58,40,0.18)] hover:-translate-y-0.5 transition-all duration-300`}
                >
                  {/* Line-art symbol from the background pattern */}
                  <svg
                    aria-hidden
                    viewBox="-30 -30 60 60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`pointer-events-none absolute right-3 top-3 h-14 w-14 md:h-16 md:w-16 ${card.symbolColor} opacity-75 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105`}
                    dangerouslySetInnerHTML={{ __html: SYMBOLS[card.symbol] }}
                  />
                  <div className="flex flex-col pr-14 md:pr-16">
                    <h2 className="text-2xl lg:text-[1.65rem] font-extrabold tracking-tight">{card.label}.</h2>
                    <p className="mt-1 text-[15px] leading-snug opacity-80">{card.text}</p>
                    <span className={`mt-2 text-sm font-semibold uppercase tracking-wider ${card.accent}`}>
                      {card.cta} <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right: photo mosaic (on desktop its height follows the screen height so the tagline below stays on the first screen) */}
            <div className="lg:col-span-3 grid grid-cols-5 grid-rows-2 gap-3 h-[320px] sm:h-[420px] lg:h-[clamp(320px,calc(100vh_-_380px),480px)]">
              {MOSAIC_PHOTOS.map((photo, i) => (
                <div key={i} className={`${TILE_SPANS[i]} relative overflow-hidden rounded-[10px] border border-black/5 shadow-[0_8px_30px_rgba(17,24,39,0.12)]`}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{ objectPosition: photo.position ?? 'center' }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Counter Section */}
      <section className="py-14 md:py-16 px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our impact"
          title="What we've built together"
          subtitle="Every number here is people: students who showed up, gave, and organized."
        />
        <div
          ref={statsRef}
          className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(74,58,40,0.15)] rounded-[10px] border border-white/60 bg-[rgba(255,255,255,0.35)] backdrop-blur-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_30px_rgba(74,58,40,0.10)] transition-all duration-700 ease-out ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <Counter end={1350} label="Supporters" start={statsInView} />
          <Counter end={250000} label="Donations Raised (TL)" start={statsInView} />
          <Counter end={24} label="Events Organized" start={statsInView} />
        </div>
      </section>
    </>
  );
};

export default Hero;
