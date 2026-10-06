import { useEffect, useRef, useState } from 'react';
import {
  MessageCircle,
  Users,
  Lightbulb,
  Handshake,
  Shuffle,
  Clock,
  BookOpen,
  CheckCircle2,
  Code2,
  type LucideIcon,
} from 'lucide-react';
import { technicalSkills, softSkills } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  Users,
  Lightbulb,
  Handshake,
  Shuffle,
  Clock,
  BookOpen,
  CheckCircle2,
};

export function Skills() {
  const [visibleBars, setVisibleBars] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisibleBars(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative bg-neutral-900 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-primary-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="What I bring to the table"
          subtitle="Practical communication, digital, coordination, and people skills shaped by study and hands-on experience."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Technical Skills */}
          <div className="reveal">
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/15 text-primary-400">
                <Code2 className="h-5 w-5" />
              </span>
              <h3 className="font-display text-2xl font-bold text-white">Digital & Practical Skills</h3>
            </div>

            <div className="space-y-5">
              {technicalSkills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-300">{skill.name}</span>
                    <span className="text-sm font-semibold text-primary-400">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-neutral-700/60">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-400 transition-all duration-1000 ease-out"
                      style={{
                        width: visibleBars ? `${skill.level}%` : '0%',
                        transitionDelay: `${i * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/15 text-accent-400">
                <Handshake className="h-5 w-5" />
              </span>
              <h3 className="font-display text-2xl font-bold text-white">Soft Skills</h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {softSkills.map((skill) => {
                const Icon = iconMap[skill.icon] ?? Lightbulb;
                return (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-4 rounded-2xl border border-neutral-700/50 bg-neutral-800/40 p-5 transition-all duration-300 hover:border-accent-500/30 hover:bg-neutral-800/80"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-600/10 text-accent-400 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{skill.name}</p>
                      <p className="text-sm text-neutral-500">Professional</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
