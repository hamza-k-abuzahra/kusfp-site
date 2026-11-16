import React from 'react';
import { Link } from 'react-router-dom';
import { BOYCOTT_LIST } from '../constants';
import { BrandMark, GLASS } from './BoycottSection';

// Compact boycott teaser for the home page: short pitch on the left, a few brands on the right.
const BoycottSpotlight: React.FC = () => {
  const brands = BOYCOTT_LIST.slice(0, 6);

  return (
    <section className="py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 items-center p-6 md:p-10 ${GLASS}`}>
          <div className="lg:col-span-2">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#940d0d]">Boycott spotlight</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-[#111827]">Your wallet is a vote.</h2>
            <p className="mt-3 text-lg text-[#4b5563]">
              Boycotts work when many people commit together. See which brands we boycott, why, and what to choose instead.
            </p>
            <Link to="/boycott" className="mt-6 inline-block bg-[#940d0d] hover:bg-[#b81414] text-white font-bold py-3 px-6 rounded-lg shadow-[0_10px_30px_-8px_rgba(148,13,13,0.5)] transition-all duration-300 hover:-translate-y-0.5">
              See the full list &rarr;
            </Link>
          </div>

          {brands.length > 0 && (
            <ul className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {brands.map(item => (
                <li key={item.id}>
                  <Link to="/boycott" className="group flex items-center gap-3 rounded-lg border border-[rgba(74,58,40,0.12)] bg-white/40 p-3 hover:bg-white/70 transition-colors">
                    <BrandMark item={item} size="h-11 w-11" />
                    <span className="min-w-0 truncate font-bold text-[#111827] group-hover:text-[#940d0d] transition-colors">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default BoycottSpotlight;
