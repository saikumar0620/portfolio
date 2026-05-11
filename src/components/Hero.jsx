import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { Mail, ArrowDown, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

const ROLES = ['Frontend Developer', 'React Specialist', 'UI Craftsman'];

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [imgLoaded, setImgLoaded] = useState(false);

  /* typewriter cycles through ROLES */
  useEffect(() => {
    const target = ROLES[roleIdx];
    let i = typing ? displayed.length : displayed.length - 1;
    if (typing && i >= target.length) {
      const pause = setTimeout(() => setTyping(false), 1800);
      return () => clearTimeout(pause);
    }
    if (!typing && i < 0) {
      setRoleIdx((p) => (p + 1) % ROLES.length);
      setTyping(true);
      return;
    }
    const speed = typing ? 60 : 35;
    const t = setTimeout(() => {
      setDisplayed(typing ? target.slice(0, i + 1) : target.slice(0, i));
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, typing, roleIdx]);

  const isDk = isDark;
  const strong = isDk ? 'text-beige-50' : 'text-dark-800';
  const muted = isDk ? 'text-beige-200/55' : 'text-dark-400';

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── decorative background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* top-right orb */}
        <div
          className={`absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-[0.18] animate-float ${isDk ? 'bg-accent' : 'bg-beige-400'
            }`}
        />
        {/* bottom-left orb */}
        <div
          className={`absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-[0.14] animate-float ${isDk ? 'bg-beige-600' : 'bg-beige-300'
            }`}
          style={{ animationDelay: '3s' }}
        />
        {/* subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${isDk ? 'rgba(196,169,125,0.05)' : 'rgba(45,45,45,0.035)'
              } 1px, transparent 1px), linear-gradient(90deg, ${isDk ? 'rgba(196,169,125,0.05)' : 'rgba(45,45,45,0.035)'
              } 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* ── container ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* ════ LEFT — text ════ */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

            {/* available badge */}
            <div
              className="animate-fade-in mb-7 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
              style={{
                borderColor: isDk ? 'rgba(196,169,125,0.3)' : 'rgba(45,45,45,0.14)',
                background: isDk ? 'rgba(196,169,125,0.07)' : 'rgba(45,45,45,0.03)',
                color: isDk ? '#c4a97d' : '#404040',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for opportunities
            </div>

            {/* h1 */}
            <h1
              className={`animate-slide-up font-heading font-black text-[2.6rem] sm:text-5xl lg:text-6xl xl:text-[4rem] leading-[1.12] mb-4 ${strong}`}
            >
              Hi, I'm{' '}
              <span className="text-gradient">Saikumar</span>
            </h1>

            {/* typewriter */}
            <div className="animate-slide-up stagger-2 mb-5 h-8 flex items-center">
              <span
                className={`font-mono text-lg sm:text-xl lg:text-2xl font-semibold ${isDk ? 'text-accent' : 'text-beige-600'
                  }`}
              >
                {'< '}
                {displayed}
                <span
                  className={`inline-block w-0.5 h-5 ml-0.5 align-middle ${isDk ? 'bg-accent' : 'bg-beige-600'
                    } animate-pulse`}
                />
                {' />'}
              </span>
            </div>

            {/* tagline */}
            <p
              className={`animate-slide-up stagger-3 text-base sm:text-lg max-w-md leading-relaxed mb-9 ${muted}`}
            >
              {personalInfo.tagline}
            </p>

            {/* CTA buttons */}
            <div className="animate-slide-up stagger-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-9">
              <a
                href="#projects"
                id="hero-cta-projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isDk
                    ? 'bg-accent text-dark-900 hover:bg-accent-hover hover:shadow-accent/25'
                    : 'bg-dark-900 text-beige-50 hover:bg-dark-800 hover:shadow-dark-900/25'
                  }`}
              >
                View My Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

              <a
                href="#contact"
                id="hero-cta-contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide border-2 transition-all duration-300 hover:-translate-y-1 ${isDk
                    ? 'border-accent/40 text-accent hover:bg-accent/10 hover:border-accent'
                    : 'border-dark-900/20 text-dark-900 hover:bg-dark-900/5 hover:border-dark-900/50'
                  }`}
              >
                Get In Touch
              </a>

              <a
                href={personalInfo.resumeUrl}
                download
                className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-1 ${isDk
                    ? 'text-beige-200/70 hover:text-accent hover:bg-white/5'
                    : 'text-dark-500 hover:text-dark-900 hover:bg-dark-900/5'
                  }`}
              >
                <Download size={15} />
                Resume
              </a>
            </div>

            {/* social icons */}
            <div className="animate-slide-up stagger-5 flex items-center gap-3">
              {[
                { Icon: GithubIcon, href: personalInfo.socials.github, label: 'GitHub' },
                { Icon: LinkedinIcon, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
                { Icon: Mail, href: personalInfo.socials.email, label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md ${isDk
                      ? 'bg-white/6 text-beige-200/65 hover:bg-accent hover:text-dark-900 hover:shadow-accent/20 border border-white/10'
                      : 'bg-white text-dark-500 hover:bg-dark-900 hover:text-beige-50 hover:shadow-dark-900/15 border border-beige-200'
                    }`}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* ════ RIGHT — photo ════ */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative animate-scale-in">
              {/* outer glow ring */}
              <div
                className={`absolute inset-0 rounded-full scale-[1.08] animate-glow ${isDk ? 'border-2 border-accent/20' : 'border-2 border-beige-400/35'
                  }`}
              />
              {/* spinning dashed ring */}
              <div
                className="absolute inset-0 rounded-full scale-[1.17]"
                style={{
                  border: `2px dashed ${isDk ? 'rgba(196,169,125,0.13)' : 'rgba(139,115,73,0.18)'}`,
                  borderRadius: '50%',
                  animation: 'spin 22s linear infinite',
                }}
              />
              {/* glow blob */}
              <div
                className={`absolute inset-6 rounded-full blur-2xl opacity-25 ${isDk ? 'bg-accent' : 'bg-beige-400'
                  }`}
              />
              {/* photo */}
              <div
                className={`relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-4 transition-all duration-300 ${isDk
                    ? 'border-accent/25 shadow-2xl shadow-accent/10'
                    : 'border-beige-300 shadow-2xl shadow-beige-400/25'
                  }`}
              >
                {!imgLoaded && (
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isDk
                        ? 'linear-gradient(90deg,#1f1f1f 25%,#2d2d2d 50%,#1f1f1f 75%)'
                        : 'linear-gradient(90deg,#e5d7c0 25%,#f0e8da 50%,#e5d7c0 75%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 1.5s infinite',
                    }}
                  />
                )}
                <img
                  src="/profile.png"
                  alt="Saikumar Bammidi — Frontend Developer"
                  className={`w-full h-full object-cover object-top transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  onLoad={() => setImgLoaded(true)}
                />
              </div>

              {/* floating badge — experience */}
              <div
                className={`absolute -bottom-2 -left-5 px-4 py-2 rounded-2xl text-xs font-bold shadow-lg backdrop-blur-sm ${isDk
                    ? 'bg-dark-700/90 border border-white/10 text-beige-100'
                    : 'bg-white/95 border border-beige-200 text-dark-800'
                  }`}
              >
                <span className="text-accent font-mono">1+</span> yr experience
              </div>

              {/* floating badge — projects */}
              <div
                className={`absolute -top-2 -right-5 px-4 py-2 rounded-2xl text-xs font-bold shadow-lg backdrop-blur-sm ${isDk
                    ? 'bg-dark-700/90 border border-white/10 text-beige-100'
                    : 'bg-white/95 border border-beige-200 text-dark-800'
                  }`}
              >
                <span className="text-accent font-mono">5+</span> projects
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── scroll cue ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
          className={`flex flex-col items-center gap-1.5 transition-colors ${isDk ? 'text-beige-200/25 hover:text-accent' : 'text-dark-300/40 hover:text-dark-800'
            }`}
        >
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}
