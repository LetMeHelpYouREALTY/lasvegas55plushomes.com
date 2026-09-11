import Navbar from "@/components/layouts/Navbar";
import AgentPresence from "@/components/shared/AgentPresence";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import LuxuryHero from "@/components/luxury/LuxuryHero";
import LuxuryCta from "@/components/luxury/LuxuryCta";
import HeadingPhoto from "@/components/luxury/HeadingPhoto";
import Link from "next/link";
import { CheckCircle, Shield, Eye, Globe, Clock } from "lucide-react";
import type { Metadata } from "next";
import { luxuryImages } from "@/lib/luxury-images";

export const metadata: Metadata = {
  title: "Private Client Real Estate Advisory | Las Vegas Luxury | Dr. Jan Duffy",
  description:
    "Confidential private-client representation for $1M+ Las Vegas homes. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Call (702) 222-1964.",
  keywords: [
    "private client realtor Las Vegas",
    "luxury real estate advisory Las Vegas",
    "confidential home buying Las Vegas",
    "Berkshire Hathaway luxury agent",
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Private Client Real Estate Advisory",
      serviceType: "Luxury Real Estate Advisory",
      provider: {
        "@type": "RealEstateAgent",
        name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
        telephone: "+17022221964",
        address: {
          "@type": "PostalAddress",
          streetAddress: "9406 W Lake Mead Blvd, Suite 100",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          postalCode: "89134",
        },
      },
      areaServed: "Las Vegas, Henderson, Summerlin",
      hoursAvailable: "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is private-client real estate representation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Private-client work is one-to-one advisory for buyers and sellers of $1 million-plus homes. Dr. Jan Duffy coordinates search, pricing, showings, and closing with a single point of contact—no call-center handoffs.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer off-market access?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Private-client buyers receive pocket-listing and coming-soon notices when sellers request discretion. Search still uses the MLS via RealScout; off-market is an additional channel, not a replacement.",
          },
        },
      ],
    },
  ],
};

const retainers = [
  {
    icon: Shield,
    title: "Single Point of Contact",
    desc: "You work with Dr. Jan Duffy directly—calls, texts, and strategy sessions stay with one advisor through closing.",
  },
  {
    icon: Eye,
    title: "Discretion by Default",
    desc: "Showings, NDAs, and listing marketing can stay private. Public MLS exposure is optional, not required.",
  },
  {
    icon: Globe,
    title: "Global Buyer Network",
    desc: "Berkshire Hathaway HomeServices connects your property to qualified buyers in other U.S. and international markets.",
  },
  {
    icon: Clock,
    title: "White-Glove Timeline",
    desc: "Inspections, title, and vendor scheduling are sequenced so a $2M+ close does not stall on logistics.",
  },
];

export default function PrivateClientPage() {
  const hero = luxuryImages.heroes.privateClient;
  const interior = luxuryImages.interiors.greatRoom;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <main>
        <LuxuryHero
          title="Private Client Real Estate Advisory"
          subtitle="A confidential, one-advisor practice for Las Vegas, Henderson, and Summerlin homes from $1 million to $15 million-plus. Strategy first. Marketing second."
          image={hero.src}
          imageAlt={hero.alt}
          badge="Private Client Desk"
        >
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-md font-semibold"
            >
              Request an Advisory Call
            </Link>
            <Link
              href="/off-market"
              className="inline-flex border border-white/40 hover:bg-white/10 px-6 py-3 rounded-md font-semibold"
            >
              Off-Market Listings
            </Link>
          </div>
        </LuxuryHero>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Advisory, Not Volume Brokerage
                </h2>
                <p className="text-slate-600 mb-4">
                  High-value homes fail when they are treated like any other listing. Private-client
                  work starts with a written brief: price band, view corridor, lot size, and close
                  date. Dr. Jan Duffy then matches that brief to MLS inventory and off-market
                  inventory—without building a custom search engine. RealScout already handles
                  matching and alerts.
                </p>
                <p className="text-slate-600">
                  Berkshire Hathaway HomeServices Nevada Properties | 9406 W Lake Mead Blvd, Suite
                  100, Las Vegas, NV 89134 | License S.0197614.LLC
                </p>
              </div>
              <HeadingPhoto src={interior.src} alt={interior.alt} />
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
              How the Private Client Desk Works
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {retainers.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-6 border border-slate-200">
                  <Icon className="h-8 w-8 text-amber-600 mb-4" />
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Typical Private-Client Engagements
            </h2>
            <ul className="space-y-4">
              {[
                "Buy-side search in The Ridges, MacDonald Highlands, Ascaya, and Lake Las Vegas",
                "Sell-side pricing and confidential listing for estates above $2 million",
                "California and international relocation into Summerlin or Henderson",
                "Coordination with attorneys, family offices, and 1031 intermediaries",
              ].map((item) => (
                <li key={item} className="flex items-start text-slate-700">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <RealScoutListings />
        <LuxuryCta
          title="Start a Private Client Conversation"
          subtitle="Call Dr. Jan Duffy at (702) 222-1964. Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment."
        />
      </main>
      <AgentPresence />

      <Footer />
    </>
  );
}
