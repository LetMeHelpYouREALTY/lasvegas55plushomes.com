import Link from "next/link";
import { Phone } from "lucide-react";
import AgentPhoto from "@/components/shared/AgentPhoto";
import { AGENT_PHOTO } from "@/lib/agent-photo";
import { localBusiness } from "@/lib/local-business";

/**
 * Reusable “meet your agent” band for page footers / mid-page sections.
 * Places Dr. Jan’s POSE2 headshot with NAP and CTA on every major surface.
 */
export default function AgentPresence({
  headline = "Work with Dr. Jan Duffy",
  subheadline = "Sun City Summerlin 55+ specialist — call or text for a private consultation.",
}: {
  headline?: string;
  subheadline?: string;
}) {
  return (
    <section className="section-forest text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
          <AgentPhoto variant="badge" className="shrink-0" priority={false} />
          <div className="flex-1 text-center md:text-left">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {AGENT_PHOTO.name} · License {AGENT_PHOTO.license}
            </p>
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">{headline}</h2>
            <p className="mb-6 text-white/85">{subheadline}</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <a href={localBusiness.phone.tel} className="btn-gold px-6 py-3">
                <Phone className="mr-2 h-4 w-4" />
                Call {localBusiness.phone.display}
              </a>
              <Link href="/contact" className="btn-outline-light px-6 py-3">
                Contact {AGENT_PHOTO.name}
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/65">
              {localBusiness.address.streetAddress},{" "}
              {localBusiness.address.addressLocality},{" "}
              {localBusiness.address.addressRegion}{" "}
              {localBusiness.address.postalCode}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
