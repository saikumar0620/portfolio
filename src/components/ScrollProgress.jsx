import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height <= 0) {
        setProgress(0);
        return;
      }

      const scrollPos = window.scrollY;
      const scrollPercent = scrollPos / height;
      setProgress(Math.min(1, Math.max(0, scrollPercent)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[100] pointer-events-none bg-[var(--bg-secondary)]">
      <div
        className="h-full bg-[var(--accent)] transition-transform duration-150 ease-out origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
