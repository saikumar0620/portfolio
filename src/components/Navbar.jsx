import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { navLinks } from '../data/portfolioData';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Sync theme state with the DOM attribute used in CSS
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 backdrop-blur-xl bg-[var(--bg-primary)]/90 border-b border-[var(--border)] shadow-sm' : 'py-8 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav('#home'); setMenuOpen(false); }}
          className="flex items-center gap-2 font-bold text-[var(--text-strong)] tracking-tighter text-xl uppercase"
        >
          <span>
            Saikumar
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '');
            const active = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNav(href); }}
                className={`nav-link text-[10px] font-bold uppercase tracking-widest ${active ? 'active' : ''}`}
              >
                {label}
                <span className="sr-only">(current)</span>
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-[var(--text-faint)] hover:text-[var(--text-strong)] transition-colors"
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="p-2 text-[var(--text-faint)] hover:text-[var(--text-strong)] transition-colors md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[var(--bg-primary)]/95 backdrop-blur-xl transition-all duration-500 md:hidden ${menuOpen ? 'opacity-100 visible' : 'opacity-0 pointer-events-none'
        }`}>
        <div className="flex flex-col items-center justify-center h-full gap-12">
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '');
            const active = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNav(href); }}
                className={`text-4xl font-bold uppercase tracking-tighter transition-all duration-300 ${active ? 'text-[var(--accent)] scale-110' : 'text-[var(--text-strong)]'
                  }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
