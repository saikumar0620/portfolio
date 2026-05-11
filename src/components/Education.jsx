import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { education, experience } from '../data/portfolioData';
import { GraduationCap, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [ref, isVisible] = useScrollReveal();

  const strong = isDark ? 'text-beige-50'      : 'text-dark-800';
  const muted  = isDark ? 'text-beige-200/55'  : 'text-dark-400';
  const accent = isDark ? 'text-accent'         : 'text-beige-600';

  const card = isDark
    ? 'bg-dark-800/65 border border-white/[0.07]'
    : 'bg-white border border-beige-200 shadow-sm';

  const badge = isDark
    ? 'bg-accent/10 text-accent'
    : 'bg-beige-100 text-beige-700 border border-beige-200';

  const iconWrap = isDark
    ? 'bg-accent/10 text-accent'
    : 'bg-beige-100 text-dark-700';

  /* stagger helper */
  const reveal = (delay = 0) => ({
    opacity  : isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(18px)',
    transition: `opacity .6s ease ${delay}ms, transform .6s ease ${delay}ms`,
  });

  return (
    <section id="education" className="py-20 lg:py-28 relative overflow-hidden">
      {/* bg tint */}
      <div className={`absolute inset-0 pointer-events-none ${
        isDark ? '' : 'bg-beige-50/40'
      }`} />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12 lg:mb-16" style={reveal(0)}>
          <span className={`inline-block font-mono text-[11px] tracking-[0.25em] uppercase mb-3 ${accent}`}>
            // Journey
          </span>
          <h2 className={`font-heading font-bold text-3xl sm:text-4xl lg:text-5xl ${strong}`}>
            Education & Experience
          </h2>
          <div className="mt-4 mx-auto w-12 h-[3px] rounded-full bg-accent" />
        </div>

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* ════ Education column ════ */}
          <div style={reveal(120)}>
            {/* column header */}
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconWrap}`}>
                <GraduationCap size={20} />
              </div>
              <h3 className={`font-heading font-bold text-xl ${strong}`}>Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${card}`}
                  style={reveal(200 + i * 80)}
                >
                  {/* year pill */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold mb-4 ${badge}`}>
                    <Calendar size={11} />
                    {edu.year}
                  </div>

                  <h4 className={`font-heading font-bold text-[15px] leading-tight mb-1 ${strong}`}>
                    {edu.degree}
                  </h4>
                  <p className={`text-sm font-semibold mb-0.5 ${isDark ? 'text-accent/80' : 'text-beige-600'}`}>
                    {edu.field}
                  </p>
                  <p className={`text-xs mb-4 ${isDark ? 'text-beige-200/38' : 'text-dark-300'}`}>
                    {edu.institution}
                  </p>
                  <p className={`text-sm leading-[1.75] ${muted}`}>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ════ Experience column ════ */}
          <div style={reveal(200)}>
            {/* column header */}
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${iconWrap}`}>
                <Briefcase size={20} />
              </div>
              <h3 className={`font-heading font-bold text-xl ${strong}`}>Experience</h3>
            </div>

            <div className="space-y-4">
              {experience.map((exp, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${card}`}
                  style={reveal(280 + i * 80)}
                >
                  {/* period pill */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold mb-4 ${badge}`}>
                    <Calendar size={11} />
                    {exp.period}
                  </div>

                  <h4 className={`font-heading font-bold text-[15px] leading-tight mb-1 ${strong}`}>
                    {exp.role}
                  </h4>
                  <p className={`text-xs font-semibold mb-4 ${isDark ? 'text-accent/80' : 'text-beige-600'}`}>
                    {exp.type}
                  </p>
                  <p className={`text-sm leading-[1.75] mb-5 ${muted}`}>
                    {exp.description}
                  </p>

                  {/* highlights */}
                  <ul className="space-y-2.5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={14}
                          className={`mt-0.5 shrink-0 ${isDark ? 'text-accent' : 'text-beige-600'}`}
                        />
                        <span className={`text-[12px] leading-5 ${muted}`}>{h}</span>
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
