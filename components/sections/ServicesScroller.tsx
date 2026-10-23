"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Compass,
  Camera,
  Mic,
  Award,
  Film,
  Newspaper,
  Layout,
  Share2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "strategic-campaign-design",
    number: "01",
    title: "Strategic Campaign Design",
    description:
      "Translating business goals into cohesive, high-impact creative campaigns.",
    icon: Compass,
    deliverables: [
      "Omni-channel Campaign Architecture",
      "Creative Concept & Visual Boarding",
      "Audience Segmentation & Narrative Alignment",
    ],
  },
  {
    id: "visual-media-shoots",
    number: "02",
    title: "Visual Media & Shoots",
    description: "Directing visual shoots that capture attention.",
    icon: Camera,
    deliverables: [
      "Commercial Creative Direction",
      "Lighting, Wardrobe & Set Curation",
      "High-Fashion Editorial Stills & Motion",
    ],
  },
  {
    id: "podcast-curation-hosting",
    number: "03",
    title: "Podcast Curation & Hosting",
    description:
      "Designing, structuring and hosting engaging audio and video podcast experiences.",
    icon: Mic,
    deliverables: [
      "Studio Acoustic & Visual Set Design",
      "Episodic Arc & Interview Architecture",
      "Broadcast-Grade Audio & Video Editing",
    ],
  },
  {
    id: "brand-identity-executive-positioning",
    number: "04",
    title: "Brand Identity & Executive Positioning",
    description:
      "Crafting distinct visual identities and shaping personal brands for leaders and founders.",
    icon: Award,
    deliverables: [
      "Bespoke Monogram & Typography Guidelines",
      "C-Suite Personal Branding & Media Kits",
      "Brand Voice & Strategic Manifesto",
    ],
  },
  {
    id: "short-form-video-music-visuals",
    number: "05",
    title: "Short-Form Video & Music Visuals",
    description:
      "Short-form video content and music visuals that capture audience attention.",
    icon: Film,
    deliverables: [
      "Dynamic Vertical Reels & Micro-Cinema",
      "Music Synchronization & Sound Design",
      "Viral Hook Scripting & Trend Translation",
    ],
  },
  {
    id: "public-relations-reputation-management",
    number: "06",
    title: "Public Relations & Reputation Management",
    description:
      "Building credibility, media presence and sustainable brand trust.",
    icon: Newspaper,
    deliverables: [
      "Tier-1 Publication Placement Strategies",
      "Executive Crisis & Narrative Control",
      "Keynote & Panel Speaking Engagements",
    ],
  },
  {
    id: "digital-experience-web-design",
    number: "07",
    title: "Digital Experience & Web Design",
    description:
      "Creating modern, user-friendly digital touchpoints that reflect brand authenticity.",
    icon: Layout,
    deliverables: [
      "Luxury Editorial UI/UX Prototyping",
      "High-Performance Next.js Engineering",
      "Fluid Animation Systems & Mobile PWA",
    ],
  },
  {
    id: "social-media-strategy-upliftment",
    number: "08",
    title: "Social Media Strategy & Upliftment",
    description:
      "Elevating digital presence with content strategies that drive real engagement and growth.",
    icon: Share2,
    deliverables: [
      "Content Calendar & Aesthetic Grid Architecture",
      "Engagement Optimization & Conversion Funnels",
      "Influencer & Creator Collaborations",
    ],
  },
];

export function ServicesScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  // Bind scroll progress directly to vertical page scroll through this tall container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out scroll progression for ultra-buttery feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Calculate exact horizontal scroll range so card 08 aligns right at the end
  useEffect(() => {
    const updateScrollRange = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        // Padding at the end: 32px on mobile, 80px on larger screens
        const endPadding = windowWidth < 640 ? 32 : 80;
        const distance = Math.max(0, trackWidth - windowWidth + endPadding);
        setScrollRange(distance);
      }
    };

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateScrollRange, 100);
    };

    updateScrollRange();
    window.addEventListener("resize", handleResize, { passive: true });

    const timer = setTimeout(updateScrollRange, 350);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Map vertical scroll (0 -> 1) to horizontal translation (0 -> -scrollRange)
  const x = useTransform(smoothProgress, [0, 1], [0, -scrollRange]);

  // Transform progress for progress bar and active pillar count
  const progressBarScale = useTransform(smoothProgress, [0, 1], [0.125, 1]);

  return (
    <section
      ref={containerRef}
      className="relative bg-emerald emerald-luxury-bg text-cream h-[320vh] sm:h-[360vh]"
    >
      {/* Background fluted architectural vertical lines */}
      <div className="absolute inset-0 emerald-fluted-lines opacity-25 pointer-events-none" />

      {/* Sticky Viewport Container: Stays pinned while scrolling through cards */}
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between py-6 sm:py-10 lg:py-14 overflow-hidden z-10">
        {/* Header Block */}
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-dark/70 border border-gold/40 mb-3 backdrop-blur-sm shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Expertise & Capabilities
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-cream tracking-tight">
                Eight Pillars of Creative Mastery
              </h2>
            </div>

            {/* Live Scroll Indicator & Progress */}
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-gold">
              <span className="hidden sm:inline-block text-cream/70 text-[11px]">
                Scroll down to traverse all 8 pillars
              </span>
              <div className="w-28 sm:w-36 h-1.5 bg-emerald-dark rounded-full overflow-hidden border border-gold/30">
                <motion.div
                  className="h-full bg-gold rounded-full origin-left"
                  style={{ scaleX: progressBarScale }}
                />
              </div>
              <span className="text-gold font-serif text-sm">01 / 08</span>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Track of Cards */}
        <div className="w-full my-auto py-2 overflow-visible">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-5 sm:gap-6 px-5 sm:px-8 lg:px-16 items-stretch will-change-transform"
          >
            {servicesData.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="w-[280px] sm:w-[350px] lg:w-[380px] shrink-0 rounded-28 p-6 sm:p-8 bg-emerald-dark/95 border border-gold/35 hover:border-gold/75 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group select-none gpu-accelerated"
                >
                  <div>
                    {/* Card Top: Icon & Big Number */}
                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 p-3 sm:p-3.5 rounded-full bg-emerald border border-gold/40 flex items-center justify-center text-gold shadow-gold-glow group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-gold/30 group-hover:text-gold/70 transition-colors">
                        {service.number}
                      </span>
                    </div>

                    {/* Card Title & Description */}
                    <h3 className="font-serif text-lg sm:text-2xl font-bold text-cream mb-2 sm:mb-3 group-hover:text-gold transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cream/75 leading-relaxed mb-5 sm:mb-6">
                      {service.description}
                    </p>

                    {/* Deliverables Preview */}
                    <div className="space-y-2 border-t border-gold/20 pt-4 mb-4 sm:mb-6">
                      {service.deliverables.slice(0, 2).map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-center gap-2 text-xs text-cream/65"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Link */}
                  <Link
                    href={`/services?select=${service.id}`}
                    className="inline-flex items-center justify-between text-xs uppercase tracking-wider font-semibold text-gold group-hover:text-white pt-4 border-t border-gold/15 transition-colors"
                  >
                    <span>Enquire On Service</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                  </Link>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Bar: Action link & Mobile scroll helper */}
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-[11px] sm:text-xs text-cream/60 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span>Vertical scroll drives horizontal discovery from 01 to 08</span>
          </p>

          <Link href="/services">
            <Button
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Explore All 8 Deliverable Specs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
