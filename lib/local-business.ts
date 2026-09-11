/**
 * Google Business Profile NAP for https://www.lasvegas55plushomes.com
 * (www is the primary host; apex 301s to www).
 * Visible text and LocalBusiness schema must match this file.
 * Source: GBP “Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy”
 * (captured 2026-09-11).
 */

export const localBusiness = {
  name: "Sun City Summerlin 55+ Real Estate | Homes by Dr. Jan Duffy",
  shortName: "Sun City Summerlin 55+ Real Estate",
  agentName: "Dr. Jan Duffy",
  license: "S.0197614.LLC",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  categories: [
    "Real estate agent",
    "Real estate agency",
    "Retirement community",
    "Real estate consultant",
  ] as const,
  description:
    "Find your 55+ home in Sun City Summerlin, Las Vegas. Dr. Jan Duffy guides active-adult buyers and sellers through golf-course, rec-center, and HOA communities with personalized realtor service.",
  url: "https://www.lasvegas55plushomes.com",
  foundingDate: "2013-09-20",
  phone: {
    display: "(702) 718-0043",
    tel: "tel:+17027180043",
    sms: "sms:+17027180043",
    e164: "+17027180043",
  },
  email: "homes@heyberkshire.com",
  address: {
    streetAddress: "9406 Del Webb Boulevard",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
    addressCountry: "US",
    full: "9406 Del Webb Boulevard, Las Vegas, NV 89134",
  },
  geo: {
    latitude: 36.2048,
    longitude: -115.2954,
  },
  hoursDisplay: "Open daily 6:00 AM–9:00 PM",
  openingHours: "Mo-Su 06:00-21:00",
  openingHoursSpecification: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ].map((day) => ({
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: day,
    opens: "06:00",
    closes: "21:00",
  })),
  specialHours: [
    { date: "2026-07-03", closed: true },
    { date: "2026-07-04", closed: true },
  ],
  languages: [
    "English",
    "Spanish",
    "Arabic",
    "Cantonese",
    "Filipino",
    "American Sign Language",
  ],
  attributes: [
    "Identifies as veteran-owned",
    "Identifies as women-owned",
    "Wheelchair accessible parking lot",
    "Wheelchair accessible restroom",
    "Wheelchair accessible seating",
    "Wheelchair accessible entrance",
    "Gender-neutral restroom",
    "Free parking lot",
    "Appointment not required",
    "Onsite services available",
    "Offers online appointments",
  ],
  serviceAreas: [
    "Sun City Summerlin, Las Vegas, NV 89134",
    "Las Vegas, NV 89135",
    "Las Vegas, NV 89138",
    "Las Vegas, NV 89166",
    "Las Vegas, NV 89122",
    "Anthem, Henderson, NV 89052",
    "MacDonald Ranch, Henderson, NV",
    "Lake Las Vegas, Henderson, NV 89011",
    "North Las Vegas, NV 89084",
    "Providence, Las Vegas, NV",
    "Henderson, NV",
    "Clark County, NV",
  ],
  socialProfiles: [
    "https://www.tiktok.com/@dr.janduffy",
    "https://www.youtube.com/@DrDuffy",
    "https://www.instagram.com/drjanduffy/",
    "https://x.com/drjanduffy",
    "https://www.linkedin.com/company/lvrmembers/",
    "https://www.pinterest.com/bhhsluxury/",
    "https://www.facebook.com/DrJanDuffyRealtorCentennialHills/",
  ],
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=9406%20Del%20Webb%20Boulevard%2C%20Las%20Vegas%2C%20NV%2089134&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=9406+Del+Webb+Boulevard,+Las+Vegas,+NV+89134",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Sun+City+Summerlin+55%2B+Real+Estate+Homes+by+Dr.+Jan+Duffy+9406+Del+Webb+Boulevard+Las+Vegas",
  calendlyUrl: "https://calendly.com/drjanduffy/showing",
  realscoutAgentId: "QWdlbnQtMjI1MDUw",
} as const;

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    name: localBusiness.name,
    image: [
      "https://www.lasvegas55plushomes.com/images/dr-jan-duffy.jpg",
      "https://www.lasvegas55plushomes.com/images/hero/55-plus-community.jpg",
    ],
    url: localBusiness.url,
    telephone: localBusiness.phone.e164,
    email: localBusiness.email,
    priceRange: "$$",
    foundingDate: localBusiness.foundingDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: localBusiness.address.streetAddress,
      addressLocality: localBusiness.address.addressLocality,
      addressRegion: localBusiness.address.addressRegion,
      postalCode: localBusiness.address.postalCode,
      addressCountry: localBusiness.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: localBusiness.geo.latitude,
      longitude: localBusiness.geo.longitude,
    },
    openingHoursSpecification: localBusiness.openingHoursSpecification,
    areaServed: localBusiness.serviceAreas.map((name) => ({
      "@type": "Place",
      name,
    })),
    knowsLanguage: localBusiness.languages,
    sameAs: localBusiness.socialProfiles,
    employee: {
      "@type": "Person",
      name: localBusiness.agentName,
      jobTitle: "REALTOR®",
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Real Estate License",
        identifier: localBusiness.license,
      },
    },
    parentOrganization: {
      "@type": "RealEstateAgent",
      name: localBusiness.brokerage,
    },
  };
}
