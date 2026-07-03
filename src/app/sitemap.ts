import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const lastModified = new Date("2026-07-03");

export default function sitemap(): MetadataRoute.Sitemap {
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
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/repair-request",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
