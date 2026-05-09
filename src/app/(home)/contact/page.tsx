import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

import { siteConfig, socialLinks } from "@/src/content/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with B. Trisanth for internships, software roles, and freelance work.",
};

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

export default function ContactPage() {
  return (
    <section className="px-6 pt-28 pb-20 md:px-0">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-12">
          <p className="text-sm uppercase tracking-[0.24em] text-orange-400">Contact</p>
          <h1 className="mt-5 font-display text-4xl font-semibold text-white sm:text-6xl">
            Let&apos;s talk about building something strong.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            I&apos;m open to internship opportunities, software engineering roles, frontend or
            full-stack work, and freelance projects.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-[1.5rem] border border-white/10 bg-black/25 p-6 transition-colors hover:bg-white hover:text-black"
            >
              <Mail className="mb-4 text-orange-400" />
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">Email</p>
              <p className="mt-2 text-lg text-white hover:text-black">{siteConfig.email}</p>
            </a>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-6">
              <MapPin className="mb-4 text-sky-400" />
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">Location</p>
              <p className="mt-2 text-lg text-white">{siteConfig.location}</p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-sm uppercase tracking-[0.24em] text-white/45">Social Links</p>
            <div className="mt-5 flex flex-wrap gap-4">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.name as keyof typeof iconMap];

                return (
                  <a
                    href={link.url}
                    key={link.name}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black"
                  >
                    {Icon ? <Icon size={16} /> : null}
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
