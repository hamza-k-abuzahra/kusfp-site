import React from 'react';

// Shared heading for home page sections: small red eyebrow, big title, short intro line.
const SectionHeader: React.FC<{ eyebrow: string; title: string; subtitle?: string }> = ({ eyebrow, title, subtitle }) => (
  <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
    <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#940d0d]">{eyebrow}</p>
    <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827]">{title}</h2>
    {subtitle && <p className="mt-4 text-lg text-[#4b5563]">{subtitle}</p>}
  </div>
);

export default SectionHeader;
