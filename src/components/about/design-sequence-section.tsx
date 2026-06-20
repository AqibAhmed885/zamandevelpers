"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FRAME_NUMBERS = [
  0, 1, 3, 5, 7, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 29, 30, 32,
  34, 36, 38, 40, 42, 44, 45, 47, 49, 51, 53, 55, 57, 59, 62, 66, 70, 74,
  77, 81, 85, 89, 92, 96, 100, 104, 111, 115, 119,
] as const;

const FRAME_URLS = FRAME_NUMBERS.map(
  (frame) =>
    `/animationSequence/frame${String(frame).padStart(4, "0")}.jpg`,
);

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function DesignSequenceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const renderedFrameRef = useRef(-1);
  const rafRef = useRef<number | null>(null);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!section || !canvas || !context) return;

    const sectionElement = section;
    const canvasElement = canvas;
    const canvasContext = context;

    function isLoaded(index: number) {
      const image = framesRef.current[index];
      return Boolean(image?.complete && image.naturalWidth > 0);
    }

    function nearestLoadedFrame(index: number) {
      if (isLoaded(index)) return index;

      for (let offset = 1; offset < FRAME_URLS.length; offset += 1) {
        if (index - offset >= 0 && isLoaded(index - offset)) {
          return index - offset;
        }

        if (index + offset < FRAME_URLS.length && isLoaded(index + offset)) {
          return index + offset;
        }
      }

      return null;
    }

    function drawFrame(index: number) {
      currentFrameRef.current = index;

      const frameIndex = nearestLoadedFrame(index);
      if (frameIndex === null || renderedFrameRef.current === frameIndex) return;

      const image = framesRef.current[frameIndex];
      const scale = Math.max(
        canvasElement.width / image.naturalWidth,
        canvasElement.height / image.naturalHeight,
      );
      const width = image.naturalWidth * scale;
      const height = image.naturalHeight * scale;

      canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);
      canvasContext.drawImage(
        image,
        (canvasElement.width - width) / 2,
        (canvasElement.height - height) / 2,
        width,
        height,
      );
      renderedFrameRef.current = frameIndex;
    }

    function resizeCanvas() {
      const bounds = canvasElement.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.round(bounds.width * pixelRatio);
      const height = Math.round(bounds.height * pixelRatio);

      if (canvasElement.width !== width || canvasElement.height !== height) {
        canvasElement.width = width;
        canvasElement.height = height;
        renderedFrameRef.current = -1;
      }

      drawFrame(currentFrameRef.current);
    }

    function updateFrame() {
      rafRef.current = null;
      const bounds = sectionElement.getBoundingClientRect();
      const scrollDistance = Math.max(
        sectionElement.offsetHeight - window.innerHeight,
        1,
      );
      const progress = clamp(-bounds.top / scrollDistance, 0, 1);
      const frame = Math.round(progress * (FRAME_URLS.length - 1));

      drawFrame(frame);
    }

    function requestFrameUpdate() {
      if (rafRef.current === null) {
        rafRef.current = window.requestAnimationFrame(updateFrame);
      }
    }

    FRAME_URLS.forEach((url, index) => {
      const image = new window.Image();
      image.decoding = "async";
      image.src = url;
      image.onload = () => {
        if (index === 0) setFirstFrameReady(true);
        if (index === currentFrameRef.current || renderedFrameRef.current < 0) {
          drawFrame(currentFrameRef.current);
        }
      };
      framesRef.current[index] = image;
    });

    resizeCanvas();
    updateFrame();

    window.addEventListener("scroll", requestFrameUpdate, { passive: true });
    window.addEventListener("resize", resizeCanvas);

    return () => {
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", requestFrameUpdate);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Design transformation animation"
      className="relative h-[300vh] bg-[#ececec]"
    >
      <div className="sticky top-8 flex h-svh items-center p-4 sm:p-6 lg:p-8">
        <div className="relative h-[calc(100svh-2rem)] w-full overflow-hidden rounded-[4px] bg-[#e4e4e4] sm:h-[calc(100svh-3rem)] lg:h-[calc(100svh-8rem)]">
          <Image
            src={FRAME_URLS[0]}
            alt="A contemporary bathroom taking shape through the design process"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            className={`absolute inset-0 block h-full w-full transition-opacity duration-300 ${
              firstFrameReady ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
