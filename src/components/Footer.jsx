import { personalInfo } from '../data/portfolioData';
import { Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div>
        <p>
          <p>
            © {year} {personalInfo.name}. Designed & developed with React.
          </p>
        </p>
        <div>
          {[
            { label: 'GitHub', href: personalInfo.socials.github },
            { label: 'LinkedIn', href: personalInfo.socials.linkedin },
            { label: 'Email', href: personalInfo.socials.email },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
