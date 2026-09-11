import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { canonicalOrigin } from "@/lib/canonical-host";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = canonicalOrigin(headers().get("host"));
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
