import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical writing and notes from B. Trisanth will be published here later.",
};

export default function Page() {
  return (
    <section className="container px-8 pt-24 pb-20 md:px-0">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12">
        <p className="text-sm uppercase tracking-[0.24em] text-orange-400">Blog</p>
        <h1 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
          Writing section coming later
        </h1>
        <p className="mt-5 text-lg leading-8 text-white/72">
          This portfolio is currently focused on core recruiter-facing sections. Technical articles
          and notes can be added once the main site is fully polished.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black"
        >
          Back To Portfolio
        </Link>
      </div>
    </section>
  );
}
