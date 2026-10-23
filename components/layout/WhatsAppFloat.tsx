"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappDefaultMessage
  )}`;

  return (
    <div className="fixed bottom-24 sm:bottom-8 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-full bg-emerald-dark/95 border border-gold/40 text-gold text-xs font-medium tracking-wide shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat with Anshu Hegde
      </span>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.08 }}
        className="relative w-13 h-13 p-3.5 rounded-full bg-emerald text-gold border-2 border-gold shadow-gold-glow flex items-center justify-center transition-all duration-300 overflow-visible"
      >
        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full border-2 border-gold/60 animate-ping pointer-events-none opacity-75" />

        <MessageCircle className="w-6 h-6 fill-gold/20" />
      </motion.a>
    </div>
  );
}
