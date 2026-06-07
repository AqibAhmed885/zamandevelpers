import Image from "next/image";
import Link from "next/link";
import { islaBayHighlights } from "@/lib/site-content";

const featuredSlides = [
  "/isla/20.jpeg",
  "/isla/22.jpeg",
  "/isla/24.jpeg",
  "/isla/19.jpeg",
];

export function FeaturedPropertySection() {
  return (
    <section className="featured-property-slideshow relative min-h-screen overflow-hidden bg-[#101816] px-5 py-24 text-white lg:px-8">
      <div className="absolute inset-0">
        {featuredSlides.map((image, index) => (
          <div
            key={image}
            className="featured-property-slide absolute inset-0"
            style={{ animationDelay: `${index * 6}s` }}
          >
            <Image
              src={image}
              alt="Isla Bay waterfront residence"
              fill
              sizes="100vw"
              className="featured-property-slide-image object-cover"
            />
          </div>
        ))}
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/28 to-black/5" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/72 to-transparent" /> */}

      <div className="relative z-10 flex min-h-[calc(100vh-12rem)] items-end justify-start">
        <div className="w-full max-w-[620px] bg-black/52 p-7 backdrop-blur-[1px] sm:p-9 lg:ml-20 lg:p-10">
          {/* <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/82">
            Featured Property
          </p> */}
          <h2 className="text-3xl font-semibold uppercase leading-tight tracking-[0.08em] text-white sm:text-4xl lg:text-[38px]">
            Isla Bay by Zaman Developers
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/86 sm:text-base">
            Rising above the pristine waterfront of Dubai Island, Isla Bay is a
            rare dialogue between avant-garde form and human feeling,
            introducing an exclusive resort ecosystem at your doorstep.
          </p>

          <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
            {islaBayHighlights.map((item) => (
              <article key={item.title} className="border-l border-white/38 pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/72">
                  {item.title}
                </p>
                <p className="mt-2 text-xs leading-6 text-white/82">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/projects/isla-bay"
            className="mt-4 inline-flex bg-[#9f264a] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#7f1f3c]"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
