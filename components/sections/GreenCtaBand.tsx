"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/MagneticButton";

export function GreenCtaBand({ onOpenBooking }: { onOpenBooking?: () => void }) {
  const handleBooking = () => {
    if (onOpenBooking) onOpenBooking();
    else {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.location.href = "/#contact";
    }
  };

  return (
    <section className="relative overflow-hidden bg-emerald emerald-luxury-bg py-24 sm:py-36 text-cream text-center">
      {/* Background fluted lines in gold */}
      <div className="absolute inset-0 emerald-fluted-lines opacity-30 pointer-events-none" />

      {/* Decorative Gold Arch & Marble circles on Left */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-96 rounded-r-full border-2 border-gold/40 pointer-events-none hidden md:block" />
      <div className="absolute left-10 top-1/4 w-28 h-28 rounded-full bg-marble-cream/10 border border-gold/30 backdrop-blur-sm pointer-events-none hidden md:block" />

      {/* Hanging gold sphere on left */}
      <div className="absolute top-0 left-24 w-0.5 h-32 bg-gradient-to-b from-gold/40 to-gold pointer-events-none hidden lg:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-3 -left-2.5 w-6 h-6 rounded-full bg-gradient-to-tr from-gold-dark to-gold shadow-gold-glow"
        />
      </div>

      {/* Decorative Gold Arch & Marble circles on Right */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-96 rounded-l-full border-2 border-gold/40 pointer-events-none hidden md:block" />
      <div className="absolute right-12 bottom-1/4 w-32 h-32 rounded-full bg-marble-cream/10 border border-gold/30 backdrop-blur-sm pointer-events-none hidden md:block" />

      {/* Hanging gold sphere on right */}
      <div className="absolute top-0 right-28 w-0.5 h-40 bg-gradient-to-b from-gold/40 to-gold pointer-events-none hidden lg:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-3.5 -left-3 w-7 h-7 rounded-full bg-gradient-to-tr from-gold-dark to-gold shadow-gold-glow"
        />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Centered Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-dark/60 border border-gold/40 mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              The First Ray Concept
            </span>
          </motion.div>

          {/* Big Headline */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-cream mb-6 leading-[1.15]"
          >
            Awakening the First Ray of <br />
            <span className="text-gold italic font-normal">Authentic Influence.</span>
          </motion.h2>

          {/* One-Line Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-cream/75 max-w-xl mb-10 leading-relaxed font-light"
          >
            Where commercial television rigor meets empathetic executive positioning.
            Elevate your presence beyond ephemeral trends into enduring prestige.
          </motion.p>

          {/* Centered Gold CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Magnetic strength={0.3}>
              <Button
                variant="primary"
                size="lg"
                onClick={handleBooking}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Schedule Private Consultation
              </Button>
            </Magnetic>

            <Link href="/services">
              <Button variant="outline" size="lg">
                Explore All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
