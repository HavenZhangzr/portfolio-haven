"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Screenshot = {
  src: string;
  title: string;
  description: string;
};

type ProjectCarouselProps = {
  screenshots: Screenshot[];
};

export function ProjectCarousel({ screenshots }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const activeScreenshot = screenshots[activeIndex];

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isLightboxOpen]);

  function showPrevious() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? screenshots.length - 1 : currentIndex - 1
    );
  }

  function showNext() {
    setActiveIndex((currentIndex) =>
      currentIndex === screenshots.length - 1 ? 0 : currentIndex + 1
    );
  }

  const lightbox = isLightboxOpen
    ? createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeScreenshot.title} enlarged preview`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            aria-label="Close enlarged preview"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-5 top-5 z-10 grid size-11 place-items-center rounded-full border border-white/15 bg-black/45 text-white/75 transition hover:border-white/30 hover:bg-black/70 hover:text-white"
          >
            <X size={22} />
          </button>
          <div
            className="relative"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Previous enlarged screenshot"
              onClick={showPrevious}
              className="absolute left-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-violet-200/10 bg-[#211f30]/95 text-violet-200 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:border-violet-200/20 hover:bg-violet-300/15 hover:text-violet-100 sm:-left-14"
            >
              <ChevronLeft size={23} />
            </button>
            <button
              type="button"
              aria-label="Next enlarged screenshot"
              onClick={showNext}
              className="absolute right-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-violet-200/10 bg-[#211f30]/95 text-violet-200 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:border-violet-200/20 hover:bg-violet-300/15 hover:text-violet-100 sm:-right-14"
            >
              <ChevronRight size={23} />
            </button>
            <div className="relative h-[min(88vh,1100px)] w-[min(94vw,900px)] overflow-hidden rounded-xl border border-white/15 bg-[#080a0f] shadow-[0_30px_100px_rgba(0,0,0,0.65)]">
              <Image
                src={activeScreenshot.src}
                alt={activeScreenshot.title}
                fill
                priority
                className="object-contain"
                sizes="94vw"
              />
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <div className="relative flex w-full items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] px-12 pb-5 pt-7 shadow-glow sm:px-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-300/10 via-transparent to-cyan-300/10" />
        <button
          type="button"
          aria-label="Previous screenshot"
          onClick={showPrevious}
          className="absolute left-4 z-10 grid size-9 place-items-center rounded-md border border-white/10 bg-white/[0.08] text-white/70 transition hover:border-white/24 hover:bg-white/[0.14] hover:text-white"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="relative z-10">
          <div className="relative mx-auto aspect-[890/1682] w-[min(20rem,70vw)] overflow-hidden rounded-md bg-black shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
            <Image
              key={activeScreenshot.src}
              src={activeScreenshot.src}
              alt={activeScreenshot.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 70vw, 20rem"
            />
            <button
              type="button"
              aria-label={`Enlarge ${activeScreenshot.title}`}
              onClick={() => setIsLightboxOpen(true)}
              className="absolute inset-0 z-[1] cursor-zoom-in"
            />
            <button
              type="button"
              aria-label={`Enlarge ${activeScreenshot.title}`}
              onClick={() => setIsLightboxOpen(true)}
              className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full border border-white/15 bg-black/55 text-white/75 shadow-lg backdrop-blur-sm transition hover:border-white/30 hover:bg-black/75 hover:text-white"
            >
              <ZoomIn size={17} />
            </button>
          </div>
          <div className="mt-2 flex h-4 items-center justify-center gap-2.5">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.src}
                type="button"
                aria-label={`Show ${screenshot.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => setActiveIndex(index)}
                className={`block rounded-full transition ${
                  index === activeIndex
                    ? "h-1.5 w-8 bg-violet-300 shadow-[0_0_10px_rgba(196,181,253,0.45)]"
                    : "size-2 bg-white/55 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Next screenshot"
          onClick={showNext}
          className="absolute right-4 z-10 grid size-9 place-items-center rounded-md border border-white/10 bg-white/[0.08] text-white/70 transition hover:border-white/24 hover:bg-white/[0.14] hover:text-white"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      {lightbox}
    </>
  );
}
