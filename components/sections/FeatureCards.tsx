"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Compass,
  Sparkles,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

interface FeatureCardData {
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
  link: string;
}

const features: FeatureCardData[] = [
  {
    title: "Strategy",
    tagline: "Clarity Before Creativity",
    description:
      "Aligning commercial business objectives with human psychology to construct intentional, highly resonant brand positioning.",
    icon: <Compass className="w-6 h-6 text-gold" />,
    highlights: [
      "Archetype Blueprinting",
      "Executive Narrative Moat",
      "Market Authority Stance",
    ],
    link: "/services?select=strategic-campaign-design",
  },
  {
    title: "Storytelling",
    tagline: "Emotion That Converts",
    description:
      "Transforming founder journeys and core missions into captivating visual media that commands reverence and client devotion.",
    icon: <Sparkles className="w-6 h-6 text-gold" />,
    highlights: [
      "Cinematic Motion Shoots",
      "Broadcast Podcast Arcs",
      "High-Fashion Visual Lore",
    ],
    link: "/services?select=visual-media-shoots",
  },
  {
    title: "Growth",
    tagline: "Sustainable Brand Longevity",
    description:
      "Actionable executive roadmaps, visual shoots, and public relations strategies that produce compound long-term market influence.",
    icon: <TrendingUp className="w-6 h-6 text-gold" />,
    highlights: [
      "Tier-1 Press Placement",
      "C-Suite Personal Branding",
      "Compound Market Presence",
    ],
    link: "/services?select=public-relations-reputation-management",
  },
];

function InteractiveTrinityCard({
  feature,
  idx,
}: {
  feature: FeatureCardData;
  idx: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for 3D tilt
  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 22 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
    cardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
    cardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.18, ease: "easeOut" }}
      style={{ perspective: 1000 }}
      className="w-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.025 }}
        transition={{ duration: 0.25 }}
        className="relative group rounded-28 p-7 sm:p-9 bg-gradient-to-b from-white/95 via-white/85 to-marble-cream/90 border-2 border-white/80 shadow-gold-card hover:shadow-2xl hover:border-emerald/40 transition-shadow duration-500 flex flex-col justify-between overflow-hidden cursor-pointer gpu-accelerated"
      >
        {/* Dynamic Cursor Spotlight Glare Effect via CSS Variables */}
        {isHovered && (
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-60 transition-opacity duration-300"
            style={{
              background: "radial-gradient(circle 260px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(240, 203, 94, 0.35), transparent 75%)",
            }}
          />
        )}

        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
          {/* Top Bar: Icon Circle + Big Watermark Numeral */}
          <div className="flex items-center justify-between mb-8">
            <div className="relative">
              {/* Rotating Gold Accent Ring on Hover */}
              <div className="absolute -inset-1.5 rounded-full border border-gold/40 border-dashed opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-700 pointer-events-none" />

              {/* Icon Container */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald border-2 border-gold/50 flex items-center justify-center text-gold shadow-emerald-glow group-hover:scale-110 group-hover:shadow-gold-glow transition-all duration-300">
                {feature.icon}
              </div>
            </div>

            {/* Giant Luxury Watermark Numeral */}
            <span className="font-serif text-3xl sm:text-4xl font-bold text-ink/15 group-hover:text-emerald-dark/35 transition-colors select-none">
              0{idx + 1}
            </span>
          </div>

          {/* Title & Tagline */}
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-1.5 group-hover:text-emerald-dark transition-colors">
            {feature.title}
          </h3>
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-dark mb-4">
            {feature.tagline}
          </p>

          {/* Description */}
          <p className="text-ink/75 text-sm leading-relaxed mb-6">
            {feature.description}
          </p>

          {/* Feature Highlights Pills */}
          <div className="space-y-2 border-t border-ink/10 pt-4 mb-6">
            {feature.highlights.map((h, hIdx) => (
              <div
                key={hIdx}
                className="flex items-center gap-2 text-xs font-medium text-ink/80 group-hover:text-ink transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Link CTA Button */}
        <div
          className="relative z-10 pt-4 border-t border-ink/10"
          style={{ transform: "translateZ(20px)" }}
        >
          <Link
            href={feature.link}
            className="inline-flex items-center justify-between w-full text-xs uppercase tracking-wider font-semibold text-emerald-dark group-hover:text-ink transition-colors"
          >
            <span>Discover Methodology</span>
            <div className="w-8 h-8 rounded-full bg-emerald/10 border border-emerald/20 flex items-center justify-center group-hover:bg-emerald group-hover:text-gold transition-all duration-300 shadow-sm">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FeatureCards() {
  return (
    <section className="relative bg-gold gold-noise-bg py-20 sm:py-28 text-ink overflow-hidden">
      {/* Decorative background fluted lines */}
      <div className="absolute inset-0 gold-fluted-lines opacity-15 pointer-events-none" />

      {/* Decorative brass ring */}
      <div className="absolute -top-32 right-1/4 w-72 h-72 rounded-full border border-gold-dark/40 pointer-events-none opacity-40" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ink/10 border border-ink/15 mb-4 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              Our Core Pillars
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold text-ink mb-4 tracking-tight"
          >
            A Trinity of Distinction
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-ink/70 text-sm sm:text-base leading-relaxed"
          >
            Every campaign at Anshu Hegde Creative is engineered through three
            disciplines that ensure your brand is seen, understood, and revered.
          </motion.p>
        </div>

        {/* 3 Animated 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <InteractiveTrinityCard
              key={feature.title}
              feature={feature}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
