import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [ref, isVisible] = useScrollReveal();

  const strong = isDark ? 'text-beige-50'     : 'text-dark-800';
  const muted  = isDark ? 'text-beige-200/50' : 'text-dark-400';
  const accent = isDark ? 'text-accent'        : 'text-beige-600';

  return (
    <section id="skills" className="py-20 lg:py-28 relative overflow-hidden">
      {/* bg tint */}
      <div className={`absolute inset-0 pointer-events-none ${
        isDark ? '' : 'bg-beige-50/40'
      }`} />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div
          className="text-center mb-12 lg:mb-16"
          style={{
            opacity   : isVisible ? 1 : 0,
            transform : isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity .65s ease, transform .65s ease',
          }}
        >
          <span className={`inline-block font-mono text-[11px] tracking-[0.25em] uppercase mb-3 ${accent}`}>
            // Skills
          </span>
          <h2 className={`font-heading font-bold text-3xl sm:text-4xl lg:text-5xl ${strong}`}>
            My Tech Stack
          </h2>
          <div className="mt-4 mx-auto w-12 h-[3px] rounded-full bg-accent" />
        </div>

        {/* ── Skills grid — 3 cols on lg, 2 on sm, 1 on mobile ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className={`group flex flex-col gap-4 rounded-2xl p-5 border cursor-default transition-all duration-300 hover:-translate-y-1.5 ${
                isDark
                  ? 'bg-dark-800/65 border-white/[0.07] hover:border-accent/35 hover:bg-dark-800/85 hover:shadow-xl hover:shadow-accent/8'
                  : 'bg-white border-beige-200 hover:border-beige-400 hover:shadow-xl hover:shadow-beige-200/50'
              }`}
              style={{
                opacity   : isVisible ? 1 : 0,
                transform : isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity .55s ease ${i * 65}ms, transform .55s ease ${i * 65}ms, box-shadow .3s ease, border-color .3s ease`,
              }}
            >
              {/* ── Top row: icon + name ── */}
              <div className="flex items-center gap-3">
                <span
                  className="text-[22px] leading-none transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  role="img"
                  aria-label={skill.name}
                >
                  {skill.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className={`font-heading font-semibold text-[13px] leading-tight transition-colors ${
                    isDark ? `${strong} group-hover:text-accent` : strong
                  }`}>
                    {skill.name}
                  </h3>
                  <p className={`text-[11px] mt-0.5 leading-snug line-clamp-1 ${muted}`}>
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* ── Progress bar ── */}
              <div className="space-y-1.5 mt-auto">
                {/* percentage label row */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-medium uppercase tracking-wide ${muted}`}>
                    Proficiency
                  </span>
                  <span className={`text-[11px] font-mono font-bold ${isDark ? 'text-accent' : 'text-beige-700'}`}>
                    {skill.level}%
                  </span>
                </div>

                {/* track */}
                <div className={`w-full h-[6px] rounded-full overflow-hidden ${
                  isDark ? 'bg-white/[0.06]' : 'bg-beige-100'
                }`}>
                  {/* fill */}
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      isDark
                        ? 'bg-gradient-to-r from-accent/80 via-accent to-beige-400'
                        : 'bg-gradient-to-r from-beige-500 to-accent'
                    }`}
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
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
