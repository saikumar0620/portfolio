import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';

const techColors = {
  React: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  TypeScript: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  JavaScript: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Tailwind CSS': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  HTML: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  CSS: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
};

const techColorsLight = {
  React: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  TypeScript: 'bg-blue-50 text-blue-700 border-blue-200',
  JavaScript: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  'Tailwind CSS': 'bg-teal-50 text-teal-700 border-teal-200',
  HTML: 'bg-orange-50 text-orange-700 border-orange-200',
  CSS: 'bg-purple-50 text-purple-700 border-purple-200',
};

const projectGradients = [
  'from-cyan-500/20 to-blue-500/20',
  'from-violet-500/20 to-purple-500/20',
  'from-amber-500/20 to-orange-500/20',
  'from-emerald-500/20 to-teal-500/20',
];

const projectGradientsLight = [
  'from-cyan-100 to-blue-100',
  'from-violet-100 to-purple-100',
  'from-amber-100 to-orange-100',
  'from-emerald-100 to-teal-100',
];

export default function Projects() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-gradient-to-b from-transparent via-accent/[0.025] to-transparent' : 'bg-gradient-to-b from-transparent via-beige-100/60 to-transparent'}`} />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className={`inline-block font-mono text-xs tracking-[0.2em] uppercase mb-3 ${isDark ? 'text-accent' : 'text-beige-600'}`}>
            // Projects
          </span>
          <h2 className={`font-heading font-bold text-4xl sm:text-5xl ${isDark ? 'text-beige-50' : 'text-dark-800'}`}>
            Featured Work
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`group flex flex-col rounded-2xl overflow-hidden border transition-all duration-500 ${
                isDark
                  ? 'bg-dark-800/60 border-white/8 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5'
                  : 'bg-white border-beige-200 hover:border-beige-400 hover:shadow-xl hover:shadow-beige-300/30'
              }`}
              style={{
                transitionDelay: isVisible ? `${i * 100}ms` : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.6s ease ${i * 100}ms`,
              }}
            >
              {/* Colourful gradient banner */}
              <div
                className={`relative h-44 bg-gradient-to-br overflow-hidden ${
                  isDark ? projectGradients[i % 4] : projectGradientsLight[i % 4]
                }`}
              >
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />

                {/* Project initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`font-heading font-black text-6xl select-none opacity-15 ${isDark ? 'text-white' : 'text-dark-800'}`}
                  >
                    {project.title.charAt(0)}
                  </span>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-accent text-dark-900 shadow-lg">
                    Featured
                  </div>
                )}

                {/* Hover overlay with action buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 text-white text-xs font-semibold hover:bg-white/30 transition-colors border border-white/20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GithubIcon size={14} />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-dark-900 text-xs font-semibold hover:bg-accent-hover transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Title + links row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className={`font-heading font-bold text-lg leading-snug ${isDark ? 'text-beige-50' : 'text-dark-800'}`}>
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0 mt-0.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className={`p-1.5 rounded-lg transition-colors ${isDark ? 'text-beige-200/40 hover:text-accent' : 'text-dark-300 hover:text-dark-800'}`}
                    >
                      <GithubIcon size={16} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className={`p-1.5 rounded-lg transition-colors ${isDark ? 'text-beige-200/40 hover:text-accent' : 'text-dark-300 hover:text-dark-800'}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className={`text-sm leading-6 flex-1 mb-4 ${isDark ? 'text-beige-200/60' : 'text-dark-400'}`}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium border ${
                        isDark
                          ? techColors[t] || 'bg-white/8 text-beige-200/60 border-white/10'
                          : techColorsLight[t] || 'bg-beige-50 text-dark-600 border-beige-200'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
