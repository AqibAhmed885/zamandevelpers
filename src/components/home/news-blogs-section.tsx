"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blogPosts } from "@/lib/site-content";

export function NewsBlogsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const headerItems = gsap.utils.toArray<HTMLElement>(
        ".news-blog-header-item"
      );

      const cards = gsap.utils.toArray<HTMLElement>(".news-blog-card");

      const cardContentItems = gsap.utils.toArray<HTMLElement>(
        ".news-blog-content-item"
      );

      gsap.set(headerItems, {
        y: 48,
      });

      gsap.set(cards, {
        y: (index) => 130 + index * 35,
      });

      gsap.set(cardContentItems, {
        y: 22,
      });

      const headerTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          end: "center 45%",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      headerTimeline.to(headerItems, {
        y: 0,
        stagger: 0.12,
        ease: "none",
      });

      const cardsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          end: "center 45%",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      cardsTimeline
        .to(
          cards,
          {
            y: 0,
            stagger: 0.14,
            ease: "none",
          },
          0
        )
        .to(
          cardContentItems,
          {
            y: 0,
            stagger: 0.035,
            ease: "none",
          },
          0.12
        );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--color-white)] px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-360">
        <div
          ref={headerRef}
          className="flex flex-col justify-between gap-6 overflow-hidden md:flex-row md:items-start"
        >
          <h2 className="news-blog-header-item border-l-[3px] border-[var(--color-metallic-gold)] pl-5 text-2xl font-medium uppercase tracking-[0.08em] text-[var(--color-primary-navy)] will-change-transform sm:text-3xl">
            News & Blogs
          </h2>

          <Link
            href="/blogs"
            className="news-blog-header-item inline-flex bg-[var(--color-metallic-gold)] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-primary-navy)] transition duration-300 ease-out will-change-transform hover:bg-[var(--color-soft-gold)]"
          >
            See All News
          </Link>
        </div>

        <div ref={gridRef} className="mt-10 grid gap-7 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="news-blog-card group will-change-transform"
            >
              <Link href={`/blogs/${post.slug}`} className="block">
                <div className="relative aspect-[1.34] overflow-hidden bg-[var(--color-off-white)]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:brightness-95"
                  />
                </div>
              </Link>

              <p className="news-blog-content-item mt-6 text-xs uppercase tracking-[0.04em] text-[var(--color-cool-gray)] will-change-transform">
                {post.category} - {post.displayDate}
              </p>

              <h3 className="news-blog-content-item mt-3 text-xl font-semibold uppercase leading-tight text-[var(--color-primary-navy)] will-change-transform">
                <Link
                  href={`/blogs/${post.slug}`}
                    className="transition duration-300 ease-out hover:text-[var(--color-metallic-gold)]"
                >
                  {post.title}
                </Link>
              </h3>

              <p className="news-blog-content-item mt-3 text-base leading-7 text-[var(--color-charcoal)] will-change-transform">
                {post.excerpt}
              </p>

              <Link
                href={`/blogs/${post.slug}`}
                className="news-blog-content-item mt-4 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.06em] text-[var(--color-metallic-gold)] transition duration-300 ease-out will-change-transform hover:text-[var(--color-primary-navy)]"
              >
                Read More <span aria-hidden="true">-&gt;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
