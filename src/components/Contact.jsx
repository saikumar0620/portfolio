import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { personalInfo } from '../data/portfolioData';
import { Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export default function Contact() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [ref, isVisible] = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const cardBase = isDark
    ? 'bg-dark-800/60 border border-white/8'
    : 'bg-white border border-beige-200 shadow-sm';

  const inputBase = isDark
    ? 'bg-white/5 border border-white/10 text-beige-100 placeholder:text-beige-200/25 focus:border-accent/50 focus:bg-white/8'
    : 'bg-beige-50 border border-beige-200 text-dark-800 placeholder:text-dark-300 focus:border-beige-400 focus:bg-white';

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-gradient-to-b from-transparent via-accent/[0.025] to-transparent' : 'bg-gradient-to-b from-transparent via-beige-100/60 to-transparent'}`} />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className={`inline-block font-mono text-xs tracking-[0.2em] uppercase mb-3 ${isDark ? 'text-accent' : 'text-beige-600'}`}>
            // Contact
          </span>
          <h2 className={`font-heading font-bold text-4xl sm:text-5xl ${isDark ? 'text-beige-50' : 'text-dark-800'}`}>
            Let's Work Together
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-accent" />
          <p className={`mt-6 text-base max-w-lg mx-auto leading-relaxed ${isDark ? 'text-beige-200/60' : 'text-dark-400'}`}>
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* ── Left: Contact info ── */}
          <div
            className="lg:col-span-2 space-y-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.7s ease 200ms',
            }}
          >
            {/* Get in touch card */}
            <div className={`rounded-2xl p-6 ${cardBase}`}>
              <h3 className={`font-heading font-semibold text-base mb-4 ${isDark ? 'text-beige-50' : 'text-dark-800'}`}>
                Get in Touch
              </h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`flex items-center gap-3 py-2.5 px-3 rounded-xl transition-colors group ${isDark ? 'text-beige-200/60 hover:text-accent hover:bg-accent/8' : 'text-dark-400 hover:text-dark-800 hover:bg-beige-50'}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isDark ? 'bg-accent/12' : 'bg-beige-100'}`}>
                    <Mail size={15} className={isDark ? 'text-accent' : 'text-beige-600'} />
                  </div>
                  <span className="text-sm truncate">{personalInfo.email}</span>
                </a>
                <div className={`flex items-center gap-3 py-2.5 px-3 rounded-xl ${isDark ? 'text-beige-200/60' : 'text-dark-400'}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isDark ? 'bg-accent/12' : 'bg-beige-100'}`}>
                    <MapPin size={15} className={isDark ? 'text-accent' : 'text-beige-600'} />
                  </div>
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social links card */}
            <div className={`rounded-2xl p-6 ${cardBase}`}>
              <h3 className={`font-heading font-semibold text-base mb-4 ${isDark ? 'text-beige-50' : 'text-dark-800'}`}>
                Social Links
              </h3>
              <div className="space-y-2">
                {[
                  { icon: GithubIcon, label: 'GitHub', href: personalInfo.socials.github, sub: 'saikumar0620' },
                  { icon: LinkedinIcon, label: 'LinkedIn', href: personalInfo.socials.linkedin, sub: 'saikumar-bammidi' },
                ].map(({ icon: Icon, label, href, sub }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl group transition-all ${
                      isDark
                        ? 'hover:bg-white/5 text-beige-200/60 hover:text-accent'
                        : 'hover:bg-beige-50 text-dark-400 hover:text-dark-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} />
                      <div>
                        <div className="text-sm font-medium">{label}</div>
                        <div className={`text-xs mt-0.5 ${isDark ? 'text-beige-200/30' : 'text-dark-300'}`}>{sub}</div>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.7s ease 400ms',
            }}
          >
            <form onSubmit={handleSubmit} className={`rounded-2xl p-7 ${cardBase}`}>
              <h3 className={`font-heading font-semibold text-base mb-6 ${isDark ? 'text-beige-50' : 'text-dark-800'}`}>
                Send a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="contact-name" className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-beige-200/60' : 'text-dark-500'}`}>
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 ${inputBase}`}
                    placeholder="Saikumar"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-beige-200/60' : 'text-dark-500'}`}>
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 ${inputBase}`}
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="contact-message" className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-beige-200/60' : 'text-dark-500'}`}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none ${inputBase}`}
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                id="contact-submit"
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.01] hover:shadow-xl disabled:opacity-50 ${
                  isDark
                    ? 'bg-accent text-dark-900 hover:bg-accent-hover hover:shadow-accent/20'
                    : 'bg-dark-800 text-beige-50 hover:bg-dark-700 hover:shadow-dark-800/20'
                }`}
              >
                <Send size={15} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
