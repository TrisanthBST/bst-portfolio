"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState, type TouchEvent } from "react";

import TransitionLink from "@/src/components/transition-link";
import { ProjectItem } from "@/src/content/portfolio";

type Props = {
  index: number;
  project: ProjectItem;
};

export default function Project({ index, project }: Props) {
  const allPreviewImages = useMemo(
    () =>
      project.gallery?.length
        ? project.gallery
        : project.thumbnail
          ? [project.thumbnail]
          : [],
    [project.gallery, project.thumbnail]
  );
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    if (allPreviewImages.length <= 1 || isPaused) return;

    const interval = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % allPreviewImages.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, [allPreviewImages, isPaused]);

  const goToPrevious = () => {
    if (allPreviewImages.length <= 1) return;
    setSlideIndex((current) => (current - 1 + allPreviewImages.length) % allPreviewImages.length);
  };

  const goToNext = () => {
    if (allPreviewImages.length <= 1) return;
    setSlideIndex((current) => (current + 1) % allPreviewImages.length);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (allPreviewImages.length <= 1) return;
    setTouchStartX(event.touches[0]?.clientX ?? null);
    setIsPaused(true);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (allPreviewImages.length <= 1 || touchStartX === null) {
      setTouchStartX(null);
      setIsPaused(false);
      return;
    }

    const endX = event.changedTouches[0]?.clientX ?? touchStartX;
    const deltaX = endX - touchStartX;
    const swipeThreshold = 36;

    if (deltaX > swipeThreshold) {
      goToPrevious();
    } else if (deltaX < -swipeThreshold) {
      goToNext();
    }

    setTouchStartX(null);
    setIsPaused(false);
  };

  const previewImages = useMemo(
    () =>
      Array.from({ length: Math.min(3, allPreviewImages.length) }, (_, offset) => {
        const nextIndex = (slideIndex + offset) % allPreviewImages.length;
        return allPreviewImages[nextIndex];
      }),
    [allPreviewImages, slideIndex]
  );
  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
      <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,420px)]">
        <div className="order-2 p-6 sm:p-8 lg:order-1 lg:p-10">
          <div className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-white/45">
            <span>_{(index + 1).toString().padStart(2, "0")}</span>
            <span>{project.type}</span>
            <span>{project.team}</span>
          </div>

          <h3 className="font-display text-3xl font-semibold text-white sm:text-5xl">
            {project.name}
          </h3>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">{project.description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">Role</p>
              <p className="mt-2 text-lg text-white">{project.role}</p>
            </div>
            <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">Problem Solved</p>
              <p className="mt-2 text-lg text-white">{project.problem}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/78"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            {project.highlights.slice(0, 3).map((highlight) => (
              <div className="flex gap-3 text-white/76" key={highlight}>
                <span className="mt-2 size-2 rounded-full bg-orange-400" />
                <p>{highlight}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <TransitionLink
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-500 px-5 py-3 text-xs font-medium tracking-[0.14em] text-black uppercase transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none sm:text-sm sm:tracking-[0.18em]"
            >
              View Case Study
              <ArrowUpRight size={16} />
            </TransitionLink>

            {project.sourceCode ? (
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-xs font-medium tracking-[0.14em] text-white uppercase transition-colors hover:bg-white hover:text-black active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none sm:text-sm sm:tracking-[0.18em]"
              >
                Source Code
                <Github size={16} />
              </a>
            ) : null}
          </div>
        </div>

        <div className="order-1 border-b border-white/10 lg:order-2 lg:border-b-0 lg:border-l">
          <div className="relative h-full min-h-[420px] overflow-hidden bg-linear-to-br from-slate-950 via-[#040814] to-[#03040a] p-5 sm:p-8">
            <div className="absolute -top-10 -left-8 h-44 w-44 rounded-full bg-sky-500/25 blur-3xl [animation:float_12s_ease-in-out_infinite]" />
            <div className="absolute -right-10 top-24 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl [animation:floatReverse_13s_ease-in-out_infinite]" />
            <div className="absolute -bottom-14 left-1/4 h-52 w-52 rounded-full bg-cyan-400/15 blur-3xl [animation:float2_8s_ease-in-out_infinite]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.1),transparent_36%),radial-gradient(circle_at_75%_80%,rgba(56,189,248,0.16),transparent_38%)]" />

            <div className="relative z-10 flex items-start justify-between gap-3">
              <span className="rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-white/70 sm:px-4 sm:text-xs sm:tracking-[0.24em]">
                Case Study Preview
              </span>
              <span className="rounded-full border border-sky-300/35 bg-sky-400/15 px-2.5 py-1 text-[9px] font-semibold tracking-[0.16em] text-sky-100 uppercase sm:px-3 sm:text-[10px] sm:tracking-[0.22em]">
                Live Screens
              </span>
            </div>

            {previewImages.length > 0 ? (
              <div
                className="relative z-10 mt-8 h-[280px] [perspective:1200px] sm:h-[300px]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div className="absolute inset-0 rounded-[1.8rem] border border-white/8 bg-black/10" />
                {previewImages.map((image, imageIndex) => {
                  const isPrimary = imageIndex === 0;
                  return (
                    <div
                      className={`absolute overflow-hidden rounded-2xl border bg-white/[0.04] shadow-[0_14px_40px_rgba(0,0,0,0.45)] transition-all duration-700 motion-reduce:transition-none ${
                        isPrimary
                          ? "border-white/30 ring-1 ring-sky-300/25 [animation:float2_7s_ease-in-out_infinite] motion-reduce:animate-none"
                          : "border-white/15"
                      }`}
                      key={image}
                      style={{
                        top: `${imageIndex * 26}px`,
                        left: `${imageIndex * 22}px`,
                        width: imageIndex === 0 ? "90%" : imageIndex === 1 ? "82%" : "74%",
                        height: imageIndex === 0 ? "250px" : imageIndex === 1 ? "220px" : "190px",
                        zIndex: 30 - imageIndex,
                        transform:
                          imageIndex === 0
                            ? "rotate(-2deg) translateZ(12px)"
                            : imageIndex === 1
                              ? "rotate(1.5deg)"
                              : "rotate(-1deg)",
                      }}
                    >
                      {isPrimary ? (
                        <div className="absolute top-0 right-0 left-0 z-20 flex h-7 items-center gap-1.5 border-b border-white/12 bg-black/45 px-3 backdrop-blur-md">
                          <span className="size-1.5 rounded-full bg-rose-400/90" />
                          <span className="size-1.5 rounded-full bg-amber-300/90" />
                          <span className="size-1.5 rounded-full bg-emerald-400/90" />
                          <span className="ml-2 h-3 w-20 rounded-full bg-white/12 sm:w-32" />
                        </div>
                      ) : null}
                      <Image
                        src={image}
                        alt={`${project.name} screen ${imageIndex + 1}`}
                        fill
                        className={`object-cover transition-transform duration-700 hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none ${
                          isPrimary ? "pt-7" : ""
                        }`}
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        priority={index === 0 && imageIndex === 0}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/10" />
                    </div>
                  );
                })}

                {allPreviewImages.length > 1 ? (
                  <>
                    <div className="absolute right-1.5 bottom-1.5 z-20 flex items-center gap-2 sm:right-2 sm:bottom-2">
                      <button
                        type="button"
                        onClick={goToPrevious}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/18 bg-black/45 text-white/85 transition-colors hover:bg-white hover:text-black active:scale-95 motion-reduce:transform-none motion-reduce:transition-none"
                        aria-label="Show previous preview"
                      >
                        <ArrowLeft size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={goToNext}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/18 bg-black/45 text-white/85 transition-colors hover:bg-white hover:text-black active:scale-95 motion-reduce:transform-none motion-reduce:transition-none"
                        aria-label="Show next preview"
                      >
                        <ArrowRight size={16} />
                      </button>
                    </div>

                    <div className="absolute left-1.5 bottom-2.5 z-20 flex items-center gap-2 sm:left-2 sm:bottom-3">
                      {allPreviewImages.map((_, dotIndex) => {
                        const isActive = dotIndex === slideIndex;
                        return (
                          <button
                            type="button"
                            key={`dot-${dotIndex}`}
                            onClick={() => setSlideIndex(dotIndex)}
                            className={`h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                              isActive ? "w-6 bg-orange-400" : "w-2 bg-white/45 hover:bg-white/70"
                            }`}
                            aria-label={`Go to preview ${dotIndex + 1}`}
                          />
                        );
                      })}
                    </div>
                  </>
                ) : null}
              </div>
            ) : (
              <div className="relative z-10 mt-10">
                <p className="text-sm uppercase tracking-[0.22em] text-orange-400">{project.name}</p>
                <p className="mt-4 max-w-sm font-display text-3xl leading-tight text-white">
                  Real-time logistics platform with admin workflows and secure shipment management.
                </p>
              </div>
            )}

            <div className="pointer-events-none absolute right-4 bottom-4 z-10 hidden max-w-[220px] rounded-xl border border-white/12 bg-black/40 p-3.5 backdrop-blur-sm sm:block sm:right-8 sm:bottom-7 sm:max-w-[230px] sm:p-4">
              <p className="text-[11px] tracking-[0.22em] text-orange-300 uppercase">{project.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                Multi-screen case study with role-based workflows, shipment tracking, and a modern
                dashboard UI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
