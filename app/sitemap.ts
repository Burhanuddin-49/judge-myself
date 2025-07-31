import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://judge-myself.vercel.app",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://judge-myself.vercel.app/create",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://judge-myself.vercel.app/feed",
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.9,
    },
  ]
}
