"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function MobileActionBar({ onOpenEnquiry }: { onOpenEnquiry?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        // Scrolling down -> hide
        setIsVisible(false);
      } else {
        // Scrolling up -> show
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappDefaultMessage
  )}`;

  const handleEnquire = () => {
    if (onOpenEnquiry) {
      onOpenEnquiry();
    } else {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/#contact";
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-gold-gradient py-2.5 px-4 shadow-[0_-4px_25px_rgba(0,0,0,0.25)] border-t border-gold-light/60 sm:hidden select-none"
          style={{ paddingBottom: "max(10px, env(safe-area-inset-bottom))" }}
        >
          <div className="flex items-center justify-around gap-2 max-w-sm mx-auto">
            {/* Call */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-emerald-dark text-gold font-semibold text-xs tracking-wide shadow-md active:scale-95 transition-transform"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-emerald-dark text-gold font-semibold text-xs tracking-wide shadow-md active:scale-95 transition-transform"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Enquire */}
            <button
              onClick={handleEnquire}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full bg-emerald text-cream font-semibold text-xs tracking-wide shadow-md border border-gold/40 active:scale-95 transition-transform"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-gold" />
              <span>Enquire</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
