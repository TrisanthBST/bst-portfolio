"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import SectionTitle from "@/src/components/section-title";
import { skillGroups } from "@/src/content/portfolio";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = containerRef.current?.querySelectorAll(".skill-reveal");
      if (!items?.length) return;

      gsap.from(items, {
        opacity: 0,
        y: 32,
        stagger: 0.08,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="my-stack" ref={containerRef}>
      <div className="container">
        <SectionTitle title="Skills & Stack" />

        <div className="space-y-12">
          {skillGroups.map(({ title, items }) => (
            <div
              className="skill-reveal grid gap-6 border-b border-white/8 pb-10 last:border-none last:pb-0 md:grid-cols-12"
              key={title}
            >
              <div className="md:col-span-4">
                <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  {title}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:col-span-8">
                {items.map((item) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/78 sm:text-base"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
