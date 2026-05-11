import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { personalInfo } from '../data/portfolioData';
import { Code2, Palette, Zap, Users, MapPin, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

const highlights = [
  { icon: Code2, title: 'Clean Code', desc: 'Writing maintainable & scalable code with modern best practices' },
  { icon: Palette, title: 'UI/UX Focus', desc: 'Creating intuitive, beautiful interfaces that users love' },
  { icon: Zap, title: 'Performance', desc: 'Optimizing for speed, accessibility, and SEO' },
  { icon: Users, title: 'Collaboration', desc: 'Strong teamwork and communication with agile experience' },
];

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [ref, isVisible] = useScrollReveal();
  const [imgLoaded, setImgLoaded] = useState(false);

  const cardBase = isDark
    ? 'bg-dark-800/60 border border-white/8 shadow-lg'
    : 'bg-white border border-beige-200 shadow-md';

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-gradient-to-b from-transparent via-accent/[0.025] to-transparent' : 'bg-gradient-to-b from-transparent via-beige-100/60 to-transparent'}`} />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        {/* ── Section header ── */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className={`inline-block font-mono text-xs tracking-[0.2em] uppercase mb-3 ${isDark ? 'text-accent' : 'text-beige-600'}`}>
            // About Me
          </span>
          <h2 className={`font-heading font-bold text-4xl sm:text-5xl ${isDark ? 'text-beige-50' : 'text-dark-800'}`}>
            Get To Know Me
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
        </div>

        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">

          {/* ── LEFT: Profile card ── */}
          <div
            className={`rounded-2xl overflow-hidden transition-all duration-700 delay-100 ${cardBase} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Photo */}
            <div className="relative w-full aspect-square overflow-hidden bg-beige-200">
              {!imgLoaded && (
                <div className="absolute inset-0 animate-pulse" style={{ background: isDark ? '#2d2d2d' : '#e5d7c0' }} />
              )}
              <img
                src="/profile.png"
                alt="Saikumar Bammidi"
                className={`w-full h-full object-cover object-center transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImgLoaded(true)}
              />
            </div>

            {/* Name plate */}
            <div className="p-5 space-y-3">
              <div>
                <h3 className={`font-heading font-bold text-base ${isDark ? 'text-beige-50' : 'text-dark-800'}`}>
                  {personalInfo.name}
                </h3>
                <p className={`text-xs font-semibold mt-0.5 ${isDark ? 'text-accent' : 'text-beige-600'}`}>
                  {personalInfo.role}
                </p>
              </div>

              <div className="space-y-1.5">
                <div className={`flex items-center gap-2 text-xs ${isDark ? 'text-beige-200/60' : 'text-dark-400'}`}>
                  <MapPin size={12} className="shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className={`flex items-center gap-2 text-xs ${isDark ? 'text-beige-200/60' : 'text-dark-400'}`}>
                  <Mail size={12} className="shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </div>
              </div>

              {/* Social buttons */}
              <div className="flex gap-2 pt-1">
                {[
                  { icon: GithubIcon, href: personalInfo.socials.github, label: 'GitHub' },
                  { icon: LinkedinIcon, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-1.5 text-xs font-medium border transition-all duration-200 hover:scale-[1.02] ${
                      isDark
                        ? 'border-white/10 bg-white/5 text-beige-200/70 hover:bg-accent/15 hover:text-accent hover:border-accent/30'
                        : 'border-beige-200 bg-beige-50 text-dark-500 hover:bg-beige-100 hover:text-dark-800'
                    }`}
                  >
                    <Icon size={13} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Bio + stats + highlights ── */}
          <div className="space-y-6">
            {/* Bio card */}
            <div
              className={`rounded-2xl p-7 transition-all duration-700 delay-200 ${cardBase} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <h3 className={`font-heading font-semibold text-lg mb-3 ${isDark ? 'text-beige-50' : 'text-dark-800'}`}>
                About Me
              </h3>
              <p className={`text-sm leading-7 mb-4 ${isDark ? 'text-beige-200/70' : 'text-dark-400'}`}>
                {personalInfo.bio}
              </p>
              <p className={`text-sm leading-7 ${isDark ? 'text-beige-200/70' : 'text-dark-400'}`}>
                I believe great frontend development is a balance of{' '}
                <span className={`font-semibold ${isDark ? 'text-accent' : 'text-dark-700'}`}>aesthetics</span>,{' '}
                <span className={`font-semibold ${isDark ? 'text-accent' : 'text-dark-700'}`}>performance</span>, and{' '}
                <span className={`font-semibold ${isDark ? 'text-accent' : 'text-dark-700'}`}>usability</span>.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { number: '5+', label: 'Projects Built' },
                  { number: '4+', label: 'Technologies' },
                  { number: '1+', label: 'Year Exp.' },
                ].map(({ number, label }) => (
                  <div
                    key={label}
                    className={`text-center py-4 rounded-xl ${isDark ? 'bg-white/5' : 'bg-beige-50 border border-beige-100'}`}
                  >
                    <div className={`font-heading font-bold text-2xl leading-none ${isDark ? 'text-accent' : 'text-dark-800'}`}>
                      {number}
                    </div>
                    <div className={`text-xs mt-1.5 ${isDark ? 'text-beige-200/50' : 'text-dark-400'}`}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className={`group rounded-2xl p-5 border transition-all duration-500 cursor-default ${
                    isDark
                      ? 'bg-dark-800/60 border-white/8 hover:border-accent/30 hover:bg-dark-800/80'
                      : 'bg-white border-beige-200 hover:border-beige-400 hover:shadow-md'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${300 + i * 80}ms` : '0ms',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                  }}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 ${
                      isDark ? 'bg-accent/12 text-accent' : 'bg-dark-800/6 text-dark-700'
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                  <h4 className={`font-heading font-semibold text-sm mb-1.5 ${isDark ? 'text-beige-100' : 'text-dark-800'}`}>
                    {title}
                  </h4>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-beige-200/50' : 'text-dark-400'}`}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
