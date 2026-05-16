import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[var(--border)] bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[var(--text-strong)] font-bold tracking-tighter text-xl uppercase">
            Saikumar
          </div>

          <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-faint)] font-medium text-center">
            © {currentYear} — Designed & Built with precision by B. Saikumar
          </div>

          <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold">
            <a href={personalInfo.socials.github} className="text-[var(--text-faint)] hover:text-[var(--text-strong)] transition-colors">GitHub</a>
            <a href={personalInfo.socials.linkedin} className="text-[var(--text-faint)] hover:text-[var(--text-strong)] transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="h-[1px] w-12 bg-[var(--accent)] opacity-30" />
        </div>
      </div>
    </footer>
  );
}