import { education, experience } from '../data/portfolioData';
import { GraduationCap, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

function EducationItem({ year, degree, field, institution, description }) {
  return (
    <div className="relative border-l border-[var(--border)] pl-8 group">
      <div className="absolute w-2 h-2 bg-[var(--accent)] left-[-4.5px] top-1" />
      <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest block mb-2">
        {year}
      </span>
      <h4 className="text-xl font-bold text-[var(--text-strong)] mb-1">{degree}</h4>
      <p className="text-sm font-medium text-[var(--text-strong)]/80 mb-2">{field} — {institution}</p>
      <p className="text-sm text-[var(--text-faint)] font-light leading-relaxed">{description}</p>
    </div>
  );
}

function ExperienceItem({ period, role, type, description, highlights }) {
  return (
    <div className="relative border-l border-[var(--border)] pl-8 group">
      <div className="absolute w-2 h-2 bg-[var(--accent)] left-[-4.5px] top-1" />
      <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest block mb-2">
        {period}
      </span>
      <h4 className="text-xl font-bold text-[var(--text-strong)] mb-1">{role}</h4>
      <p className="text-sm font-medium text-[var(--accent)] mb-3">{type}</p>
      <p className="text-sm text-[var(--text-faint)] font-light leading-relaxed mb-4">{description}</p>
      <ul className="space-y-2">
        {highlights.map((h, j) => (
          <li key={j} className="flex items-start gap-2 text-xs text-[var(--text-faint)] font-light">
            <CheckCircle2 size={12} className="mt-0.5 text-[var(--accent)] shrink-0" />
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6">
        <header className="section-header">
          <span className="section-header-comment">// Journey</span>
          <h2 className="section-header-title">Education & Experience</h2>
          <div className="h-[1px] w-32 bg-[var(--accent)] opacity-20 mt-4" />
        </header>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div className="space-y-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--accent)]">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-strong)] uppercase tracking-tighter">Education</h3>
            </div>
            <div className="space-y-12">
              {education.map((edu, i) => <EducationItem key={i} {...edu} />)}
            </div>
          </div>

          {/* Experience Column */}
          <div className="space-y-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--accent)]">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-strong)] uppercase tracking-tighter">Experience</h3>
            </div>
            <div className="space-y-12">
              {experience.map((exp, i) => <ExperienceItem key={i} {...exp} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
