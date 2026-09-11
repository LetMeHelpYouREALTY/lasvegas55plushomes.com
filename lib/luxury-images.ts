/**
 * Luxury photography catalog for heading-matched page imagery.
 * All files live under /public/images.
 */

export const luxuryImages = {
  heroes: {
    lasVegasHomes: {
      src: "/images/hero/las-vegas-luxury-estate.jpg",
      alt: "Luxury desert-contemporary estate in Summerlin with Red Rock Canyon views at golden hour",
    },
    twilightVilla: {
      src: "/images/hero/twilight-villa.jpg",
      alt: "Twilight luxury villa in Henderson with glowing interiors and a linear spa pool",
    },
    theRidges: {
      src: "/images/hero/the-ridges-estate.jpg",
      alt: "Guard-gated custom estate motor court in The Ridges, Summerlin",
    },
    fiftyFivePlus: {
      src: "/images/hero/55-plus-community.jpg",
      alt: "Resort-style 55-plus clubhouse, pool, and golf course in Summerlin",
    },
    buyers: {
      src: "/images/hero/buyers-foyer.jpg",
      alt: "Grand marble foyer and curved staircase in a Las Vegas luxury home",
    },
    sellers: {
      src: "/images/hero/sellers-staged.jpg",
      alt: "Staged luxury Las Vegas home exterior at twilight, prepared for listing",
    },
    highRise: {
      src: "/images/hero/high-rise-condos.jpg",
      alt: "Penthouse living room with floor-to-ceiling windows overlooking the Las Vegas Strip",
    },
    privateClient: {
      src: "/images/hero/private-client.jpg",
      alt: "Private study with walnut paneling and desert mountain views for confidential client meetings",
    },
  },
  interiors: {
    greatRoom: {
      src: "/images/interiors/great-room.jpg",
      alt: "Double-height luxury great room with limestone floors and Red Rock Canyon views",
    },
    infinityPool: {
      src: "/images/interiors/infinity-pool.jpg",
      alt: "Infinity-edge pool with fire bowls overlooking Red Rock Canyon at sunset",
    },
  },
  properties: {
    summerlinModern: {
      src: "/images/properties/summerlin-modern.jpg",
      alt: "Modern luxury home in Summerlin with stacked stone, glass, and desert landscaping",
    },
    hendersonPool: {
      src: "/images/properties/henderson-pool.jpg",
      alt: "Henderson luxury home with resort-style pool and desert mountain backdrop",
    },
    greenValleyEstate: {
      src: "/images/properties/green-valley-estate.jpg",
      alt: "Mediterranean-inspired estate in Green Valley, Henderson with courtyard fountain",
    },
  },
  neighborhoods: {
    summerlin: {
      src: "/images/neighborhoods/summerlin.jpg",
      alt: "Summerlin master-planned street of desert-contemporary homes with Red Rock Canyon beyond",
    },
    henderson: {
      src: "/images/neighborhoods/henderson.jpg",
      alt: "Henderson hillside luxury homes overlooking the Las Vegas Valley",
    },
    southernHighlands: {
      src: "/images/neighborhoods/southern-highlands.jpg",
      alt: "Southern Highlands championship golf fairway lined with luxury custom homes",
    },
    greenValley: {
      src: "/images/neighborhoods/green-valley.jpg",
      alt: "Green Valley Henderson street of luxury homes with mature desert trees",
    },
    theRidges: {
      src: "/images/hero/the-ridges-estate.jpg",
      alt: "Custom estate in The Ridges Summerlin with circular motor court",
    },
    macdonaldHighlands: {
      src: "/images/neighborhoods/macdonald-highlands.jpg",
      alt: "MacDonald Highlands hillside mansion with distant Las Vegas Strip views at dusk",
    },
    lakeLasVegas: {
      src: "/images/neighborhoods/lake-las-vegas.jpg",
      alt: "Lake Las Vegas Mediterranean lakefront villas with private docks",
    },
    ascaya: {
      src: "/images/neighborhoods/ascaya.jpg",
      alt: "Ascaya Henderson ultra-modern hillside custom home in white concrete and glass",
    },
    northwest: {
      src: "/images/neighborhoods/northwest.jpg",
      alt: "Northwest Las Vegas master-planned homes with mountain backdrop at golden hour",
    },
    northLasVegas: {
      src: "/images/neighborhoods/northwest.jpg",
      alt: "North Las Vegas newer desert-contemporary homes with mountain views",
    },
    skyeCanyon: {
      src: "/images/neighborhoods/northwest.jpg",
      alt: "Skye Canyon Northwest Las Vegas homes with desert landscaping and mountains",
    },
    centennialHills: {
      src: "/images/neighborhoods/northwest.jpg",
      alt: "Centennial Hills homes with mountain backdrop in Northwest Las Vegas",
    },
    inspirada: {
      src: "/images/neighborhoods/henderson.jpg",
      alt: "Inspirada Henderson resort-style community homes with valley views",
    },
    mountainsEdge: {
      src: "/images/neighborhoods/southern-highlands.jpg",
      alt: "Mountain's Edge Southwest Las Vegas homes near desert mountain open space",
    },
  },
} as const;

import { localBusiness } from "@/lib/local-business";

export const luxuryCtaPhone = {
  display: localBusiness.phone.display,
  tel: localBusiness.phone.tel,
};

export const luxuryOfficeNap = {
  name: localBusiness.name,
  street: localBusiness.address.streetAddress,
  city: localBusiness.address.addressLocality,
  state: localBusiness.address.addressRegion,
  zip: localBusiness.address.postalCode,
  hours: localBusiness.hoursDisplay,
};

const neighborhoodBySlug: Record<string, { src: string; alt: string }> = {
  summerlin: luxuryImages.neighborhoods.summerlin,
  henderson: luxuryImages.neighborhoods.henderson,
  "green-valley": luxuryImages.neighborhoods.greenValley,
  "the-ridges": luxuryImages.neighborhoods.theRidges,
  "southern-highlands": luxuryImages.neighborhoods.southernHighlands,
  "north-las-vegas": luxuryImages.neighborhoods.northLasVegas,
  "skye-canyon": luxuryImages.neighborhoods.skyeCanyon,
  "centennial-hills": luxuryImages.neighborhoods.centennialHills,
  inspirada: luxuryImages.neighborhoods.inspirada,
  "mountains-edge": luxuryImages.neighborhoods.mountainsEdge,
  "macdonald-highlands": luxuryImages.neighborhoods.macdonaldHighlands,
  "lake-las-vegas": luxuryImages.neighborhoods.lakeLasVegas,
  ascaya: luxuryImages.neighborhoods.ascaya,
};

export function getNeighborhoodImage(slug: string) {
  return neighborhoodBySlug[slug] ?? luxuryImages.neighborhoods.summerlin;
}
