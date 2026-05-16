import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

export default function Contact() {
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

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <section id="contact">
      <div />

      <div>
        <div>
          <span>
            // Contact
          </span>
          <h2>
            Let's Work Together
          </h2>
          <div />
          <p>
            Have a project in mind or just want to say hello? I'd love to connect.
          </p>
        </div>

        <div>
          <div>
            <div>
              <h3>
                Get in Touch
              </h3>
              <div>
                {[
                  { icon: Mail, text: personalInfo.email, href: `mailto:${personalInfo.email}`, truncate: true },
                  { icon: MapPin, text: personalInfo.location, href: null },
                ].map(({ icon: Icon, text, href, truncate }) => {
                  const inner = (
                    <>
                      <div>
                        <Icon />
                      </div>
                      <span>{text}</span>
                    </>
                  );
                  return href
                    ? <a key={text} href={href}>{inner}</a>
                    : <div key={text}>{inner}</div>;
                })}
              </div>
            </div>

            <div>
              <h3>
                Social Links
              </h3>
              <div>
                {[
                  { Icon: GithubIcon, label: 'GitHub', href: personalInfo.socials.github, sub: 'saikumar0620' },
                  { Icon: LinkedinIcon, label: 'LinkedIn', href: personalInfo.socials.linkedin, sub: 'saikumar-bammidi' },
                ].map(({ Icon, label, href, sub }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <Icon />
                      <div>
                        <div>{label}</div>
                        <div>{sub}</div>
                      </div>
                    </div>
                    <ArrowUpRight />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <h3>
                Send a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {[
                  { id: 'contact-name', name: 'name', type: 'text', label: 'Your Name', ph: 'Saikumar' },
                  { id: 'contact-email', name: 'email', type: 'email', label: 'Email Address', ph: 'you@email.com' },
                ].map(({ id, name, type, label, ph }) => (
                  <div key={id}>
                    <label htmlFor={id}>
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
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="contact-message">
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
                />
              </div>

              <button
                id="contact-submit"
                type="submit"
                disabled={isSubmitting}
              >
                <Send />
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
