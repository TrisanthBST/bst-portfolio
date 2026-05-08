"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, Mail } from "lucide-react";
import { useRef } from "react";

import Button from "@/src/components/button";
import Magnet from "@/src/components/magnet";
import ShinyText from "@/src/components/shiny-text";
import { heroContent, siteConfig } from "@/src/content/portfolio";

gsap.registerPlugin(useGSAP);

export default function Banner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = containerRef.current?.querySelectorAll(".hero-reveal");
      if (!items?.length) return;

      gsap.from(items, {
        y: 32,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power2.out",
        delay: 0.25,
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="banner" className="relative">
      <div
        className="container flex min-h-svh items-center py-24 md:py-20"
        ref={containerRef}
      >
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,420px)] lg:items-end">
          <div className="max-w-3xl">
            <p className="hero-reveal mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.24em] text-white/70">
              {heroContent.eyebrow}
            </p>
            <h1 className="hero-reveal font-display text-5xl leading-[0.95] font-semibold text-white sm:text-6xl lg:text-8xl">
              {heroContent.headline}
            </h1>
            <p className="hero-reveal mt-6 max-w-2xl text-lg text-white/72 sm:text-xl">
              {heroContent.subheadline}
            </p>
            <ShinyText
              className="hero-reveal mt-6 max-w-2xl text-base leading-7 text-white/82 sm:text-lg"
              text={heroContent.intro}
            />

            <div className="hero-reveal mt-10 flex flex-col gap-4 sm:flex-row">
              <Magnet magnetStrength={2}>
                <Button
                  href={heroContent.primaryCta.href}
                  className="rounded-full border border-orange-400/30 bg-orange-500 px-7 text-sm tracking-[0.22em] text-black transition-transform duration-300 hover:translate-y-[-2px] hover:text-black"
                >
                  {heroContent.primaryCta.label}
                  <ArrowRight size={16} />
                </Button>
              </Magnet>

              <Button
                href={`mailto:${siteConfig.email}`}
                className="rounded-full border border-white/12 bg-white/5 px-7 text-sm tracking-[0.22em] text-white backdrop-blur-sm hover:bg-white hover:text-black"
              >
                {heroContent.secondaryCta.label}
                <Mail size={16} />
              </Button>
            </div>
          </div>

          <div className="hero-reveal">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-md">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-electric-blue">
                    Developer Focus
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    Frontend, full-stack, mobile
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="size-3 rounded-full bg-orange-400/80" />
                  <span className="size-3 rounded-full bg-slate-400/80" />
                  <span className="size-3 rounded-full bg-sky-400/80" />
                </div>
              </div>

              <div className="space-y-4 rounded-[1.5rem] border border-white/8 bg-black/40 p-5">
                {heroContent.codeLines.map((line) => (
                  <div
                    className="flex items-start gap-3 text-sm text-white/72 sm:text-[15px]"
                    key={line}
                  >
                    <span className="mt-1.5 size-2 rounded-full bg-orange-400" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                    Location
                  </p>
                  <p className="mt-2 text-lg text-white">{siteConfig.location}</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                    Availability
                  </p>
                  <p className="mt-2 text-lg text-white">{siteConfig.availability}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
