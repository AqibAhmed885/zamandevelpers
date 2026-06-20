"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { islaBayHighlights } from "@/lib/site-content";

const featuredSlides = [
  "/isla/20.jpeg",
  "/isla/22.jpeg",
  "/isla/24.jpeg",
  "/isla/19.jpeg",
];

export function FeaturedPropertySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const contentCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(backgroundRef.current, {
        scale: 1.08,
        transformOrigin: "center center",
      });

      gsap.set(contentCardRef.current, {
        x: -90,
        y: 45,
        opacity: 0,
      });

      gsap.set(".featured-property-copy-item", {
        y: 24,
        opacity: 0,
      });

      gsap.set(".featured-property-highlight", {
        y: 32,
        opacity: 0,
      });

      gsap.to(backgroundRef.current, {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "center 45%",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      introTimeline
        .to(
          contentCardRef.current,
          {
            x: 0,
            y: 0,
            opacity: 1,
            ease: "none",
          },
          0
        )
        .to(
          ".featured-property-copy-item",
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            ease: "none",
          },
          0.14
        )
        .to(
          ".featured-property-highlight",
          {
            y: 0,
            opacity: 1,
            stagger: 0.06,
            ease: "none",
          },
          0.28
        );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="featured-property-slideshow relative min-h-screen overflow-hidden bg-[var(--color-primary-navy)] px-5 py-24 text-[var(--color-white)] lg:px-8"
    >
      <div ref={backgroundRef} className="absolute inset-0 will-change-transform">
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
        <div
          ref={contentCardRef}
          className="w-full max-w-[620px] border border-[var(--color-soft-gold)]/30 bg-gray-900/40 p-7 backdrop-blur-[1px] will-change-transform will-change-opacity sm:p-9 lg:ml-20 lg:p-10"
        >
          {/* <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/82">
            Featured Property
          </p> */}

          <h2 className="featured-property-copy-item text-3xl font-semibold uppercase leading-tight tracking-[0.08em] text-white will-change-transform will-change-opacity sm:text-lg lg:text-xl">
            Isla Bay by Zaman Developers
          </h2>

          <p className="featured-property-copy-item mt-4 max-w-3xl text-sm text-white will-change-transform will-change-opacity sm:text-base">
            Rising above the pristine waterfront of Dubai Island, Isla Bay is a
            rare dialogue between avant-garde form and human feeling,
            introducing an exclusive resort ecosystem at your doorstep.
          </p>

          <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
            {islaBayHighlights.map((item) => (
              <article
                key={item.title}
                className="featured-property-highlight border-l border-[var(--color-soft-gold)]/42 pl-4 will-change-transform will-change-opacity"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-soft-gold)]">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-white">{item.body}</p>
              </article>
            ))}
          </div>

          <Link
            href="/projects/isla-bay"
            className="featured-property-copy-item mt-4 inline-flex bg-[var(--color-metallic-gold)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-navy)] transition duration-300 ease-out will-change-transform will-change-opacity hover:bg-[var(--color-soft-gold)]"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
