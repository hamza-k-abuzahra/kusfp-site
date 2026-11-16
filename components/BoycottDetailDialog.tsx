import React, { useEffect } from 'react';
import type { BoycottItem } from '../types';
import { BrandMark } from './BoycottSection';

interface BoycottDetailDialogProps {
  item: BoycottItem;
  onClose: () => void;
}

const BoycottDetailDialog: React.FC<BoycottDetailDialogProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const label = 'text-xs font-bold uppercase tracking-[0.15em] text-[#940d0d] mb-2';

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(20,16,12,0.7)] backdrop-blur-sm p-4 animate-fadeIn"
      aria-labelledby="dialog-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[10px] border border-white/60 bg-[#f7f1e6] shadow-2xl animate-scaleUp"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 rounded-lg p-1.5 text-[#6b5a45] hover:bg-[rgba(74,58,40,0.08)] hover:text-[#111827] transition-colors" aria-label="Close dialog">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="p-7 sm:p-9">
          <div className="flex items-center gap-5 pr-8">
            <BrandMark item={item} size="h-20 w-20" />
            <div>
              <h2 id="dialog-title" className="text-3xl font-extrabold tracking-tight text-[#111827]">{item.title}</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-[#6b5a45] capitalize">{item.categories.join(' · ')}</p>
            </div>
          </div>

          <div className="mt-8 space-y-7">
            <section>
              <h3 className={label}>Why boycott</h3>
              <p className="text-lg text-[#111827]">{item.reason}</p>
            </section>

            {item.details && (
              <section>
                <h3 className={label}>Details</h3>
                <p className="whitespace-pre-line leading-relaxed text-[#374151]">{item.details}</p>
              </section>
            )}

            {item.alternatives.length > 0 && (
              <section>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#14940d] mb-2">Choose instead</h3>
                <ul className="flex flex-wrap gap-2">
                  {item.alternatives.map(alt => (
                    <li key={alt} className="rounded-md border border-[rgba(20,148,13,0.3)] bg-[rgba(20,148,13,0.08)] px-3 py-1.5 text-sm font-semibold text-[#0f7618]">{alt}</li>
                  ))}
                </ul>
              </section>
            )}

            {item.sources && item.sources.length > 0 && (
              <section>
                <h3 className={label}>Sources</h3>
                <ul className="space-y-1.5">
                  {item.sources.map(src => (
                    <li key={src.url}>
                      <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-[#374151] underline decoration-[rgba(74,58,40,0.3)] underline-offset-4 hover:text-[#940d0d] hover:decoration-[#940d0d]">
                        {src.label} &#8599;
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
        .animate-fadeIn { animation: fadeIn 0.25s ease-out forwards; }
        .animate-scaleUp { animation: scaleUp 0.25s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default BoycottDetailDialog;
