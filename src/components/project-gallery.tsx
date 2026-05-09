"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  images?: string[];
  title: string;
};

const PLACEHOLDERS = [
  "Dashboard overview slot",
  "Tracking workflow slot",
  "Admin panel slot",
];

export default function ProjectGallery({ images = [], title }: Props) {
  const slides = images.length > 0 ? images : PLACEHOLDERS;
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="mt-14">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-white/45">Case Study Gallery</p>
          <p className="mt-2 text-sm text-white/68 sm:text-base">
            {images.length > 0
              ? "Browse project visuals and interface screens."
              : "Add real screenshots here to complete the case study presentation."}
          </p>
        </div>

        <div className="flex gap-3 self-start sm:self-auto">
          <button
            onClick={prev}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white hover:text-black active:scale-95 motion-reduce:transform-none motion-reduce:transition-none sm:size-11"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white hover:text-black active:scale-95 motion-reduce:transform-none motion-reduce:transition-none sm:size-11"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40 sm:aspect-[16/9] sm:rounded-[2rem]">
        {images.length > 0 ? (
          <Image
            src={slides[activeIndex]}
            alt={`${title} screenshot ${activeIndex + 1}`}
            fill
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <div className="flex h-full flex-col justify-between bg-linear-to-br from-slate-900 via-black to-sky-950 p-6 sm:p-12">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/65">
                Screenshot {activeIndex + 1}
              </span>
              <span className="size-24 rounded-full border border-orange-400/20 bg-orange-400/10 blur-md" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-orange-400">{title}</p>
              <p className="mt-4 max-w-xl font-display text-2xl leading-tight text-white sm:text-5xl">
                {slides[activeIndex]}
              </p>
            </div>
          </div>
        )}
        <div className="absolute right-3 bottom-3 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/72 backdrop-blur-sm sm:right-5 sm:bottom-5 sm:text-xs sm:tracking-[0.22em]">
          {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
        {slides.map((slide, index) => (
          <button
            key={`${slide}-${index}`}
            onClick={() => setActiveIndex(index)}
            className={`rounded-full border px-3 py-2 text-xs transition-colors sm:px-4 sm:text-sm ${
              activeIndex === index
                ? "border-orange-400/40 bg-orange-500 text-black"
                : "border-white/10 bg-white/[0.03] text-white/68 hover:bg-white hover:text-black active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none"
            }`}
          >
            {images.length > 0 ? `Shot ${index + 1}` : `Slot ${index + 1}`}
          </button>
        ))}
      </div>
    </div>
  );
}
