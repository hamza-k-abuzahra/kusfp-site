import { Reference } from '@/types';
import React from 'react';

export const ArticleTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-[var(--text-primary)]">
    {children}
  </h2>
);

// export default ArticleTitle;

export const ArticleParagraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg leading-relaxed text-[var(--text-secondary)] mb-4 indent-8">
    {children}
  </p>
);

// export default ArticleParagraph;

interface ImageProps {
  src: string;
  caption?: string;
}

export const ArticleImage = ({ src, caption }: ImageProps) => (
  <div className="my-8">
    <img src={src} className="w-full rounded-xl shadow-lg" />
    {caption && (
      <p className="text-sm text-center text-[var(--text-muted)] mt-2">
        {caption}
      </p>
    )}
  </div>
);

/* ================= QUOTE ================= */
export const ArticleQuote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-[var(--primary)] pl-4 italic my-6 text-[var(--text-secondary)]">
    {children}
  </blockquote>
);

/* ================= LIST ================= */
export const ArticleList = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-6 my-4 space-y-2 text-[var(--text-secondary)]">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

/* ================= REFERENCES ================= */
export const ArticleReferences = ({ items }: { items: Reference[] }) => (
  <div className="mt-12">
    
    <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">
      References
    </h3>

    <ol className="list-decimal pl-5 space-y-2 text-[var(--text-secondary-accent)]">
      {items.map((ref, index) => (
        <li key={index}>
          <a
            href={ref.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[var(--primary)] transition"
          >
            {ref.text == '' ? ref.url : ref.text}
          </a>
        </li>
      ))}
    </ol>

  </div>
);