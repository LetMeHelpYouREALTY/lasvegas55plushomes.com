import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Bath,
  Bed,
  Calendar,
  ExternalLink,
  MapPin,
  Phone,
  Square,
} from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import AgentPresence from "@/components/shared/AgentPresence";
import { heritageBend894 } from "@/lib/listings/894-heritage-bend";
import { localBusiness, localBusinessJsonLd } from "@/lib/local-business";

const home = heritageBend894;

export const metadata: Metadata = {
  title:
    "894 Heritage Bend Drive | $539,888 | Heritage at Stonebridge | Dr. Jan Duffy",
  description:
    "2 bed, 2 bath, 1,234 sq ft Lennar Claremont at 894 Heritage Bend Drive, Las Vegas 89138. $539,888. Open Oct 10–11, 2026. MLS 2825123. Dr. Jan Duffy.",
  alternates: { canonical: home.canonicalUrl },
  openGraph: {
    title: "894 Heritage Bend Drive, Las Vegas 89138 — $539,888",
    description:
      "Lennar Claremont in guard-gated Heritage at Stonebridge. 2 beds, 2 baths, 1,234 sq ft. Open Saturday 12–2 and Sunday 10–12. MLS 2825123.",
    type: "website",
    url: home.canonicalUrl,
    images: [
      {
        url: home.photo.src,
        width: home.photo.width,
        height: home.photo.height,
        alt: home.photo.alt,
      },
    ],
  },
};

const listingSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: home.fullAddress,
  url: home.canonicalUrl,
  datePosted: home.listDateIso,
  image: home.photo.src,
  description: home.remarks.join(" "),
  offers: {
    "@type": "Offer",
    price: home.price,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: home.canonicalUrl,
  },
  about: {
    "@type": "SingleFamilyResidence",
    name: home.street,
    numberOfBedrooms: home.bedrooms,
    numberOfBathroomsTotal: home.bathrooms,
    numberOfRooms: home.roomsTotal,
    yearBuilt: home.yearBuilt,
    floorSize: {
      "@type": "QuantitativeValue",
      value: home.squareFeet,
      unitCode: "FTK",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: home.street,
      addressLocality: home.city,
      addressRegion: home.state,
      postalCode: home.postalCode,
      addressCountry: "US",
    },
    containedInPlace: {
      "@type": "Place",
      name: home.community,
    },
  },
};

const openHouseSchema = home.openHouses.map((event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: `Open house at ${home.street}`,
  startDate: event.start,
  endDate: event.end,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: home.street,
    address: {
      "@type": "PostalAddress",
      streetAddress: home.street,
      addressLocality: home.city,
      addressRegion: home.state,
      postalCode: home.postalCode,
    },
  },
  organizer: {
    "@type": "RealEstateAgent",
    name: localBusiness.agentName,
    telephone: localBusiness.phone.e164,
  },
}));

const faqItems = [
  {
    question: "When is the open house at 894 Heritage Bend Drive?",
    answer:
      "Saturday, October 10, 2026, from 12:00 to 2:00 PM PT, and Sunday, October 11, 2026, from 10:00 AM to 12:00 PM PT.",
  },
  {
    question: "What is the list price?",
    answer: `${home.priceDisplay}, confirmed ${home.priceConfirmedOn} on GLVAR MLS ${home.mlsNumber}.`,
  },
  {
    question: "What are the association fees?",
    answer: `Heritage Heights fee is ${home.associationFeeDisplay} monthly. The association fee total is ${home.associationFeeTotalDisplay} monthly. Annual taxes are ${home.taxAnnualDisplay}.`,
  },
  {
    question: "Is Heritage at Stonebridge age-restricted?",
    answer:
      "Yes. Heritage at Stonebridge is a guard-gated community restricted to residents 55 and older.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: localBusiness.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Heritage at Stonebridge",
      item: `${localBusiness.url}${home.communityPath}`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: home.street,
      item: home.canonicalUrl,
    },
  ],
};

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-slate-100 py-3">
      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </dt>
      <dd className="mt-1 text-slate-900">{value}</dd>
    </div>
  );
}

