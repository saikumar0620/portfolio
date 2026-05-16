import { personalInfo } from '../data/portfolioData';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6">
        <div className="section-header">
          <span className="section-header-comment">// Contact</span>
          <h2 className="section-header-title">Let's Collaborate</h2>
          <div className="h-[1px] w-32 bg-[var(--accent)] opacity-20 mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xl text-[var(--text-faint)] font-light leading-relaxed mb-12">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, my inbox is open.
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-6 bg-[var(--bg-secondary)] border border-[var(--border)] group hover:border-[var(--accent)] transition-all duration-500"
              >
                <div className="p-3 bg-[var(--bg-primary)] text-[var(--accent)]">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-bold text-[var(--text-faint)] mb-1">Email Me</span>
                  <span className="text-[var(--text-strong)] font-bold">{personalInfo.email}</span>
                </div>
                <ArrowRight className="ml-auto text-[var(--border)] group-hover:text-[var(--accent)] group-hover:translate-x-2 transition-all" />
              </a>
            </div>
          </div>

          <form className="space-y-8 bg-[var(--bg-secondary)] p-8 md:p-12 border border-[var(--border)]">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-strong)]">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-[var(--border)] py-3 outline-none focus:border-[var(--accent)] transition-all duration-500 text-[var(--text-strong)] placeholder:text-[var(--text-faint)]/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-strong)]">Email</label>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full bg-transparent border-b border-[var(--border)] py-3 outline-none focus:border-[var(--accent)] transition-all duration-500 text-[var(--text-strong)] placeholder:text-[var(--text-faint)]/20"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-strong)]">Message</label>
              <textarea
                rows="4"
                placeholder="Tell me about your project..."
                className="w-full bg-transparent border-b border-[var(--border)] py-3 outline-none focus:border-[var(--accent)] transition-all duration-500 text-[var(--text-strong)] resize-none placeholder:text-[var(--text-faint)]/20"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-arch w-full bg-[var(--text-strong)] !text-[var(--bg-primary)] flex items-center justify-center gap-3"
            >
              <span>Send Message</span>
              <MessageSquare size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}