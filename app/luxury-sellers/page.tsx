import Navbar from "@/components/layouts/Navbar";
import AgentPresence from "@/components/shared/AgentPresence";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import LuxuryHero from "@/components/luxury/LuxuryHero";
import LuxuryCta from "@/components/luxury/LuxuryCta";
import HeadingPhoto from "@/components/luxury/HeadingPhoto";
import Link from "next/link";
import { CheckCircle, Camera, Globe, Eye } from "lucide-react";
import type { Metadata } from "next";
import { luxuryImages } from "@/lib/luxury-images";

export const metadata: Metadata = {
  title:
    "Sell a Luxury Home in Las Vegas | White-Glove Listing | Dr. Jan Duffy",
  description:
    "Luxury home selling in Las Vegas and Henderson: pricing, photography, and optional off-market launch. Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964.",
};

const services = [
  {
    icon: Camera,
    title: "Architectural Media",
    desc: "Still photography, twilight sets, and drone where HOA and airspace rules allow. Staging consults with luxury specialists.",
  },
  {
    icon: Globe,
    title: "Qualified Buyer Reach",
    desc: "MLS via RealScout plus BHHS global referrals. We do not build a second listing portal.",
  },
  {
    icon: Eye,
    title: "Quiet or Public Launch",
    desc: "Start off-market, then go public if the private round does not clear your number.",
  },
];

export default function LuxurySellersPage() {
  const hero = luxuryImages.heroes.sellers;
  const photo = luxuryImages.properties.greenValleyEstate;

  return (
    <>
      <Navbar />
      <main>
        <LuxuryHero
          title="Sell a Luxury Home in Las Vegas"
          subtitle="Pricing discipline, discreet marketing, and a Berkshire Hathaway HomeServices listing presentation built for $1 million-plus properties."
          image={hero.src}
          imageAlt={hero.alt}
        >
          <Link
            href="/home-valuation"
            className="inline-flex bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-md font-semibold"
          >
            Request a Pricing Brief
          </Link>
        </LuxuryHero>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
              White-Glove Listing Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {services.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="border border-slate-200 rounded-xl p-6"
                >
                  <Icon className="h-8 w-8 text-amber-600 mb-4" />
                  <h3 className="font-bold text-xl mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <HeadingPhoto src={photo.src} alt={photo.alt} />
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  April 2026 Luxury Context
                </h2>
                <p className="text-slate-600 mb-4">
                  A Greater Las Vegas luxury index (homes roughly $1.5M–$5M)
                  showed an April 2026 median near $2.10 million, about 4.2%
                  below the prior year, with longer days on market in several
                  guard-gated pockets. Overpricing is expensive at this tier. We
                  price from live comps—not a blog index.
                </p>
                <ul className="space-y-3">
                  {[
                    "Pre-list walk-through and repair triage",
                    "Comparable set by community, not valley-wide averages",
                    "Optional pocket listing before MLS",
                    "Offer review with inspection and holdback strategy",
                  ].map((item) => (
                    <li key={item} className="flex items-start text-slate-700">
                      <CheckCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <RealScoutListings />
        <LuxuryCta
          title="Price Your Estate Before You List"
          subtitle="Call Dr. Jan Duffy at (702) 222-1964. 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134."
        />
      </main>
      <AgentPresence />

      <Footer />
    </>
  );
}
