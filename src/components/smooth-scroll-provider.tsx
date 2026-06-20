"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function SmoothScrollProvider() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.05,
      syncTouch: false,
      stopInertiaOnNavigate: true,
    });

    lenisRef.current = lenis;

    const handleLenisScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", handleLenisScroll);

    function updateLenis(time: number) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const refreshScrollSystems = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };

    const handlePageShow = () => {
      lenis.start();
      refreshScrollSystems();
    };

    window.addEventListener("load", refreshScrollSystems);
    window.addEventListener("pageshow", handlePageShow);
    window.requestAnimationFrame(refreshScrollSystems);

    return () => {
      window.removeEventListener("load", refreshScrollSystems);
      window.removeEventListener("pageshow", handlePageShow);
      gsap.ticker.remove(updateLenis);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.off("scroll", handleLenisScroll);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    const routeChanged = previousPathnameRef.current !== pathname;
    previousPathnameRef.current = pathname;

    if (routeChanged) {
      // Release any menu/modal scroll lock left during a client-side transition.
      document.body.style.overflow = "";
      lenis?.scrollTo(0, { immediate: true, force: true });
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      lenis?.resize();
      ScrollTrigger.refresh();

      // Run once more after the new route has completed its first layout pass.
      secondFrame = window.requestAnimationFrame(() => {
        lenis?.resize();
        ScrollTrigger.refresh();
      });
    });

    // Account for late font/image layout without refreshing on every frame.
    const settleTimer = window.setTimeout(() => {
      lenis?.resize();
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(settleTimer);
    };
  }, [pathname]);

  return null;
}
