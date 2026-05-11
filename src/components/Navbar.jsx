import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { navLinks } from '../data/portfolioData';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 110) {
          setActiveSection(ids[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  /* ── tokens ── */
  const strong = isDark ? 'text-beige-50'  : 'text-dark-800';
  const faint  = isDark ? 'text-beige-200/55' : 'text-dark-400';

  return (
    <nav
      id="navbar"
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'top-3 px-4' : 'top-0 px-0'
      }`}
    >
      {/* pill container */}
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? `max-w-4xl rounded-full px-5 py-2.5 border backdrop-blur-xl ${
                isDark
                  ? 'bg-dark-800/85 border-white/10 shadow-xl shadow-black/40'
                  : 'bg-white/85 border-beige-200 shadow-xl shadow-beige-300/20'
              }`
            : 'max-w-6xl px-4 sm:px-6 py-5 bg-transparent'
        }`}
      >

        {/* ── Logo ── */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
          className="group flex items-center gap-2.5"
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center font-heading font-black text-[13px] tracking-tight transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
              isDark
                ? 'bg-accent/18 text-accent group-hover:bg-accent group-hover:text-dark-900'
                : 'bg-dark-900 text-beige-50 group-hover:bg-dark-700'
            }`}
          >
            SB
          </div>
          <span className={`font-heading font-bold text-[17px] tracking-tight hidden sm:block transition-colors ${
            isDark ? `${strong} group-hover:text-accent` : `${strong} group-hover:text-dark-600`
          }`}>
            Saikumar
          </span>
        </a>

        {/* ── Desktop links ── */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '');
            const active = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNav(href); }}
                className={`relative px-4 py-2 text-[13px] font-bold tracking-wide transition-all duration-200 ${
                  active
                    ? isDark ? 'text-accent' : 'text-dark-900'
                    : isDark ? `${faint} hover:text-beige-50` : `${faint} hover:text-dark-800`
                }`}
              >
                {label}
                {/* animated underline */}
                <span
                  className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full transition-all duration-300 ${
                    active
                      ? `w-full ${isDark ? 'bg-accent' : 'bg-dark-900'}`
                      : 'w-0 group-hover:w-1/2 bg-transparent'
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* ── Actions ── */}
        <div className="flex items-center gap-2">
          {/* theme toggle */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 ${
              isDark
                ? 'bg-white/6 text-amber-300 hover:bg-white/14'
                : 'bg-dark-900/6 text-dark-600 hover:bg-dark-900/10 hover:text-dark-900'
            }`}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className={`md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 ${
              isDark
                ? 'bg-white/6 text-beige-200 hover:bg-white/14'
                : 'bg-dark-900/6 text-dark-600 hover:bg-dark-900/10'
            }`}
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        className={`md:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl border backdrop-blur-xl overflow-hidden transition-all duration-400 ${
          menuOpen
            ? 'max-h-[400px] opacity-100 shadow-2xl'
            : 'max-h-0 opacity-0 pointer-events-none'
        } ${
          isDark
            ? 'bg-dark-800/95 border-white/10 shadow-black/50'
            : 'bg-white/95 border-beige-200 shadow-beige-300/30'
        }`}
      >
        <div className="p-3 flex flex-col gap-1">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '');
            const active = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNav(href); }}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-[13px] font-bold tracking-wide transition-all duration-200 ${
                  active
                    ? isDark ? 'text-accent bg-accent/8' : 'text-dark-900 bg-dark-900/5'
                    : isDark ? `${faint} hover:text-beige-50 hover:bg-white/5` : `text-dark-400 hover:text-dark-900 hover:bg-dark-900/4`
                }`}
              >
                {label}
                {active && (
                  <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-accent' : 'bg-dark-900'}`} />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
