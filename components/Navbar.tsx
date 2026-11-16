import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import type { NavLink } from '../types';
import logoImage from '../resources/imgs/logo.png';

interface NavbarProps {
  navLinks: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(true);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navLinkClasses = ({ isActive }: { isActive: boolean }): string => {
    const baseClasses = 'px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-300';
    return isActive
      ? `${baseClasses} bg-[rgba(148,13,13,0.10)] text-[#940d0d]`
      : `${baseClasses} text-[#3b2f22] hover:bg-[rgba(74,58,40,0.07)]`;
  };

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }): string => {
    const baseClasses = 'block px-3 py-2 rounded-lg text-base font-semibold';
    return isActive
      ? `${baseClasses} bg-[rgba(148,13,13,0.10)] text-[#940d0d]`
      : `${baseClasses} text-[#3b2f22] hover:bg-[rgba(74,58,40,0.07)]`;
  };

  return (
    // <nav className="bg-[var(--background-secondary)] shadow-md sticky top-0 z-50">
    <nav       className={`fixed top-0 w-full z-50 transition-all duration-500 transform ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } 
        h-20 bg-[rgba(243,235,221,0.72)] backdrop-blur-md backdrop-saturate-150 border-b border-[rgba(74,58,40,0.10)] shadow-[0_4px_24px_rgba(74,58,40,0.06)]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="/" className="flex items-center gap-2">
            <div className="bg-[#940d0d] p-2 rounded-full"> {/* Red background container */}
      <img 
        className="h-10 w-auto object-contain"
        // src="./resources/imgs/logo.png"
        // src="https://github.com/hamza-k-abuzahra/kusfp-site/blob/master/resources/imgs/logo.png"
        src={logoImage}
        alt="Logo"
      />
    </div>
          
                <span className="text-2xl font-extrabold text-[var(--text-accent)]">
                  KUSFP+
                  </span>
            </Link>
          </div>
          <div className="hidden lg:flex items-center">
            <div className="ml-6 flex items-baseline gap-1">
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
          <div className="hidden lg:block">
             <Link to="/donation" className="ml-4 bg-[#940d0d] text-white font-bold py-2 px-5 rounded-lg hover:bg-[#b81414] shadow-[0_6px_18px_-6px_rgba(148,13,13,0.5)] transition-all duration-300 hover:-translate-y-0.5">
                Donate
            </Link>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#3b2f22] hover:bg-[rgba(74,58,40,0.08)] focus:outline-none focus:ring-2 focus:ring-[#940d0d]/40"
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
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-[rgba(74,58,40,0.10)]">
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
            <Link to="/donation" onClick={() => setIsMenuOpen(false)} className="w-full text-left mt-2 bg-[#940d0d] text-white font-bold py-3 px-3 rounded-lg hover:bg-[#b81414] transition-colors duration-300 block">
                Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;