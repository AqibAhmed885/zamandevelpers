"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftContentRef = useRef<HTMLDivElement | null>(null);
  const firstImageRef = useRef<HTMLDivElement | null>(null);
  const secondImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const section = sectionRef.current;
    const leftContent = leftContentRef.current;
    const firstImage = firstImageRef.current;
    const secondImage = secondImageRef.current;

    if (!section || !leftContent || !firstImage || !secondImage) {
      return;
    }

    const ctx = gsap.context(() => {
      const scrollTriggerConfig = {
        trigger: section,
        start: "top 85%",
        end: "center 45%",
        scrub: 1.2,
        invalidateOnRefresh: true,
      };

      gsap.fromTo(
        leftContent,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: { ...scrollTriggerConfig },
        },
      );

      gsap.fromTo(
        firstImage,
        { y: 120, opacity: 0.85 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: { ...scrollTriggerConfig },
        },
      );

      gsap.fromTo(
        secondImage,
        { y: -120, opacity: 0.85 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: { ...scrollTriggerConfig },
        },
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-white)] px-5 py-24 lg:px-8 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[38%] opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(75deg, transparent 0, transparent 18px, var(--color-primary-navy) 19px, var(--color-primary-navy) 22px)",
        }}
      />
      <div className="relative mx-auto grid max-w-320 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div
          ref={leftContentRef}
          className="max-w-3xl will-change-transform [will-change:opacity]"
        >
          <div className="border-l-[3px] border-[var(--color-metallic-gold)] pl-5">
            <h2 className="mt-4 text-3xl font-semibold uppercase leading-tight tracking-[0.04em] text-[var(--color-primary-navy)] sm:text-4xl lg:text-3xl">
              A Legacy of Perfection, Built for the Future.
            </h2>
          </div>
          <div className="mt-8 space-y-5 pl-6 text-base leading-8 text-[var(--color-charcoal)] sm:text-base">
            <p>
              Real estate is more than the arrangement of stone and steel; it
              is the curation of human experiences. Zaman Developers was born
              out of a relentless ambition to transcend conventional design
              norms in the world&apos;s most dynamic metropolis.
            </p>
            <Link
              href="/about"
              className="inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-metallic-gold)] transition duration-300 ease-out hover:text-[var(--color-primary-navy)]"
            >
              Read Our Story
            </Link>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div
            ref={firstImageRef}
            className="relative min-h-100 overflow-hidden will-change-transform [will-change:opacity] lg:min-h-140"
          >
            <Image
              src="/isla/22.jpeg"
              alt="Isla Bay architectural facade"
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div
            ref={secondImageRef}
            className="relative min-h-100 overflow-hidden will-change-transform [will-change:opacity] lg:min-h-140"
          >
            <Image
              src="/isla/5.jpeg"
              alt="Isla Bay curated interior detail"
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