export default function HeritageBendListingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(openHouseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd()),
        }}
      />
      <Navbar />
      <main className="bg-white pb-16 pt-24">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-forest">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={home.communityPath} className="hover:text-forest">
                  Heritage at Stonebridge
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-900">{home.street}</li>
            </ol>
          </nav>

          <div className="mb-8 max-w-4xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-forest">
              Open October 10–11 · MLS {home.mlsNumber}
            </p>
            <h1 className="mb-3 text-4xl font-bold text-slate-900 md:text-5xl">
              {home.street}
            </h1>
            <p className="mb-4 flex items-center text-lg text-slate-600">
              <MapPin className="mr-2 h-5 w-5 text-forest" aria-hidden />
              {home.community}, {home.city}, {home.state} {home.postalCode}
            </p>
            <p className="text-4xl font-bold text-forest">
              {home.priceDisplay}
            </p>
            <p className="mt-2 text-sm text-slate-500">
              List price confirmed {home.priceConfirmedOn}. GLVAR MLS{" "}
              {home.mlsNumber}.
            </p>
          </div>

          <div className="relative mb-10 aspect-[1085/723] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={home.photo.src}
              alt={home.photo.alt}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1152px"
              className="object-cover"
            />
          </div>

          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Bed, label: `${home.bedrooms} bedrooms` },
              { icon: Bath, label: `${home.bathrooms} baths` },
              {
                icon: Square,
                label: `${home.squareFeet.toLocaleString()} sq ft`,
              },
              { icon: Calendar, label: `Built ${home.yearBuilt}` },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-forest-soft px-4 py-4"
              >
                <Icon className="h-5 w-5 text-forest" aria-hidden />
                <span className="font-semibold text-slate-900">{label}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <section className="mb-10" aria-labelledby="open-house-heading">
                <h2
                  id="open-house-heading"
                  className="mb-4 text-2xl font-bold text-slate-900"
                >
                  Open houses
                </h2>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {home.openHouses.map((event) => (
                    <li
                      key={event.start}
                      className="rounded-xl border border-gold/40 bg-gold-soft p-5"
                    >
                      <p className="font-bold text-slate-900">{event.label}</p>
                      <p className="text-slate-700">{event.hours}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-10" aria-labelledby="remarks-heading">
                <h2
                  id="remarks-heading"
                  className="mb-4 text-2xl font-bold text-slate-900"
                >
                  Listing remarks
                </h2>
                <div className="space-y-4 text-slate-700">
                  {home.remarks.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section className="mb-10" aria-labelledby="plan-heading">
                <h2
                  id="plan-heading"
                  className="mb-4 text-2xl font-bold text-slate-900"
                >
                  The Claremont plan
                </h2>
                <p className="mb-4 text-slate-700">
                  This is a one-story {home.plan}, built in {home.yearBuilt}.
                  The primary bedroom is downstairs. The kitchen has an island
                  and quartz counters. Built-ins convey with the sale.
                </p>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <caption className="sr-only">Room sizes</caption>
                    <thead className="bg-slate-50 text-slate-600">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-semibold">
                          Room
                        </th>
                        <th scope="col" className="px-4 py-3 font-semibold">
                          Size
                        </th>
                        <th scope="col" className="px-4 py-3 font-semibold">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {home.rooms.map((room) => (
                        <tr
                          key={room.name}
                          className="border-t border-slate-100"
                        >
                          <th
                            scope="row"
                            className="px-4 py-3 font-medium text-slate-900"
                          >
                            {room.name}
                          </th>
                          <td className="px-4 py-3 text-slate-700">
                            {room.dimensions ?? "—"}
                          </td>
                          <td className="px-4 py-3 text-slate-700">
                            {room.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-10" aria-labelledby="facts-heading">
                <h2
                  id="facts-heading"
                  className="mb-4 text-2xl font-bold text-slate-900"
                >
                  Property facts
                </h2>
                <dl className="grid gap-x-8 md:grid-cols-2">
                  <Fact label="Property type" value={home.propertySubType} />
                  <Fact label="Style" value={home.architecturalStyle} />
                  <Fact label="Stories" value={String(home.stories)} />
                  <Fact label="Year built" value={String(home.yearBuilt)} />
                  <Fact label="Roof" value={home.roof} />
                  <Fact label="Condition" value={home.condition} />
                  <Fact label="Furnished" value={home.furnished} />
                  <Fact label="Subdivision" value={home.subdivision} />
                  <Fact label="County" value={home.county} />
                  <Fact label="Parcel" value={home.parcelNumber} />
                  <Fact label="Appliances" value={home.appliances.join(", ")} />
                  <Fact label="Fireplace" value="No" />
                  <Fact label="Flooring" value={home.flooring.join(" and ")} />
                  <Fact label="Laundry" value={home.laundry.join(", ")} />
                  <Fact
                    label="Interior"
                    value={home.interiorFeatures.join(", ")}
                  />
                  <Fact
                    label="Exterior"
                    value={home.exteriorFeatures.join(", ")}
                  />
                  <Fact label="Fencing" value={home.fencing.join(" and ")} />
                  <Fact label="Patio and porch" value={home.patio.join(", ")} />
                  <Fact label="Private pool" value="No" />
                  <Fact label="Pool" value="Community" />
                  <Fact
                    label="Garage"
                    value={`${home.garageSpaces}-car attached`}
                  />
                  <Fact label="Parking" value={home.parking.join(", ")} />
                  <Fact label="Lot" value={home.lotFeatures.join(", ")} />
                  <Fact label="Heating" value={home.heating.join(" and ")} />
                  <Fact label="Cooling" value={home.cooling.join(" and ")} />
                  <Fact label="Sewer" value={home.sewer} />
                  <Fact label="Water" value={home.water} />
                  <Fact label="Utilities" value={home.utilities.join(", ")} />
                  <Fact label="Possession" value={home.possession} />
                  <Fact
                    label="Heritage Heights fee"
                    value={`${home.associationFeeDisplay} ${home.associationFeeFrequency.toLowerCase()}`}
                  />
                  <Fact
                    label="Association fee total"
                    value={`${home.associationFeeTotalDisplay} monthly`}
                  />
                  <Fact
                    label="Fee includes"
                    value={home.associationFeeIncludes}
                  />
                  <Fact label="Annual taxes" value={home.taxAnnualDisplay} />
                  <Fact
                    label="Association amenities"
                    value={home.associationAmenities.join(", ")}
                  />
                  <Fact
                    label="Elementary school"
                    value={home.schools.elementary}
                  />
                  <Fact label="Middle school" value={home.schools.middle} />
                  <Fact label="High school" value={home.schools.high} />
                  <Fact label="List date" value={home.listDate} />
                </dl>
              </section>

              <section className="mb-10" aria-labelledby="directions-heading">
                <h2
                  id="directions-heading"
                  className="mb-4 text-2xl font-bold text-slate-900"
                >
                  Directions
                </h2>
                <p className="text-slate-700">{home.directions}</p>
              </section>

              <section className="mb-10" aria-labelledby="map-heading">
                <h2
                  id="map-heading"
                  className="mb-4 text-2xl font-bold text-slate-900"
                >
                  Map
                </h2>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <iframe
                    title="Map of 894 Heritage Bend Drive, Las Vegas"
                    src={home.mapEmbedSrc}
                    className="h-80 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Location provided by {home.mlsSource}.
                </p>
              </section>

              <section aria-labelledby="faq-heading">
                <h2
                  id="faq-heading"
                  className="mb-4 text-2xl font-bold text-slate-900"
                >
                  Questions
                </h2>
                <dl className="space-y-4">
                  {faqItems.map((item) => (
                    <div
                      key={item.question}
                      className="rounded-xl border border-slate-200 p-5"
                    >
                      <dt className="font-semibold text-slate-900">
                        {item.question}
                      </dt>
                      <dd className="mt-2 text-slate-700">{item.answer}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>

            <aside className="h-fit space-y-6 lg:sticky lg:top-28">
              <div className="rounded-2xl bg-forest p-6 text-white">
                <h2 className="mb-2 text-xl font-bold">Tour this home</h2>
                <p className="mb-5 text-sm text-white/80">
                  Come by this weekend, or call {localBusiness.phone.display}{" "}
                  for a private showing.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={localBusiness.phone.tel}
                    className="btn-gold inline-flex items-center justify-center px-4 py-3"
                  >
                    <Phone className="mr-2 h-4 w-4" aria-hidden />
                    Call {localBusiness.phone.display}
                  </a>
                  <a
                    href={home.directionsUrl}
                    className="btn-outline-light inline-flex items-center justify-center px-4 py-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Directions
                  </a>
                  <a
                    href={localBusiness.googleReviews}
                    className="btn-outline-light inline-flex items-center justify-center px-4 py-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Google Reviews
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h2 className="mb-3 text-lg font-bold text-slate-900">
                  Tours and photos
                </h2>
                <ul className="space-y-3">
                  {home.tours.map((tour) => (
                    <li key={tour.href}>
                      <a
                        href={tour.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-semibold text-forest hover:underline"
                      >
                        {tour.label}
                        <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
                        <span className="sr-only"> (external site)</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={home.realscoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-semibold text-forest hover:underline"
                    >
                      Full listing on RealScout
                      <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
                      <span className="sr-only"> (external site)</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 text-sm text-slate-700">
                <h2 className="mb-2 text-lg font-bold text-slate-900">
                  {localBusiness.name}
                </h2>
                <p>{localBusiness.address.full}</p>
                <p className="mt-1">{localBusiness.hoursDisplay}</p>
                <p className="mt-1">
                  <a
                    href={localBusiness.phone.tel}
                    className="font-semibold text-forest"
                  >
                    {localBusiness.phone.display}
                  </a>
                </p>
                <p className="mt-3">
                  <a
                    href={localBusiness.mapsDirections}
                    className="font-semibold text-forest hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Office directions
                  </a>
                </p>
              </div>
            </aside>
          </div>

          <p className="mt-12 max-w-4xl text-xs leading-relaxed text-slate-500">
            {home.disclaimer}
          </p>
        </div>
      </main>
      <AgentPresence
        headline="See 894 Heritage Bend with Dr. Jan"
        subheadline="Guard-gated Heritage at Stonebridge. Open October 10, 12–2 PM, and October 11, 10 AM–12 PM."
      />
      <Footer />
    </>
  );
}
