import type { MetadataRoute } from "next";

const SITE = "https://www.potomacdogwalking.com";

const routes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/dog-walking", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/canine-enrichment", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/medication-administration", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/backyard-cleanup", changeFrequency: "monthly", priority: 0.8 },
  { path: "/service-area", changeFrequency: "monthly", priority: 0.8 },
  { path: "/dog-walking-20854", changeFrequency: "monthly", priority: 0.8 },
  { path: "/dog-walking-north-potomac", changeFrequency: "monthly", priority: 0.8 },
  { path: "/dog-walking-travilah", changeFrequency: "monthly", priority: 0.8 },
  { path: "/dog-walking-avenel-potomac", changeFrequency: "monthly", priority: 0.8 },
  { path: "/dog-walking-avenel", changeFrequency: "monthly", priority: 0.8 },
  { path: "/dog-walking-falconhurst", changeFrequency: "monthly", priority: 0.8 },
  { path: "/dog-walking-glen-road", changeFrequency: "monthly", priority: 0.8 },
  { path: "/dog-walking-potomac-village", changeFrequency: "monthly", priority: 0.8 },
  { path: "/dog-walking-near-great-falls-park", changeFrequency: "monthly", priority: 0.8 },
  { path: "/dog-walking-prices-potomac-md", changeFrequency: "monthly", priority: 0.8 },
  { path: "/midday-dog-walking-potomac", changeFrequency: "monthly", priority: 0.7 },
  { path: "/same-day-dog-walking-potomac", changeFrequency: "monthly", priority: 0.7 },
  { path: "/dog-walking-reactive-dogs-potomac", changeFrequency: "monthly", priority: 0.7 },
  { path: "/best-dog-walking-routes-potomac", changeFrequency: "monthly", priority: 0.7 },
  { path: "/how-to-choose-dog-walker-potomac", changeFrequency: "monthly", priority: 0.7 },
  { path: "/is-dog-walking-worth-it", changeFrequency: "monthly", priority: 0.6 },
  { path: "/get-started-dog-walker-potomac", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "yearly", priority: 0.6 },
  { path: "/dog-walkers", changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
