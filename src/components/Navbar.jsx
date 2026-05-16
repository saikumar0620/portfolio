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
  const strong = isDark ? 'text-beige-50' : 'text-dark-800';
  const faint = isDark ? 'text-beige-200/55' : 'text-dark-400';

  return (
    <nav id="navbar">
      <div>
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
        >
          <div>
            SB
          </div>
          <span>
            Saikumar
          </span>
        </a>
        <div>
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '');
            const active = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNav(href); }}
              >
                {label}
                <span />
              </a>
            );
          })}
        </div>
        <div>
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <div>
        <div>
          {navLinks.map(({ label, href }) => {
            const id = href.replace('#', '');
            const active = activeSection === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNav(href); }}
              >
                {label}
                {active && (
                  <span />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
