"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/site-content";

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
          ? " bg-white/94 text-[#16211f] shadow-[0_16px_60px_rgba(16,24,22,0.08)] backdrop-blur-xl"
          : " bg-transparent text-white",
      ].join(" ")}
    >
      <div className="mx-auto grid max-w-360 grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 py-2 transition-all duration-500 ease-out lg:px-10">
        <nav className="hidden items-center gap-8 justify-self-start lg:flex">
          {leftLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:text-[#b88949]"
            >
              {item.label}
              {/* animated border at the btm at hover */}
              {/* <span className="block h-0.5 bg-[#b88949] transition-all duration-300"></span> */}
            </Link>
          ))}
        </nav>

        <Link href="/" className="justify-self-center text-center">
          <span className="block text-3xl font-semibold uppercase leading-none tracking-[0.14em] sm:text-3xl">
            Zaman
          </span>
          <span
            className={[
              "mt-1 block text-[10px] uppercase tracking-[0.42em] transition-colors duration-500",
              headerHasSolidBackground ? "text-[#8e6f3d]" : "text-white/82",
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
                    ? "bg-[#9f264a] px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#7f1f3b]"
                    : "px-2 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:text-[#b88949]"
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
              ? "border-[#16211f]/20 text-[#16211f]"
              : "border-white/35 text-white",
          ].join(" ")}
        >
          <span className="relative h-4 w-5">
            <span
              className={[
                "absolute left-0 top-0 h-0.5 w-5 bg-current transition duration-300",
                isMenuOpen ? "top-1.5 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-1.5 h-0.5 w-5 bg-current transition duration-300",
                isMenuOpen ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-3 h-0.5 w-5 bg-current transition duration-300",
                isMenuOpen ? "top-1.5 -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={[
          "grid overflow-hidden border-t border-[#16211f]/10 bg-white/96 text-[#16211f] shadow-[0_24px_50px_rgba(16,24,22,0.12)] backdrop-blur-xl transition-all duration-500 ease-out lg:hidden",
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
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  isButton
                    ? "mt-3 bg-[#9f264a] px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#7f1f3b]"
                    : "border-b border-[#16211f]/10 py-4 text-sm font-semibold uppercase tracking-[0.14em] transition hover:text-[#9f264a]"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#101816] px-5 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold uppercase tracking-[0.24em]">
            Zaman Developers
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/62">
            Timeless monuments, elite beachfront living, and investor-focused
            residential ecosystems for Dubai&apos;s next urban era.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d7b982]">
            Explore
          </p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            {navigation.slice(0, 4).map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d7b982]">
            Connect
          </p>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <Link href="/partners" className="hover:text-white">
              Register as a Partner
            </Link>
            <Link href="/pay-now" className="hover:text-white">
              Payments and Dues
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="bg-[#101816] px-5 pb-16 pt-32 text-white lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7b982]">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{body}</p>
      </div>
    </section>
  );
}
