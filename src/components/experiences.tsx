"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import SectionTitle from "@/src/components/section-title";
import { experienceItems } from "@/src/content/portfolio";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Experiences() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = containerRef.current?.querySelectorAll(".experience-item");
      if (!items?.length) return;

      gsap.from(items, {
        y: 32,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 72%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="py-section" id="my-experience">
      <div className="container" ref={containerRef}>
        <SectionTitle title="Experience" />

        <div className="grid gap-8">
          {experienceItems.map((item) => (
            <article
              key={`${item.company}-${item.title}`}
              className="experience-item rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)] sm:p-8"
            >
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-orange-400">
                    {item.company}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-white/72">{item.description}</p>
                </div>

                <div className="text-sm uppercase tracking-[0.2em] text-white/55">
                  <p>{item.duration}</p>
                  {item.location ? <p className="mt-2">{item.location}</p> : null}
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
                <div className="space-y-3">
                  {item.highlights.map((highlight) => (
                    <div className="flex gap-3 text-white/78" key={highlight}>
                      <span className="mt-2 size-2 rounded-full bg-sky-400" />
                      <p>{highlight}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  {item.stack.map((tech) => (
                    <span
                      className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/78"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
