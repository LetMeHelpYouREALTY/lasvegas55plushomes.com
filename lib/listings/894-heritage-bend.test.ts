import { describe, expect, it } from "vitest";
import {
  heritageBend894,
  shouldFeatureHeritageBend,
} from "./894-heritage-bend";

const BLOCKED_PHRASES = [
  "safe neighborhood",
  "good schools",
  "family-friendly",
  "established community",
  "janet",
];

describe("894 Heritage Bend listing facts", () => {
  it("keeps the confirmed MLS price and number", () => {
    expect(heritageBend894.mlsNumber).toBe("2825123");
    expect(heritageBend894.price).toBe(539888);
    expect(heritageBend894.priceDisplay).toBe("$539,888");
    expect(heritageBend894.bedrooms).toBe(2);
    expect(heritageBend894.bathrooms).toBe(2);
    expect(heritageBend894.squareFeet).toBe(1234);
    expect(heritageBend894.associationFeeTotal).toBe(419);
  });

  it("features the home only on Heritage, 55+, and open-house domains", () => {
    expect(shouldFeatureHeritageBend("heritageatstonebridgehomes.com")).toBe(
      true,
    );
    expect(shouldFeatureHeritageBend("www.lasvegas55plushomes.com")).toBe(true);
    expect(shouldFeatureHeritageBend("openhouseupdate.com")).toBe(true);
    expect(shouldFeatureHeritageBend("searchforhomesinhenderson.com")).toBe(
      false,
    );
  });

  it("avoids fair-housing proxy language in remarks", () => {
    const text = heritageBend894.remarks.join(" ").toLowerCase();
    for (const phrase of BLOCKED_PHRASES) {
      expect(text).not.toContain(phrase);
    }
  });
});
