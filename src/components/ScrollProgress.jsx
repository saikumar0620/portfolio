import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ScrollProgress() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[100] pointer-events-none">
      <div 
        className={`h-full transition-all duration-150 ease-out ${
          isDark 
            ? 'bg-gradient-to-r from-accent to-beige-600 shadow-[0_0_10px_rgba(196,169,125,0.5)]' 
            : 'bg-gradient-to-r from-accent to-beige-700 shadow-[0_0_10px_rgba(196,169,125,0.3)]'
        }`}
        style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: '0 0' }}
      />
    </div>
  );
}
