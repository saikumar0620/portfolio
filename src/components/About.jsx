import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { personalInfo } from '../data/portfolioData';
import { Code2, Palette, Zap, Users, MapPin, Mail, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

const highlights = [
  { icon: Code2,    title: 'Clean Code',    desc: 'Maintainable & scalable with modern best practices' },
  { icon: Palette,  title: 'UI/UX Focus',   desc: 'Intuitive, beautiful interfaces users love' },
  { icon: Zap,      title: 'Performance',   desc: 'Optimised for speed, accessibility & SEO' },
  { icon: Users,    title: 'Collaboration', desc: 'Strong teamwork with agile experience' },
];

const stats = [
  { number: '5+', label: 'Projects' },
  { number: '4+', label: 'Technologies' },
  { number: '1+', label: 'Yr Exp.' },
];

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [ref, isVisible] = useScrollReveal();
  const [imgLoaded, setImgLoaded] = useState(false);

  /* ── shared tokens ── */
  const card = isDark
    ? 'bg-dark-800/70 border border-white/[0.07] shadow-xl shadow-black/20'
    : 'bg-white border border-beige-200/80 shadow-md shadow-beige-300/20';

  const muted  = isDark ? 'text-beige-200/55' : 'text-dark-400';
  const strong = isDark ? 'text-beige-50'     : 'text-dark-800';
  const accent = isDark ? 'text-accent'        : 'text-beige-600';

  /* stagger helper */
  const reveal = (delay = 0) => ({
    opacity   : isVisible ? 1 : 0,
    transform : isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity .65s ease ${delay}ms, transform .65s ease ${delay}ms`,
  });

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      {/* subtle bg tint */}
      <div className={`absolute inset-0 pointer-events-none ${
        isDark
          ? 'bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent'
          : 'bg-gradient-to-b from-transparent via-beige-100/50 to-transparent'
      }`} />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-12 lg:mb-16" style={reveal(0)}>
          <span className={`inline-block font-mono text-[11px] tracking-[0.25em] uppercase mb-3 ${accent}`}>
            // About Me
          </span>
          <h2 className={`font-heading font-bold text-3xl sm:text-4xl lg:text-5xl ${strong}`}>
            Get To Know Me
          </h2>
          <div className="mt-4 mx-auto w-12 h-[3px] rounded-full bg-accent" />
        </div>

        {/* ── Two-column grid ──
            Desktop: [260px sidebar] [1fr content]
            Tablet/Mobile: single column stacked        */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 xl:gap-8 items-start">

          {/* ════════════════════════════════
              LEFT — Profile card (fixed width)
              ════════════════════════════════ */}
          <aside className={`rounded-2xl overflow-hidden ${card}`} style={reveal(100)}>

            {/* photo — square aspect */}
            <div className="relative w-full aspect-square bg-beige-200 overflow-hidden">
              {!imgLoaded && (
                <div
                  className="absolute inset-0 animate-pulse"
                  style={{ background: isDark ? '#2d2d2d' : '#e5d7c0' }}
                />
              )}
              <img
                src="/profile.png"
                alt="Saikumar Bammidi"
                className={`w-full h-full object-cover object-top transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImgLoaded(true)}
              />
            </div>

            {/* name plate */}
            <div className="p-5 space-y-4">
              <div>
                <h3 className={`font-heading font-bold text-[15px] leading-tight ${strong}`}>
                  {personalInfo.name}
                </h3>
                <p className={`text-[12px] font-semibold mt-0.5 ${accent}`}>
                  {personalInfo.role}
                </p>
              </div>

              {/* contact row */}
              <div className="space-y-2">
                {[
                  { icon: MapPin, text: personalInfo.location },
                  { icon: Mail,   text: personalInfo.email, truncate: true },
                ].map(({ icon: Icon, text, truncate }) => (
                  <div key={text} className={`flex items-center gap-2 text-[12px] ${muted}`}>
                    <Icon size={12} className="shrink-0" />
                    <span className={truncate ? 'truncate' : ''}>{text}</span>
                  </div>
                ))}
              </div>

              {/* divider */}
              <div className={`h-px w-full ${isDark ? 'bg-white/8' : 'bg-beige-100'}`} />

              {/* social + resume */}
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: GithubIcon,   href: personalInfo.socials.github,   label: 'GitHub' },
                    { icon: LinkedinIcon, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-1.5 py-2 rounded-xl text-[12px] font-semibold border transition-all duration-200 hover:-translate-y-0.5 ${
                        isDark
                          ? 'border-white/10 bg-white/5 text-beige-200/70 hover:bg-accent/15 hover:text-accent hover:border-accent/30'
                          : 'border-beige-200 bg-beige-50 text-dark-500 hover:bg-dark-900 hover:text-beige-50 hover:border-dark-900'
                      }`}
                    >
                      <Icon size={13} />
                      {label}
                    </a>
                  ))}
                </div>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-xl text-[12px] font-semibold border transition-all duration-200 hover:-translate-y-0.5 ${
                    isDark
                      ? 'border-accent/30 bg-accent/8 text-accent hover:bg-accent hover:text-dark-900'
                      : 'border-beige-300 bg-beige-100 text-dark-700 hover:bg-dark-900 hover:text-beige-50 hover:border-dark-900'
                  }`}
                >
                  <Download size={13} />
                  Download CV
                </a>
              </div>
            </div>
          </aside>

          {/* ════════════════════════════════
              RIGHT — Bio + stats + feature grid
              ════════════════════════════════ */}
          <div className="flex flex-col gap-5 min-w-0">

            {/* Bio card */}
            <div className={`rounded-2xl p-6 lg:p-7 ${card}`} style={reveal(180)}>
              <h3 className={`font-heading font-semibold text-base mb-3 ${strong}`}>
                About Me
              </h3>
              <p className={`text-sm leading-[1.8] mb-3 ${muted}`}>
                {personalInfo.bio}
              </p>
              <p className={`text-sm leading-[1.8] ${muted}`}>
                I believe great frontend development is a balance of{' '}
                <span className={`font-semibold ${isDark ? 'text-accent' : 'text-dark-700'}`}>aesthetics</span>,{' '}
                <span className={`font-semibold ${isDark ? 'text-accent' : 'text-dark-700'}`}>performance</span>, and{' '}
                <span className={`font-semibold ${isDark ? 'text-accent' : 'text-dark-700'}`}>usability</span>.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {stats.map(({ number, label }) => (
                  <div
                    key={label}
                    className={`flex flex-col items-center justify-center py-4 rounded-xl ${
                      isDark ? 'bg-white/[0.04]' : 'bg-beige-50 border border-beige-100'
                    }`}
                  >
                    <span className={`font-heading font-bold text-2xl leading-none ${isDark ? 'text-accent' : 'text-dark-800'}`}>
                      {number}
                    </span>
                    <span className={`text-[11px] mt-1.5 font-medium ${muted}`}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight cards — 2×2 equal-height grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className={`group flex flex-col gap-3 rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? 'bg-dark-800/60 border-white/[0.07] hover:border-accent/35 hover:bg-dark-800/80 hover:shadow-lg hover:shadow-accent/5'
                      : 'bg-white border-beige-200 hover:border-beige-400 hover:shadow-lg hover:shadow-beige-200/40'
                  }`}
                  style={reveal(260 + i * 60)}
                >
                  {/* icon */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                    isDark ? 'bg-accent/12 text-accent' : 'bg-beige-100 text-dark-700'
                  }`}>
                    <Icon size={18} />
                  </div>
                  {/* text */}
                  <div>
                    <h4 className={`font-heading font-semibold text-[13px] mb-1 ${strong}`}>{title}</h4>
                    <p  className={`text-xs leading-relaxed ${muted}`}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
