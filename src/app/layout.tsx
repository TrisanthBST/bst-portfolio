import { Analytics } from "@vercel/analytics/next";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";

import { siteConfig } from "@/src/content/portfolio";
import Providers from "@/src/providers/providers";
import "@/src/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    template: `${siteConfig.brandName} | %s`,
    default: siteConfig.seo.title,
  },
  description: siteConfig.seo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.brandName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
};

if (siteConfig.seo.url) {
  metadata.metadataBase = new URL(siteConfig.seo.url);
  metadata.openGraph = {
    ...metadata.openGraph,
    url: siteConfig.seo.url,
  };
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${poppins.variable} relative bg-black text-white antialiased`}
      >
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            duration: 1.1,
          }}
        >
          <main>
            <Providers>{children}</Providers>
          </main>
        </ReactLenis>
        <Analytics />
      </body>
    </html>
  );
}
