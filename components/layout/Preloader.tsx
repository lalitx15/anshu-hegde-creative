"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only show preloader on first session visit or direct reload
    const hasLoaded = sessionStorage.getItem("ah_initial_preloaded");
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("ah_initial_preloaded", "true");
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            opacity: 0,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gold gold-noise-bg select-none"
        >
          {/* Logo Circle Reveal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-24 h-24 rounded-full bg-emerald border-2 border-gold-light/60 flex items-center justify-center shadow-gold-glow mb-6 relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute inset-1 border border-dashed border-gold/40 rounded-full"
            />
            <img
              src="/images/logo-icon.png"
              alt="Anshu Hegde Logo"
              className="w-20 h-20 object-contain drop-shadow p-1"
            />
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-2xl sm:text-3xl text-ink tracking-wide text-center uppercase"
          >
            Anshu Hegde Creative
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-3 mt-3"
          >
            <span className="h-[1px] w-8 bg-ink/30" />
            <span className="text-xs sm:text-sm font-sans tracking-[0.25em] text-ink/75 uppercase">
              The First Ray Concept
            </span>
            <span className="h-[1px] w-8 bg-ink/30" />
          </motion.div>

          {/* Subtle loading line */}
          <div className="w-36 h-[2px] bg-ink/15 rounded-full overflow-hidden mt-8">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full bg-emerald"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
