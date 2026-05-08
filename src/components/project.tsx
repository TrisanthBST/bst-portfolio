import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

import TransitionLink from "@/src/components/transition-link";
import { ProjectItem } from "@/src/content/portfolio";

type Props = {
  index: number;
  project: ProjectItem;
};

export default function Project({ index, project }: Props) {
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
              className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-500 px-5 py-3 text-sm font-medium tracking-[0.18em] text-black uppercase transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Case Study
              <ArrowUpRight size={16} />
            </TransitionLink>

            {project.sourceCode ? (
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium tracking-[0.18em] text-white uppercase transition-colors hover:bg-white hover:text-black"
              >
                Source Code
                <Github size={16} />
              </a>
            ) : null}
          </div>
        </div>

        <div className="order-1 border-b border-white/10 lg:order-2 lg:border-b-0 lg:border-l">
          <div className="relative h-full min-h-[280px] overflow-hidden bg-linear-to-br from-slate-900 via-black to-sky-950">
            {project.thumbnail ? (
              <>
                <Image
                  src={project.thumbnail}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover opacity-88 transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
              </>
            ) : (
              <div className="flex h-full min-h-[280px] flex-col justify-between p-8">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/65">
                    Case Study Preview
                  </span>
                  <span className="size-20 rounded-full border border-sky-400/30 bg-sky-400/10 blur-sm" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-orange-400">CargoLink</p>
                  <p className="mt-4 max-w-sm font-display text-3xl leading-tight text-white">
                    Real-time logistics platform with admin workflows and secure shipment
                    management.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
