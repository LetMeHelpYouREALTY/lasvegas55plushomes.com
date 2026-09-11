import Navbar from "@/components/layouts/Navbar";
import AgentPresence from "@/components/shared/AgentPresence";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import LuxuryHero from "@/components/luxury/LuxuryHero";
import LuxuryCta from "@/components/luxury/LuxuryCta";
import HeadingPhoto from "@/components/luxury/HeadingPhoto";
import Link from "next/link";
import type { Metadata } from "next";
import { luxuryImages } from "@/lib/luxury-images";

export const metadata: Metadata = {
  title: "Las Vegas Golf Course Estates for Sale | Dr. Jan Duffy BHHS",
  description:
    "Golf-course estates in Southern Highlands, The Ridges, DragonRidge, and Lake Las Vegas. Dr. Jan Duffy, Berkshire Hathaway HomeServices. Call (702) 222-1964.",
};

const courses = [
  {
    name: "Southern Highlands Golf Club",
    community: "Southern Highlands",
    href: "/neighborhoods/southern-highlands",
    image: luxuryImages.neighborhoods.southernHighlands,
    note: "ZIP 89141. April 2026 GLVAR snapshot: about $1.87M median sold and 58 average days on market for the luxury band.",
  },
  {
    name: "Bear's Best Las Vegas",
    community: "The Ridges / Summerlin West",
    href: "/neighborhoods/the-ridges",
    image: luxuryImages.neighborhoods.theRidges,
    note: "ZIP 89135. April 2026 GLVAR snapshot: about $2.84M median sold and 71 average days on market.",
  },
  {
    name: "DragonRidge Country Club",
    community: "MacDonald Highlands",
    href: "/neighborhoods/macdonald-highlands",
    image: luxuryImages.neighborhoods.macdonaldHighlands,
    note: "Henderson hillside lots with Strip and Black Mountain views. Cross-shop with The Ridges on lifestyle, not just price.",
  },
  {
    name: "Reflection Bay & SouthShore",
    community: "Lake Las Vegas",
    href: "/neighborhoods/lake-las-vegas",
    image: luxuryImages.neighborhoods.lakeLasVegas,
    note: "Lakefront and golf-adjacent Mediterranean architecture around a 320-acre private lake.",
  },
];

export default function GolfEstatesPage() {
  const hero = luxuryImages.neighborhoods.southernHighlands;

  return (
    <>
      <Navbar />
      <main>
        <LuxuryHero
          title="Las Vegas Golf Course Estates"
          subtitle="Fairway lots, desert-mountain backdrops, and club-adjacent living in Southern Highlands, The Ridges, MacDonald Highlands, and Lake Las Vegas."
          image={hero.src}
          imageAlt={hero.alt}
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Premier Golf Communities
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-10">
              Market figures below are GLVAR-reported luxury snapshots as of April 2026 and vary by
              property mix. Confirm live comps before writing or listing.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course) => (
                <Link
                  key={course.name}
                  href={course.href}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <HeadingPhoto
                    src={course.image.src}
                    alt={course.image.alt}
                    className="rounded-none"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 mb-1">
                      {course.name}
                    </h3>
                    <p className="text-sm text-amber-700 font-semibold mb-3">{course.community}</p>
                    <p className="text-slate-600 text-sm">{course.note}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Buying on a Fairway Lot</h2>
            <div className="space-y-4 text-slate-700">
              <p>
                Golf-course lots trade on view corridors, setbacks, and HOA design guidelines—not
                just bedroom count. Expect architectural review boards, higher HOA bands, and longer
                due diligence on irrigation, retaining walls, and club membership transfer rules.
              </p>
              <p>
                Dr. Jan Duffy coordinates with the listing side on membership status so your offer
                does not stall on club paperwork. Public listings still flow through RealScout; we
                do not duplicate MLS search.
              </p>
            </div>
          </div>
        </section>

        <RealScoutListings />
        <LuxuryCta
          title="Tour Golf-Course Inventory"
          subtitle="Call (702) 222-1964 for private fairway tours in Summerlin and Henderson."
        />
      </main>
      <AgentPresence />

      <Footer />
    </>
  );
}
