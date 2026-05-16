import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-header-comment">// Skills</span>
          <h2 className="section-header-title">My Tech Stack</h2>
          <div className="h-[1px] w-32 bg-[var(--accent)] opacity-20 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[var(--bg-secondary)] border border-[var(--border)] p-8 transition-all duration-500 hover:border-[var(--accent)] group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-[var(--accent)] transition-transform duration-500 group-hover:scale-110">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-strong)] uppercase tracking-wider">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-[var(--text-faint)] font-light mt-1">
                    {skill.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-[var(--text-faint)]">
                  <span>Proficiency</span>
                  <span className="text-[var(--text-strong)]">{skill.level}%</span>
                </div>
                <div className="h-[1px] w-full bg-[var(--border)] relative overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-[var(--accent)] transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
