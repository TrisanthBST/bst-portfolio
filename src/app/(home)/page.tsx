import { Metadata } from "next";

import AboutMe from "@/src/components/about-me";
import Banner from "@/src/components/banner";
import Experiences from "@/src/components/experiences";
import ProjectList from "@/src/components/project-list";
import Skills from "@/src/components/skills";
import { siteConfig } from "@/src/content/portfolio";

export const metadata: Metadata = {
  title: `${siteConfig.ownerName} | ${siteConfig.title}`,
};

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="container px-5 sm:px-6 md:px-0">
=======
    <div className="container px-8 md:px-0">
>>>>>>> 1057804aa67347f960b68b38a29324133b3fe547
      <Banner />
      <AboutMe />
      <Skills />
      <Experiences />
      <ProjectList />
    </div>
  );
}
