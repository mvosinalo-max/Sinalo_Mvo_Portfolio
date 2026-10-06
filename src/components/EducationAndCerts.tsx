import { GraduationCap, Award, BadgeCheck } from 'lucide-react';
import { education, certifications } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

export function EducationAndCerts() {
  return (
    <>
      {/* Education */}
      <section id="education" className="relative bg-neutral-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Education" title="My academic background" />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {education.map((item, i) => (
              <div
                key={item.degree}
                className="reveal group relative overflow-hidden rounded-3xl border border-neutral-700/50 bg-gradient-to-br from-neutral-900 to-neutral-900/30 p-8 card-glow transition-all duration-300"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-150" />

                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-600/5 text-primary-400 transition-transform duration-300 group-hover:scale-110">
                    <GraduationCap className="h-7 w-7" />
                  </span>
                  <div className="flex-1">
                    <span className="inline-block rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-400">
                      {item.period}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold text-white">{item.degree}</h3>
                    <p className="mt-1 text-base font-medium text-neutral-300">{item.institution}</p>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-400">{item.description}</p>
                    {item.gpa && (
                      <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-neutral-800/60 px-3 py-1.5">
                        <span className="text-sm text-neutral-500">GPA</span>
                        <span className="text-sm font-bold text-white">{item.gpa}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="relative bg-neutral-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Certifications"
            title="Learning in progress"
            subtitle="My current focus is completing my communication sciences degree and growing through practical experience."
          />

          {certifications.length === 0 ? (
            <div className="reveal mx-auto mt-16 max-w-2xl rounded-3xl border border-neutral-700/50 bg-neutral-800/40 p-8 text-center">
              <Award className="mx-auto h-10 w-10 text-accent-400" />
              <p className="mt-4 text-lg font-semibold text-white">No additional certifications listed yet</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">This section will be updated as new professional certifications are completed.</p>
            </div>
          ) : (
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className="reveal group relative overflow-hidden rounded-2xl border border-neutral-700/50 bg-neutral-800/40 p-6 transition-all duration-300 hover:border-primary-500/30 hover:bg-neutral-800/80"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-600/5 text-accent-400 transition-transform duration-300 group-hover:scale-110">
                    <Award className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-neutral-500">{cert.date}</span>
                      <BadgeCheck className="h-4 w-4 text-emerald-400" />
                    </div>
                    <h3 className="mt-2 text-base font-bold leading-snug text-white">{cert.name}</h3>
                    <p className="mt-1 text-sm text-neutral-400">{cert.issuer}</p>
                    <p className="mt-3 font-mono text-xs text-neutral-600">
                      ID: {cert.credentialId}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
