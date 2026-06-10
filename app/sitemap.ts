import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aripuja.vercel.app",
      priority: 1,
      changeFrequency: "monthly",
    },

    {
      url: "https://aripuja.vercel.app/resume",
      priority: 0.9,
      changeFrequency: "monthly",
    },

    {
      url: "https://aripuja.vercel.app/projects/spbu-monitoring",
      priority: 0.8,
      changeFrequency: "monthly",
    },

    {
      url: "https://aripuja.vercel.app/projects/company-profile",
      priority: 0.8,
      changeFrequency: "monthly",
    },

    {
      url: "https://aripuja.vercel.app/projects/mobile-app",
      priority: 0.8,
      changeFrequency: "monthly",
    },
  ];
}