import { ExternalLink, Github, Star } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Work Samples"
          title="How I create impact"
          subtitle="A selection of communication, coordination, digital engagement, and learner-support work drawn from my experience."
        />

        {/* Featured projects */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {featured.map((project, i) => (
            <article
              key={project.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-neutral-700/50 bg-gradient-to-br from-neutral-900 to-neutral-900/30 p-8 card-glow transition-all duration-300"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Gradient accent bar */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-2">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Featured</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-neutral-400">{project.longDescription}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-neutral-700 bg-neutral-800/60 px-2.5 py-1 text-xs font-medium text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400 transition-colors hover:text-primary-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Work
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-400 transition-colors hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Other projects */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {others.map((project, i) => (
            <article
              key={project.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-neutral-700/50 bg-neutral-900/40 p-6 transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-900/80"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.gradient}`} />
              <h3 className="mt-2 font-display text-lg font-bold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-neutral-700 bg-neutral-800/60 px-2.5 py-1 text-xs font-medium text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-400 transition-colors hover:text-primary-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Work
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-400 transition-colors hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
