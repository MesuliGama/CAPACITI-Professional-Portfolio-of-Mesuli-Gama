import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { LINKEDIN_URL, GITHUB_URL, NAV_LINKS } from '../constants';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault(); // Prevent the default anchor link behavior
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      const navbarHeight = 64; // Corresponds to h-16 in TailwindCSS (4rem)
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  
  const NavLinkItems = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {NAV_LINKS.map((link) => (
        <a
          key={link.hash}
          href={link.hash}
          onClick={(e) => {
            handleNavClick(e, link.hash);
            setIsOpen(false); // Always close menu on click
          }}
          className={`
            block px-3 py-2 rounded-md font-medium transition-all duration-300
            ${activeSection === link.hash.substring(1)
              ? 'text-secondary bg-secondary/10'
              : 'text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary hover:bg-secondary/5 dark:hover:bg-white/5'
            }
          `}
        >
          {link.name}
        </a>
      ))}
    </>
  );

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-50/90 dark:bg-dark-bg/80 backdrop-blur-xl shadow-md border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex-shrink-0 text-xl font-bold text-gray-900 dark:text-secondary font-orbitron">
              Mesuli Michael Gama
            </a>
          </div>

          {/* Right: Actions & Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Action Buttons (Visible on md+) */}
            <div className="hidden md:flex items-center space-x-1">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 dark:text-secondary hover:text-accent rounded-full transition-colors" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 dark:text-secondary hover:text-accent rounded-full transition-colors" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
              <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
              
              {/* Vertical Separator between actions and menu */}
              <div className="w-px h-6 bg-gray-300 dark:bg-white/20 mx-2"></div>
            </div>

            {/* Menu Button (Visible on all screens) */}
            <div className="flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                type="button" 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-secondary hover:text-secondary dark:hover:text-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary transition-colors duration-200" 
                aria-controls="mobile-menu" 
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Dropdown (Visible on all screens when open) */}
      {isOpen && (
        <div className="bg-white/95 dark:bg-dark-bg/95 backdrop-blur-xl border-t border-gray-200 dark:border-primary/20 shadow-xl" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinkItems isMobile={true} />
            
            {/* Mobile Actions (Hidden on desktop as they are in the header) */}
            <div className="md:hidden pt-4 mt-4 border-t border-gray-200 dark:border-white/20">
              <div className="flex items-center justify-around">
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 dark:text-secondary hover:text-accent rounded-full transition-colors" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 dark:text-secondary hover:text-accent rounded-full transition-colors" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;