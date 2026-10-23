"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [cursorType, setCursorType] = useState<"default" | "link" | "image" | "hidden">("default");
  const [isTouch, setIsTouch] = useState(true);

  // High-performance MotionValues (zero React re-renders on mouse movement)
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.1 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);

  useEffect(() => {
    // Return early and disable completely on touch screens (phones, tablets)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    let lastTargetCheck = 0;

    const onMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);

      // Throttle target inspection to every 60ms to avoid DOM traversal churn
      const now = performance.now();
      if (now - lastTargetCheck < 60) return;
      lastTargetCheck = now;

      const target = e.target as HTMLElement;
      if (!target) return;

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setCursorType((prev) => (prev !== "link" ? "link" : prev));
      } else if (
        target.tagName === "IMG" ||
        target.closest("[data-cursor='view']") ||
        target.closest(".gallery-card")
      ) {
        setCursorType((prev) => (prev !== "image" ? "image" : prev));
      } else {
        setCursorType((prev) => (prev !== "default" ? "default" : prev));
      }
    };

    const onMouseLeave = () => {
      setCursorType("hidden");
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.body.addEventListener("mouseleave", onMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [rawX, rawY]);

  if (isTouch || cursorType === "hidden") return null;

  const scale = cursorType === "image" ? 3 : cursorType === "link" ? 2 : 1;

  return (
    <>
      {/* Outer Follower - Using GPU transform scale instead of animating width/height */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-6 h-6 -ml-3 -mt-3 rounded-full flex items-center justify-center text-[8px] uppercase font-bold tracking-widest gpu-accelerated"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale,
          backgroundColor:
            cursorType === "image"
              ? "rgba(240, 203, 94, 0.95)"
              : cursorType === "link"
              ? "rgba(240, 203, 94, 0.25)"
              : "rgba(240, 203, 94, 0.15)",
          borderColor: "rgba(240, 203, 94, 0.7)",
          borderWidth: cursorType === "image" ? "0px" : "1.5px",
          color: "#0B3B2C",
        }}
        transition={{ duration: 0.2 }}
      >
        {cursorType === "image" && <span className="scale-75">View</span>}
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-gold rounded-full gpu-accelerated"
        style={{
          x: rawX,
          y: rawY,
        }}
        animate={{
          opacity: cursorType === "image" ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
