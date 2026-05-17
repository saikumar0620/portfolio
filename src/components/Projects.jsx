import { projects } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';

/**
 * Individual Project Card Component
 * Extracted for better readability and maintainability.
 */
function ProjectCard({ project }) {
  const { title, description, tech, githubUrl, liveUrl, featured } = project;

  return (
    <article className="group relative flex flex-col bg-[var(--bg-secondary)] border border-[var(--border)] transition-all duration-500 hover:border-[var(--accent)]">
      {/* Visual Header / Icon Area */}
      <div className="relative aspect-[16/10] bg-[var(--bg-primary)] flex items-center justify-center overflow-hidden border-b border-[var(--border)] group-hover:bg-[var(--bg-secondary)] transition-colors duration-700">
        <div className="blueprint-grid opacity-[0.04]" aria-hidden="true" />

        <div className="transition-all duration-700 group-hover:scale-110 opacity-10 group-hover:opacity-30">
          <svg className="w-16 h-16 text-[var(--text-strong)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.04} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        </div>

        {/* Hover Links Overlay */}
        <div className="absolute inset-0 bg-[var(--text-strong)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-[var(--bg-primary)] text-[var(--text-strong)] border border-[var(--border)] hover:text-[var(--accent)] transition-all duration-300"
            aria-label={`View ${title} source code on GitHub`}
          >
            <GithubIcon size={20} />
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-[var(--bg-primary)] text-[var(--text-strong)] border border-[var(--border)] hover:text-[var(--accent)] transition-all duration-300"
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-[var(--text-strong)] group-hover:text-[var(--accent)] transition-colors duration-300">
            {title}
          </h3>
          {featured && (
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] border border-[var(--accent)]/30 px-2 py-1">
              Featured
            </span>
          )}
        </div>

        <p className="text-[var(--text-faint)] leading-relaxed mb-8 flex-1 font-light">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((techName) => (
            <span
              key={techName}
              className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-faint)] px-3 py-1 bg-[var(--bg-primary)]/50 border border-[var(--border)]"
            >
              {techName}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6">
        <header className="section-header">
          <span className="section-header-comment">// Projects</span>
          <h2 className="section-header-title">Featured Work</h2>
          <div className="h-[1px] w-32 bg-[var(--accent)] opacity-20 mt-4" />
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
