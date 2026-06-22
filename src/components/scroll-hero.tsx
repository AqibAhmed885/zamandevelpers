"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 60;
const FRAME_DIGITS = 3;
const FRAME_PATH = "/PixVerse_V6_Image_Text_360P_A_cinematic_single-2_000/PixVerse_V6_Image_Text_360P_A_cinematic_single-2_";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function frameUrl(index: number) {
  return `${FRAME_PATH}${String(index).padStart(FRAME_DIGITS, "0")}.jpg`;
}

export function ScrollHero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const targetFrameRef = useRef(0);
  const renderedFrameRef = useRef(-1);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    const media = mediaRef.current;
    const copy = copyRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!hero || !media || !copy || !canvas || !context) return;

    const heroElement = hero;
    const mediaElement = media;
    const copyElement = copy;
    const canvasElement = canvas;
    const canvasContext = context;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function progressFor(element: HTMLElement) {
      const rect = element.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      return clamp(-rect.top / Math.max(distance, 1), 0, 1);
    }

    function isLoaded(index: number) {
      const image = framesRef.current[index];
      return image && image.complete && image.naturalWidth > 0;
    }

    function nearestLoadedFrame(index: number) {
      if (isLoaded(index)) return index;

      for (let radius = 1; radius < FRAME_COUNT; radius += 1) {
        if (isLoaded(index - radius)) return index - radius;
        if (isLoaded(index + radius)) return index + radius;
      }

      return null;
    }

    function drawFrame(index: number) {
      targetFrameRef.current = index;

      const renderIndex = nearestLoadedFrame(index);
      if (renderIndex === null) return;
      if (renderedFrameRef.current === renderIndex) return;

      const image = framesRef.current[renderIndex];
      renderedFrameRef.current = renderIndex;
      const canvasWidth = canvasElement.width;
      const canvasHeight = canvasElement.height;
      const coverScale = Math.max(
        canvasWidth / image.naturalWidth,
        canvasHeight / image.naturalHeight
      );
      const width = image.naturalWidth * coverScale;
      const height = image.naturalHeight * coverScale;
      const x = (canvasWidth - width) / 2;
      const y = (canvasHeight - height) / 2;

      canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
      canvasContext.drawImage(image, x, y, width, height);
    }

    function resizeCanvas() {
      const ratio = window.devicePixelRatio || 1;
      const { width, height } = canvasElement.getBoundingClientRect();

      canvasElement.width = Math.round(width * ratio);
      canvasElement.height = Math.round(height * ratio);
      renderedFrameRef.current = -1;
      drawFrame(targetFrameRef.current);
    }

    function updateScrollTarget() {
      targetProgressRef.current = progressFor(heroElement);
    }

    function renderMotion(progress: number) {
      const heroScale = 1.04 - progress * 0.04;
      const copyProgress = clamp(progress / 0.58, 0, 1);
      const nextFrame = Math.round(progress * (FRAME_COUNT - 1));

      drawFrame(nextFrame);
      mediaElement.style.transform = `scale(${heroScale})`;
      mediaElement.style.opacity = `${1 - progress * 0.12}`;
      copyElement.style.transform = `translate3d(0, ${copyProgress * -120}vh, 0)`;
      copyElement.style.opacity = "1";
    }

    function animationLoop() {
      const current = currentProgressRef.current;
      const target = targetProgressRef.current;
      const next = current + (target - current) * 0.12;

      currentProgressRef.current =
        Math.abs(target - next) < 0.001 ? target : next;
      renderMotion(currentProgressRef.current);
      rafRef.current = window.requestAnimationFrame(animationLoop);
    }

    function preloadFrames() {
      for (let index = 0; index < FRAME_COUNT; index += 1) {
        const image = new window.Image();
        image.src = frameUrl(index);
        image.onload = () => {
          if (index === 0 || index === targetFrameRef.current) {
            drawFrame(targetFrameRef.current);
          }
        };
        framesRef.current[index] = image;
      }
    }

    setIsReady(true);

    if (prefersReducedMotion) {
      const image = new window.Image();
      image.src = frameUrl(0);
      image.onload = () => {
        framesRef.current[0] = image;
        resizeCanvas();
      };
      return;
    }

    preloadFrames();
    resizeCanvas();
    updateScrollTarget();
    currentProgressRef.current = targetProgressRef.current;
    renderMotion(currentProgressRef.current);
    rafRef.current = window.requestAnimationFrame(animationLoop);

    window.addEventListener("scroll", updateScrollTarget, { passive: true });
    window.addEventListener("resize", resizeCanvas);

    return () => {
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", updateScrollTarget);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[280vh] bg-[var(--color-primary-navy)]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[var(--color-primary-navy)] text-[var(--color-white)]">
        <div
          ref={mediaRef}
          className="absolute inset-0 scale-[1.04] opacity-100 will-change-transform"
        >
          <canvas
            ref={canvasRef}
            aria-label="Cinematic Isla Bay building animation"
            className="block h-full w-full "
          />
        </div>
        {/* <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.84),rgba(0,0,0,0.48)_38%,rgba(0,0,0,0.06)_72%),linear-gradient(0deg,rgba(0,0,0,0.58),rgba(0,0,0,0.02)_45%)]" /> */}
        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl content-end px-5 pb-16 pt-32 lg:px-8">
          <div ref={copyRef} className="max-w-4xl will-change-transform">
            {/* <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-metallic-gold)]">
              Isla Bay Website
            </p> */}
            <h1 className="font-heading mt-6 text-5xl font-semibold text leading-[0.98] sm:text-6xl lg:text-7xl">
              {["We don't just ",
                "build the future.",
                " We define the era."].map(
                (line, index) => (
                  <span key={line} className="block uppercase ">
                    <span
                        className="block transition-transform text-[var(--color-primary-navy)] duration-1000 ease-out"
                      style={{
                        transitionDelay: `${index * 120}ms`,
                        transform: isReady ? "translateY(0)" : "translateY(110%)",
                      }}
                    >
                      {line}
                    </span>
                  </span>
                )
              )}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8">
              Zaman Developers introduces <strong>Isla Bay</strong>—an architectural masterpiece gracing the shores of <strong>Dubai Islands</strong> . A rare sanctuary where ultra-luxury island living harmonizes with the bold energy of the city.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects/isla-bay"
                className="rounded-full bg-[var(--color-metallic-gold)] px-6 py-3 text-center text-sm font-semibold text-[var(--color-primary-navy)] transition duration-300 ease-out hover:bg-[var(--color-soft-gold)]"
              >
                Discover Isla Bay
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[var(--color-white)]/35 px-6 py-3 text-center text-sm font-semibold text-[var(--color-white)] transition duration-300 ease-out hover:border-[var(--color-soft-gold)] hover:text-[var(--color-soft-gold)]"
              >
                Schedule a Private Briefing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
