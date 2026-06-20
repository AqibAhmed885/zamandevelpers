import Image from "next/image";
import Link from "next/link";

type DestinationImage = {
  src: string;
  caption: string;
};

type DestinationsSectionProps = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  images: DestinationImage[];
};

function DestinationCaption({ caption }: { caption: string }) {
  return (
    <div className="mt-3 flex items-center gap-3 sm:mt-4">
      <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-cool-gray)]">
        {caption}
      </span>
      <span
        aria-hidden="true"
        className="h-px w-full max-w-[140px] bg-[var(--color-cool-gray)]/45 sm:max-w-[180px]"
      />
    </div>
  );
}

function DestinationImageBlock({
  image,
  aspectClass,
  className,
}: {
  image: DestinationImage;
  aspectClass: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className={`relative w-full overflow-hidden ${aspectClass}`}>
        <Image
          src={image.src}
          alt={image.caption}
          fill
          sizes="(min-width: 1024px) 28vw, 45vw"
          className="object-cover"
        />
      </div>
      <DestinationCaption caption={image.caption} />
    </div>
  );
}

export function DestinationsSection({
  eyebrow,
  title,
  body,
  cta,
  href,
  images,
}: DestinationsSectionProps) {
  const [tall, topRight, midRight, bottomLeft, bottomRight] = images;

  return (
    <section className="bg-[var(--color-off-white)] px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.88fr_1.42fr] lg:gap-20">
        <div className="lg:sticky lg:top-32">
          <p className="font-accent text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-metallic-gold)]">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold uppercase leading-tight tracking-[0.02em] text-[var(--color-primary-navy)] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-base leading-8 text-[var(--color-charcoal)]">
            {body}
          </p>
          <Link
            href={href}
            className="mt-8 inline-flex bg-[var(--color-primary-navy)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-white)] transition hover:bg-[var(--color-charcoal)]"
          >
            {cta}
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-5 sm:gap-y-6">
          <div className="col-start-1 row-span-2 row-start-1 flex flex-col">
            <div className="relative min-h-[340px] flex-1 overflow-hidden sm:min-h-[380px] lg:min-h-[420px]">
              <Image
                src={tall.src}
                alt={tall.caption}
                fill
                sizes="(min-width: 1024px) 28vw, 45vw"
                className="object-cover"
              />
            </div>
            <DestinationCaption caption={tall.caption} />
          </div>

          <DestinationImageBlock
            image={topRight}
            aspectClass="aspect-[5/3]"
            className="col-start-2 row-start-1"
          />

          <DestinationImageBlock
            image={midRight}
            aspectClass="aspect-[5/3]"
            className="col-start-2 row-start-2"
          />

          <DestinationImageBlock
            image={bottomLeft}
            aspectClass="aspect-[5/3]"
            className="col-start-1 row-start-3"
          />

          <DestinationImageBlock
            image={bottomRight}
            aspectClass="aspect-[5/3]"
            className="col-start-2 row-start-3"
          />
        </div>
      </div>
    </section>
  );
}
