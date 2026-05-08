import { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectDetails from "@/src/components/project-details";
import { getProjectBySlug, siteConfig } from "@/src/content/portfolio";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectBySlug(id);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} | ${siteConfig.ownerName}`,
    description: project.description,
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  if (!id || !getProjectBySlug(id)) {
    return notFound();
  }
  return <ProjectDetails id={id} />;
}
