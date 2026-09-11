import Navbar from "@/components/layouts/Navbar";
import AgentPresence from "@/components/shared/AgentPresence";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import LuxuryHero from "@/components/luxury/LuxuryHero";
import LuxuryCta from "@/components/luxury/LuxuryCta";
import HeadingPhoto from "@/components/luxury/HeadingPhoto";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import { luxuryImages } from "@/lib/luxury-images";

export const metadata: Metadata = {
  title: "Off-Market Luxury Listings Las Vegas | Pocket Listings | Dr. Jan Duffy",
  description:
    "Confidential off-market and pocket listings in Las Vegas, Henderson, and Summerlin. Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an off-market luxury listing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An off-market or pocket listing is a home shown to qualified buyers before or instead of a public MLS syndication. Sellers keep addresses and interior photos off consumer portals while still reaching serious buyers through Dr. Jan Duffy’s private network.",
      },
    },
    {
      "@type": "Question",
      name: "Can I still see public MLS homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Public inventory is searched through RealScout’s native MLS tools. Off-market homes are an extra channel, not a replacement for the MLS.",
      },
    },
  ],
};

export default function OffMarketPage() {
  const hero = luxuryImages.heroes.theRidges;
  const photo = luxuryImages.interiors.infinityPool;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <main>
        <LuxuryHero
          title="Off-Market Luxury Listings"
          subtitle="Quiet inventory for buyers who want first look, and sellers who want control. No public portal blast required."
          image={hero.src}
          imageAlt={hero.alt}
        >
          <Link
            href="/contact"
            className="inline-flex bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-md font-semibold"
          >
            Ask About Quiet Inventory
          </Link>
        </LuxuryHero>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Why Sellers Choose a Quiet Launch
              </h2>
              <p className="text-slate-600 mb-6">
                Trophy homes often sit empty or occupied. A public listing can mean open houses,
                drone flyovers, and address exposure. A pocket listing lets you test price with
                qualified buyers first. If the market confirms value, we still have the option to
                list on the MLS through RealScout’s native syndication—no custom feed required.
              </p>
              <ul className="space-y-3">
                {[
                  "NDA-gated showings and proof-of-funds screening",
                  "Coming-soon windows before public marketing",
                  "Option to remain fully off-market through close",
                  "Same BHHS global referral network as a public listing",
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
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              How Buyers Get Access
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Qualify",
                  desc: "Share price range, community, and proof of funds. Dr. Jan screens for fit before any address is released.",
                },
                {
                  title: "Review",
                  desc: "Receive a private packet—photos, specs, and showing windows—without the home appearing on Zillow-style portals.",
                },
                {
                  title: "Tour & Write",
                  desc: "Private tours, then an offer structured for a seller who values privacy as much as price.",
                },
              ].map((step) => (
                <div key={step.title} className="bg-white p-6 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-xl text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RealScoutListings />
        <LuxuryCta
          title="Need a Quiet Path to Market?"
          subtitle="Call (702) 222-1964. 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134."
        />
      </main>
      <AgentPresence />

      <Footer />
    </>
  );
}
