"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentCardRef = useRef<HTMLDivElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(contentCardRef.current, {
        z: 90,
        force3D: true,
        transformStyle: "preserve-3d",
      });

      gsap.set(imageWrapperRef.current, {
        x: -420,
        z: -220,
        rotateY: -18,
        transformOrigin: "left center",
        transformPerspective: 1400,
        force3D: true,
        transformStyle: "preserve-3d",
      });

      gsap.to(imageWrapperRef.current, {
        x: 0,
        z: 0,
        rotateY: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 68%",
          end: "center 42%",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[var(--color-off-white)] px-5 py-20 lg:px-8 lg:py-28"
      style={{
        perspective: "1400px",
      }}
    >
      <div
        className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-stretch lg:gap-0"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          ref={contentCardRef}
          className="relative z-30 min-h-[580px] bg-[var(--color-white)] p-8 shadow-[0_20px_60px_rgba(17,43,69,0.1)] will-change-transform sm:p-10 lg:-mr-16 lg:p-12 xl:-mr-24"
        >
          <h2 className="font-sans text-2xl font-semibold uppercase leading-snug tracking-[0.02em] text-[var(--color-primary-navy)] sm:text-3xl lg:text-3xl">
            &ldquo;{quote}&rdquo;
          </h2>

          <div className="mt-8 border-t border-[var(--color-cool-gray)]/25 pt-6">
            <p className="text-sm font-[550] uppercase tracking-[0.14em] text-[var(--color-primary-navy)]">
              {title}
            </p>
            <p className="mt-2 text-sm text-[var(--color-cool-gray)]">
              {name}
            </p>
          </div>

          <Link
            href={href}
            className="mt-8 inline-flex bg-[var(--color-primary-navy)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-white)] transition hover:bg-[var(--color-charcoal)]"
          >
            {cta}
          </Link>
        </div>

        <div
          ref={imageWrapperRef}
          className="relative z-10 min-h-[420px] overflow-hidden will-change-transform lg:h-full lg:min-h-0"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
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