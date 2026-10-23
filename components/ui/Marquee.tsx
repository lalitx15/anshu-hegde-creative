"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number; // duration in seconds
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  direction = "left",
  speed = 28,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const animClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className={cn(
        "flex overflow-hidden select-none whitespace-nowrap",
        pauseOnHover && "pause-hover",
        className
      )}
      style={
        {
          "--marquee-duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div className={cn("flex shrink-0 items-center gap-6", animClass)}>
        <div className="flex shrink-0 items-center gap-6">{children}</div>
        <div className="flex shrink-0 items-center gap-6" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
