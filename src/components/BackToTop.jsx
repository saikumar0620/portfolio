import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 p-3 rounded-full shadow-xl transition-all duration-300 z-50 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } ${
        isDark
          ? 'bg-accent/20 text-accent hover:bg-accent hover:text-dark-900 border border-accent/30'
          : 'bg-dark-800 text-beige-100 hover:bg-accent hover:text-dark-900 border border-dark-800/20'
      }`}
    >
      <ArrowUp size={24} />
    </button>
  );
}
