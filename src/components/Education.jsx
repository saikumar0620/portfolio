import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { education, experience } from '../data/portfolioData';
import { GraduationCap, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [ref, isVisible] = useScrollReveal();

  const cardBase = isDark
    ? 'bg-dark-800/60 border border-white/8'
    : 'bg-white border border-beige-200 shadow-sm';

  return (
    <section id="education" className="py-24 lg:py-32 relative">
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-gradient-to-b from-transparent via-accent/[0.025] to-transparent' : 'bg-gradient-to-b from-transparent via-beige-100/60 to-transparent'}`} />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className={`inline-block font-mono text-xs tracking-[0.2em] uppercase mb-3 ${isDark ? 'text-accent' : 'text-beige-600'}`}>
            // Journey
          </span>
          <h2 className={`font-heading font-bold text-4xl sm:text-5xl ${isDark ? 'text-beige-50' : 'text-dark-800'}`}>
            Education &amp; Experience
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* ── Education column ── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? 'bg-accent/12 text-accent' : 'bg-dark-800/6 text-dark-700'}`}>
                <GraduationCap size={20} />
              </div>
              <h3 className={`font-heading font-bold text-xl ${isDark ? 'text-beige-50' : 'text-dark-800'}`}>
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 transition-all duration-600 ${cardBase}`}
                  style={{
                    transitionDelay: isVisible ? `${200 + i * 100}ms` : '0ms',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s ease ${200 + i * 100}ms`,
                  }}
                >
                  {/* Year badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${isDark ? 'bg-accent/12 text-accent' : 'bg-beige-100 text-beige-700 border border-beige-200'}`}>
                    <Calendar size={11} />
                    {edu.year}
                  </div>

                  <h4 className={`font-heading font-bold text-base mb-1 ${isDark ? 'text-beige-50' : 'text-dark-800'}`}>
                    {edu.degree}
                  </h4>
                  <p className={`text-sm font-medium mb-0.5 ${isDark ? 'text-accent/80' : 'text-beige-600'}`}>
                    {edu.field}
                  </p>
                  <p className={`text-xs mb-3 ${isDark ? 'text-beige-200/40' : 'text-dark-300'}`}>
                    {edu.institution}
                  </p>
                  <p className={`text-sm leading-6 ${isDark ? 'text-beige-200/60' : 'text-dark-400'}`}>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Experience column ── */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? 'bg-accent/12 text-accent' : 'bg-dark-800/6 text-dark-700'}`}>
                <Briefcase size={20} />
              </div>
              <h3 className={`font-heading font-bold text-xl ${isDark ? 'text-beige-50' : 'text-dark-800'}`}>
                Experience
              </h3>
            </div>

            <div className="space-y-4">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 transition-all duration-600 ${cardBase}`}
                  style={{
                    transitionDelay: isVisible ? `${300 + i * 100}ms` : '0ms',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s ease ${300 + i * 100}ms`,
                  }}
                >
                  {/* Period badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold mb-3 ${isDark ? 'bg-accent/12 text-accent' : 'bg-beige-100 text-beige-700 border border-beige-200'}`}>
                    <Calendar size={11} />
                    {exp.period}
                  </div>

                  <h4 className={`font-heading font-bold text-base mb-1 ${isDark ? 'text-beige-50' : 'text-dark-800'}`}>
                    {exp.role}
                  </h4>
                  <p className={`text-xs font-medium mb-3 ${isDark ? 'text-accent/80' : 'text-beige-600'}`}>
                    {exp.type}
                  </p>
                  <p className={`text-sm leading-6 mb-4 ${isDark ? 'text-beige-200/60' : 'text-dark-400'}`}>
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={14}
                          className={`mt-0.5 shrink-0 ${isDark ? 'text-accent' : 'text-beige-600'}`}
                        />
                        <span className={`text-xs leading-5 ${isDark ? 'text-beige-200/60' : 'text-dark-400'}`}>
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
