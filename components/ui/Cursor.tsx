"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<"default" | "link" | "image" | "hidden">("default");
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (!target) return;

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setCursorType("link");
      } else if (
        target.tagName === "IMG" ||
        target.closest("[data-cursor='view']") ||
        target.closest(".gallery-card")
      ) {
        setCursorType("image");
      } else {
        setCursorType("default");
      }
    };

    const onMouseLeave = () => {
      setCursorType("hidden");
    };

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (isTouch || cursorType === "hidden") return null;

  return (
    <>
      {/* Outer Follower */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center text-[10px] uppercase font-bold tracking-widest"
        animate={{
          x: mousePosition.x - (cursorType === "image" ? 36 : cursorType === "link" ? 24 : 12),
          y: mousePosition.y - (cursorType === "image" ? 36 : cursorType === "link" ? 24 : 12),
          width: cursorType === "image" ? 72 : cursorType === "link" ? 48 : 24,
          height: cursorType === "image" ? 72 : cursorType === "link" ? 48 : 24,
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
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
          mass: 0.15,
        }}
      >
        {cursorType === "image" && <span>View</span>}
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-1.5 h-1.5 bg-gold rounded-full"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: cursorType === "image" ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 800,
        }}
      />
    </>
  );
}
