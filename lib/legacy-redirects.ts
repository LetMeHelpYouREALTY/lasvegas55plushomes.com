/**
 * Legacy WordPress -> Next.js migration redirect logic for lasvegas55plushomes.com.
 *
 * The previous WordPress site was crawled by Google and left ~440 URLs that now
 * 404 on the Next.js site. This module classifies an incoming pathname into one
 * of three outcomes used by `middleware.ts`:
 *
 *   1. GONE (410)    - spam / hacked WordPress URLs and dead WP infrastructure.
 *                      Universally invalid, so safe to apply across every host
 *                      served by this multi-tenant deployment.
 *   2. REDIRECT (301)- legacy URLs that map to a real page on the new site.
 *                      Scoped to lasvegas55plushomes.com in middleware.
 *   3. null          - not a legacy URL we recognize; let Next.js handle it.
 */

/** Real routes that exist on the new site. Never rewrite/redirect these. */
const KNOWN_ROUTES = new Set<string>([
  "/",
  "/about",
  "/contact",
  "/faq",
  "/listings",
  "/market-update",
  "/market-report",
  "/market-insights",
  "/services",
  "/sellers",
  "/sellers/move-up",
  "/sellers/downsizing",
  "/sellers/divorce-probate",
  "/sellers/relocation",
  "/buyers",
  "/buyers/first-time-buyers",
  "/buyers/california-relocator",
  "/buyers/luxury-homes-las-vegas",
  "/relocation",
  "/new-construction",
  "/investment-properties",
  "/luxury-homes",
  "/home-valuation",
  "/neighborhoods",
  "/neighborhoods/summerlin",
  "/neighborhoods/henderson",
  "/neighborhoods/green-valley",
  "/neighborhoods/the-ridges",
  "/neighborhoods/southern-highlands",
  "/neighborhoods/north-las-vegas",
  "/neighborhoods/skye-canyon",
  "/neighborhoods/centennial-hills",
  "/neighborhoods/mountains-edge",
  "/neighborhoods/inspirada",
  "/google-business",
  "/security-policy",
  "/privacy-policy",
  "/fair-housing-statement",
  "/why-berkshire-hathaway",
  "/55-plus-communities",
  "/55-plus-communities/sun-city-summerlin",
  "/55-plus-communities/sun-city-anthem",
  "/55-plus-communities/sun-city-aliante",
  "/55-plus-communities/solera-anthem",
  "/55-plus-communities/trilogy-summerlin",
  "/55-plus-communities/del-webb-lake-las-vegas",
  "/55-plus-communities/heritage-stonebridge",
]);

/** Normalize a pathname for comparison: lowercase, strip trailing slash. */
function normalize(pathname: string): string {
  const lower = pathname.toLowerCase();
  if (lower.length > 1 && lower.endsWith("/")) return lower.replace(/\/+$/, "");
  return lower;
}

export function isKnownRoute(pathname: string): boolean {
  const n = normalize(pathname);
  return KNOWN_ROUTES.has(n) || n.startsWith("/listings/");
}

/**
 * Spam / dead WordPress infrastructure -> 410 Gone.
 * These patterns are invalid on ANY of the Next.js sites in this deployment,
 * so middleware applies them regardless of host.
 */
export function isGonePath(pathname: string): boolean {
  const p = pathname.toLowerCase();
  return (
    // Hacked WordPress author spam: /author/www-xxxx-blogspot-..-binance/...
    p.startsWith("/author/") ||
    // WordPress core/theme/plugin/upload paths
    p.startsWith("/wp-content/") ||
    p.startsWith("/wp-includes/") ||
    p.startsWith("/wp-admin") ||
    p.startsWith("/wp-json") ||
    p.startsWith("/wp-login") ||
    p === "/xmlrpc.php" ||
    p.startsWith("/backend/") ||
    p === "/backend" ||
    // RSS/Atom feeds
    p === "/feed" ||
    p.endsWith("/feed") ||
    p.endsWith("/feed/")
  );
}

/**
 * Old WordPress taxonomy / archive paths specific to the legacy lasvegas site.
 * No equivalent on the new site -> 410 Gone (clean de-index), unless an explicit
 * map or topical rule catches it first.
 */
export function isLegacyArchivePath(pathname: string): boolean {
  const p = normalize(pathname);
  return (
    // Date archives: /2025, /2025/04, /2024/08/07
    /^\/\d{4}(\/\d{2}){0,2}$/.test(p) ||
    // Paginated archives: /blog/page/76, /features/.../page/51
    /\/page\/\d+$/.test(p) ||
    // Tag archives
    p.startsWith("/tag/")
  );
}

