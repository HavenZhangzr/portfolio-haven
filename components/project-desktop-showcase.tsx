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

type ProjectDesktopShowcaseProps = {
  screenshots: Screenshot[];
};

export function ProjectDesktopShowcase({
  screenshots
}: ProjectDesktopShowcaseProps) {
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
              onClick={() =>
                setActiveIndex((currentIndex) =>
                  currentIndex === 0 ? screenshots.length - 1 : currentIndex - 1
                )
              }
              className="absolute left-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-violet-200/10 bg-[#211f30]/95 text-violet-200 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:border-violet-200/20 hover:bg-violet-300/15 hover:text-violet-100 sm:-left-14"
            >
              <ChevronLeft size={23} />
            </button>
            <button
              type="button"
              aria-label="Next enlarged screenshot"
              onClick={() =>
                setActiveIndex((currentIndex) =>
                  currentIndex === screenshots.length - 1 ? 0 : currentIndex + 1
                )
              }
              className="absolute right-2 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-violet-200/10 bg-[#211f30]/95 text-violet-200 shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:border-violet-200/20 hover:bg-violet-300/15 hover:text-violet-100 sm:-right-14"
            >
              <ChevronRight size={23} />
            </button>
            <div className="relative h-[min(84vh,900px)] w-[min(94vw,1440px)] overflow-hidden rounded-xl border border-white/15 bg-[#080a0f] shadow-[0_30px_100px_rgba(0,0,0,0.65)]">
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
      <div className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-glow">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/10 via-transparent to-cyan-300/10" />
        <div className="relative z-10">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0d1016]">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
              <span className="size-2.5 rounded-full bg-rose-300/80" />
              <span className="size-2.5 rounded-full bg-amber-300/80" />
              <span className="size-2.5 rounded-full bg-emerald-300/80" />
              <span className="ml-3 text-xs font-medium text-white/55">
                FinSight AI Dashboard
              </span>
            </div>
            <div className="relative aspect-[16/10] w-full bg-[#0b0d12]">
              <Image
                key={activeScreenshot.src}
                src={activeScreenshot.src}
                alt={activeScreenshot.title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 42rem"
              />
              <button
                type="button"
                aria-label={`Enlarge ${activeScreenshot.title}`}
                onClick={() => setIsLightboxOpen(true)}
                className="absolute inset-0 z-10 cursor-zoom-in"
              >
                <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-white/15 bg-black/55 text-white/75 shadow-lg backdrop-blur-sm transition hover:border-white/30 hover:bg-black/75 hover:text-white">
                  <ZoomIn size={17} />
                </span>
              </button>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.src}
                type="button"
                aria-label={`Show ${screenshot.title}`}
                onClick={() => setActiveIndex(index)}
                className={`overflow-hidden rounded-md border text-left transition ${
                  index === activeIndex
                    ? "border-emerald-300/60 bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                <div className="relative aspect-[16/10] w-full bg-[#0b0d12]">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 16rem"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-white">{screenshot.title}</p>
                  <p className="mt-1 text-xs leading-5 text-white/52">
                    {screenshot.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      {lightbox}
    </>
  );
}
