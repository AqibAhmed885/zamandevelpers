type OverviewSectionProps = {
  body: string;
  footnote: string;
};

export function OverviewSection({ body, footnote }: OverviewSectionProps) {
  return (
    <section className="bg-[var(--color-white)] px-5 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-lg leading-8 text-[var(--color-charcoal)] sm:text-xl sm:leading-9">
          {body}
        </p>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-metallic-gold)]">
          {footnote}
        </p>
      </div>
    </section>
  );
}
