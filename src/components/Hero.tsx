import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-neutral-950 bg-grid-pattern"
    >
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-600/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent-600/15 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-400/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left content */}
          <div className="lg:col-span-7">
            {personalInfo.available && (
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for new opportunities
              </div>
            )}

            <h1 className="font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-white animate-fade-in-up sm:text-6xl lg:text-7xl" style={{ animationDelay: '0.1s' }}>
              Hi, I'm{' '}
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            <p className="mt-4 text-xl font-semibold text-neutral-300 animate-fade-in-up sm:text-2xl" style={{ animationDelay: '0.2s' }}>
              {personalInfo.title}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {personalInfo.tagline}
            </p>

            {personalInfo.location && (
              <div className="mt-6 flex items-center gap-4 text-sm text-neutral-500 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {personalInfo.location}
                </span>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:shadow-xl hover:shadow-primary-500/40"
              >
                <Sparkles className="h-4 w-4" />
                View My Work
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </button>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-800/50 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-neutral-600 hover:bg-neutral-800"
              >
                <Mail className="h-4 w-4" />
                Get In Touch
              </button>

              <div className="flex items-center gap-2">
                {personalInfo.github && (
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800/50 text-neutral-400 transition-all hover:border-primary-500/50 hover:text-primary-400"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800/50 text-neutral-400 transition-all hover:border-primary-500/50 hover:text-primary-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
              {/* Code card */}
              <div className="relative rounded-3xl border border-neutral-700/50 bg-neutral-900/80 p-6 card-glow transition-all duration-300">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs font-medium text-neutral-500">developer.ts</span>
                </div>
                <pre className="font-mono text-sm leading-relaxed">
                  <code className="text-neutral-300">
                    <span className="text-accent-400">const</span>{' '}
                    <span className="text-primary-400">communicator</span>{' '}
                    <span className="text-neutral-500">=</span> {'{'}
                    {'\n'}
                    {'  '}name<span className="text-neutral-500">:</span>{' '}
                    <span className="text-emerald-400">'{personalInfo.name}'</span>,{'\n'}
                    {'  '}focus<span className="text-neutral-500">:</span>{' '}
                    <span className="text-emerald-400">'Communication'</span>,{'\n'}
                    {'  '}strengths<span className="text-neutral-500">:</span> [
                    {'\n'}
                    {'    '}<span className="text-emerald-400">'Coordination'</span>,{' '}
                    <span className="text-emerald-400">'Digital'</span>,
                    {'\n'}
                    {'    '}<span className="text-emerald-400">'Teamwork'</span>,{' '}
                    <span className="text-emerald-400">'Support'</span>,
                    {'\n'}
                    {'  '}],{'\n'}
                    {'  '}peopleFocused<span className="text-neutral-500">:</span>{' '}
                    <span className="text-primary-400">true</span>,{'\n'}
                    {'}'};
                  </code>
                </pre>
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 -top-4 animate-float rounded-2xl border border-primary-500/30 bg-neutral-900 px-4 py-3 shadow-xl">
                <p className="text-xs text-neutral-500">Experience</p>
                <p className="text-lg font-bold text-white">2 Roles</p>
              </div>
              <div className="absolute -bottom-4 -left-4 animate-float rounded-2xl border border-accent-500/30 bg-neutral-900 px-4 py-3 shadow-xl" style={{ animationDelay: '3s' }}>
                <p className="text-xs text-neutral-500">Focus</p>
                <p className="text-lg font-bold text-white">Digital Comms</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500 transition-colors hover:text-white"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  );
}
