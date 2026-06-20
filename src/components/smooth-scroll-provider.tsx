"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function SmoothScrollProvider() {
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
    });

    const handleLenisScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", handleLenisScroll);

    let rafId = 0;

    function raf(time: number) {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    }

    rafId = window.requestAnimationFrame(raf);

    const refreshScrollTriggers = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", refreshScrollTriggers);
    window.requestAnimationFrame(refreshScrollTriggers);

    return () => {
      window.removeEventListener("load", refreshScrollTriggers);
      window.cancelAnimationFrame(rafId);
      lenis.off("scroll", handleLenisScroll);
      lenis.destroy();
    };
  }, []);

  return null;
}
