import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';

/* ── Tech tag colours ── */
const tagDark = {
  React        : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  TypeScript   : 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  JavaScript   : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Tailwind CSS': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  HTML         : 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  CSS          : 'bg-purple-500/10 text-purple-400 border-purple-500/20',
};
const tagLight = {
  React        : 'bg-cyan-50 text-cyan-700 border-cyan-200',
  TypeScript   : 'bg-blue-50 text-blue-700 border-blue-200',
  JavaScript   : 'bg-yellow-50 text-yellow-700 border-yellow-200',
  'Tailwind CSS': 'bg-teal-50 text-teal-700 border-teal-200',
  HTML         : 'bg-orange-50 text-orange-700 border-orange-200',
  CSS          : 'bg-purple-50 text-purple-700 border-purple-200',
};

/* ── Banner gradients cycling per card ── */
const bannerDark  = [
  'from-cyan-500/20 to-blue-500/20',
  'from-violet-500/20 to-purple-500/20',
  'from-amber-500/20 to-orange-500/20',
  'from-emerald-500/20 to-teal-500/20',
];
const bannerLight = [
  'from-cyan-100/70 to-blue-100/70',
  'from-violet-100/70 to-purple-100/70',
  'from-amber-100/70 to-orange-100/70',
  'from-emerald-100/70 to-teal-100/70',
];

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [ref, isVisible] = useScrollReveal();

  const strong = isDark ? 'text-beige-50'      : 'text-dark-800';
  const muted  = isDark ? 'text-beige-200/55'  : 'text-dark-400';
  const accent = isDark ? 'text-accent'         : 'text-beige-600';

  return (
    <section id="projects" className="py-20 lg:py-28 relative overflow-hidden">
      {/* bg tint */}
      <div className={`absolute inset-0 pointer-events-none ${
        isDark ? '' : 'bg-beige-50/40'
      }`} />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div
          className="text-center mb-12 lg:mb-16"
          style={{
            opacity  : isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity .65s ease, transform .65s ease',
          }}
        >
          <span className={`inline-block font-mono text-[11px] tracking-[0.25em] uppercase mb-3 ${accent}`}>
            // Projects
          </span>
          <h2 className={`font-heading font-bold text-3xl sm:text-4xl lg:text-5xl ${strong}`}>
            Featured Work
          </h2>
          <div className="mt-4 mx-auto w-12 h-[3px] rounded-full bg-accent" />
        </div>

        {/* ── Projects grid — 2 cols on md+ ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 ${
                isDark
                  ? 'bg-dark-800/65 border-white/[0.07] hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10'
                  : 'bg-white border-beige-200 hover:border-beige-400 hover:shadow-2xl hover:shadow-beige-200/50'
              }`}
              style={{
                opacity  : isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity .55s ease ${i * 100}ms, transform .55s ease ${i * 100}ms, box-shadow .3s ease, border-color .3s ease`,
              }}
            >
              {/* ── Colourful banner (fixed h-40) ── */}
              <div className={`relative h-40 flex-shrink-0 bg-gradient-to-br overflow-hidden ${
                isDark ? bannerDark[i % 4] : bannerLight[i % 4]
              }`}>
                {/* decorative orbs */}
                <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/[0.04] blur-xl transition-transform duration-700 group-hover:scale-150" />
                <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-white/[0.04] blur-xl transition-transform duration-700 group-hover:scale-150" />

                {/* center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                    isDark ? 'bg-white/[0.07] border border-white/10' : 'bg-white/50 border border-white/70'
                  }`}>
                    <svg className={`w-7 h-7 transition-opacity duration-300 ${isDark ? 'text-white/35 group-hover:text-white/70' : 'text-dark-800/35 group-hover:text-dark-800/70'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                </div>

                {/* featured badge */}
                {project.featured && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-accent text-dark-900 shadow-sm">
                    Featured
                  </span>
                )}

                {/* hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/20 text-white text-xs font-semibold hover:bg-white/35 transition-colors border border-white/20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GithubIcon size={13} />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-accent text-dark-900 text-xs font-semibold hover:bg-accent-hover transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={13} />
                      Live
                    </a>
                  )}
                </div>
              </div>

              {/* ── Content ── */}
              <div className="flex flex-col flex-1 p-5 lg:p-6">
                {/* title + links */}
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <h3 className={`font-heading font-bold text-base leading-snug ${strong}`}>
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className={`p-1.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 ${
                        isDark ? 'text-beige-200/40 hover:text-accent' : 'text-dark-300 hover:text-dark-800'
                      }`}
                    >
                      <GithubIcon size={15} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className={`p-1.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 ${
                          isDark ? 'text-beige-200/40 hover:text-accent' : 'text-dark-300 hover:text-dark-800'
                        }`}
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* description — flex-1 pushes tags to bottom */}
                <p className={`text-sm leading-[1.7] flex-1 mb-4 ${muted}`}>
                  {project.description}
                </p>

                {/* tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold border ${
                        isDark
                          ? tagDark[t]  || 'bg-white/8 text-beige-200/60 border-white/10'
                          : tagLight[t] || 'bg-beige-50 text-dark-600 border-beige-200'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
