"use client";

import { useLenis } from "lenis/react";
import { MoveUpRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "@/src/content/portfolio";
import { GENERAL_INFO, SOCIAL_LINKS } from "@/src/lib/data";
import { cn } from "@/src/lib/utils";

const COLORS = [
  "bg-yellow-500 text-black",
  "bg-blue-500 text-white",
  "bg-teal-500 text-black",
  "bg-violet-500 text-white",
  "bg-lime-500 text-white",
];

const MENU_LINKS = [
  {
    name: "Home",
    url: "#",
  },
  {
    name: "About",
    url: "#about-me",
  },
  {
    name: "Skills",
    url: "#my-stack",
  },
  {
    name: "Experience",
    url: "#my-experience",
  },
  {
    name: "Project",
    url: "#selected-projects",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (target: string) => {
    if (target.startsWith("/")) {
      router.push(target);
      return;
    }

    const isHome = pathname === "/" || pathname === "";

    if (!isHome) {
      if (target === "#") {
        router.push("/");
      } else {
        router.push("/");
        if (lenis)
          setTimeout(() => {
            lenis.scrollTo(target, { offset: -30 });
          }, 1000);
      }
      return;
    }

    if (!lenis) return;

    if (target === "#") {
      lenis.scrollTo(0);
    } else {
      lenis.scrollTo(target, { offset: -50 });
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-40 h-24 pointer-events-none">
        <div className="absolute top-5 left-5 z-20 pointer-events-auto md:left-10">
          <div className="rounded-full border border-white/10 bg-black/55 px-4 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-md">
            <p className="font-display text-sm uppercase tracking-[0.22em] text-white/78">
              {siteConfig.brandName}
            </p>
          </div>
        </div>
        <button
          className={cn("group absolute top-5 right-5 z-20 size-12 cursor-pointer pointer-events-auto md:right-10")}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={cn(
              "absolute top-1/2 left-1/2 inline-block h-0.5 w-3/5 -translate-x-1/2 -translate-y-[5px] rounded-full bg-white duration-300",
              {
                "-translate-y-1/2 rotate-45": isMenuOpen,
                "md:group-hover:rotate-12": !isMenuOpen,
              }
            )}
          ></span>
          <span
            className={cn(
              "absolute top-1/2 left-1/2 inline-block h-0.5 w-3/5 -translate-x-1/2 translate-y-[5px] rounded-full bg-white duration-300",
              {
                "-translate-y-1/2 -rotate-45": isMenuOpen,
                "md:group-hover:-rotate-12": !isMenuOpen,
              }
            )}
          ></span>
        </button>
      </nav>

      <div
<<<<<<< HEAD
        className={cn("overlay fixed inset-0 z-[2] bg-black/70 transition-all duration-150", {
=======
        className={cn("overlay fixed inset-0 z-2 bg-black/70 transition-all duration-150", {
>>>>>>> 1057804aa67347f960b68b38a29324133b3fe547
          "pointer-events-none invisible opacity-0": !isMenuOpen,
        })}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div
        className={cn(
<<<<<<< HEAD
          "fixed top-0 right-0 z-[3] h-svh w-[500px] max-w-[calc(100vw-2rem)] translate-x-full transform gap-y-14 overflow-hidden transition-transform duration-700",
=======
          "fixed top-0 right-0 z-3 h-svh w-[500px] max-w-[calc(100vw-3rem)] translate-x-full transform gap-y-14 overflow-hidden transition-transform duration-700",
>>>>>>> 1057804aa67347f960b68b38a29324133b3fe547
          "flex flex-col py-10 lg:justify-center",
          { "translate-x-0": isMenuOpen }
        )}
      >
        <div
          className={cn(
            "bg-primary fixed inset-0 z-[-1] translate-x-1/2 scale-150 rounded-[50%] delay-150 duration-700",
            {
              "translate-x-0": isMenuOpen,
            }
          )}
        ></div>

        <div className="mx-8 flex w-full max-w-[300px] grow sm:mx-auto md:items-center">
          <div className="flex w-full gap-10 max-lg:flex-col lg:justify-between">
            <div className="max-lg:order-2">
              <p className="mb-5 text-white md:mb-8">LINKS</p>
              <ul className="space-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-lg capitalize hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <p className="text-muted-white mb-5 md:mb-8">MENU</p>
              <ul className="space-y-3">
                {MENU_LINKS.map((link, idx) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        handleClick(link.url);
                        setIsMenuOpen(false);
                      }}
                      className="group flex items-center gap-3 text-xl"
                    >
                      <span
                        className={cn(
                          "flex size-3.5 items-center justify-center rounded-full bg-white/20 transition-all group-hover:scale-[200%]",
                          COLORS[idx]
                        )}
                      >
                        <MoveUpRight
                          size={8}
                          className="scale-0 transition-all group-hover:scale-100"
                        />
                      </span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-8 w-full max-w-[300px] sm:mx-auto">
          <p className="text-muted-white mb-4">GET IN TOUCH</p>
          <a className="text-lg" href={`mailto:${GENERAL_INFO.email}`}>
            {GENERAL_INFO.email}
          </a>
          <p className="mt-4 text-sm text-white/60">{siteConfig.location}</p>
        </div>
      </div>
    </>
  );
}
