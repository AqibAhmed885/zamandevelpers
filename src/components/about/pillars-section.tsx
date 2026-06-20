import Image from "next/image";
import Link from "next/link";

type PillarCard = {
  title: string;
  body: string;
  image: string;
  href: string;
  cta: string;
};

type PillarsSectionProps = {
  cards: PillarCard[];
};

export function PillarsSection({ cards }: PillarsSectionProps) {
  return (
    <section className="bg-[var(--color-white)] px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3 lg:gap-8">
        {cards.map((card) => (
          <article key={card.title} className="group">
            <div className="relative min-h-[240px] overflow-hidden sm:min-h-[280px]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold uppercase tracking-[0.03em] text-[var(--color-primary-navy)]">
              {card.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--color-charcoal)]">
              {card.body}
            </p>
            <Link
              href={card.href}
              className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-metallic-gold)] transition hover:text-[var(--color-primary-navy)]"
            >
              {card.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
