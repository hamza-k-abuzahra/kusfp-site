import React, { useEffect } from 'react';
import type { BoycottItem } from '../types';

interface BoycottDetailDialogProps {
  item: BoycottItem;
  onClose: () => void;
}

const BoycottDetailDialog: React.FC<BoycottDetailDialogProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-[var(--dialog-overlay)] flex items-center justify-center z-50 p-4 animate-fadeIn"
      aria-labelledby="dialog-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-[var(--background-secondary)] rounded-2xl shadow-2xl max-w-2xl w-full m-4 relative animate-scaleUp overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--text-subtle)] hover:text-[var(--text-primary)] transition-colors"
          aria-label="Close dialog"
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            <img className="h-28 w-28 rounded-full object-cover border-4 border-[var(--primary)] shadow-md" src={item.logoUrl} alt={`${item.title} logo`} />
            <h2 id="dialog-title" className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] text-center sm:text-left">{item.title}</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[var(--text-accent)] mb-2 uppercase tracking-wider">Reason for Boycott</h3>
              <p className="text-[var(--text-secondary)]">{item.reason}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[var(--text-accent)] mb-2 uppercase tracking-wider">Further Details</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{item.details}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[var(--text-accent)] mb-2 uppercase tracking-wider">Suggested Alternatives</h3>
              <ul className="flex flex-wrap gap-2">
                {item.alternatives.map((alt, index) => (
                  <li key={index} className="bg-[var(--background-tertiary)] text-[var(--text-secondary)] text-sm font-medium px-3 py-1.5 rounded-full">
                    {alt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-scaleUp { animation: scaleUp 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default BoycottDetailDialog;