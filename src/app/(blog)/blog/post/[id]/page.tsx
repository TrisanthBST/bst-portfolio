import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Post ${id}`,
    description: "This blog post is not available in the current public portfolio deployment.",
  };
}

export default async function Page() {
  return (
    <section className="container px-8 pt-24 pb-20 md:px-0">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12">
        <p className="text-sm uppercase tracking-[0.24em] text-orange-400">Blog Post</p>
        <h1 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
          This post is not published
        </h1>
        <p className="mt-5 text-lg leading-8 text-white/72">
          The legacy blog system is disabled in this public deployment while the portfolio is being
          streamlined.
        </p>
        <Link
          href="/blog"
          className="mt-8 inline-flex rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-black"
        >
          Back To Blog
        </Link>
      </div>
    </section>
  );
}
