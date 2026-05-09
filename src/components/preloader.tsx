"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const letters = ["B", "S", "T"];
  const numColumns = 10;

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.inOut"
        }
      });

      tl.to(".name-mark", {
        y: 0,
        opacity: 1,
        duration: 0.65,
        willChange: "transform, opacity"
      });

      tl.to(".name-text span", {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.5,
        willChange: "transform, opacity"
      }, "<0.1");

      tl.to(
        ".preloader-item",
        {
          delay: 0.7,
          y: "100%",
          scaleY: 0.7,
          opacity: 0,
          duration: 0.7,
          stagger: 0.09,
          willChange: "transform, opacity"
        },
        ">"
      );

      tl.to(
        ".name-text span",
        {
          y: 40,
          opacity: 0,
          stagger: 0.09,
          duration: 0.4,
          willChange: "transform, opacity"
        },
        "<0.2"
      );

      tl.to(
        ".name-mark",
        {
          y: 20,
          opacity: 0,
          duration: 0.35,
          willChange: "transform, opacity"
        },
        "<"
      );

      tl.to(
        preloaderRef.current,
        {
          autoAlpha: 0,
          duration: 0.5
        },
        ">"
      );
    },
    { scope: preloaderRef }
  );

  return (
    <div className="fixed inset-0 z-9999 flex bg-black" ref={preloaderRef}>
      {[...Array(numColumns)].map((_, index) => (
        <div
          key={index}
          className="preloader-item bg-primary-dark h-full w-[10%]"
        />
      ))}
      <div className="name-mark absolute top-1/2 left-1/2 flex w-[min(88vw,760px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center opacity-0">
        <p className="mb-4 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.45em] text-white/72 sm:text-xs">
          BST Developers
        </p>
        <p className="name-text flex overflow-hidden text-center font-display text-[24vw] leading-none font-semibold tracking-[0.18em] text-white sm:text-[18vw] lg:text-[190px]">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="inline-block translate-y-full bg-linear-to-b from-white via-white to-orange-300 bg-clip-text pr-[0.08em] text-transparent opacity-0"
            >
              {letter}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
