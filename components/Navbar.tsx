import React, { useState, useEffect } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import type { NavLink } from '../types';

interface NavbarProps {
  navLinks: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navLinkClasses = ({ isActive }: { isActive: boolean }): string => {
    const baseClasses = 'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300';
    return isActive
      ? `${baseClasses} bg-[var(--primary)] text-[var(--text-on-primary)]`
      : `${baseClasses} text-[var(--text-secondary)] hover:bg-[var(--background-hover)]`;
  };

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }): string => {
    const baseClasses = 'block px-3 py-2 rounded-md text-base font-medium';
    return isActive
      ? `${baseClasses} bg-[var(--primary)] text-[var(--text-on-primary)]`
      : `${baseClasses} text-[var(--text-secondary)] hover:bg-[var(--background-hover)]`;
  };

  return (
    // <nav className="bg-[var(--background-secondary)] shadow-md sticky top-0 z-50">
    <nav       className={`fixed top-0 w-full z-50 transition-all duration-500 transform ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } 
        bg-[var(--background-secondary)] h-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="/" className="flex-shrink-0 cursor-pointer">
                <span className="text-2xl font-extrabold text-[var(--text-accent)]">
                  KUSFP+
                  </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <RouterNavLink
                  key={link.name}
                  to={link.path}
                  className={navLinkClasses}
                >
                  {link.name}
                </RouterNavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
             <Link to="/donation" className="ml-4 bg-[var(--primary)] text-[var(--text-on-primary)] font-bold py-2 px-4 rounded-lg hover:bg-[var(--primary-hover)] transition-all duration-300 transform hover:scale-105">
                Donate
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-[var(--background-input)] inline-flex items-center justify-center p-2 rounded-md text-[var(--text-muted)] hover:text-white hover:bg-[var(--background-input-hover)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <RouterNavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={mobileNavLinkClasses}
              >
                {link.name}
              </RouterNavLink>
            ))}
            <Link to="/donation" onClick={() => setIsMenuOpen(false)} className="w-full text-left mt-2 bg-[var(--primary)] text-[var(--text-on-primary)] font-bold py-3 px-3 rounded-lg hover:bg-[var(--primary-hover)] transition-colors duration-300 block">
                Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;