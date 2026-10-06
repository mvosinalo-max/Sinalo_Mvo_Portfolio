import { CheckCircle2 } from 'lucide-react';
import { aboutContent, personalInfo } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

export function About() {
  return (
    <section id="about" className="relative bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="About Me" title="Get to know me" />

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Bio text */}
          <div className="reveal lg:col-span-3">
            <div className="space-y-6">
              {aboutContent.paragraphs.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-neutral-400">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Problem Solver', 'Open-Source Contributor', 'Mentor', 'Coffee Enthusiast'].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-800/50 px-3 py-1.5 text-sm text-neutral-300"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary-400" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats card */}
          <div className="reveal lg:col-span-2" style={{ transitionDelay: '0.15s' }}>
            <div className="rounded-3xl border border-neutral-700/50 bg-gradient-to-br from-neutral-900 to-neutral-900/50 p-8 card-glow transition-all duration-300">
              <h3 className="font-display text-lg font-bold text-white">Quick Facts</h3>
              <div className="mt-6 space-y-4">
                {aboutContent.highlights.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between border-b border-neutral-700/40 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-neutral-400">{stat.label}</span>
                    <span className="font-display text-2xl font-bold text-gradient-blue">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-primary-500/10 p-4">
                <p className="text-sm text-neutral-400">
                  <span className="font-semibold text-primary-400">Currently:</span> {personalInfo.location} · Open to remote work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
