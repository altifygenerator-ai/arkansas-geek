import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://arkansasgeek.com";

  const routes = [
    {
      path: "",
      priority: 1,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/computer-repair",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/air-cooled-volkswagen-repair",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}