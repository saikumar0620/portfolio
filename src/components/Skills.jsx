import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className={`inline-block font-mono text-xs tracking-[0.2em] uppercase mb-3 ${isDark ? 'text-accent' : 'text-beige-600'}`}>
            // Skills
          </span>
          <h2 className={`font-heading font-bold text-4xl sm:text-5xl ${isDark ? 'text-beige-50' : 'text-dark-800'}`}>
            My Tech Stack
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`group rounded-2xl p-5 border transition-all duration-500 cursor-default ${
                isDark
                  ? 'bg-dark-800/60 border-white/8 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5'
                  : 'bg-white border-beige-200 hover:border-beige-400 hover:shadow-md'
              }`}
              style={{
                transitionDelay: isVisible ? `${i * 70}ms` : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease ${i * 70}ms`,
              }}
            >
              {/* Icon + name row */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl leading-none">{skill.icon}</span>
                <div className="min-w-0">
                  <h3 className={`font-heading font-semibold text-sm ${isDark ? 'text-beige-100' : 'text-dark-800'}`}>
                    {skill.name}
                  </h3>
                  <p className={`text-xs mt-0.5 truncate ${isDark ? 'text-beige-200/40' : 'text-dark-300'}`}>
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-beige-100'}`}>
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-beige-600 transition-all duration-1000 ease-out"
                  style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                />
              </div>

              {/* Level label */}
              <div className="flex items-center justify-between mt-2">
                <span className={`text-[10px] font-medium ${isDark ? 'text-beige-200/30' : 'text-dark-200'}`}>
                  Proficiency
                </span>
                <span className={`text-xs font-mono font-semibold ${isDark ? 'text-accent' : 'text-beige-600'}`}>
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
