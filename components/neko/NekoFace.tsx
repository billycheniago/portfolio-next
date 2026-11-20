"use client";

import { useId } from "react";
import { motion } from "motion/react";

type Look = { x: number; y: number };

// Kepala Neko (koordinat 64x64), dipakai oleh badan penuh dan avatar kecil.
function HeadArt({ fill, look, blink, ear, happy, asleep }: { fill: string; look: Look; blink: boolean; ear: boolean; happy: boolean; asleep: boolean }) {
  const eye = {
    transform: `translate(${look.x}px, ${look.y}px) scaleY(${blink ? 0.1 : 1})`,
    transformBox: "fill-box" as const,
    transformOrigin: "center",
    transition: "transform 90ms ease-out",
  };
  return (
    <>
      <g style={{ transform: ear ? "rotate(-9deg)" : "rotate(0deg)", transformOrigin: "19px 17px", transition: "transform 260ms ease-out" }}>
        <path d="M11 25 L14 7 L28 17 Z" fill={fill} stroke="#E0651F" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M15.5 21 L16.5 12 L23 17 Z" fill="#F9B9A6" />
      </g>
      <path d="M53 25 L50 7 L36 17 Z" fill={fill} stroke="#E0651F" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M48.5 21 L47.5 12 L41 17 Z" fill="#F9B9A6" />
      <ellipse cx="32" cy="36" rx="23" ry="20" fill={fill} stroke="#E0651F" strokeWidth="1.2" />
      <g stroke="#C8531A" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M32 17.5 V23" />
        <path d="M26 18.8 L27.5 23.5" />
        <path d="M38 18.8 L36.5 23.5" />
      </g>
      <ellipse cx="32" cy="45.5" rx="9.5" ry="6" fill="#FFE9D4" />
      <ellipse cx="16.5" cy="43" rx="3.2" ry="2" fill="#FF8F6B" opacity="0.4" />
      <ellipse cx="47.5" cy="43" rx="3.2" ry="2" fill="#FF8F6B" opacity="0.4" />
      {happy ? (
        <g stroke="#2A1D16" strokeWidth="2.2" strokeLinecap="round" fill="none">
          <path d="M18.5 36.5 Q23 30.5 27.5 36.5" />
          <path d="M36.5 36.5 Q41 30.5 45.5 36.5" />
        </g>
      ) : asleep ? (
        <g stroke="#2A1D16" strokeWidth="2.2" strokeLinecap="round" fill="none">
          <path d="M18.5 34.5 Q23 39.5 27.5 34.5" />
          <path d="M36.5 34.5 Q41 39.5 45.5 34.5" />
        </g>
      ) : (
        <g>
          <g style={eye}>
            <ellipse cx="23" cy="35" rx="4.2" ry="5" fill="#2A1D16" />
            <circle cx="24.4" cy="33" r="1.5" fill="#fff" />
          </g>
          <g style={eye}>
            <ellipse cx="41" cy="35" rx="4.2" ry="5" fill="#2A1D16" />
            <circle cx="42.4" cy="33" r="1.5" fill="#fff" />
          </g>
        </g>
      )}
      <path d="M29.5 41.8 H34.5 L32 44.6 Z" fill="#E8808A" />
      <path d="M32 44.6 V46.4 M32 46.4 Q29 49.2 26 47.4 M32 46.4 Q35 49.2 38 47.4" stroke="#7A3A22" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <g stroke="#7A3A22" strokeWidth="0.9" strokeLinecap="round" opacity="0.55">
        <path d="M14 44 L5.5 42.5" />
        <path d="M14 47.5 L5.5 49" />
        <path d="M50 44 L58.5 42.5" />
        <path d="M50 47.5 L58.5 49" />
      </g>
    </>
  );
}

function Gradient({ id }: { id: string }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#FFB470" />
      <stop offset="1" stopColor="#F0762A" />
    </linearGradient>
  );
}

// Avatar kepala untuk header panel.
export function NekoAvatar({ className = "" }: { className?: string }) {
  const gid = `nekoa-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <Gradient id={gid} />
      </defs>
      <HeadArt fill={`url(#${gid})`} look={{ x: 0, y: 0 }} blink={false} ear={false} happy={false} asleep={false} />
    </svg>
  );
}

