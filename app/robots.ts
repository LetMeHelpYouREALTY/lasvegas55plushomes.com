import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { canonicalOrigin } from "@/lib/canonical-host";

/**
 * Crawl controls aligned with Google Search Off the Record (Jul 2026):
 * block internal search / infinite param spaces via robots.txt Disallow
 * (preferred over noindex for crawl budget + spam-vector protection).
 * Not a Search Essentials "must," but still recommended for technical reasons.
 *
 * @see https://developers.google.com/search/docs/crawling-indexing/robots/intro
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = canonicalOrigin(headers().get("host"));

  const crawlBudgetGuards = [
    "/api/",
    "/search",
    "/search/",
    "/*?*q=",
    "/*?q=",
    "/*?*s=",
    "/*?s=",
    "/*?*query=",
    "/*?query=",
    "/*?*keyword=",
    "/*?keyword=",
    // Placeholder MLS detail URLs until RealScout-backed data is wired
    "/listings/",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: crawlBudgetGuards,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: crawlBudgetGuards,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
