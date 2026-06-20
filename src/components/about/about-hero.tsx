import Image from "next/image";

type AboutHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  backgroundImage: string;
};

export function AboutHero({
  eyebrow,
  title,
  body,
  backgroundImage,
}: AboutHeroProps) {
  return (
    <section className="relative bg-[var(--color-white)]">
      <div className="relative h-[52vh] min-h-[360px] w-full sm:min-h-[420px] lg:h-[80vh] lg:min-h-[460px]">
        <Image
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 -mt-20 sm:-mt-24 lg:-mt-32">
        <div className="w-full bg-[var(--color-white)] px-5 py-5 sm:w-[68%] sm:max-w-[880px] sm:px-10 sm:py-12 lg:px-14 lg:py-14 xl:px-16 xl:py-10">
          <div className="flex items-center gap-4">
            <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-cool-gray)]">
              {eyebrow}
            </span>
            <span
              aria-hidden="true"
              className="h-px w-full max-w-[120px] bg-[var(--color-cool-gray)]/45 sm:max-w-[160px]"
            />
          </div>

          <h1 className="font-heading mt-6 max-w-3xl text-[1.75rem] font-[550] uppercase leading-[1.15] tracking-[0.01em] text-[var(--color-primary-navy)] md:text-4xl">
            {title}
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-8 text-[var(--color-cool-gray)] sm:text-lg sm:leading-8">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
