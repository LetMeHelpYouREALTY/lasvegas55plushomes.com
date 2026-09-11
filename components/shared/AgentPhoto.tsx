import Image from "next/image";
import { AGENT_PHOTO, type AgentPhotoVariant } from "@/lib/agent-photo";

type AgentPhotoProps = {
  variant?: AgentPhotoVariant;
  className?: string;
  priority?: boolean;
  showCaption?: boolean;
};

export default function AgentPhoto({
  variant = "card",
  className = "",
  priority = false,
  showCaption = false,
}: AgentPhotoProps) {
  const isCircle = variant === "avatar" || variant === "badge";
  const pixel = variant === "avatar" ? 48 : variant === "badge" ? 96 : 800;

  const frameClass =
    variant === "avatar"
      ? "relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-gold/70 md:h-12 md:w-12"
      : variant === "badge"
        ? "relative h-20 w-20 overflow-hidden rounded-full shadow-luxury ring-2 ring-gold md:h-24 md:w-24"
        : variant === "hero"
          ? "relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl shadow-luxury ring-4 ring-gold/40"
          : "relative aspect-square w-full overflow-hidden rounded-2xl shadow-luxury ring-1 ring-forest/10";

  return (
    <figure className={className}>
      <div className={`bg-forest-soft ${frameClass}`}>
        {isCircle ? (
          <Image
            src={AGENT_PHOTO.src}
            alt={AGENT_PHOTO.alt}
            width={pixel}
            height={pixel}
            priority={priority}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <Image
            src={AGENT_PHOTO.src}
            alt={AGENT_PHOTO.alt}
            fill
            priority={priority}
            sizes={
              variant === "hero"
                ? "(max-width: 768px) 90vw, 480px"
                : "(max-width: 768px) 100vw, 420px"
            }
            className="object-cover object-top"
          />
        )}
      </div>
      {showCaption ? (
        <figcaption className="mt-3 text-center">
          <p className="font-semibold text-slate-900">{AGENT_PHOTO.name}</p>
          <p className="text-sm text-slate-600">{AGENT_PHOTO.title}</p>
        </figcaption>
      ) : null}
    </figure>
  );
}
