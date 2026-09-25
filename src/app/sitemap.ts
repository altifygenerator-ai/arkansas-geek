import type { MetadataRoute } from "next";
import {
  computerServicePages,
  serviceAreaPages,
  vwServicePages,
} from "@/data/seo-content";
import { siteUrl } from "@/lib/site";

const lastModified = new Date("2026-09-24");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    {
      path: "/computer-repair",
      priority: 0.95,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/air-cooled-volkswagen-repair",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/repair-request",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/service-areas",
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    { path: "/about", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  const computerRoutes = computerServicePages.map((page) => ({
    path: "/computer-repair/services/" + page.slug,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const areaRoutes = serviceAreaPages.map((area) => ({
    path: "/computer-repair/areas/" + area.slug,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const vwRoutes = vwServicePages.map((page) => ({
    path: "/air-cooled-volkswagen-repair/" + page.slug,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...computerRoutes, ...areaRoutes, ...vwRoutes].map(
    (route) => ({
      url: siteUrl + route.path,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }),
  );
}
