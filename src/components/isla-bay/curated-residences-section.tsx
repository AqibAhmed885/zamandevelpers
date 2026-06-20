import Image from "next/image";

const residenceImages = [
  "/isla/1.jpeg",
  "/isla/2.jpeg",
  "/isla/3.jpeg",
  "/isla/10.jpeg",
  "/isla/11.jpeg",
  "/isla/21.jpeg",
];

export function CuratedResidencesSection() {
  return (
    <section className="bg-[var(--color-off-white)] px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-360">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--color-metallic-gold)]">
            Curated Residences
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight uppercase text-[var(--color-primary-navy)] sm:text-4xl">
            Organic finishes, quiet luxury, and fully furnished living.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:flex lg:h-[560px] lg:gap-3">
          {residenceImages.map((src, index) => (
            <div
              key={src}
              className="group relative min-h-80 overflow-hidden rounded-lg bg-[var(--color-primary-navy)] lg:min-h-0 lg:basis-0 lg:flex-1 lg:transition-[flex-grow] lg:duration-700 lg:ease-[cubic-bezier(0.22,1,0.36,1)] lg:hover:flex-5"
            >
              <Image
                src={src}
                alt={`Isla Bay residence and amenity render ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-navy)]/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-35" />
              <span className="absolute bottom-5 left-5 text-xs font-semibold tracking-[0.2em] text-white/90">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
