import Image from "next/image";
import Link from "next/link";

type LeadershipQuoteSectionProps = {
  quote: string;
  name: string;
  title: string;
  image: string;
  href: string;
  cta: string;
};

export function LeadershipQuoteSection({
  quote,
  name,
  title,
  image,
  href,
  cta,
}: LeadershipQuoteSectionProps) {
  return (
    <section className="bg-[var(--color-off-white)] px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-0">
        <div className="relative z-10 bg-[var(--color-white)] p-8 shadow-[0_20px_60px_rgba(17,43,69,0.1)] sm:p-10 lg:-mr-16 lg:p-12 xl:-mr-24">
          <h2 className="font-heading text-2xl font-semibold uppercase leading-snug tracking-[0.02em] text-[var(--color-primary-navy)] sm:text-3xl lg:text-[2rem]">
            &ldquo;{quote}&rdquo;
          </h2>
          <div className="mt-8 border-t border-[var(--color-cool-gray)]/25 pt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-navy)]">
              {title}
            </p>
            <p className="mt-2 text-sm text-[var(--color-cool-gray)]">{name}</p>
          </div>
          <Link
            href={href}
            className="mt-8 inline-flex bg-[var(--color-primary-navy)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-white)] transition hover:bg-[var(--color-charcoal)]"
          >
            {cta}
          </Link>
        </div>
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-[520px]">
          <Image
            src={image}
            alt="Zaman Developers architectural landmark"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
