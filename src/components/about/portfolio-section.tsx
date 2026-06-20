import Image from "next/image";
import Link from "next/link";

type PortfolioItem = {
  title: string;
  image: string;
  href: string;
};

type PortfolioSectionProps = {
  items: PortfolioItem[];
};

export function PortfolioSection({ items }: PortfolioSectionProps) {
  return (
    <section className="bg-[var(--color-off-white)] px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="font-accent text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-metallic-gold)]">
          About Us
        </p>
        <h2 className="mt-4 font-heading text-3xl font-semibold uppercase tracking-[0.02em] text-[var(--color-primary-navy)] sm:text-4xl">
          Our Portfolio
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block overflow-hidden bg-[var(--color-white)] shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(17,43,69,0.12)]"
            >
              <div className="relative min-h-[220px] overflow-hidden sm:min-h-[240px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <p className="px-5 py-5 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-navy)]">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
