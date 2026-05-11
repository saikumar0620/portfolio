import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const year = new Date().getFullYear();

  return (
    <footer
      className={`py-8 border-t ${
        isDark ? 'border-white/[0.07]' : 'border-beige-200/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* copyright */}
        <p
          className={`text-[13px] flex items-center gap-1.5 ${
            isDark ? 'text-beige-200/38' : 'text-dark-400'
          }`}
        >
          © {year} {personalInfo.name}. Built with
          <Heart size={13} className="text-accent fill-accent" />
          & React
        </p>

        {/* links */}
        <div className="flex items-center gap-6">
          {[
            { label: 'GitHub',   href: personalInfo.socials.github },
            { label: 'LinkedIn', href: personalInfo.socials.linkedin },
            { label: 'Email',    href: personalInfo.socials.email },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              className={`text-[13px] font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                isDark
                  ? 'text-beige-200/38 hover:text-accent'
                  : 'text-dark-400 hover:text-dark-900'
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
