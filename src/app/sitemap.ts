import type { MetadataRoute } from "next";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nikitaeliasov.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: `${baseUrl}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  };

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}/`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const experienceRoutes = experience.map((item) => ({
    url: `${baseUrl}/experience/${item.slug}/`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [home, ...projectRoutes, ...experienceRoutes];
}
