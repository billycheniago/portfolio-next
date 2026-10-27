import Image from "next/image";
import { assets, type AssetName } from "./assets";

type Props = {
  name: AssetName;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

// Gambar responsif: lebar mengikuti pembungkusnya, tinggi otomatis.
export default function Pic({ name, alt, className = "", sizes = "100vw", priority }: Props) {
  const a = assets[name];
  return (
    <Image
      src={a.src}
      width={a.w}
      height={a.h}
      alt={alt}
      sizes={sizes}
      priority={priority}
      className={`h-auto ${/(^|\s)(sm:|md:)?w-/.test(className) ? "" : "w-full"} ${className}`}
    />
  );
}
