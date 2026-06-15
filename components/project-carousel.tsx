"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
  const activeScreenshot = screenshots[activeIndex];

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

  return (
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
        <div className="relative mx-auto aspect-[890/1682] w-[min(19rem,66vw)] overflow-hidden rounded-md bg-black shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
          <Image
            key={activeScreenshot.src}
            src={activeScreenshot.src}
            alt={activeScreenshot.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 66vw, 19rem"
          />
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
  );
}
