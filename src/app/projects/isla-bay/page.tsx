import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CuratedResidencesSection } from "@/components/isla-bay/curated-residences-section";
import { ResidenceTypesSection } from "@/components/isla-bay/residence-types-section";
import { Footer, Header } from "@/components/site-shell";
import { islaBayHighlights } from "@/lib/site-content";

export default function IslaBayPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Our Projects"
          title="Isla Bay by Zaman Developers"
          body="Where the shoreline meets the skyline. Isla Bay is a fully curated waterfront residential landmark on Dubai Islands."
          backgroundImage="/isla/24.jpeg"
        />
        <section className="bg-[var(--color-white)] px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-360 gap-12 lg:grid-cols-[1.05fr_0.95fr]">
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
        <CuratedResidencesSection />
        <ResidenceTypesSection />
        <section className="bg-[var(--color-white)] px-5 py-20 lg:px-8 lg:py-28">
          <div className="relative mx-auto min-h-[760px] max-w-[1440px] overflow-hidden bg-[var(--color-primary-navy)] shadow-[0_24px_70px_rgba(17,43,69,0.16)]">
            <Image
              src="/isla/24.jpeg"
              alt="Isla Bay waterfront living"
              fill
              sizes="(min-width: 1536px) 1440px, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/5 to-[var(--color-primary-navy)]/40" />

            <div className="relative z-10 flex min-h-[760px] items-center justify-start p-4 sm:p-8 lg:p-14 xl:p-16">
              <div className="w-full rounded border border-white/25 bg-[var(--color-primary-navy)]/72 p-6 text-[var(--color-white)] shadow-[0_20px_55px_rgba(0,0,0,0.2)] backdrop-blur-md sm:p-9 lg:max-w-[580px] lg:p-10">
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-soft-gold)]">
                    The Investor Story
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold uppercase leading-tight tracking-[0.04em] sm:text-4xl">
                    Island Living. Reimagined by Zaman.
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/82 sm:text-base">
                    Why invest in mere square footage when you can own a waterfront
                    masterpiece? Zaman Developers proudly unveils its crown jewel:
                    Isla Bay at Dubai Islands. Experience an elite, resort-style
                    sanctuary where pristine beaches meet avant-garde architecture.
                  </p>
                </div>

                {/* <ul className="mt-7 space-y-3 border-t border-white/20 pt-7 text-sm leading-6 text-white/88 sm:text-base">
                  <li className="flex gap-3"><Diamond aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-soft-gold)]" /><span>Fully curated luxury beachfront residences</span></li>
                  <li className="flex gap-3"><Diamond aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-soft-gold)]" /><span>Located in Dubai Island—the city&apos;s highly coveted growth sector</span></li>
                  <li className="flex gap-3"><Diamond aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-soft-gold)]" /><span>Engineered for unmatched capital growth and premium rental yields</span></li>
                  <li className="flex gap-3"><Diamond aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-[var(--color-soft-gold)]" /><span>Exclusive rooftop infinity pools and private wellness ecosystems</span></li>
                </ul> */}

                <p className="mt-6 text-center text-sm leading-6 text-white/72">
                  Register for the Private Pre-Launch Allocation Event and request
                  the exclusive investor brochure for Isla Bay.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 flex w-full items-center justify-center  bg-[var(--color-white)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-navy)] transition hover:bg-[var(--color-soft-gold)]"
                >
                  Download VIP Brochure
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
