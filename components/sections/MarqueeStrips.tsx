"use client";

import React from "react";
import { Marquee } from "@/components/ui/Marquee";
import { siteConfig } from "@/lib/site-config";

export function MarqueeStrips() {
  const words = [
    "STRATEGY",
    "STORYTELLING",
    "BRANDING",
    "MEDIA",
    "GROWTH",
    "POSITIONING",
    "CINEMATOGRAPHY",
    "MENTORSHIP",
  ];

  const pressLogos = [
    "Forbes India",
    "Vogue Business",
    "Elle Living",
    "Femina Leadership",
    "The Economic Times",
    "Grazia Luxury",
    "Harper's Bazaar",
  ];

  return (
    <div className="bg-emerald-dark border-y border-gold/25 py-6 flex flex-col gap-5 overflow-hidden select-none">
      {/* Strip 1: Giant Outlined/Solid Serif Text Strip (running left) */}
      <Marquee speed={30} direction="left" className="py-2">
        {words.map((word, idx) => (
          <span
            key={idx}
            className="flex items-center gap-6 font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            <span
              className={
                idx % 2 === 0
                  ? "text-gold"
                  : "text-transparent stroke-gold"
              }
              style={{
                WebkitTextStroke: idx % 2 === 1 ? "1.5px #F0CB5E" : undefined,
              }}
            >
              {word}
            </span>
            <span className="text-gold text-lg sm:text-2xl">✦</span>
          </span>
        ))}
      </Marquee>

      {/* Strip 2: Services Names Strip (running right) */}
      <Marquee speed={35} direction="right" className="py-1">
        {siteConfig.servicesList.map((service, idx) => (
          <span
            key={idx}
            className="flex items-center gap-6 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-cream/80"
          >
            <span>{service}</span>
            <span className="text-gold text-xs">✦</span>
          </span>
        ))}
      </Marquee>

      {/* Strip 3: Media & Press Strip */}
      <Marquee speed={25} direction="left" className="py-1 opacity-70">
        {pressLogos.map((press, idx) => (
          <span
            key={idx}
            className="flex items-center gap-8 text-xs font-serif italic tracking-widest text-cream/60"
          >
            <span>FEATURED IN {press}</span>
            <span className="text-gold/40 text-[10px]">●</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
