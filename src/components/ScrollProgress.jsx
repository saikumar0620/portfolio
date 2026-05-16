import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      // Ensure scroll is a valid number and clamped between 0 and 1
      // This prevents issues if windowHeight is 0 or calculation results in NaN
      const clampedScroll = Math.min(1, Math.max(0, parseFloat(scroll) || 0));
      setScrollProgress(clampedScroll);
    };

    // Use passive: true for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup event listener
  }, []);

  return (
    // Fixed container for the scroll progress bar
    <div className="fixed top-0 left-0 w-full h-[2px] z-50 bg-[var(--bg-secondary)]">
      {/* The actual progress bar, scaled horizontally */}
      <div
        className="h-full bg-[var(--accent)] transition-transform duration-100 ease-out"
        style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: '0 0' }}
      />
    </div>
  );
}
