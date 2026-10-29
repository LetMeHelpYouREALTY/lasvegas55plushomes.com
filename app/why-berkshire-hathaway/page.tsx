import Navbar from "@/components/layouts/Navbar";
import AgentPresence from "@/components/shared/AgentPresence";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Shield,
  Users,
  Globe,
  Award,
  TrendingUp,
  CheckCircle,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Work With Dr. Jan Duffy | Las Vegas Real Estate",
  description:
    "Discover why clients choose Dr. Jan Duffy, a Top 1% Las Vegas REALTOR® in real estate since 1983. 500+ transactions and $127M+ in closed sales.",
  keywords: [
    "Berkshire Hathaway HomeServices",
    "why choose BHHS",
    "Warren Buffett real estate",
    "trusted real estate brand",
    "BHHS Nevada Properties",
  ],
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Berkshire Hathaway HomeServices",
  url: "https://www.bhhs.com",
  logo: "https://www.lasvegas55plushomes.com/favicon-32x32.png",
  description:
    "Berkshire Hathaway HomeServices is a real estate brokerage network, part of Berkshire Hathaway Inc., one of the world's most respected and trusted companies.",
  parentOrganization: {
    "@type": "Corporation",
    name: "Berkshire Hathaway Inc.",
    founder: "Warren Buffett",
  },
};

export default function WhyBerkshireHathawayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Top 1% Las Vegas REALTOR®
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Why Work With Dr. Jan Duffy?
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Dr. Jan Duffy has been in real estate since 1983. She brings
              trust, ethical standards, and deep local knowledge to every
              transaction in Las Vegas, Henderson, and Summerlin.
            </p>
          </div>

          {/* Key Benefits */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              The Dr. Jan Duffy Advantage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Unmatched Trust",
                  desc: "Integrity and reliability in every transaction, from the first conversation to closing day.",
                },
                {
                  icon: Users,
                  title: "Referral Network",
                  desc: "Seamless referrals for relocations and connections to buyers from across the country.",
                },
                {
                  icon: Globe,
                  title: "World-Class Marketing",
                  desc: "Professional photography, virtual tours, and MLS syndication that reach qualified buyers.",
                },
                {
                  icon: Award,
                  title: "Ethical Standards",
                  desc: "Your interests always come first, with clear communication at every step.",
                },
                {
                  icon: TrendingUp,
                  title: "Proven Experience",
                  desc: "In real estate since 1983, with $127M+ in closed transactions.",
                },
                {
                  icon: CheckCircle,
                  title: "Proven Results",
                  desc: "500+ transactions helping families achieve their real estate goals in Southern Nevada.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {title}
                  </h3>
                  <p className="text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Local Expert Section */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Your Local Expert in Las Vegas
            </h2>
            <ul className="space-y-3 mb-8">
              {[
                "In real estate since 1983",
                "$127M+ in closed transactions",
                "500+ transactions",
                "Specializing in 55+ communities, luxury, investment, and relocation",
                "Deep knowledge of every Las Vegas neighborhood",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
            >
              Meet Dr. Jan Duffy →
            </Link>
          </section>

          {/* CTA */}
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Contact Dr. Jan Duffy today.
            </p>
            <a
              href="tel:+17025001955"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 500-1955
            </a>
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">
          Last Updated: January 2026
        </div>
      </main>
      <RealScoutListings />
      <AgentPresence />

      <Footer />
    </>
  );
}
