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
    const body    = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  /* ── design tokens ── */
  const strong = isDark ? 'text-beige-50'     : 'text-dark-800';
  const muted  = isDark ? 'text-beige-200/55' : 'text-dark-400';
  const accent = isDark ? 'text-accent'        : 'text-beige-600';

  const card = isDark
    ? 'bg-dark-800/65 border border-white/[0.07]'
    : 'bg-white border border-beige-200 shadow-sm';

  const input = isDark
    ? 'bg-dark-900/60 border border-white/10 text-beige-50 placeholder:text-beige-200/28 focus:border-accent focus:ring-1 focus:ring-accent focus:shadow-[0_0_14px_rgba(196,169,125,0.12)]'
    : 'bg-white border border-beige-200 text-dark-900 placeholder:text-dark-300/70 focus:border-dark-900 focus:ring-1 focus:ring-dark-900/20';

  const reveal = (delay = 0) => ({
    opacity  : isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-16px)',
    transition: `opacity .6s ease ${delay}ms, transform .6s ease ${delay}ms`,
  });

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      <div className={`absolute inset-0 pointer-events-none ${
        isDark ? '' : 'bg-beige-50/40'
      }`} />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div
          className="text-center mb-12 lg:mb-16"
          style={{
            opacity  : isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity .65s ease, transform .65s ease',
          }}
        >
          <span className={`inline-block font-mono text-[11px] tracking-[0.25em] uppercase mb-3 ${accent}`}>
            // Contact
          </span>
          <h2 className={`font-heading font-bold text-3xl sm:text-4xl lg:text-5xl ${strong}`}>
            Let's Work Together
          </h2>
          <div className="mt-4 mx-auto w-12 h-[3px] rounded-full bg-accent" />
          <p className={`mt-5 text-base max-w-md mx-auto leading-relaxed ${muted}`}>
            Have a project in mind or just want to say hello? I'd love to connect.
          </p>
        </div>

        {/* ── grid: 2/5 left info | 3/5 right form ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-6 items-start">

          {/* ════ Left — info ════ */}
          <div className="lg:col-span-2 flex flex-col gap-4" style={reveal(150)}>

            {/* get in touch card */}
            <div className={`rounded-2xl p-6 ${card}`}>
              <h3 className={`font-heading font-semibold text-[15px] mb-4 ${strong}`}>
                Get in Touch
              </h3>
              <div className="space-y-2">
                {[
                  { icon: Mail,   text: personalInfo.email,    href: `mailto:${personalInfo.email}`, truncate: true },
                  { icon: MapPin, text: personalInfo.location, href: null },
                ].map(({ icon: Icon, text, href, truncate }) => {
                  const cls = `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors group ${
                    isDark ? 'text-beige-200/60 hover:text-accent hover:bg-accent/6' : 'text-dark-400 hover:text-dark-800 hover:bg-beige-50'
                  }`;
                  const inner = (
                    <>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isDark ? 'bg-accent/10' : 'bg-beige-100'
                      }`}>
                        <Icon size={14} className={isDark ? 'text-accent' : 'text-beige-600'} />
                      </div>
                      <span className={`text-[13px] ${truncate ? 'truncate' : ''}`}>{text}</span>
                    </>
                  );
                  return href
                    ? <a key={text} href={href} className={cls}>{inner}</a>
                    : <div key={text} className={cls}>{inner}</div>;
                })}
              </div>
            </div>

            {/* social links card */}
            <div className={`rounded-2xl p-6 ${card}`}>
              <h3 className={`font-heading font-semibold text-[15px] mb-4 ${strong}`}>
                Social Links
              </h3>
              <div className="space-y-1.5">
                {[
                  { Icon: GithubIcon,   label: 'GitHub',   href: personalInfo.socials.github,   sub: 'saikumar0620' },
                  { Icon: LinkedinIcon, label: 'LinkedIn', href: personalInfo.socials.linkedin, sub: 'saikumar-bammidi' },
                ].map(({ Icon, label, href, sub }) => (
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
                      <Icon size={17} />
                      <div>
                        <div className="text-[13px] font-semibold">{label}</div>
                        <div className={`text-[11px] mt-0.5 ${isDark ? 'text-beige-200/30' : 'text-dark-300'}`}>{sub}</div>
                      </div>
                    </div>
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ════ Right — form ════ */}
          <div
            className="lg:col-span-3"
            style={{
              opacity  : isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(16px)',
              transition: 'opacity .6s ease 300ms, transform .6s ease 300ms',
            }}
          >
            <form onSubmit={handleSubmit} className={`rounded-2xl p-6 lg:p-8 ${card}`}>
              <h3 className={`font-heading font-semibold text-[15px] mb-6 ${strong}`}>
                Send a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {[
                  { id: 'contact-name',  name: 'name',  type: 'text',  label: 'Your Name',      ph: 'Saikumar' },
                  { id: 'contact-email', name: 'email', type: 'email', label: 'Email Address',  ph: 'you@email.com' },
                ].map(({ id, name, type, label, ph }) => (
                  <div key={id}>
                    <label htmlFor={id} className={`block text-[11px] font-bold mb-1.5 uppercase tracking-wide ${isDark ? 'text-beige-200/50' : 'text-dark-400'}`}>
                      {label}
                    </label>
                    <input
                      id={id}
                      name={name}
                      type={type}
                      required
                      value={formData[name]}
                      onChange={handleChange}
                      placeholder={ph}
                      className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 ${input}`}
                    />
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <label htmlFor="contact-message" className={`block text-[11px] font-bold mb-1.5 uppercase tracking-wide ${isDark ? 'text-beige-200/50' : 'text-dark-400'}`}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none ${input}`}
                />
              </div>

              <button
                id="contact-submit"
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-xl disabled:opacity-50 disabled:hover:translate-y-0 ${
                  isDark
                    ? 'bg-accent text-dark-900 hover:bg-accent-hover hover:shadow-accent/25'
                    : 'bg-dark-900 text-beige-50 hover:bg-dark-800 hover:shadow-dark-900/20'
                }`}
              >
                <Send size={15} />
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
