import { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, ArrowDown, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

const ROLES = ['Frontend Developer', 'React Specialist', 'UI Craftsman'];

export default function Hero() {
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

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 z-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
              </span>
              <span className="text-[var(--accent)] uppercase tracking-[0.3em] text-[10px] font-bold">
                Available for new opportunities
              </span>
            </div>

            <h1 className="text-huge mb-4 text-[var(--text-strong)]">
              Hi, I'm{' '}
              <span className="text-[var(--accent)] block sm:inline">Saikumar</span>
            </h1>

            <div className="mb-8 font-mono text-lg md:text-xl text-[var(--text-faint)] min-h-[1.5em] flex items-center">
              <span className="text-[var(--accent)] mr-4 font-bold">{`//`}</span>
              <span className="text-[var(--text-strong)] tracking-tight">{displayed}</span>
              <span className="w-[2px] h-[1em] bg-[var(--accent)] ml-1 animate-pulse"></span>
            </div>

            <p className="text-xl md:text-2xl text-[var(--text-faint)] max-w-2xl mb-12 leading-relaxed font-light">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                id="hero-cta-projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-arch bg-[var(--text-strong)] !text-[var(--bg-primary)]"
              >
                View My Work
              </a>
              <a
                href="#contact"
                id="hero-cta-contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-arch"
              >
                Get In Touch
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-arch inline-flex items-center gap-2"
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>

            <div className="mt-16 flex items-center gap-6">
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
                  className="text-[var(--text-faint)] hover:text-[var(--accent)] transition-all duration-300 transform hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 relative hidden lg:block">
            <div className={`relative max-w-[320px] ml-auto transition-all duration-1000 transform ${imgLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
              <div className="accent-float translate-x-6 translate-y-6 opacity-20"></div>
              <div className="img-frame grayscale hover:grayscale-0 transition-all duration-700 group">
                <img
                  src="/profile.png"
                  alt="Saikumar Bammidi — Frontend Developer"
                  onLoad={() => setImgLoaded(true)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="text-[var(--text-faint)] hover:text-[var(--text-strong)] transition-colors"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
