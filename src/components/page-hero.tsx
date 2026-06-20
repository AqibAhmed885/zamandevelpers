import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  backgroundImage: string;
};

export function PageHero({ eyebrow, title, body, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-32 text-[var(--color-white)] lg:px-8 lg:pb-20 lg:pt-40">
      <Image
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[var(--color-primary-navy)]/40" />
      <div className="absolute inset-0 " />
      <div className="relative mx-auto max-w-5xl">
        <p className="font-accent text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-soft-gold)]">
          {eyebrow}
        </p>
        <h1 className="font-heading uppercase mt-5 max-w-4xl text-4xl font-medium leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-white)]/84">{body}</p>
      </div>
    </section>
  );
}
