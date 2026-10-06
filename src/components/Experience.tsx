import { Briefcase, MapPin, ChevronRight } from 'lucide-react';
import { workExperience } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="relative bg-neutral-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="My professional journey"
          subtitle="Five years of building and shipping software at companies of varying sizes."
        />

        <div className="mt-16 max-w-4xl">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary-500 via-neutral-700 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

            <div className="space-y-12">
              {workExperience.map((job, i) => (
                <div
                  key={job.role + job.company}
                  className={`reveal relative flex flex-col sm:flex-row sm:items-center ${
                    i % 2 === 0 ? 'sm:flex-row-reverse' : ''
                  }`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-2 -translate-x-1/2 sm:left-1/2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary-400 bg-neutral-900">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`pl-8 sm:w-1/2 sm:pl-0 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <div className="rounded-2xl border border-neutral-700/50 bg-neutral-800/40 p-6 transition-all duration-300 hover:border-primary-500/30 hover:bg-neutral-800/80">
                      <span className="text-sm font-semibold text-primary-400">{job.period}</span>
                      <h3 className="mt-2 font-display text-xl font-bold text-white">{job.role}</h3>
                      <p className="mt-1 flex items-center gap-2 text-sm font-medium text-neutral-300">
                        <Briefcase className="h-4 w-4" />
                        {job.company}
                      </p>
                      <p className="mt-1 flex items-center gap-2 text-xs text-neutral-500">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-neutral-400">{job.description}</p>
                      <ul className={`mt-4 space-y-2 ${i % 2 === 0 ? 'sm:text-left' : ''}`}>
                        {job.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start gap-2 text-sm text-neutral-400"
                          >
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
