"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useLenis() {
  useEffect(() => {
    // Respect user's reduced motion settings
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Detect touch screens - preserve 120Hz native hardware momentum scrolling on mobile
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !isTouch,
      wheelMultiplier: 0.9,
      touchMultiplier: 0, // Never intercept native mobile touch scrolling
      syncTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    // Keep named reference so ticker is genuinely removed on unmount without leaking
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerCallback);
    };
  }, []);
}
