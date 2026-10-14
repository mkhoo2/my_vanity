type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-zinc-600">{description}</p> : null}
    </div>
  );
}
