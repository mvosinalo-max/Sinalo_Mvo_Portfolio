import { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const socials = [
    { label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: Mail },
    ...(personalInfo.github ? [{ label: 'GitHub', value: personalInfo.github.replace('https://', ''), href: personalInfo.github, icon: Github }] : []),
    { label: 'LinkedIn', value: personalInfo.linkedin.replace('https://', ''), href: personalInfo.linkedin, icon: Linkedin },
  ];

  return (
    <section id="contact" className="relative bg-neutral-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          subtitle="Interested in working together or learning more about my experience? I would be happy to connect."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <div className="reveal space-y-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 rounded-2xl border border-neutral-700/50 bg-neutral-800/40 p-6 transition-all duration-300 hover:border-primary-500/30 hover:bg-neutral-800/80"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/5 text-primary-400 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm text-neutral-500">{social.label}</p>
                    <p className="font-semibold text-white transition-colors group-hover:text-primary-400">
                      {social.value}
                    </p>
                  </div>
                </a>
              );
            })}

            <div className="grid grid-cols-2 gap-4">
              {personalInfo.location && (
                <div className="rounded-2xl border border-neutral-700/50 bg-neutral-800/40 p-5">
                  <MapPin className="h-5 w-5 text-neutral-400" />
                  <p className="mt-3 text-sm text-neutral-500">Location</p>
                  <p className="text-sm font-semibold text-white">{personalInfo.location}</p>
                </div>
              )}
              {personalInfo.phone && (
                <div className="rounded-2xl border border-neutral-700/50 bg-neutral-800/40 p-5">
                  <Phone className="h-5 w-5 text-neutral-400" />
                  <p className="mt-3 text-sm text-neutral-500">Phone</p>
                  <p className="text-sm font-semibold text-white">{personalInfo.phone}</p>
                </div>
              )}
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-neutral-700/50 bg-gradient-to-br from-neutral-900 to-neutral-900/30 p-8 card-glow"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-300">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-800/60 px-4 py-3 text-white placeholder-neutral-500 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-300">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-800/60 px-4 py-3 text-white placeholder-neutral-500 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-neutral-700 bg-neutral-800/60 px-4 py-3 text-white placeholder-neutral-500 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    placeholder="Tell me how we can connect..."
                  />
                </div>
                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:shadow-xl hover:shadow-primary-500/40"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                  <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
