"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Film,
  Camera,
  Mic,
  GraduationCap,
} from "lucide-react";
import {
  galleryItems,
  galleryCategories,
  GalleryCategory,
  GalleryItem,
} from "@/lib/gallery";
import { Button } from "@/components/ui/Button";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredItems.length - 1
    );
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev! < filteredItems.length - 1 ? prev! + 1 : 0
    );
  };

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <main className="min-h-screen">
      {/* Gallery Hero on Gold Band */}
      <section className="relative bg-gold gold-noise-bg pt-36 pb-20 md:pt-44 md:pb-28 text-ink overflow-hidden">
        <div className="absolute inset-0 gold-fluted-lines opacity-15 pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ink/10 border border-ink/15 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              The Creative Portfolio
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ink mb-6 tracking-tight">
            Visual Harmony & Elegance.
          </h1>

          <p className="text-base sm:text-xl text-ink/75 max-w-3xl mx-auto leading-relaxed">
            Explore 31 authentic productions from Anshu Hegde’s archive—spanning
            cinematic fashion reels, broadcast video podcasts, traditional
            bridal styling, and on-location mentorship masterclasses.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-emerald-dark">
            <span className="flex items-center gap-1.5 bg-white/60 px-4 py-2 rounded-full border border-white/80">
              <Camera className="w-3.5 h-3.5" /> 21 High-Fashion Shoots
            </span>
            <span className="flex items-center gap-1.5 bg-white/60 px-4 py-2 rounded-full border border-white/80">
              <Film className="w-3.5 h-3.5" /> 10 Cinematic Video Reels
            </span>
            <span className="flex items-center gap-1.5 bg-white/60 px-4 py-2 rounded-full border border-white/80">
              <Mic className="w-3.5 h-3.5" /> Broadcast Podcast Episodes
            </span>
          </div>
        </div>
      </section>

      {/* Gallery Content on Emerald Dark */}
      <section className="relative bg-emerald-dark emerald-luxury-bg py-20 sm:py-28 text-cream">
        <div className="absolute inset-0 emerald-fluted-lines opacity-20 pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-16">
            {galleryCategories.map((category) => {
              const isActive = activeCategory === category;
              const count =
                category === "All"
                  ? galleryItems.length
                  : galleryItems.filter((i) => i.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-gold text-emerald-dark shadow-gold-glow scale-105"
                      : "bg-emerald/70 text-cream/75 hover:text-gold border border-gold/30 hover:border-gold/60"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-emerald text-gold"
                        : "bg-emerald-dark text-gold/80"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="gallery-card group relative rounded-28 overflow-hidden bg-emerald border border-gold/30 hover:border-gold/70 shadow-2xl cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
                  data-cursor={item.type === "video" ? "play" : "view"}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                    {item.type === "video" ? (
                      <div className="relative w-full h-full">
                        {item.poster ? (
                          <Image
                            src={item.poster}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <video
                            src={item.src}
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        )}

                        {/* Video Play Overlay Button */}
                        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-gold text-emerald-dark flex items-center justify-center shadow-gold-glow transform group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 fill-emerald-dark ml-0.5" />
                          </div>
                        </div>

                        {/* Video Badge */}
                        <div className="absolute top-4 right-4 bg-emerald-dark/90 backdrop-blur-md border border-gold/40 text-gold text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                          <Film className="w-3 h-3 text-gold" />
                          <span>Video Reel</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-emerald-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-gold text-emerald-dark flex items-center justify-center shadow-gold-glow transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <Eye className="w-5 h-5" />
                          </div>
                        </div>
                      </>
                    )}

                    {/* Category Badge on Top Left */}
                    <div className="absolute top-4 left-4 bg-emerald-dark/90 backdrop-blur-md border border-gold/40 text-gold text-[10px] uppercase font-semibold tracking-wider px-3.5 py-1 rounded-full">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-gold/70 mb-1.5">
                      <span className="font-semibold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span>{item.year}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-cream group-hover:text-gold transition-colors mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-cream/75 leading-relaxed line-clamp-2 font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal (Supports Full Video Playback + Images) */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between text-cream z-10 max-w-6xl mx-auto w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                  {activeItem.category} · {activeItem.type === "video" ? "Motion Reel" : "Editorial Stills"}
                </span>
                <span className="text-xs text-cream/40 hidden sm:inline">•</span>
                <span className="text-xs text-cream/60 hidden sm:inline">
                  {lightboxIndex! + 1} of {filteredItems.length}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close lightbox"
                className="w-11 h-11 rounded-full bg-emerald border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-emerald-dark transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Viewer with Navigation Controls */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 overflow-hidden max-w-6xl mx-auto w-full"
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
                {activeItem.type === "video" ? (
                  <video
                    key={activeItem.src}
                    src={activeItem.src}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[72vh] max-w-full rounded-20"
                  />
                ) : (
                  <div className="relative w-full h-full aspect-[4/3]">
                    <Image
                      src={activeItem.src}
                      alt={activeItem.title}
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
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold mb-1">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-cream/80 font-light leading-relaxed">
                {activeItem.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
