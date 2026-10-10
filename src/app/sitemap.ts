import type { MetadataRoute } from "next";

import { getAllArticlePaths, getAllCategoryPaths } from "@/lib/queries";
import { absoluteUrl } from "@/lib/seo";
import { getDiscoveryLessons } from "@/lib/discovery/load";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [categories, articles, discoveries] = await Promise.all([
    getAllCategoryPaths(),
    getAllArticlePaths(),
    getDiscoveryLessons(),
  ]);
  const now = new Date();

  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: absoluteUrl("/decouvrir"), lastModified: now, changeFrequency: "daily", priority: 0.9 },
    ...discoveries.map((lesson) => ({
      url: absoluteUrl(`/decouvrir/${lesson.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: absoluteUrl("/categories"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    { url: absoluteUrl("/a-propos"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ...categories.map((path) => ({
      url: absoluteUrl(`/${path}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...articles.map((article) => ({
      url: absoluteUrl(`/${article.path}`),
      lastModified: article.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
