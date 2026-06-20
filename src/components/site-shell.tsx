"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  CornerDownRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { navigation } from "@/lib/site-content";

type SocialIconName = "instagram" | "facebook" | "linkedin" | "youtube";

function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
        <path d="M13.7 21v-8h2.75l.41-3.2H13.7V7.76c0-.93.26-1.56 1.59-1.56H17V3.34c-.3-.04-1.31-.13-2.5-.13-2.47 0-4.16 1.5-4.16 4.28V9.8H7.55V13h2.79v8h3.36Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
        <path d="M6.47 8.1H3.15V21h3.32V8.1ZM4.81 3a1.93 1.93 0 1 0 0 3.86A1.93 1.93 0 0 0 4.81 3ZM21 13.6c0-3.89-2.08-5.7-4.85-5.7a4.18 4.18 0 0 0-3.78 2.08V8.1H9.05V21h3.32v-6.39c0-1.68.32-3.31 2.4-3.31 2.05 0 2.08 1.92 2.08 3.42V21H21v-7.4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77A26 26 0 0 0 2 12a26 26 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.42-4.81ZM10 15V9l5.2 3L10 15Z" />
    </svg>
  );
}

export function Header() {
  const [isPastHero, setIsPastHero] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function updateHeaderState() {
      const firstSection = document.querySelector("main > section:first-child");
      const switchPoint = firstSection
        ? firstSection.getBoundingClientRect().height - 120
        : window.innerHeight * 0.78;

      setIsPastHero(window.scrollY > switchPoint);
    }

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });
    window.addEventListener("resize", updateHeaderState);

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function closeMenuOnDesktop() {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", closeMenuOnDesktop);

    return () => window.removeEventListener("resize", closeMenuOnDesktop);
  }, []);

  const leftLinks = [
    // navigation.find((item) => item.href === "/"),
    navigation.find((item) => item.href === "/about"),
    navigation.find((item) => item.href === "/our-projects"),
    navigation.find((item) => item.href === "/blogs"),
  ].filter(Boolean) as typeof navigation;

  const rightLinks = [ 
    navigation.find((item) => item.href === "/contact"),
    navigation.find((item) => item.href === "/pay-now"),
    navigation.find((item) => item.href === "/partners"),
  ].filter(Boolean) as typeof navigation;

  const mobileLinks = [...leftLinks, ...rightLinks];
  const headerHasSolidBackground = isPastHero || isMenuOpen;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        headerHasSolidBackground
          ? " bg-[var(--color-white)]/95 text-[var(--color-primary-navy)] shadow-[0_16px_60px_rgba(17,43,69,0.12)] backdrop-blur-xl"
          : " bg-transparent text-[var(--color-white)]",
      ].join(" ")}
    >
      <div className="mx-auto grid max-w-360 grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 py-2 transition-all duration-500 ease-out lg:px-10">
        <nav className="hidden items-center gap-8 justify-self-start lg:flex">
          {leftLinks.map((item) =>
            item.href === "/our-projects" ? (
              <div key={item.href} className="group relative py-4">
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:text-[var(--color-metallic-gold)]"
                >
                  {item.label}
                  <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" />
                </Link>
                <div className="invisible absolute left-0 top-full min-w-48 translate-y-2 border-t-2 border-[var(--color-metallic-gold)] bg-[var(--color-white)] p-2 text-[var(--color-primary-navy)] opacity-0 shadow-[0_18px_50px_rgba(17,43,69,0.16)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <Link href="/projects/isla-bay" className="block px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-[var(--color-off-white)] hover:text-[var(--color-primary-navy)]">
                    Isla Bay
                  </Link>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:text-[var(--color-metallic-gold)]"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <Link href="/" className="justify-self-center text-center">
          <span className="font-heading block text-3xl font-semibold uppercase leading-none tracking-[0.14em] sm:text-3xl">
            Zaman
          </span>
          <span
            className={[
              "font-accent mt-1 block text-[10px] uppercase tracking-[0.42em] transition-colors duration-500",
               headerHasSolidBackground ? "text-[var(--color-metallic-gold)]" : "text-[var(--color-white)]/82",
            ].join(" ")}
          >
            Developers
          </span>
        </Link>

        <nav className="hidden items-center gap-4 justify-self-end lg:flex">
          {rightLinks.map((item) => {
            const isButton =
              item.href === "/pay-now" || item.href === "/partners";

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isButton
                    ? "bg-[var(--color-metallic-gold)] px-5 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-navy)] transition-all duration-300 hover:bg-[var(--color-soft-gold)]"
                    : "px-2 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:text-[var(--color-metallic-gold)]"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
          className={[
            "group flex h-11 w-11 items-center justify-center justify-self-end border transition-all duration-300 lg:hidden",
            headerHasSolidBackground
              ? "border-[var(--color-primary-navy)]/20 text-[var(--color-primary-navy)]"
              : "border-[var(--color-white)]/35 text-[var(--color-white)]",
          ].join(" ")}
        >
          {isMenuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={[
          "grid overflow-hidden border-t border-[var(--color-primary-navy)]/10 bg-[var(--color-white)]/96 text-[var(--color-primary-navy)] shadow-[0_24px_50px_rgba(17,43,69,0.12)] backdrop-blur-xl transition-all duration-500 ease-out lg:hidden",
          isMenuOpen
            ? "max-h-[calc(100vh-68px)] opacity-100"
            : "max-h-0 border-transparent opacity-0",
        ].join(" ")}
      >
        <nav className="mx-auto flex w-full max-w-360 flex-col px-5 py-5">
          {mobileLinks.map((item) => {
            const isButton =
              item.href === "/pay-now" || item.href === "/partners";

            return (
              <Fragment key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    isButton
                      ? "mt-3 bg-[var(--color-metallic-gold)] px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-primary-navy)] transition hover:bg-[var(--color-soft-gold)]"
                      : "border-b border-[var(--color-primary-navy)]/10 py-4 text-sm font-semibold uppercase tracking-[0.14em] transition hover:text-[var(--color-metallic-gold)]"
                  }
                >
                  {item.label}
                </Link>
                {item.href === "/our-projects" && (
                  <Link
                    href="/projects/isla-bay"
                    onClick={() => setIsMenuOpen(false)}
                  className="border-b border-[var(--color-primary-navy)]/10 py-3 pl-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-metallic-gold)] transition hover:text-[var(--color-primary-navy)]"
                >
                    <CornerDownRight aria-hidden="true" className="mr-2 inline h-3.5 w-3.5" />
                    Isla Bay
                  </Link>
                )}
              </Fragment>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  const quickLinks = [
    { label: "About Zaman Developers", href: "/about" },
    { label: "Our Projects", href: "/our-projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact Us", href: "/contact" },
    { label: "Partner With Us", href: "/partners" },
    { label: "Pay Now", href: "/pay-now" },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: "instagram" as const,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      icon: "facebook" as const,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: "linkedin" as const,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/",
      icon: "youtube" as const,
    },
  ];

  return (
    <footer className="bg-[var(--color-primary-navy)] text-[var(--color-white)]">
      <div className="mx-auto grid max-w-360 gap-x-10 gap-y-12 px-5 pb-14 pt-14 sm:px-8 md:grid-cols-2 md:pb-16 md:pt-16 lg:grid-cols-[1.35fr_.72fr_1fr_1fr] lg:px-10 lg:pb-20 lg:pt-20 xl:gap-x-20">
        <section aria-labelledby="footer-brand-heading">
          <Link href="/" className="inline-block" aria-label="Zaman Developers home">
            <span id="footer-brand-heading" className="font-heading block text-3xl font-semibold uppercase leading-none tracking-[0.18em] sm:text-4xl">
              Zaman
            </span>
            <span className="font-accent mt-1 block text-[9px] uppercase tracking-[0.52em] text-[var(--color-soft-gold)]">
              Developers
            </span>
          </Link>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-[var(--color-cool-gray)]">
            Zaman Developers creates distinctive real estate destinations in
            Dubai, shaped by thoughtful design, elevated living, and enduring
            investment value.
          </p>
          {/* <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Get the Zaman Developers app on Google Play"
               className="flex min-w-32 items-center gap-2 rounded-md border border-[var(--color-cool-gray)]/60 bg-[var(--color-secondary-navy)] px-3 py-2 transition hover:-translate-y-0.5 hover:border-[var(--color-soft-gold)]"
            >
              <Play aria-hidden="true" className="h-6 w-6 fill-white text-white" />
              <span className="leading-none">
                <span className="block text-[8px] uppercase tracking-wide text-white/80">Get it on</span>
                <span className="mt-1 block text-sm font-medium">Google Play</span>
              </span>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              aria-label="Download the Zaman Developers app on the App Store"
               className="flex min-w-32 items-center gap-2 rounded-md border border-[var(--color-cool-gray)]/60 bg-[var(--color-secondary-navy)] px-3 py-2 transition hover:-translate-y-0.5 hover:border-[var(--color-soft-gold)]"
            >
              <Apple aria-hidden="true" className="h-6 w-6 fill-white text-white" />
              <span className="leading-none">
                <span className="block text-[8px] tracking-wide text-white/80">Download on the</span>
                <span className="mt-1 block text-sm font-medium">App Store</span>
              </span>
            </a>
          </div> */}
        </section>

        <section aria-labelledby="footer-links-heading">
          <h2 id="footer-links-heading" className="font-accent text-base font-bold uppercase tracking-wide">
            Quick Links
          </h2>
          <nav className="mt-4 grid gap-2.5 text-[15px] text-[var(--color-cool-gray)]">
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href} className="w-fit transition hover:translate-x-1 hover:text-[var(--color-soft-gold)]">
                {item.label}
              </Link>
            ))}
          </nav>
        </section>

        <section aria-labelledby="footer-contact-heading">
          <h2 id="footer-contact-heading" className="font-accent text-base font-bold uppercase tracking-wide">
            Contact Us
          </h2>
          <address className="mt-4 space-y-4 text-[15px] not-italic leading-6 text-[var(--color-cool-gray)]">
            <a href="tel:+971000000000" className="flex w-fit items-start gap-2.5 transition hover:text-[var(--color-soft-gold)]">
              <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              <span>+97 15 588 885</span>
            </a>
            <a href="mailto:sales@zamandevelopers.com" className="flex w-fit items-start gap-2.5 transition hover:text-[var(--color-soft-gold)]">
              <Mail aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
              <span className="break-all">sales@zamandevelopers.com</span>
            </a>
            <p className="flex items-start gap-2.5">
              <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
              <span>Dubai Islands, Dubai,<br />United Arab Emirates</span>
            </p>
          </address>
        </section>

        <section aria-labelledby="footer-newsletter-heading">
          <h2 id="footer-newsletter-heading" className="font-accent text-base font-bold uppercase tracking-wide">
            Subscribe to Newsletter
          </h2>
          <form className="mt-3 flex border-b border-[var(--color-cool-gray)]/60 pb-2 focus-within:border-[var(--color-soft-gold)]">
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
              className="min-w-0 flex-1 bg-transparent py-1 text-sm text-[var(--color-white)] outline-none placeholder:text-[var(--color-cool-gray)]"
            />
            <button type="submit" aria-label="Subscribe to newsletter" className="ml-3 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--color-metallic-gold)] text-[var(--color-primary-navy)] transition hover:scale-110 hover:bg-[var(--color-soft-gold)]">
              <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </button>
          </form>
          <div className="mt-5 flex items-center gap-4">
            {socialLinks.map((social) => {
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-cool-gray)]/35 text-[var(--color-cool-gray)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-soft-gold)] hover:bg-[var(--color-soft-gold)] hover:text-[var(--color-primary-navy)]">
                  <SocialIcon name={social.icon} />
                </a>
              );
            })}
          </div>
          <Link href="/partners" className="mt-8 inline-flex min-h-11 items-center justify-center bg-[var(--color-metallic-gold)] px-7 py-3 text-center text-[11px] font-bold uppercase tracking-wide text-[var(--color-primary-navy)] transition hover:-translate-y-0.5 hover:bg-[var(--color-soft-gold)]">
            Become a Channel Partner
          </Link>
        </section>
      </div>

      <div className="border-t border-[var(--color-cool-gray)]/20 px-5 py-7 text-center text-[10px] uppercase leading-5 tracking-[0.04em] text-[var(--color-cool-gray)]/65 sm:px-8 sm:text-[11px] lg:px-10">
        <p>© Zaman Developers 2026. All rights reserved.</p>
        <p className="mx-auto mt-1 max-w-5xl">
          This website and its content may not be copied, distributed, or commercially used without prior written permission.
        </p>
      </div>
    </footer>
  );
}
