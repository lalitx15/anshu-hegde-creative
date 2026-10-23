"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gold-gradient z-50 origin-left shadow-[0_0_12px_rgba(240,203,94,0.8)]"
      style={{ scaleX }}
    />
  );
}

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

      setScrollPercentage(progress);
      setIsVisible(scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercentage / 100) * circumference;

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      whileTap={{ scale: 0.92 }}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-24 sm:bottom-8 right-6 z-40 w-12 h-12 rounded-full bg-emerald-dark/95 border border-gold/40 shadow-2xl flex items-center justify-center text-gold hover:bg-gold hover:text-emerald-dark transition-all duration-300 group"
    >
      <svg className="absolute w-12 h-12 -rotate-90 pointer-events-none">
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="rgba(240, 203, 94, 0.2)"
          strokeWidth="2.5"
          fill="none"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="#F0CB5E"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-150 ease-out"
        />
      </svg>
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
    </motion.button>
  );
}
