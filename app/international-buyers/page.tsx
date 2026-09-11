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
  title: "International Luxury Home Buyers Las Vegas | Dr. Jan Duffy BHHS",
  description:
    "Representation for international and out-of-state buyers of Las Vegas luxury homes. Nevada tax context, remote closings, BHHS global network. Call (702) 222-1964.",
};

export default function InternationalBuyersPage() {
  const hero = luxuryImages.heroes.twilightVilla;
  const photo = luxuryImages.neighborhoods.macdonaldHighlands;

  return (
    <>
      <Navbar />
      <main>
        <LuxuryHero
          title="International Luxury Buyers"
          subtitle="Remote tours, proof-of-funds coordination, and a Berkshire Hathaway HomeServices global desk for buyers purchasing Las Vegas and Henderson estates from abroad or another U.S. state."
          image={hero.src}
          imageAlt={hero.alt}
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Buying Nevada Real Estate from Overseas
              </h2>
              <p className="text-slate-600 mb-4">
                Nevada has no state income tax. That is a documented state tax
                structure—not a personalized tax opinion. Confirm FIRPTA, entity
                purchase, and visa implications with your CPA and attorney. Dr.
                Jan Duffy coordinates the real estate file: listings,
                inspections, and local title.
              </p>
              <ul className="space-y-3">
                {[
                  "Video walk-throughs and time-zone scheduling",
                  "Wire-fraud protocols with Nevada title companies",
                  "Power-of-attorney closings when you cannot attend in person",
                  "BHHS referral partners in origin markets—native network, not a custom CRM sync",
                ].map((item) => (
                  <li key={item} className="flex items-start text-slate-700">
                    <CheckCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <HeadingPhoto src={photo.src} alt={photo.alt} />
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Communities International Buyers Cross-Shop
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  href: "/neighborhoods/the-ridges",
                  label: "The Ridges, Summerlin",
                },
                {
                  href: "/neighborhoods/macdonald-highlands",
                  label: "MacDonald Highlands",
                },
                { href: "/neighborhoods/ascaya", label: "Ascaya" },
                {
                  href: "/neighborhoods/lake-las-vegas",
                  label: "Lake Las Vegas",
                },
                {
                  href: "/high-rise-condos",
                  label: "Strip-view high-rise condos",
                },
                { href: "/golf-estates", label: "Golf course estates" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block bg-white border border-slate-200 rounded-lg p-4 font-semibold text-slate-900 hover:border-amber-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <RealScoutListings />
        <LuxuryCta
          title="Plan a Remote or In-Person Tour"
          subtitle="Call or WhatsApp-style voice at (702) 222-1964. Mon–Fri 9am–6pm Pacific, Saturday 10am–4pm."
        />
      </main>
      <AgentPresence />

      <Footer />
    </>
  );
}
