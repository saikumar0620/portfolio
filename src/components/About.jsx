import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Code2, Palette, Zap, Users, MapPin, Mail, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

const highlights = [
  { icon: Code2, title: 'Clean Code', desc: 'Maintainable & scalable with modern best practices' },
  { icon: Palette, title: 'UI/UX Focus', desc: 'Intuitive, beautiful interfaces users love' },
  { icon: Zap, title: 'Performance', desc: 'Optimised for speed, accessibility & SEO' },
  { icon: Users, title: 'Collaboration', desc: 'Strong teamwork with agile experience' },
];

const stats = [
  { number: '5+', label: 'Projects' },
  { number: '4+', label: 'Technologies' },
  { number: '1+', label: 'Yr Exp.' },
];

export default function About() {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <section id="about">
      <div />
      <div>
        <div>
          <span>
            // About Me
          </span>
          <h2>
            Get To Know Me
          </h2>
          <div />
        </div>
        <div>
          <aside>
            <div>
              <div />
              <img
                src="/profile.png"
                alt="Saikumar Bammidi"
                onLoad={() => setImgLoaded(true)}
              />
            </div>
            <div>
              <div>
                <h3>
                  {personalInfo.name}
                </h3>
                <p>
                  {personalInfo.role}
                </p>
              </div>
              <div>
                {[
                  { icon: MapPin, text: personalInfo.location },
                  { icon: Mail, text: personalInfo.email, truncate: true },
                ].map(({ icon: Icon, text, truncate }) => (
                  <div key={text}>
                    <Icon />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <div />
              <div>
                <div>
                  {[
                    { icon: GithubIcon, href: personalInfo.socials.github, label: 'GitHub' },
                    { icon: LinkedinIcon, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon />
                      {label}
                    </a>
                  ))}
                </div>
                <a
                  href={personalInfo.resumeUrl}
                  download
                >
                  <Download />
                  Download CV
                </a>
              </div>
            </div>
          </aside>
          <div>
            <div>
              <h3>
                About Me
              </h3>
              <p>
                {personalInfo.bio}
              </p>
              <p>
                I believe great frontend development is a balance of{' '}
                <span>aesthetics</span>,{' '}
                <span>performance</span>, and{' '}
                <span>usability</span>.
              </p>
              <div>
                {stats.map(({ number, label }) => (
                  <div key={label}>
                    <span>
                      {number}
                    </span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <div key={title}>
                  <div>
                    <Icon />
                  </div>
                  <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
