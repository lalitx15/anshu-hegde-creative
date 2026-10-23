"use client";

import { useEffect } from "react";

export function ZoomBlocker() {
  useEffect(() => {
    // Prevent pinch-to-zoom on iOS Safari gestures without blocking native touch scrolling
    const preventGesture = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener("gesturestart", preventGesture, { passive: false });
    document.addEventListener("gesturechange", preventGesture, { passive: false });
    document.addEventListener("gestureend", preventGesture, { passive: false });

    // Prevent desktop Ctrl + +/- zoom
    const preventKeyZoom = (e: KeyboardEvent) => {
      if (
        e.ctrlKey &&
        (e.key === "+" ||
          e.key === "-" ||
          e.key === "=" ||
          e.key === "_" ||
          e.key === "0")
      ) {
        e.preventDefault();
      }
    };

    // Prevent desktop Ctrl + wheel zoom without intercepting standard wheel scrolling
    const preventWheelZoom = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", preventKeyZoom, { passive: false });
    window.addEventListener("wheel", preventWheelZoom, { passive: false });

    return () => {
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
      document.removeEventListener("gestureend", preventGesture);
      window.removeEventListener("keydown", preventKeyZoom);
      window.removeEventListener("wheel", preventWheelZoom);
    };
  }, []);

  return null;
}
