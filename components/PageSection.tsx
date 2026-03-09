import React from 'react';

interface PageSectionProps {
  title: string;
  children: React.ReactNode;
}

const PageSection: React.FC<PageSectionProps> = ({ title, children }) => {
  return (
    <div className="bg-[var(--background-primary)] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[var(--text-primary)] sm:text-5xl">{title}</h2>
          <div className="mt-4 h-1 w-24 bg-[var(--primary)] mx-auto rounded"></div>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageSection;