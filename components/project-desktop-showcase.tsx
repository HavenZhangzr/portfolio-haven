"use client";

import Image from "next/image";
import { useState } from "react";

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
  const activeScreenshot = screenshots[activeIndex];

  return (
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
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {screenshots.map((screenshot, index) => (
            <button
              key={screenshot.src}
              type="button"
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
  );
}
