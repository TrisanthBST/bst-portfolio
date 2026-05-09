import { siteConfig, socialLinks } from "@/src/content/portfolio";

export default async function Footer() {
  return (
    <footer className="pb-5 text-center" id="contact">
      <div className="container mx-auto">
        <p className="text-lg text-white/70">Let&apos;s build something thoughtful and reliable.</p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-display mt-5 mb-8 inline-block text-3xl font-semibold hover:underline sm:text-5xl"
        >
          {siteConfig.email}
        </a>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-white/70">
          {socialLinks.map((link) => (
            <a
              href={link.url}
              key={link.name}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-white/10 px-4 py-2 transition-colors hover:bg-white hover:text-black"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div>
          <p className="leading-none text-white/55">
            {siteConfig.brandName} by {siteConfig.ownerName}
          </p>
        </div>
      </div>
    </footer>
  );
}
