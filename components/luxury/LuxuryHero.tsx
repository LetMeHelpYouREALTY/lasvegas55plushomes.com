import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";
import { luxuryCtaPhone, luxuryOfficeNap } from "@/lib/luxury-images";

type LuxuryHeroProps = {
  title: string;
  subtitle: React.ReactNode;
  image: string;
  imageAlt: string;
  badge?: string;
  children?: React.ReactNode;
};

export default function LuxuryHero({
  title,
  subtitle,
  image,
  imageAlt,
  badge = "Berkshire Hathaway HomeServices Nevada Properties",
  children,
}: LuxuryHeroProps) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-forest-deep text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest/75 to-forest-deep/30" />
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl animate-fade-up">
          <span className="inline-block border border-gold/40 bg-gold/10 text-gold-bright text-xs md:text-sm font-semibold tracking-[0.2em] uppercase px-4 py-2 mb-6">
            {badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            {title}
          </h1>
          <div className="text-lg md:text-xl text-white/85 mb-8 max-w-3xl">
            {subtitle}
          </div>
          {children}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
            <a
              href={luxuryCtaPhone.tel}
              className="inline-flex items-center text-white hover:text-gold-bright"
            >
              <Phone className="h-4 w-4 mr-2 text-gold" />
              {luxuryCtaPhone.display}
            </a>
            <span className="inline-flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-gold" />
              {luxuryOfficeNap.street}, {luxuryOfficeNap.city},{" "}
              {luxuryOfficeNap.state} {luxuryOfficeNap.zip}
            </span>
            <span className="inline-flex items-center">
              <Clock className="h-4 w-4 mr-2 text-gold" />
              {luxuryOfficeNap.hours}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
