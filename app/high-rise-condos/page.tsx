import Navbar from "@/components/layouts/Navbar";
import AgentPresence from "@/components/shared/AgentPresence";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import LuxuryHero from "@/components/luxury/LuxuryHero";
import LuxuryCta from "@/components/luxury/LuxuryCta";
import HeadingPhoto from "@/components/luxury/HeadingPhoto";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import { luxuryImages } from "@/lib/luxury-images";

export const metadata: Metadata = {
  title: "Las Vegas Luxury High-Rise Condos | Strip View Penthouses | Dr. Jan Duffy",
  description:
    "High-rise and penthouse condos with Las Vegas Strip views. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Call (702) 222-1964.",
};

export default function HighRiseCondosPage() {
  const hero = luxuryImages.heroes.highRise;
  const foyer = luxuryImages.heroes.buyers;

  return (
    <>
      <Navbar />
      <main>
        <LuxuryHero
          title="Luxury High-Rise Condos"
          subtitle="Penthouses and tower residences with Strip, mountain, or golf-course views. Lock-and-leave living with hotel-grade amenities—without giving up a full-service advisor."
          image={hero.src}
          imageAlt={hero.alt}
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
            <HeadingPhoto src={foyer.src} alt={foyer.alt} />
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What High-Rise Buyers Should Underwrite
              </h2>
              <p className="text-slate-600 mb-6">
                A tower purchase is a home plus a hotel operation. HOA reserves, special
                assessments, rental-program rules, and view-obstruction risk matter as much as
                interior finishes. Dr. Jan Duffy walks the numbers with you and the listing packet—
                we do not invent cap rates.
              </p>
              <ul className="space-y-3">
                {[
                  "HOA budget, reserve study, and pending assessments",
                  "Rental and occupancy rules if you travel part of the year",
                  "Parking, storage, and floor-plate view corridors",
                  "New-construction vs. resale: warranties, punch lists, and builder credits",
                ].map((item) => (
                  <li key={item} className="flex items-start text-slate-700">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              High-Rise vs. Guard-Gated Estate
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl border border-slate-200">
                <h3 className="font-bold text-xl mb-3">Choose a Tower If</h3>
                <p className="text-slate-600">
                  You want lock-and-leave convenience, concierge services, and a vertical view of
                  the Strip or valley. Commute to the resort corridor is measured in minutes, not
                  beltway exits.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-slate-200">
                <h3 className="font-bold text-xl mb-3">Choose an Estate If</h3>
                <p className="text-slate-600">
                  You need lot size, a private pool, and architectural control. Compare{" "}
                  <a href="/neighborhoods/the-ridges" className="text-blue-600 underline">
                    The Ridges
                  </a>
                  ,{" "}
                  <a href="/neighborhoods/macdonald-highlands" className="text-blue-600 underline">
                    MacDonald Highlands
                  </a>
                  , and{" "}
                  <a href="/neighborhoods/ascaya" className="text-blue-600 underline">
                    Ascaya
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <RealScoutListings />
        <LuxuryCta
          title="Tour High-Rise Residences"
          subtitle="Call (702) 222-1964. Office: 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134."
        />
      </main>
      <AgentPresence />

      <Footer />
    </>
  );
}
