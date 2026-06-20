"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const residenceTypes = [
  {
    title: "1 Bedroom Apartment",
    description:
      "A refined private retreat designed for effortless modern living and investment-ready comfort.",
    features: [
      "Ideal for singles and couples",
      "Open-plan living",
      "Premium finishes",
      "Private balcony options",
    ],
    availability: "Selected layouts available",
  },
  {
    title: "2 Bedroom Apartment",
    description:
      "A balanced residence for families and professionals seeking space, comfort, and elevated daily living.",
    features: [
      "Spacious living area",
      "Ensuite bedroom options",
      "Family-friendly planning",
      "Waterfront-inspired lifestyle",
    ],
    availability: "High-demand category",
  },
  {
    title: "3 Bedroom Apartment",
    description:
      "A larger residence crafted for families who value privacy, generous proportions, and refined finishes.",
    features: [
      "Multiple bedroom layouts",
      "Expansive lounge area",
      "Premium kitchen planning",
      "Designed for family living",
    ],
    availability: "Limited availability",
  },
  {
    title: "Duplex Residence",
    description:
      "A statement home with layered living spaces, greater privacy, and a distinctive architectural presence.",
    features: [
      "Two-level living",
      "Enhanced privacy",
      "Large entertaining zones",
      "Signature layout options",
    ],
    availability: "Exclusive selection",
  },
  {
    title: "Penthouse Collection",
    description:
      "An elevated address for those seeking panoramic views, exceptional space, and a landmark lifestyle.",
    features: [
      "Premium top-level living",
      "Expansive terraces",
      "Statement interiors",
      "Prestige ownership",
    ],
    availability: "Private release",
  },
] as const;

export function ResidenceTypesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        introRef.current,
        { y: 56 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 48%",
            scrub: 1.1,
          },
        },
      );

      gsap.fromTo(
        ".residence-type-card",
        { y: 72 },
        {
          y: 0,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            end: "center 45%",
            scrub: 1.1,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[var(--color-off-white)] px-5 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-360">
        <div ref={introRef} className="max-w-4xl will-change-transform">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--color-metallic-gold)]">
            Residence Collection
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold uppercase leading-tight text-[var(--color-primary-navy)] sm:text-4xl lg:text-5xl">
            Choose the layout that defines your era of living.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-charcoal)] sm:text-lg">
            From refined one-bedroom apartments to expansive penthouse
            residences, Isla Bay offers thoughtfully planned homes designed for
            modern comfort, privacy, and long-term value.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-6 lg:mt-16">
          {residenceTypes.map((residence, index) => (
            <div
              key={residence.title}
              className={`residence-type-card will-change-transform md:col-span-3 ${
                index > 2 ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <article className="group relative flex h-full min-h-[510px] flex-col overflow-hidden border border-[var(--color-metallic-gold)]/35 bg-[var(--color-white)] p-7 transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-[var(--color-metallic-gold)] hover:shadow-[0_22px_55px_rgba(17,43,69,0.1)] sm:p-8">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-[var(--color-metallic-gold)]" />

                <div className="flex items-start justify-between gap-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-metallic-gold)]">
                    Residence
                  </p>
                  <span className="font-heading text-3xl text-[var(--color-primary-navy)]/22 transition-colors duration-500 group-hover:text-[var(--color-metallic-gold)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold uppercase leading-tight text-[var(--color-primary-navy)] sm:text-[1.7rem]">
                  {residence.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-cool-gray)]">
                  {residence.description}
                </p>

                <ul className="mt-7 space-y-3 border-t border-[var(--color-primary-navy)]/10 pt-6">
                  {residence.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-[var(--color-charcoal)]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-metallic-gold)]"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <p className="border-t border-[var(--color-primary-navy)]/10 pt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-metallic-gold)]">
                    {residence.availability}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex w-full items-center justify-between bg-[var(--color-primary-navy)] px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-white)] transition-colors duration-300 hover:bg-[var(--color-metallic-gold)] hover:text-[var(--color-primary-navy)]"
                  >
                    Register Interest
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
