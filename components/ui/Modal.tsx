"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-emerald-dark/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative z-10 w-full max-w-lg bg-emerald border border-gold/40 rounded-28 p-6 sm:p-8 text-cream shadow-2xl overflow-hidden",
              className
            )}
          >
            {/* Top gold bar decor */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gold/20">
              {title ? (
                <h3 className="font-serif text-xl sm:text-2xl text-gold">{title}</h3>
              ) : <div />}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-emerald-dark/60 border border-gold/30 text-gold hover:bg-gold hover:text-emerald-dark transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div>{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
