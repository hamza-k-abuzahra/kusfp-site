import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { NAV_LINKS } from '../constants';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background-primary)]">
      <Navbar navLinks={NAV_LINKS} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;