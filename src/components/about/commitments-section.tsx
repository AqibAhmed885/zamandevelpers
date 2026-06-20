type CommitmentItem = {
  title: string;
  body: string;
};

type CommitmentsSectionProps = {
  items: CommitmentItem[];
};

export function CommitmentsSection({ items }: CommitmentsSectionProps) {
  return (
    <section className="bg-[var(--color-white)] px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-heading text-3xl font-semibold uppercase tracking-[0.04em] text-[var(--color-primary-navy)] sm:text-4xl">
          Our Commitments
        </h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="border-t-4 border-[var(--color-metallic-gold)] bg-[var(--color-off-white)] p-8"
            >
              <h3 className="text-lg font-semibold uppercase tracking-[0.03em] text-[var(--color-primary-navy)]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--color-charcoal)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
