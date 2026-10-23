"use client";

import { useState, useEffect } from "react";

export function useScrollVelocity(): number {
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = performance.now();
      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = Math.max(currentTime - lastTime, 1);

      const currentVelocity = Math.abs(deltaY / deltaTime);
      setVelocity(currentVelocity);

      lastScrollY = currentScrollY;
      lastTime = currentTime;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setVelocity(0);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return velocity;
}
