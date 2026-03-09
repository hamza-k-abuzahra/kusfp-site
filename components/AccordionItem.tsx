import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  date: string;
  content: string;
  startOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, date, content, startOpen = false }) => {
  const [isOpen, setIsOpen] = useState(startOpen);
  const uniqueId = `accordion-content-${title.replace(/\s+/g, '-')}`;

  return (
    <div className="border-t border-[var(--border-primary)] first:border-t-0">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-6 font-medium text-left text-[var(--text-primary)] hover:bg-[var(--background-hover)] focus:outline-none focus-visible:ring focus-visible:ring-[var(--primary-focus-ring)] focus-visible:ring-opacity-75 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={uniqueId}
        >
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[var(--text-accent)]">{title}</span>
            <span className="text-sm text-[var(--text-subtle)] mt-1">{date}</span>
          </div>
          <svg
            className={`w-6 h-6 shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </h2>
      <div
        id={uniqueId}
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <div className="p-6 pt-0">
                <p className="text-[var(--text-secondary)] leading-relaxed">
                    {content}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;