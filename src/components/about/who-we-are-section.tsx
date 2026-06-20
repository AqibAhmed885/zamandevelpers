import Link from "next/link";

type WhoWeAreCard = {
  title: string;
  body: string;
  href: string;
  cta: string;
};

type WhoWeAreSectionProps = {
  cards: WhoWeAreCard[];
};

export function WhoWeAreSection({ cards }: WhoWeAreSectionProps) {
  return (
    <section className="bg-[var(--color-white)] px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-heading text-3xl font-semibold uppercase tracking-[0.04em] text-[var(--color-primary-navy)] sm:text-4xl">
          Who We Are
        </h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col bg-[var(--color-off-white)] p-8 sm:p-9"
            >
              <h3 className="text-lg font-semibold uppercase leading-snug tracking-[0.03em] text-[var(--color-primary-navy)]">
                {card.title}
              </h3>
              <p className="mt-5 flex-1 text-base leading-7 text-[var(--color-charcoal)]">
                {card.body}
              </p>
              <Link
                href={card.href}
                className="mt-8 inline-flex w-fit border border-[var(--color-cool-gray)]/45 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-navy)] transition hover:border-[var(--color-metallic-gold)] hover:text-[var(--color-metallic-gold)]"
              >
                {card.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
