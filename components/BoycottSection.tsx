import React, { useMemo, useState } from 'react';
import type { BoycottItem } from '../types';
import SectionHeader from './SectionHeader';
import BoycottDetailDialog from './BoycottDetailDialog';

export const GLASS = 'rounded-[10px] border border-white/60 bg-[rgba(255,255,255,0.35)] backdrop-blur-[3px] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_30px_rgba(74,58,40,0.10)]';

// Brand logo, or a tile with the brand's initials when no logo is set.
export const BrandMark: React.FC<{ item: BoycottItem; size?: string }> = ({ item, size = 'h-16 w-16' }) =>
  item.logoUrl ? (
    <img src={item.logoUrl} alt={`${item.title} logo`} className={`${size} shrink-0 rounded-lg bg-white object-contain p-1.5 border border-[rgba(74,58,40,0.12)]`} />
  ) : (
    <div className={`${size} shrink-0 flex items-center justify-center rounded-lg bg-[#111827] text-lg font-extrabold text-white`}>
      {item.title.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase()}
    </div>
  );

const BoycottSection: React.FC<{ items: BoycottItem[] }> = ({ items }) => {
  const [selected, setSelected] = useState<BoycottItem | null>(null);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const categories = useMemo(
    () => [...new Set(items.flatMap(i => i.categories.map(c => c.toLowerCase())))].sort(),
    [items]
  );

  const visible = items.filter(i =>
    (category === 'all' || i.categories.some(c => c.toLowerCase() === category)) &&
    (query.trim() === '' || `${i.title} ${i.reason} ${i.alternatives.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
      <SectionHeader
        eyebrow="Act"
        title="Boycott List"
        subtitle="Everyday choices add up. These companies are complicit in the occupation or profit from it. Tap a brand to see why, the sources, and what to choose instead."
      />

      {items.length === 0 ? (
        <div className={`mx-auto max-w-2xl p-10 text-center ${GLASS}`}>
          <p className="text-lg font-semibold text-[#111827]">Our boycott list is being prepared.</p>
          <p className="mt-2 text-[#4b5563]">Check back soon, or follow us on social media for updates.</p>
        </div>
      ) : (
        <>
          {/* Search + category filter */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center gap-4">
            <input
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search a brand or alternative…"
              aria-label="Search the boycott list"
              className="w-full md:max-w-sm px-4 py-2.5 rounded-lg border border-[rgba(74,58,40,0.2)] bg-white/60 placeholder:text-[#8a7a66] text-[#111827] focus:outline-none focus:border-[#940d0d] focus:ring-2 focus:ring-[rgba(148,13,13,0.15)]"
            />
            {categories.length > 1 && (
              <div className="flex flex-wrap gap-2">
                {['all', ...categories].map(c => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    aria-pressed={category === c}
                    className={`rounded-md border px-3 py-1.5 text-sm font-semibold capitalize transition-colors ${
                      category === c ? 'border-[#111827] bg-[#111827] text-white' : 'border-[rgba(74,58,40,0.2)] text-[#3b2f22] hover:bg-[rgba(74,58,40,0.08)]'
                    }`}
                  >
                    {c === 'all' ? 'All' : c}
                  </button>
                ))}
              </div>
            )}
            <p className="md:ml-auto text-sm text-[#6b5a45]">{visible.length} of {items.length} brands</p>
          </div>

          {visible.length === 0 ? (
            <div className={`p-10 text-center ${GLASS}`}>
              <p className="text-lg font-semibold text-[#111827]">No brands match your search.</p>
              <button type="button" onClick={() => { setQuery(''); setCategory('all'); }} className="mt-3 font-semibold text-[#940d0d] hover:underline">Clear search</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visible.map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelected(item)}
                  className={`group flex flex-col text-left p-5 ${GLASS} hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_14px_40px_rgba(74,58,40,0.18)] transition-all duration-300`}
                >
                  <div className="flex items-center gap-4">
                    <BrandMark item={item} />
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#940d0d] transition-colors">{item.title}</h3>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#6b5a45] capitalize">{item.categories.join(' · ')}</p>
                    </div>
                  </div>
                  <p className="mt-4 flex-grow text-[#4b5563] line-clamp-3">{item.reason}</p>
                  {item.alternatives.length > 0 && (
                    <p className="mt-4 border-t border-[rgba(74,58,40,0.12)] pt-3 text-sm text-[#14940d] font-semibold">
                      Instead: {item.alternatives.slice(0, 2).join(', ')}{item.alternatives.length > 2 ? '…' : ''}
                    </p>
                  )}
                </button>
              ))}
            </div>
          )}
        </>
      )}

      {selected && <BoycottDetailDialog item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default BoycottSection;
