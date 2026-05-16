import { projects } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';

export default function Projects() {
  return (
    <section id="projects">
      <div />

      <div>
        <div>
          <span>
            // Projects
          </span>
          <h2>
            Featured Work
          </h2>
          <div />
        </div>

        <div>
          {projects.map((project, i) => (
            <article
              key={project.id}
            >
              <div>
                <div />
                <div />

                <div>
                  <div>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                </div>

                {project.featured && (
                  <span>
                    Featured
                  </span>
                )}

                <div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GithubIcon />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink />
                      Live
                    </a>
                  )}
                </div>
              </div>

              <div>
                <div>
                  <h3>
                    {project.title}
                  </h3>
                  <div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <GithubIcon />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                      >
                        <ExternalLink />
                      </a>
                    )}
                  </div>
                </div>

                <p>
                  {project.description}
                </p>

                <div>
                  {project.tech.map((t) => (
                    <span key={t}>
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
