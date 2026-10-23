"use client";

import { useEffect } from "react";

export function ZoomBlocker() {
  useEffect(() => {
    // Prevent pinch-to-zoom on iOS Safari gestures
    const preventGesture = (e: Event) => {
      e.preventDefault();
    };

    document.addEventListener("gesturestart", preventGesture, { passive: false });
    document.addEventListener("gesturechange", preventGesture, { passive: false });
    document.addEventListener("gestureend", preventGesture, { passive: false });

    // Prevent multi-touch pinch zoom
    const preventMultiTouch = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    document.addEventListener("touchmove", preventMultiTouch, { passive: false });

    // Prevent double tap to zoom
    let lastTouchEnd = 0;
    const preventDoubleTap = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };
    document.addEventListener("touchend", preventDoubleTap, false);

    // Prevent desktop Ctrl + wheel zoom & Ctrl + +/- zoom
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
      document.removeEventListener("touchmove", preventMultiTouch);
      document.removeEventListener("touchend", preventDoubleTap);
      window.removeEventListener("keydown", preventKeyZoom);
      window.removeEventListener("wheel", preventWheelZoom);
    };
  }, []);

  return null;
}
