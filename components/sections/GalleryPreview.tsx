"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Play,
  Film,
  X,
  Camera,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { galleryItems, GalleryItem } from "@/lib/gallery";
import { Button } from "@/components/ui/Button";

export function GalleryPreview() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Filter video reels and high-fashion shoot items
  const videoItems = galleryItems.filter((i) => i.type === "video");
  const shootItems = galleryItems.filter((i) => i.category === "Shoots");

  // Combined list for modal arrow navigation
  const previewModalList = [...videoItems, ...shootItems];

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = previewModalList.findIndex(
      (i) => i.id === selectedItem.id
    );
    const nextIndex =
      currentIndex < previewModalList.length - 1 ? currentIndex + 1 : 0;
    setSelectedItem(previewModalList[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = previewModalList.findIndex(
      (i) => i.id === selectedItem.id
    );
    const prevIndex =
      currentIndex > 0 ? currentIndex - 1 : previewModalList.length - 1;
    setSelectedItem(previewModalList[prevIndex]);
  };

  return (
    <section className="relative bg-gold gold-noise-bg py-20 sm:py-32 text-ink overflow-hidden">
      {/* Decorative fluted lines */}
      <div className="absolute inset-0 gold-fluted-lines opacity-15 pointer-events-none" />

      {/* Decorative brass arch */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-48 border-t-2 border-x-2 border-gold-dark/40 rounded-t-full pointer-events-none opacity-40" />

      {/* Header Container */}
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ink/10 border border-ink/15 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                Continuous Motion & Visual Stills
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink tracking-tight">
              A Glimpse of the Aesthetic
            </h2>
            <p className="text-sm sm:text-base text-ink/75 mt-2 max-w-2xl leading-relaxed">
              Seamlessly auto-scrolling motion reels and high-fashion editorial
              styling. Hover over any card to pause, and click to view full-screen
              or play high-definition video.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/gallery">
              <Button
                variant="outline"
                size="md"
                className="border-ink/30 text-ink hover:bg-ink hover:text-gold"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Full Gallery (31 Items)
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* ROW 1: CINEMATIC MOTION & VIDEO REELS (HORIZONTAL AUTOSCROLL) */}
      {/* ============================================================ */}
      <div className="relative mb-20 z-10">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald text-gold flex items-center justify-center shadow-sm">
                <Film className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                  Cinematic Motion & Video Reels
                </h3>
                <p className="text-xs text-ink/65">
                  10 Playable Video Reels · Auto-scrolling left · Hover to pause
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-flex text-[11px] font-semibold uppercase tracking-wider text-emerald-dark px-3 py-1 rounded-full bg-white/70 border border-ink/15">
              Infinite Motion Loop
            </span>
          </div>
        </div>

        {/* Infinite Marquee Track: Video Reels (Left Direction) */}
        <div
          className="flex overflow-hidden select-none whitespace-nowrap pause-hover py-2"
          style={
            {
              "--marquee-duration": "48s",
            } as React.CSSProperties
          }
        >
          <div className="flex shrink-0 items-center gap-6 animate-marquee-left">
            {/* Set 1 */}
            <div className="flex shrink-0 items-center gap-6">
              {videoItems.map((reel, idx) => (
                <div
                  key={`reel-1-${reel.id}`}
                  onClick={() => setSelectedItem(reel)}
                  className="group relative w-[240px] sm:w-[280px] shrink-0 rounded-24 overflow-hidden bg-emerald-dark border-2 border-white/80 shadow-gold-card hover:border-emerald hover:shadow-2xl cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="relative aspect-[9/14] w-full overflow-hidden bg-black">
                    <Image
                      src={reel.poster || "/media/IMG-20261022-WA0012.jpg"}
                      alt={reel.title}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      sizes="(max-width: 640px) 240px, 280px"
                    />

                    {/* Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gold text-emerald-dark flex items-center justify-center shadow-gold-glow transform group-hover:scale-115 transition-transform duration-300">
                        <Play className="w-6 h-6 fill-emerald-dark ml-0.5" />
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-3 right-3 bg-black/85 px-2.5 py-1 rounded-full text-[10px] uppercase font-bold text-gold tracking-wider flex items-center gap-1 border border-gold/30">
                      <Film className="w-3 h-3" />
                      Reel {idx + 1}
                    </div>

                    {/* Bottom overlay text */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h4 className="font-serif text-sm sm:text-base font-bold text-gold group-hover:text-white transition-colors truncate">
                        {reel.title}
                      </h4>
                      <p className="text-[11px] text-cream/75 truncate mt-0.5">
                        {reel.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Set 2 (Duplicate for seamless infinite scrolling loop) */}
            <div
              className="flex shrink-0 items-center gap-6"
              aria-hidden="true"
            >
              {videoItems.map((reel, idx) => (
                <div
                  key={`reel-2-${reel.id}`}
                  onClick={() => setSelectedItem(reel)}
                  className="group relative w-[240px] sm:w-[280px] shrink-0 rounded-24 overflow-hidden bg-emerald-dark border-2 border-white/80 shadow-gold-card hover:border-emerald hover:shadow-2xl cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="relative aspect-[9/14] w-full overflow-hidden bg-black">
                    <Image
                      src={reel.poster || "/media/IMG-20261022-WA0012.jpg"}
                      alt={reel.title}
                      fill
                      loading="lazy"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      sizes="(max-width: 640px) 240px, 280px"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gold text-emerald-dark flex items-center justify-center shadow-gold-glow transform group-hover:scale-115 transition-transform duration-300">
                        <Play className="w-6 h-6 fill-emerald-dark ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute top-3 right-3 bg-black/85 px-2.5 py-1 rounded-full text-[10px] uppercase font-bold text-gold tracking-wider flex items-center gap-1 border border-gold/30">
                      <Film className="w-3 h-3" />
                      Reel {idx + 1}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <h4 className="font-serif text-sm sm:text-base font-bold text-gold group-hover:text-white transition-colors truncate">
                        {reel.title}
                      </h4>
                      <p className="text-[11px] text-cream/75 truncate mt-0.5">
                        {reel.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* ROW 2: HIGH-FASHION & BRIDAL SHOOTS (HORIZONTAL AUTOSCROLL)  */}
      {/* ============================================================ */}
      <div className="relative mb-20 z-10">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald text-gold flex items-center justify-center shadow-sm">
                <Camera className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                  High-Fashion & Heritage Bridal Shoots
                </h3>
                <p className="text-xs text-ink/65">
                  Bespoke Editorial Stills · Auto-scrolling right · Hover to pause
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-flex text-[11px] font-semibold uppercase tracking-wider text-emerald-dark px-3 py-1 rounded-full bg-white/70 border border-ink/15">
              Continuous Stills Loop
            </span>
          </div>
        </div>

        {/* Infinite Marquee Track: Shoot Stills (Right Direction) */}
        <div
          className="flex overflow-hidden select-none whitespace-nowrap pause-hover py-2"
          style={
            {
              "--marquee-duration": "52s",
            } as React.CSSProperties
          }
        >
          <div className="flex shrink-0 items-center gap-6 animate-marquee-right">
            {/* Set 1 */}
            <div className="flex shrink-0 items-center gap-6">
              {shootItems.map((item) => (
                <div
                  key={`shoot-1-${item.id}`}
                  onClick={() => setSelectedItem(item)}
                  className="group relative w-[300px] sm:w-[360px] shrink-0 rounded-24 overflow-hidden border-2 border-white/80 shadow-gold-card bg-marble-cream cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      sizes="360px"
                    />

                    {/* Hover Zoom Icon */}
                    <div className="absolute inset-0 bg-emerald-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gold text-emerald-dark flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Category Pill */}
                    <div className="absolute top-3.5 left-3.5 bg-emerald/95 border border-gold/40 text-gold text-[10px] uppercase font-semibold tracking-wider px-3 py-1 rounded-full shadow-md">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-4 bg-white/95 border-t border-ink/10">
                    <h4 className="font-serif text-base font-bold text-ink group-hover:text-emerald-dark transition-colors truncate">
                      {item.title}
                    </h4>
                    <p className="text-xs text-ink/70 truncate mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Set 2 (Duplicate for seamless infinite scrolling loop) */}
            <div
              className="flex shrink-0 items-center gap-6"
              aria-hidden="true"
            >
              {shootItems.map((item) => (
                <div
                  key={`shoot-2-${item.id}`}
                  onClick={() => setSelectedItem(item)}
                  className="group relative w-[300px] sm:w-[360px] shrink-0 rounded-24 overflow-hidden border-2 border-white/80 shadow-gold-card bg-marble-cream cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      sizes="360px"
                    />

                    <div className="absolute inset-0 bg-emerald-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gold text-emerald-dark flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="absolute top-3.5 left-3.5 bg-emerald/95 border border-gold/40 text-gold text-[10px] uppercase font-semibold tracking-wider px-3 py-1 rounded-full shadow-md">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-4 bg-white/95 border-t border-ink/10">
                    <h4 className="font-serif text-base font-bold text-ink group-hover:text-emerald-dark transition-colors truncate">
                      {item.title}
                    </h4>
                    <p className="text-xs text-ink/70 truncate mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA to Full Gallery */}
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10 text-center pt-4">
        <p className="text-xs uppercase tracking-widest text-ink/65 font-semibold mb-3">
          Explore all 31 productions including broadcast podcasts & masterclass direction
        </p>
        <Link href="/gallery">
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            Explore Visual Harmony & Elegance Gallery (31 Items)
          </Button>
        </Link>
      </div>

      {/* ============================================================ */}
      {/* UNIFIED LIGHTBOX MODAL (SUPPORTS FULL VIDEO AND IMAGE VIEW)  */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 select-none"
            onClick={() => setSelectedItem(null)}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between text-cream z-10 max-w-5xl mx-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                  {selectedItem.category} ·{" "}
                  {selectedItem.type === "video"
                    ? "Motion Reel (Playable Video)"
                    : "High-Resolution Still"}
                </span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close modal"
                className="w-11 h-11 rounded-full bg-emerald border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-emerald-dark transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Viewer with Navigation Controls */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 overflow-hidden max-w-5xl mx-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handlePrev}
                aria-label="Previous item"
                className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-emerald/90 border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-emerald-dark transition-all shadow-2xl"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="relative max-w-4xl max-h-[72vh] w-full h-full flex items-center justify-center rounded-24 overflow-hidden border-2 border-gold/50 shadow-2xl bg-black">
                {selectedItem.type === "video" ? (
                  <video
                    key={selectedItem.src}
                    src={selectedItem.src}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[72vh] max-w-full rounded-20"
                  />
                ) : (
                  <div className="relative w-full h-full aspect-[4/3]">
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                )}
              </div>

              <button
                onClick={handleNext}
                aria-label="Next item"
                className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-emerald/90 border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-emerald-dark transition-all shadow-2xl"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div
              className="text-center max-w-2xl mx-auto z-10 w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-serif text-lg sm:text-2xl font-bold text-gold mb-1">
                {selectedItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-cream/80 font-light leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