// Neko berbaring (loaf): badan bernapas, ekor bergoyang, kepala mengikuti `look`.
export default function NekoFace({
  look = { x: 0, y: 0 },
  blink = false,
  ear = false,
  happy = false,
  asleep = false,
  animate = true,
  className = "",
}: {
  look?: Look;
  blink?: boolean;
  ear?: boolean;
  happy?: boolean;
  asleep?: boolean;
  animate?: boolean;
  className?: string;
}) {
  const gid = `neko-${useId().replace(/:/g, "")}`;
  const fill = `url(#${gid})`;
  const origin = (x: number, y: number) => ({ transformOrigin: `${x}px ${y}px`, transformBox: "view-box" as const });
  const tail = "M114 79 C 134 80, 139 58, 128 46";

  return (
    <svg viewBox="0 0 140 90" className={className} role="img" aria-label={asleep ? "Neko, an orange cat sleeping" : "Neko, an orange cat lying down"} overflow="visible">
      <defs>
        <Gradient id={gid} />
      </defs>
      <ellipse cx="72" cy="86" rx="54" ry="3" fill="#000" opacity="0.14" />

      {/* ekor */}
      <motion.g
        style={origin(114, 79)}
        animate={animate ? { rotate: happy ? [0, 14, -4, 14, 0] : asleep ? [0, 2, 0] : [0, 7, 0, -4, 0] } : undefined}
        transition={animate ? { duration: happy ? 1.1 : asleep ? 6 : 3.6, repeat: Infinity, ease: "easeInOut" } : undefined}
      >
        <path d={tail} stroke="#E0651F" strokeWidth="11" strokeLinecap="round" fill="none" />
        <path d={tail} stroke={fill} strokeWidth="8.6" strokeLinecap="round" fill="none" />
        <path d={tail} stroke="#C8531A" strokeWidth="8.6" fill="none" strokeDasharray="2.2 11" strokeDashoffset="-3" opacity="0.7" />
      </motion.g>

      {/* badan */}
      <motion.g
        style={origin(72, 85)}
        animate={animate ? { scaleY: asleep ? [1, 1.04, 1] : [1, 1.03, 1] } : undefined}
        transition={animate ? { duration: asleep ? 5 : 3.2, repeat: Infinity, ease: "easeInOut" } : undefined}
      >
        <path
          d="M30 80 C 24 60, 44 44, 74 44 C 106 44, 122 58, 118 78 C 117 82, 112 85, 108 85 L 36 85 C 32 85, 30 83, 30 80 Z"
          fill={fill}
          stroke="#E0651F"
          strokeWidth="1.2"
        />
        <ellipse cx="96" cy="68" rx="20" ry="16" fill={fill} stroke="#E0651F" strokeWidth="1.2" />
        <ellipse cx="104" cy="83" rx="11" ry="4" fill="#FFE9D4" stroke="#E0651F" strokeWidth="1" />
        <g stroke="#C8531A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.75">
          <path d="M60 47 L62 54" />
          <path d="M70 46 L71 53" />
          <path d="M80 47 L80 54" />
          <path d="M85 60 Q91 64 88 72" />
          <path d="M92 57 Q98 62 95 70" />
        </g>
        <ellipse cx="42" cy="73" rx="10" ry="11" fill="#FFE9D4" />
        <ellipse cx="33" cy="81.5" rx="10" ry="5" fill="#FFE9D4" stroke="#E0651F" strokeWidth="1" />
        <ellipse cx="52" cy="82.5" rx="9" ry="4.5" fill="#FFE9D4" stroke="#E0651F" strokeWidth="1" />
      </motion.g>

      {/* kepala */}
      <motion.g
        style={origin(36, 56)}
        animate={asleep ? { x: 1, y: 3, rotate: 7 } : { x: look.x * 1.1, y: look.y * 0.8, rotate: happy ? -5 : look.x * 1.8 }}
        transition={{ type: "tween", duration: 0.14 }}
      >
        <g transform="translate(13.6 20.8) scale(0.7)">
          <HeadArt fill={fill} look={look} blink={blink} ear={ear} happy={happy} asleep={asleep} />
        </g>
      </motion.g>

      {/* zzz saat tidur */}
      {asleep &&
        [0, 1, 2].map((i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0 }}
            animate={animate ? { opacity: [0, 1, 0], y: [0, -9] } : { opacity: 0.9 }}
            transition={animate ? { duration: 2.6, repeat: Infinity, delay: i * 0.7, ease: "easeOut" } : undefined}
          >
            <text x={56 + i * 8} y={36 - i * 4} fontSize={7 + i * 2} fontWeight={700} fill="#F0762A" aria-hidden>
              z
            </text>
          </motion.g>
        ))}
    </svg>
  );
}
