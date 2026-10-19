import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nikitaeliasov.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects/", "/experience/", "/about/"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }),
  );

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}/`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
