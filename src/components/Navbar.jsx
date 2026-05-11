import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { navLinks } from '../data/portfolioData';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? isDark
            ? 'glass-dark shadow-lg shadow-black/20'
            : 'glass-light shadow-lg shadow-beige-300/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="group flex items-center gap-2"
        >
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-heading font-bold text-lg transition-all duration-300 group-hover:scale-110 ${
            isDark
              ? 'bg-accent/20 text-accent'
              : 'bg-dark-800 text-beige-100'
          }`}>
            SB
          </div>
          <span className={`font-heading font-semibold text-lg hidden sm:block transition-colors ${
            isDark ? 'text-beige-100' : 'text-dark-800'
          }`}>
            Saikumar
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? isDark
                      ? 'text-accent bg-accent/10'
                      : 'text-dark-800 bg-dark-800/8'
                    : isDark
                    ? 'text-beige-200/70 hover:text-beige-100 hover:bg-white/5'
                    : 'text-dark-400 hover:text-dark-800 hover:bg-dark-800/5'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                )}
              </a>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isDark
                ? 'bg-white/10 text-amber-300 hover:bg-white/15'
                : 'bg-dark-800/8 text-dark-600 hover:bg-dark-800/12'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isDark
                ? 'bg-white/10 text-beige-200 hover:bg-white/15'
                : 'bg-dark-800/8 text-dark-600 hover:bg-dark-800/12'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`px-6 pb-6 flex flex-col gap-1 ${
          isDark ? 'border-t border-white/10' : 'border-t border-dark-100'
        }`}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? isDark
                      ? 'text-accent bg-accent/10'
                      : 'text-dark-800 bg-dark-800/8'
                    : isDark
                    ? 'text-beige-200/70 hover:text-beige-100'
                    : 'text-dark-400 hover:text-dark-800'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
