import Image from "next/image";
import Link from "next/link";
import { Bath, Bed, Calendar, MapPin, Square } from "lucide-react";
import { heritageBend894 } from "@/lib/listings/894-heritage-bend";
import { localBusiness } from "@/lib/local-business";

/**
 * Compact feature for the current Heritage Bend listing.
 * Full facts live on the listing page.
 */
export default function HeritageBendFeature({
  embedded = false,
}: {
  /** Drop the full-bleed band when the parent already has a container. */
  embedded?: boolean;
}) {
  const home = heritageBend894;
  const card = (
    <div className="mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-2xl bg-white shadow-luxury md:grid-cols-2">
      <div className="relative aspect-[1085/723] min-h-64">
        <Image
          src={home.photo.src}
          alt={home.photo.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="p-6 md:p-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-forest">
              Open October 10–11 · MLS {home.mlsNumber}
        </p>
        <h2
          id="heritage-bend-feature-heading"
          className="mb-2 text-3xl font-bold text-slate-900"
        >
          {home.street}
        </h2>
        <p className="mb-4 flex items-center text-slate-600">
          <MapPin className="mr-2 h-4 w-4 text-forest" aria-hidden />
          {home.community} · {home.city}, {home.state} {home.postalCode}
        </p>
        <p className="mb-4 text-3xl font-bold text-forest">
          {home.priceDisplay}
        </p>
        <p className="mb-6 text-slate-700">
          {home.plan} plan. {home.bedrooms} bedrooms, {home.bathrooms} baths,{" "}
          {home.squareFeet.toLocaleString()} square feet. Guard-gated 55+
          community in Summerlin West.
        </p>
        <ul className="mb-6 grid grid-cols-3 gap-3 text-sm text-slate-700">
          <li className="flex items-center gap-1">
            <Bed className="h-4 w-4 text-forest" aria-hidden />
            {home.bedrooms} beds
          </li>
          <li className="flex items-center gap-1">
            <Bath className="h-4 w-4 text-forest" aria-hidden />
            {home.bathrooms} baths
          </li>
          <li className="flex items-center gap-1">
            <Square className="h-4 w-4 text-forest" aria-hidden />
            {home.squareFeet.toLocaleString()} sf
          </li>
        </ul>
        <p className="mb-6 flex items-start gap-2 text-sm text-slate-700">
          <Calendar
            className="mt-0.5 h-4 w-4 shrink-0 text-forest"
            aria-hidden
          />
          <span>
            {home.openHouses[0].label}, {home.openHouses[0].hours}.{" "}
            {home.openHouses[1].label}, {home.openHouses[1].hours}.
          </span>
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={home.path} className="btn-gold px-5 py-3 text-center">
            View this home
          </Link>
          <a
            href={localBusiness.phone.tel}
            className="inline-flex items-center justify-center rounded-md border border-forest px-5 py-3 font-semibold text-forest hover:bg-forest-soft"
          >
            Call {localBusiness.phone.display}
          </a>
        </div>
      </div>
    </div>
  );

  if (embedded) {
    return (
      <section
        aria-labelledby="heritage-bend-feature-heading"
        className="mb-16"
      >
        {card}
      </section>
    );
  }

  return (
    <section
      aria-labelledby="heritage-bend-feature-heading"
      className="bg-forest-soft py-12 md:py-16"
    >
      <div className="container mx-auto px-4">{card}</div>
    </section>
  );
}
