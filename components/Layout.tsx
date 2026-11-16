import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { NAV_LINKS } from '../constants';
import { PATTERN_URL, PATTERN_SIZE, PAGE_BG_COLOR } from './patternBackground';

const Layout: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: PAGE_BG_COLOR, backgroundImage: PATTERN_URL, backgroundSize: PATTERN_SIZE }}
    >
      <Navbar navLinks={NAV_LINKS} />
      {/* pt-20 = navbar height (h-20); the navbar is fixed so it doesn't take up space itself */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;