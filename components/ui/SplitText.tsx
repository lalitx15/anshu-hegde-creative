"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWord?: string;
  highlightClass?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function SplitText({
  text,
  className,
  delay = 0,
  highlightWord,
  highlightClass = "text-gold underline decoration-gold/60 underline-offset-8",
  as: Component = "h2",
}: SplitTextProps) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "115%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Component className={cn("overflow-hidden inline-block", className)}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="inline-flex flex-wrap gap-x-[0.28em] gap-y-1"
      >
        {words.map((word, idx) => {
          const isHighlighted =
            highlightWord &&
            word.toLowerCase().replace(/[^a-z0-9]/gi, "") ===
              highlightWord.toLowerCase().replace(/[^a-z0-9]/gi, "");

          return (
            <span key={idx} className="overflow-hidden inline-block py-0.5">
              <motion.span
                variants={wordVariants}
                className={cn(
                  "inline-block",
                  isHighlighted && highlightClass
                )}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Component>
  );
}

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function BlurFade({
  children,
  className,
  delay = 0.1,
  duration = 0.7,
  yOffset = 24,
}: BlurFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
