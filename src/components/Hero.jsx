import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { Mail, ArrowDown, Sparkles, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [displayText, setDisplayText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const fullText = personalInfo.role;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Animated background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float ${
            isDark ? 'bg-accent' : 'bg-beige-400'
          }`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-15 animate-float ${
            isDark ? 'bg-beige-600' : 'bg-beige-300'
          }`}
          style={{ animationDelay: '3s' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${isDark ? 'rgba(196,169,125,0.06)' : 'rgba(45,45,45,0.04)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(196,169,125,0.06)' : 'rgba(45,45,45,0.04)'} 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── Main content: two-column layout ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Status badge */}
            <div
              className="animate-fade-in mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
              style={{
                borderColor: isDark ? 'rgba(196,169,125,0.3)' : 'rgba(45,45,45,0.15)',
                background: isDark ? 'rgba(196,169,125,0.08)' : 'rgba(45,45,45,0.04)',
                color: isDark ? '#c4a97d' : '#404040',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for opportunities
            </div>

            {/* Name */}
            <h1
              className={`animate-slide-up font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-3 leading-tight ${
                isDark ? 'text-beige-100' : 'text-dark-800'
              }`}
            >
              Hi, I'm{' '}
              <span className="text-gradient relative">
                {personalInfo.firstName}
                <Sparkles
                  className="absolute -top-2 -right-6 text-accent opacity-70"
                  size={18}
                />
              </span>
            </h1>

            {/* Typewriter role */}
            <div className="animate-slide-up stagger-2 mb-5">
              <span
                className={`inline-block font-mono text-lg sm:text-xl lg:text-2xl font-medium ${
                  isDark ? 'text-accent' : 'text-beige-600'
                }`}
              >
                {'< '}
                {displayText}
                <span
                  className={`inline-block w-0.5 h-5 ml-1 align-middle ${
                    isDark ? 'bg-accent' : 'bg-beige-600'
                  } ${isTypingDone ? 'animate-pulse' : ''}`}
                />
                {' />'}
              </span>
            </div>

            {/* Tagline */}
            <p
              className={`animate-slide-up stagger-3 text-base sm:text-lg max-w-xl mb-8 leading-relaxed lg:mx-0 mx-auto ${
                isDark ? 'text-beige-200/60' : 'text-dark-300'
              }`}
            >
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="animate-slide-up stagger-4 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-8">
              <a
                href="#projects"
                id="hero-cta-projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group px-7 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  isDark
                    ? 'bg-accent text-dark-900 hover:bg-accent-hover hover:shadow-accent/25'
                    : 'bg-dark-800 text-beige-100 hover:bg-dark-700 hover:shadow-dark-800/25'
                }`}
              >
                View My Work
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#contact"
                id="hero-cta-contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-7 py-3 rounded-xl font-semibold text-sm tracking-wide border-2 transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/60'
                    : 'border-dark-800/20 text-dark-800 hover:bg-dark-800/5 hover:border-dark-800/40'
                }`}
              >
                Get In Touch
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                className={`flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'text-beige-200/80 hover:text-accent hover:bg-white/5'
                    : 'text-dark-500 hover:text-dark-800 hover:bg-dark-800/5'
                }`}
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="animate-slide-up stagger-5 flex items-center lg:justify-start justify-center gap-3">
              {[
                { icon: GithubIcon, href: personalInfo.socials.github, label: 'GitHub' },
                { icon: LinkedinIcon, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: personalInfo.socials.email, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                    isDark
                      ? 'bg-white/8 text-beige-200/60 hover:bg-accent/15 hover:text-accent border border-white/5'
                      : 'bg-dark-800/6 text-dark-400 hover:bg-dark-800/12 hover:text-dark-800 border border-dark-100'
                  }`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-scale-in">

              {/* Outer decorative ring */}
              <div
                className={`absolute inset-0 rounded-full scale-110 animate-glow ${
                  isDark
                    ? 'border-2 border-accent/20'
                    : 'border-2 border-beige-400/40'
                }`}
              />

              {/* Rotating dashed ring */}
              <div
                className="absolute inset-0 rounded-full scale-[1.18]"
                style={{
                  background: 'transparent',
                  border: `2px dashed ${isDark ? 'rgba(196,169,125,0.15)' : 'rgba(139,115,73,0.2)'}`,
                  borderRadius: '50%',
                  animation: 'spin 20s linear infinite',
                }}
              />

              {/* Glow blob behind photo */}
              <div
                className={`absolute inset-4 rounded-full blur-2xl opacity-30 ${
                  isDark ? 'bg-accent' : 'bg-beige-400'
                }`}
              />

              {/* Photo container */}
              <div
                className={`relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                  isDark
                    ? 'border-accent/30 shadow-2xl shadow-accent/10'
                    : 'border-beige-300 shadow-2xl shadow-beige-400/30'
                }`}
              >
                {/* Placeholder shimmer while loading */}
                {!imgLoaded && (
                  <div
                    className={`absolute inset-0 ${
                      isDark ? 'bg-dark-700' : 'bg-beige-200'
                    }`}
                    style={{
                      background: isDark
                        ? 'linear-gradient(90deg, #1f1f1f 25%, #2d2d2d 50%, #1f1f1f 75%)'
                        : 'linear-gradient(90deg, #e5d7c0 25%, #f0e8da 50%, #e5d7c0 75%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 1.5s infinite',
                    }}
                  />
                )}
                <img
                  src="/profile.png"
                  alt="Saikumar Bammidi — Frontend Developer"
                  className={`w-full h-full object-cover object-top transition-opacity duration-500 ${
                    imgLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImgLoaded(true)}
                />
              </div>

              {/* Floating badge — experience */}
              <div
                className={`absolute -bottom-2 -left-4 px-4 py-2 rounded-xl text-xs font-semibold shadow-lg backdrop-blur-sm ${
                  isDark
                    ? 'bg-dark-700/90 border border-white/10 text-beige-100'
                    : 'bg-white/90 border border-beige-200 text-dark-800'
                }`}
              >
                <span className="text-accent font-mono font-bold">1+</span> yr experience
              </div>

              {/* Floating badge — projects */}
              <div
                className={`absolute -top-2 -right-4 px-4 py-2 rounded-xl text-xs font-semibold shadow-lg backdrop-blur-sm ${
                  isDark
                    ? 'bg-dark-700/90 border border-white/10 text-beige-100'
                    : 'bg-white/90 border border-beige-200 text-dark-800'
                }`}
              >
                <span className="text-accent font-mono font-bold">5+</span> projects
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-2 transition-colors ${
            isDark ? 'text-beige-200/30 hover:text-accent' : 'text-dark-300/50 hover:text-dark-800'
          }`}
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
