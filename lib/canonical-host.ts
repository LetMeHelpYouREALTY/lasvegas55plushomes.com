/**
 * www is the primary host for production domains.
 * Apex (non-www) requests 301 to https://www.{apex}; canonicals, sitemap,
 * robots, metadataBase, and schema URLs all use the www origin.
 */

export const PRIMARY_APEX = "lasvegas55plushomes.com";
export const PRIMARY_ORIGIN = `https://www.${PRIMARY_APEX}`;

export function hostnameWithoutPort(host: string): string {
  return host.trim().toLowerCase().replace(/:\d+$/, "");
}

export function apexHost(host: string): string {
  return hostnameWithoutPort(host).replace(/^www\./, "");
}

export function isLocalOrPreviewHost(host: string): boolean {
  const h = hostnameWithoutPort(host);
  if (!h) return true;
  if (h === "localhost" || h.endsWith(".localhost")) return true;
  if (h === "127.0.0.1" || h === "[::1]" || h === "::1") return true;
  if (h.endsWith(".vercel.app") || h.endsWith(".vercel.sh")) return true;
  if (h.endsWith(".pages.dev")) return true;
  if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(h)) return true;
  return false;
}

/**
 * Canonical origin for the given Host header.
 * Production: always https://www.{apex}. Preview/local keep the request host.
 */
export function canonicalOrigin(host?: string | null): string {
  if (!host?.trim()) return PRIMARY_ORIGIN;
  const raw = host.trim().toLowerCase();
  const h = hostnameWithoutPort(raw);
  if (!h) return PRIMARY_ORIGIN;
  if (isLocalOrPreviewHost(h)) {
    const protocol =
      h === "localhost" ||
      h.endsWith(".localhost") ||
      h === "127.0.0.1" ||
      h === "[::1]" ||
      h === "::1"
        ? "http"
        : "https";
    return `${protocol}://${raw}`;
  }
  return `https://www.${apexHost(h)}`;
}

export function shouldRedirectApexToWww(host: string): boolean {
  const h = hostnameWithoutPort(host);
  if (!h || isLocalOrPreviewHost(h)) return false;
  return !h.startsWith("www.");
}

export function wwwHostname(host: string): string {
  const h = hostnameWithoutPort(host);
  if (h.startsWith("www.")) return h;
  return `www.${h}`;
}
