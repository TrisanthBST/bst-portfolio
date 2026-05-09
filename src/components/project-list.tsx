"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import Project from "@/src/components/project";
import SectionTitle from "@/src/components/section-title";
import { projects } from "@/src/content/portfolio";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProjectList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = containerRef.current?.querySelectorAll(".project-reveal");
      if (!items?.length) return;

      gsap.from(items, {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 74%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="pb-section" id="selected-projects">
      <div className="container" ref={containerRef}>
        <SectionTitle title="Featured Project" />

        <div className="mb-8 max-w-2xl project-reveal">
          <p className="text-lg leading-8 text-white/72">
            A focused portfolio can still feel strong when the work is presented clearly. This
            featured case study highlights a real product, your direct contribution, and the
            technical depth behind it.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div className="project-reveal" key={project.slug}>
              <Project index={index} project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
