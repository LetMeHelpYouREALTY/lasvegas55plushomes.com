import Link from "next/link";
import { Phone } from "lucide-react";
import AgentPhoto from "@/components/shared/AgentPhoto";
import { AGENT_PHOTO } from "@/lib/agent-photo";
import { luxuryCtaPhone } from "@/lib/luxury-images";

type LuxuryCtaProps = {
  title: string;
  subtitle: string;
};

export default function LuxuryCta({ title, subtitle }: LuxuryCtaProps) {
  return (
    <section className="section-forest text-white">
      <div className="container mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
          <AgentPhoto variant="badge" className="shrink-0" />
          <div className="flex-1 text-center md:text-left">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {AGENT_PHOTO.name}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{title}</h2>
            <p className="mb-8 text-xl text-white/85">{subtitle}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <a href={luxuryCtaPhone.tel} className="btn-gold px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call {luxuryCtaPhone.display}
              </a>
              <Link href="/contact" className="btn-outline-light px-8 py-4 text-lg">
                Request a Private Consultation
              </Link>
            </div>
            <p className="mt-6 text-sm text-white/70">
              {AGENT_PHOTO.name} | License {AGENT_PHOTO.license} |{" "}
              {AGENT_PHOTO.title}
            </p>
            <p className="mt-2 text-sm text-white/55">
              9406 Del Webb Boulevard, Las Vegas, NV 89134
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
