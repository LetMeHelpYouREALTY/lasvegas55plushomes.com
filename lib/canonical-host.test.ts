import { describe, expect, it } from "vitest";
import {
  PRIMARY_ORIGIN,
  apexHost,
  canonicalOrigin,
  shouldRedirectApexToWww,
  wwwHostname,
} from "./canonical-host";

describe("canonical host (www is primary)", () => {
  it("uses https://www for the production apex and www host", () => {
    expect(canonicalOrigin("lasvegas55plushomes.com")).toBe(PRIMARY_ORIGIN);
    expect(canonicalOrigin("www.lasvegas55plushomes.com")).toBe(PRIMARY_ORIGIN);
    expect(canonicalOrigin("LASVEGAS55PLUSHomes.com:443")).toBe(PRIMARY_ORIGIN);
  });

  it("falls back to the www production origin when host is missing", () => {
    expect(canonicalOrigin()).toBe(PRIMARY_ORIGIN);
    expect(canonicalOrigin("")).toBe(PRIMARY_ORIGIN);
    expect(canonicalOrigin("   ")).toBe(PRIMARY_ORIGIN);
  });

  it("does not invent a www subdomain on Vercel previews", () => {
    expect(canonicalOrigin("branch-abc.vercel.app")).toBe(
      "https://branch-abc.vercel.app",
    );
  });

  it("keeps localhost on http and does not redirect it to www", () => {
    expect(canonicalOrigin("localhost:3000")).toBe("http://localhost:3000");
    expect(shouldRedirectApexToWww("localhost:3000")).toBe(false);
    expect(shouldRedirectApexToWww("127.0.0.1")).toBe(false);
  });

  it("redirects production apex to www, not already-www or preview hosts", () => {
    expect(shouldRedirectApexToWww("lasvegas55plushomes.com")).toBe(true);
    expect(shouldRedirectApexToWww("www.lasvegas55plushomes.com")).toBe(false);
    expect(shouldRedirectApexToWww("preview.vercel.app")).toBe(false);
    expect(wwwHostname("lasvegas55plushomes.com")).toBe(
      "www.lasvegas55plushomes.com",
    );
    expect(apexHost("www.lasvegas55plushomes.com")).toBe(
      "lasvegas55plushomes.com",
    );
  });
});
