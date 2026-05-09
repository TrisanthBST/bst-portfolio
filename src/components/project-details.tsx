import { ArrowLeft, Code, ExternalLink } from "lucide-react";

import { getProjectBySlug } from "@/src/content/portfolio";

import ProjectGallery from "./project-gallery";
import TransitionLink from "./transition-link";

interface Props {
  id: string;
}

export default function ProjectDetails({ id }: Props) {
  const project = getProjectBySlug(id);

  if (!project) {
    return (
      <section className="px-6 pt-28 pb-14 md:px-0">
        <div className="container">
          <TransitionLink href="/" className="group mb-16 inline-flex h-12 items-center gap-2">
            <ArrowLeft className="transition-all duration-300 group-hover:-translate-x-1 group-hover:text-orange-400" />
            Back
          </TransitionLink>

          <div className="flex min-h-[50vh] items-center justify-center py-10">
            <p className="py-10 text-center text-3xl text-white/60 md:text-4xl">Project not found.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 pt-28 pb-14 md:px-0">
      <div className="container">
        <TransitionLink
          href="/"
          className="group mb-16 inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-black/45 px-5 backdrop-blur-sm"
        >
          <ArrowLeft className="transition-all duration-300 group-hover:-translate-x-1 group-hover:text-orange-400" />
          Back
        </TransitionLink>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.22em] text-white/45">
              <span>{project.type}</span>
              <span>{project.team}</span>
              <span>{project.role}</span>
            </div>

            <h1 className="font-display text-4xl font-semibold text-white sm:text-6xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">{project.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.sourceCode ? (
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black"
                >
                  Source Code
                  <Code size={16} />
                </a>
              ) : null}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-500 px-5 py-3 text-sm uppercase tracking-[0.18em] text-black transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Live Demo
                  <ExternalLink size={16} />
                </a>
              ) : null}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">Project Snapshot</p>
            <div className="mt-5 space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-orange-400">Problem</p>
                <p className="mt-2 text-white/76">{project.problem}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-orange-400">My Contribution</p>
                <div className="mt-2 space-y-3">
                  {project.contribution.map((item) => (
                    <p className="text-white/76" key={item}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        <ProjectGallery images={project.gallery} title={project.name} />

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Technical Overview
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-white/76">
              <p>{project.problem}</p>
              <p>
                This project was delivered as a team effort, with a strong focus on operational
                efficiency, shipment visibility, and a modern dashboard experience.
              </p>
              <p>
                My work centered on the real-time tracking system and the admin management layer,
                helping shape both product functionality and internal workflows.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-sm uppercase tracking-[0.22em] text-white/45">Highlights</h3>
              <div className="mt-5 space-y-3">
                {project.highlights.map((highlight) => (
                  <div className="flex gap-3 text-white/76" key={highlight}>
                    <span className="mt-2 size-2 rounded-full bg-sky-400" />
                    <p>{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.22em] text-white/45">Stack</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/78"
                  key={tech}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
