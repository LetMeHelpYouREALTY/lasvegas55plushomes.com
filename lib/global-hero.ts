/**
 * Compact global hero banner config — shown on every page via root layout.
 * Distinct from full-bleed PageHero (homepage / page-level heroes).
 */

export type GlobalHeroConfig = {
  src: string;
  alt: string;
  tagline: string;
  phoneDisplay?: string;
  phoneTel?: string;
};

export const GLOBAL_HERO: GlobalHeroConfig = {
  src: "/images/global-hero/lasvegas-55plus-homes.jpg",
  alt: "Active adult community recreation center exterior with desert landscaping, Las Vegas, NV",
  tagline: "Las Vegas 55+ Homes by Dr. Jan Duffy",
  phoneDisplay: "(702) 222-1964",
  phoneTel: "tel:+17022221964",
};
