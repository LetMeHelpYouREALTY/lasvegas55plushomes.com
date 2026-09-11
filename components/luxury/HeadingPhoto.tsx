import Image from "next/image";

type HeadingPhotoProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectClassName?: string;
};

export default function HeadingPhoto({
  src,
  alt,
  className = "",
  priority = false,
  aspectClassName = "aspect-[16/9]",
}: HeadingPhotoProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${aspectClassName} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
      />
    </div>
  );
}
