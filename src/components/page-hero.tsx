"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  backgroundImage: string;
};

export function PageHero({
  eyebrow,
  title,
  body,
  backgroundImage,
}: PageHeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const eyebrowRef = useRef<HTMLParagraphElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const bodyRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const titleWords = gsap.utils.toArray<HTMLElement>(
        ".page-hero-title-word"
      );

      gsap.set(backgroundRef.current, {
        yPercent: -4,
      });

      gsap.set(eyebrowRef.current, {
        y: 26,
      });

      gsap.set(titleWords, {
        color: "var(--color-white)",
      });

      gsap.set(bodyRef.current, {
        y: 34,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.15,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(
          backgroundRef.current,
          {
            yPercent: 6,
            ease: "none",
          },
          0
        )
        .to(
          eyebrowRef.current,
          {
            y: 0,
            ease: "none",
          },
          0
        )
        .to(
          titleWords,
          {
            color: "var(--color-soft-gold)",
            stagger: 0.08,
            ease: "none",
          },
          0.12
        )
        .to(
          bodyRef.current,
          {
            y: 0,
            ease: "none",
          },
          0.18
        );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const titleWords = title.trim().split(/\s+/);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[70vh] items-center overflow-hidden px-5 py-24 text-[var(--color-white)] lg:min-h-[75vh] lg:px-8"
    >
      <div
        ref={backgroundRef}
        className="absolute inset-[-6%] will-change-transform"
      >
        <Image
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-[var(--color-primary-navy)]/40" />
      <div className="absolute inset-0" />

      <div className="relative mx-auto w-full max-w-7xl">
        <p
          ref={eyebrowRef}
          className="font-accent text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-soft-gold)] will-change-transform"
        >
          {eyebrow}
        </p>

        <h1
          ref={titleRef}
          aria-label={title}
          className="mt-5 max-w-4xl font-heading text-4xl font-medium uppercase leading-tight sm:text-5xl"
        >
          {titleWords.map((word, index) => (
            <span
              key={`${word}-${index}`}
              aria-hidden="true"
              className="page-hero-title-word inline-block will-change-[color]"
            >
              {word}
              {index !== titleWords.length - 1 ? "\u00A0" : ""}
            </span>
          ))}
        </h1>

        <p
          ref={bodyRef}
          className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-white)]/84 will-change-transform"
        >
          {body}
        </p>
      </div>
    </section>
  );
}