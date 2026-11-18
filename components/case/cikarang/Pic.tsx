import Image from "next/image";
import { ZoomImage } from "../ams/Lightbox";
import { assets, type AssetName } from "./assets";

type Props = {
  name: AssetName;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  zoom?: boolean; // paksa nyala/mati; default: gambar lebar >= 400px dengan alt terisi bisa diperbesar
};

// Gambar responsif: lebar mengikuti pembungkusnya, tinggi otomatis. Klik untuk memperbesar (lightbox).
export default function Pic({ name, alt, className = "", sizes = "100vw", priority, zoom }: Props) {
  const a = assets[name];
  const hasWidth = /(^|\s)(sm:|md:)?w-/.test(className);
  const cls = `h-auto ${hasWidth ? "" : "w-full"} ${className}`;
  const canZoom = zoom ?? (a.w >= 400 && !hasWidth && alt !== "");
  if (canZoom) {
    return <ZoomImage asset={a} alt={alt} sizes={sizes} priority={priority} className={cls} />;
  }
  return <Image src={a.src} width={a.w} height={a.h} alt={alt} sizes={sizes} priority={priority} className={cls} />;
}
