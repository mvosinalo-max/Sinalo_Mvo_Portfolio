type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="reveal text-center">
      <span className="inline-block rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-400">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-400">{subtitle}</p>
      )}
      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
    </div>
  );
}
