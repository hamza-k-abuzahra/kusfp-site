import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-4 sm:px-6 lg:px-8">
      <h1 className="text-6xl font-extrabold text-[var(--primary)]">404</h1>
      <h2 className="mt-2 text-3xl font-bold text-[var(--text-primary)]">Page Not Found</h2>
      <p className="mt-4 text-lg text-[var(--text-muted)]">Sorry, we couldn’t find the page you’re looking for.</p>
      <div className="mt-10">
        <Link 
          to="/"
          className="bg-[var(--primary)] text-[var(--text-on-primary)] font-bold py-3 px-8 rounded-lg hover:bg-[var(--primary-hover)] transition-all duration-300"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;