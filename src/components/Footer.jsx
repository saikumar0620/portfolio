import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const year = new Date().getFullYear();

  return (
    <footer className={`py-8 border-t ${isDark ? 'border-white/5' : 'border-beige-200/60'}`}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className={`text-sm flex items-center gap-1 ${isDark ? 'text-beige-200/40' : 'text-dark-300'}`}>
          © {year} {personalInfo.name}. Built with
          <Heart size={14} className="text-accent fill-accent" />
          & React
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: 'GitHub', href: personalInfo.socials.github },
            { label: 'LinkedIn', href: personalInfo.socials.linkedin },
            { label: 'Email', href: personalInfo.socials.email },
          ].map(({ label, href }) => (
            <a key={label} href={href} target={label !== 'Email' ? '_blank' : undefined} rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              className={`text-sm transition-colors ${isDark ? 'text-beige-200/40 hover:text-accent' : 'text-dark-300 hover:text-dark-800'}`}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
