"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/MagneticButton";
import { Modal } from "@/components/ui/Modal";
import { siteConfig } from "@/lib/site-config";

export function Hero({ onOpenBooking }: { onOpenBooking?: () => void }) {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  const handleBooking = () => {
    if (onOpenBooking) onOpenBooking();
    else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.location.href = "/#contact";
    }
  };

  return (
    <section className="relative overflow-hidden bg-gold gold-noise-bg pt-32 pb-20 md:pt-40 md:pb-28 text-ink">
      {/* Fluted background lines */}
      <div className="absolute inset-0 gold-fluted-lines opacity-20 pointer-events-none" />

      {/* Hanging Gold Spheres Decorative SVGs */}
      <div className="absolute top-0 left-12 w-0.5 h-36 bg-gradient-to-b from-ink/30 to-gold-dark pointer-events-none hidden lg:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-3 -left-2.5 w-6 h-6 rounded-full bg-gradient-to-tr from-gold-dark via-gold to-white shadow-gold-glow"
        />
      </div>

      <div className="absolute top-0 right-28 w-0.5 h-48 bg-gradient-to-b from-ink/30 to-gold-dark pointer-events-none hidden lg:block">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-4 -left-3.5 w-8 h-8 rounded-full bg-gradient-to-tr from-gold-dark via-gold to-white shadow-gold-glow"
        />
      </div>

      {/* Marble Cream Arch Background Shape */}
      <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full border-[3px] border-white/40 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full border border-gold-dark/30 pointer-events-none opacity-50" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Small Gold Bar Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ink/10 border border-ink/15 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald inline-block" />
              <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] text-ink">
                ANSHU HEGDE CREATIVE · THE FIRST RAY CONCEPT
              </span>
            </motion.div>

            {/* 2-Line Big Headline with Mask Reveal */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[72px] leading-[1.1] text-ink font-bold mb-6 tracking-tight">
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  initial={{ y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Stories That Shine.
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  initial={{ y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="block italic text-emerald-dark"
                >
                  Brands That Last.
                </motion.span>
              </span>
            </h1>

            {/* Subtext with Blur Fade */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base sm:text-lg text-ink/75 max-w-xl leading-relaxed mb-9 font-normal"
            >
              Holistic, human-centric creative strategy crafted for ambitious
              founders, leaders, and creators. We blend 15 years of television
              production rigor with 30+ years of empathetic mentorship to build
              unforgettable personal brands.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-5 sm:gap-6"
            >
              <Magnetic strength={0.3}>
                <a href={`tel:${siteConfig.phoneRaw}`}>
                  <Button
                    variant="primary"
                    size="lg"
                    icon={<PhoneCall className="w-4 h-4" />}
                  >
                    Let&apos;s Connect
                  </Button>
                </a>
              </Magnetic>

              {/* Round Dark-Green Watch Showreel Button */}
              <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setIsShowreelOpen(true)}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.94 }}
                  aria-label="Watch Showreel"
                  className="w-13 h-13 p-3.5 rounded-full bg-emerald text-gold border border-gold/40 shadow-emerald-glow flex items-center justify-center transition-all group-hover:bg-emerald-light"
                >
                  <Play className="w-5 h-5 fill-gold ml-0.5" />
                </motion.button>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-semibold text-ink group-hover:text-emerald-dark transition-colors">
                    Watch Showreel
                  </span>
                  <span className="text-[11px] text-ink/60 uppercase tracking-widest">
                    2026 Creative Reel
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Large Rounded Image with Parallax & Indicator */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-28 sm:rounded-[36px] overflow-hidden shadow-2xl border-2 border-white/60 bg-marble-cream group"
            >
              {/* Ken Burns zoom animation */}
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="relative aspect-[4/3] sm:aspect-[4/3] w-full"
              >
                <Image
                  src="/images/hero-podium.jpg"
                  alt="Anshu Hegde Creative Luxury Editorial Podium"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              {/* Floating aesthetic tag badge */}
              <div className="absolute bottom-5 left-5 bg-emerald/90 backdrop-blur-md border border-gold/40 text-cream py-2 px-4 rounded-full flex items-center gap-2 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-gold animate-spin-slow" />
                <span className="text-xs font-medium tracking-wide">
                  The First Ray Concept
                </span>
              </div>

              {/* Small Vertical Dot Indicator on Right Edge (as in reference image) */}
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-20 py-3 px-1.5 rounded-full bg-emerald-dark/60 backdrop-blur-sm border border-gold/30">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="w-1.5 h-1.5 rounded-full bg-cream/40" />
                <span className="w-1.5 h-1.5 rounded-full bg-cream/40" />
              </div>
            </motion.div>

            {/* Behind glowing shadow */}
            <div className="absolute -inset-4 bg-gold-dark/20 rounded-[44px] -z-10 blur-xl pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Showreel Video Modal */}
      <Modal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
        title="Anshu Hegde Creative — The First Ray Showreel"
        className="max-w-4xl"
      >
        <div className="relative aspect-video rounded-20 overflow-hidden bg-black border border-gold/40 shadow-2xl flex items-center justify-center">
          <video
            src="/media/VID-20261023-WA0020.mp4"
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          />
        </div>
      </Modal>
    </section>
  );
}
