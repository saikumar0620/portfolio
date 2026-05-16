import { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, ArrowDown, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

const ROLES = ['Frontend Developer', 'React Specialist', 'UI Craftsman'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [imgLoaded, setImgLoaded] = useState(false);

  /* typewriter cycles through ROLES */
  useEffect(() => {
    const target = ROLES[roleIdx];
    let i = typing ? displayed.length : displayed.length - 1;
    if (typing && i >= target.length) {
      const pause = setTimeout(() => setTyping(false), 1800);
      return () => clearTimeout(pause);
    }
    if (!typing && i < 0) {
      setRoleIdx((p) => (p + 1) % ROLES.length);
      setTyping(true);
      return;
    }
    const speed = typing ? 60 : 35;
    const t = setTimeout(() => {
      setDisplayed(typing ? target.slice(0, i + 1) : target.slice(0, i));
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, typing, roleIdx]);

  return (
    <section id="home">
      <div>
        <div>
          <div>
            <div>
              <span>
                <span />
                <span />
              </span>
              Available for opportunities
            </div>

            <h1>
              Hi, I'm{' '}
              <span>Saikumar</span>
            </h1>

            <div>
              <span>
                {'< '}
                {displayed}
                <span />
                {' />'}
              </span>
            </div>

            <p>
              {personalInfo.tagline}
            </p>

            <div>
              <a
                href="#projects"
                id="hero-cta-projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
                <span>→</span>
              </a>
              <a
                href="#contact"
                id="hero-cta-contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
              >
                <Download />
                Resume
              </a>
            </div>

            <div>
              {[
                { Icon: GithubIcon, href: personalInfo.socials.github, label: 'GitHub' },
                { Icon: LinkedinIcon, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
                { Icon: Mail, href: personalInfo.socials.email, label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div>
              <div />
              <div />
              <div />
              <div>
                <img
                  src="/profile.png"
                  alt="Saikumar Bammidi — Frontend Developer"
                  onLoad={() => setImgLoaded(true)}
                />
              </div>

              <div>
                <span>1+</span> yr experience
              </div>

              <div>
                <span>5+</span> projects
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
        >
          <span>Scroll</span>
          <ArrowDown />
        </a>
      </div>
    </section>
  );
}