/** Exact legacy URL -> new route map (checked before topical rules). */
const EXPLICIT_REDIRECTS: Record<string, string> = {
  "/homepage": "/",
  "/about-us-4": "/about",
  "/for-buyers": "/buyers",
  "/buying-tips": "/buyers",
  "/for-sellers": "/sellers",
  "/selling-tips": "/sellers",
  "/for-sale-by-owner": "/sellers",
  "/available-homes": "/listings",
  "/testimonials": "/about",
  "/pricing": "/home-valuation",
  "/infographics": "/market-insights",
  "/blog": "/market-insights",
  "/blogs": "/market-insights",
  "/community-tours": "/55-plus-communities",
  "/events/community-tour": "/55-plus-communities",
  "/featured-las-vegas-55-community-homes": "/55-plus-communities",
  "/las-vegas-55-plus-communities-mistakes": "/55-plus-communities",
  "/communities/sun-city-anthem": "/55-plus-communities/sun-city-anthem",
  "/sun-city-summerlin-where-luxury-meets-legacy-in-americas-premier-55-community":
    "/55-plus-communities/sun-city-summerlin",
  "/welcome-to-silverstone-ranch": "/neighborhoods",
  "/homebuyer-guide/making-an-offer": "/buyers",
  "/homebuyer-guide/housing-needs-assessment": "/buyers",
  "/privacy-policy-2": "/privacy-policy",
};

/**
 * Topical fallback: route a legacy blog-post / taxonomy slug to the closest
 * hub page based on keywords in the path. Returns null when nothing relevant
 * matches (caller decides whether to 410 or 404).
 */
export function getTopicalRedirect(pathname: string): string | null {
  const p = pathname.toLowerCase();

  // 55+ / retirement / downsizing / senior living
  // Note: ambiguous short tokens (e.g. "aging") are hyphen-bounded to avoid
  // matching unrelated words like "staging".
  if (/(retirement|retire|downsiz|senior|55-plus|55-community|active-adult|aging-in-place|age-in-place|as-you-age|independent-senior)/.test(p)) {
    return "/55-plus-communities";
  }
  // Home value / equity
  if (/(equity|home-is-worth|house-is-worth|home-worth|home-value|net-worth|appraisal|what-your-house-is-really-worth)/.test(p)) {
    return "/home-valuation";
  }
  // Selling
  if (/(sell|selling|stage|staging|list-your-house|listing|asking-price|pricing|fsbo|home-inspection|curb|for-sale|prepare|prepping|prep-|upgrade|renovat|remodel|declutter|sold|didnt-sell|hasnt-sold)/.test(p)) {
    return "/sellers";
  }
  // Market / rates / forecasts / economy
  if (/(market|forecast|mortgage-rate|interest-rate|fed-|rate-cut|recession|economy|economic|foreclosure|inventory|home-prices|price-growth|housing-market)/.test(p)) {
    return "/market-insights";
  }
  // Buying (broad catch for remaining KCM buyer content)
  if (/(buy|buyer|first-time|pre-approval|pre-approved|down-payment|mortgage|afford|credit-score|new-construction|newly-built|condo|townhome|co-buying|rent-vs-buy|rent-or-buy|offer|closing-cost|homeownership)/.test(p)) {
    return "/buyers";
  }
  return null;
}

export type LegacyOutcome =
  | { type: "gone" }
  | { type: "redirect"; destination: string }
  | { type: "none" };

/**
 * Resolve the migration outcome for a legacy (this-site) pathname.
 * Spam/global-gone is handled separately in middleware via isGonePath().
 */
export function resolveLegacyOutcome(pathname: string): LegacyOutcome {
  if (isKnownRoute(pathname)) return { type: "none" };

  const n = normalize(pathname);

  const explicit = EXPLICIT_REDIRECTS[n];
  if (explicit) return { type: "redirect", destination: explicit };

  // Old taxonomy under /properties/* and /features/* -> topical or gone.
  if (n.startsWith("/properties/") || n.startsWith("/features/")) {
    const topical = getTopicalRedirect(n);
    return topical ? { type: "redirect", destination: topical } : { type: "gone" };
  }

  // Date archives, /page/N, /tag/* -> gone.
  if (isLegacyArchivePath(n)) return { type: "gone" };

  // Remaining single-segment slugs are legacy KCM blog posts. Route to the
  // closest topical hub; anything that matches no topic is treated as gone
  // (410) rather than funneled to a hub, which would create soft-404 signals.
  const isSingleSegment = /^\/[a-z0-9-]+$/.test(n);
  if (isSingleSegment) {
    const topical = getTopicalRedirect(n);
    return topical ? { type: "redirect", destination: topical } : { type: "gone" };
  }

  // Multi-segment artifacts (e.g. /slug/drjanduffy, /slug//) -> try topical.
  const topical = getTopicalRedirect(n);
  if (topical) return { type: "redirect", destination: topical };

  return { type: "none" };
}
