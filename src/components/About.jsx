import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Code2, Palette, Zap, Users, MapPin, Mail, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

const highlights = [
  { icon: Code2, title: 'Clean Code', desc: 'Maintainable & scalable with modern best practices' },
  { icon: Palette, title: 'UI/UX Focus', desc: 'Intuitive, beautiful interfaces users love' },
  { icon: Zap, title: 'Performance', desc: 'Optimised for speed, accessibility & SEO' },
  { icon: Users, title: 'Collaboration', desc: 'Strong teamwork with agile experience' },
];

const stats = [
  { number: '5+', label: 'Projects' },
  { number: '4+', label: 'Technologies' },
  { number: '1+', label: 'Yr Exp.' },
];

export default function About() {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <section id="about" className="py-24 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-header-comment">// About Me</span>
          <h2 className="section-header-title">Get To Know Me</h2>
          <div className="h-[1px] w-32 bg-[var(--accent)] opacity-20 mt-4" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Profile Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            <div className="relative group max-w-[300px] mx-auto lg:mx-0">
              <div className="accent-float translate-x-6 translate-y-6 opacity-20"></div>
              <div className="img-frame grayscale hover:grayscale-0 group aspect-[4/5]">
                <img
                  src="/profile.png"
                  alt="Saikumar Bammidi"
                  onLoad={() => setImgLoaded(true)}
                  className={`w-full h-full object-cover transition-all duration-1000 ${imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-2 border-[var(--accent)] pl-4">
                <h3 className="text-xl font-bold text-[var(--text-strong)] uppercase tracking-tighter">
                  {personalInfo.name}
                </h3>
                <p className="text-[var(--accent)] font-mono text-sm">
                  {personalInfo.role}
                </p>
              </div>
              <div className="space-y-2">
                {[
                  { icon: MapPin, text: personalInfo.location },
                  { icon: Mail, text: personalInfo.email },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-[var(--text-faint)]">
                    <Icon size={16} className="text-[var(--accent)]" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-arch inline-flex items-center gap-2 py-3 px-6"
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[var(--text-strong)] tracking-tight">
                My Professional Philosophy
              </h3>
              <p className="text-lg text-[var(--text-faint)] leading-relaxed font-light">
                {personalInfo.bio}
              </p>
              <p className="text-lg text-[var(--text-faint)] leading-relaxed font-light italic">
                I believe great frontend development is a balance of{' '}
                <span className="text-[var(--text-strong)] font-medium">aesthetics</span>,{' '}
                <span className="text-[var(--text-strong)] font-medium">performance</span>, and{' '}
                <span className="text-[var(--text-strong)] font-medium">usability</span>.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-[var(--border)]">
                {stats.map(({ number, label }) => (
                  <div key={label} className="bg-[var(--bg-secondary)] border border-[var(--border)] p-6 text-center">
                    <span className="block text-3xl font-bold text-[var(--accent)] tracking-tighter">
                      {number}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-[var(--text-faint)] font-bold">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} className="flex gap-6 p-8 bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-500 group">
                  <div className="mt-1 transition-transform group-hover:-translate-y-1">
                    <Icon size={24} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-strong)] uppercase tracking-wide text-sm">{title}</h4>
                    <p className="text-xs text-[var(--text-faint)] mt-1 font-light leading-relaxed">{desc}</p>
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
