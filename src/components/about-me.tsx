"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import { aboutContent } from "@/src/content/portfolio";

import ShinyText from "./shiny-text";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutMe() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = container.current?.querySelectorAll(".about-reveal");
      if (!items?.length) return;

      gsap.from(items, {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 72%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section className="pb-section" id="about-me">
      <div className="container" ref={container}>
        <h2 className="about-reveal mb-16 max-w-4xl font-display text-3xl leading-tight text-white sm:text-5xl">
          <ShinyText className="text-white" text={aboutContent.lead} />
        </h2>

        <p className="about-reveal border-b border-white/10 pb-3 text-sm uppercase tracking-[0.24em] text-white/45">
          {aboutContent.sectionLabel}
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <div className="about-reveal md:col-span-5">
            <p className="mb-4 text-sm uppercase tracking-[0.24em] text-orange-400">
              Profile
            </p>
            <h3 className="font-display text-4xl leading-tight font-semibold text-white sm:text-5xl">
              {aboutContent.summaryTitle}
            </h3>
            <p className="mt-5 max-w-md text-lg leading-8 text-white/72">
              {aboutContent.summary}
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-5 text-base leading-8 text-white/78 sm:text-lg">
              {aboutContent.paragraphs.map((paragraph) => (
                <p className="about-reveal" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="about-reveal col-span-full mt-6">
            <div className="rounded-[2rem] border border-white/10 bg-linear-to-r from-white/[0.05] via-white/[0.02] to-sky-500/10 px-6 py-5 text-center">
              <p className="text-base uppercase tracking-[0.22em] text-white/65 sm:text-lg">
                {aboutContent.closing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
