import Image from "next/image";
import Link from "next/link";
import { Diamond } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Footer, Header } from "@/components/site-shell";
import { islaBayHighlights } from "@/lib/site-content";

const islaGalleryImages = [
  "/isla/1.jpeg",
  "/isla/2.jpeg",
  "/isla/3.jpeg",
  "/isla/10.jpeg",
  "/isla/11.jpeg",
  "/isla/21.jpeg",
];

export default function IslaBayPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Our Projects"
          title="Isla Bay by Zaman Developers"
          body="Where the shoreline meets the skyline. Isla Bay is a fully curated waterfront residential landmark on Dubai Islands."
          backgroundImage="/isla/3.jpeg"
        />
        <section className="bg-[var(--color-white)] px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[460px] overflow-hidden rounded-lg">
              <Image
                src="/isla/20.jpeg"
                alt="Isla Bay waterfront architecture"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="self-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-metallic-gold)]">
                Where the Shoreline Meets the Skyline
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-primary-navy)]">
                A permanent holiday destination engineered for absolute
                tranquility.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--color-charcoal)]">
                Rising gracefully above the pristine waterfront of Dubai Island,
                Isla Bay stands as a rare dialogue between avant-garde form and
                human feeling. Designed for global citizens who refuse to
                compromise, this iconic residential landmark introduces an
                exclusive resort ecosystem right to your doorstep.
              </p>
              <p className="mt-6 text-lg leading-8 text-[var(--color-charcoal)]">
                Every residence within Isla Bay is meticulously delivered fully
                curated, effortlessly blending smart home automation with organic
                material finishes and floor-to-ceiling glass facades that frame
                uninterrupted views of the Arabian Gulf. It is not just a
                residence; it is a permanent holiday destination engineered for
                absolute tranquility.
              </p>
              <div className="mt-8 grid gap-4">
                {islaBayHighlights.map((item) => (
                  <div key={item.title} className="border-l-2 border-[var(--color-soft-gold)] pl-5">
                    <h3 className="font-semibold text-[var(--color-primary-navy)]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-charcoal)]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-[var(--color-metallic-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-primary-navy)] transition hover:bg-[var(--color-soft-gold)]"
              >
                Schedule a Private Briefing
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-[var(--color-off-white)] px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--color-metallic-gold)]">
                Curated Residences
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-[var(--color-primary-navy)]">
                Organic finishes, quiet luxury, and fully furnished living.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {islaGalleryImages.map((src, index) => (
                <div
                  key={src}
                  className="relative min-h-72 overflow-hidden rounded-lg bg-[var(--color-off-white)]"
                >
                  <Image
                    src={src}
                    alt={`Isla Bay residence and amenity render ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden bg-[var(--color-primary-navy)] px-5 py-20 text-[var(--color-white)] lg:px-8 lg:py-28">
          <Image
            src="/isla/24.jpeg"
            alt="Isla Bay waterfront living"
            fill
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-navy)] via-[var(--color-primary-navy)]/90 to-[var(--color-secondary-navy)]/40" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-soft-gold)]">The Investor Story</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-tight sm:text-5xl">
                Island Living. Reimagined by Zaman.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
                Why invest in mere square footage when you can own a waterfront
                masterpiece? Zaman Developers proudly unveils its crown jewel:
                Isla Bay at Dubai Islands. Experience an elite, resort-style
                sanctuary where pristine beaches meet avant-garde architecture.
              </p>
            </div>
            <div className="border border-white/15 bg-black/35 p-6 backdrop-blur-sm sm:p-8">
              <ul className="space-y-4 text-sm leading-6 text-white/88 sm:text-base">
                <li className="flex gap-3"><Diamond aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-soft-gold)]" /><span>Fully curated luxury beachfront residences</span></li>
                <li className="flex gap-3"><Diamond aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-soft-gold)]" /><span>Located in Dubai Island—the city&apos;s highly coveted growth sector</span></li>
                <li className="flex gap-3"><Diamond aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-soft-gold)]" /><span>Engineered for unmatched capital growth and premium rental yields</span></li>
                <li className="flex gap-3"><Diamond aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-soft-gold)]" /><span>Exclusive rooftop infinity pools and private wellness ecosystems</span></li>
              </ul>
              <p className="mt-7 text-sm leading-6 text-white/72">
                Register for the Private Pre-Launch Allocation Event and request
                the exclusive investor brochure for Isla Bay.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex bg-[var(--color-metallic-gold)] px-7 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-primary-navy)] transition hover:bg-[var(--color-soft-gold)]"
              >
                Download VIP Brochure
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
