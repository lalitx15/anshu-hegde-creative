"use client";

import React from "react";
import Image from "next/image";
import { Download, Share2, PlusSquare, Smartphone, Laptop, CheckCircle2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

interface InstallAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  isIOS: boolean;
  onTriggerInstall: () => void;
}

export function InstallAppModal({
  isOpen,
  onClose,
  isIOS,
  onTriggerInstall,
}: InstallAppModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Install Anshu Hegde App">
      <div className="flex flex-col items-center text-center py-2">
        {/* Real Gold Logo Emblem */}
        <div className="w-20 h-20 rounded-full bg-emerald-dark border-2 border-gold flex items-center justify-center shadow-gold-glow mb-4 relative overflow-hidden shrink-0">
          <Image
            src="/images/logo-icon.png"
            alt="Anshu Hegde Logo"
            fill
            className="object-cover scale-110 p-1"
          />
        </div>

        <h4 className="font-serif text-xl text-cream mb-1">
          {siteConfig.siteName}
        </h4>
        <p className="text-xs uppercase tracking-widest text-gold mb-6">
          {siteConfig.tagline}
        </p>

        {isIOS ? (
          <div className="w-full bg-emerald-dark/70 rounded-20 p-5 border border-gold/30 text-left text-sm text-cream/90 space-y-4 mb-6">
            <p className="text-xs text-gold uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <Smartphone className="w-4 h-4" />
              <span>Install on iPhone / iPad (Safari):</span>
            </p>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald flex items-center justify-center text-gold border border-gold/40 text-xs font-bold shrink-0">
                1
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm">
                <span>Tap the</span>
                <span className="inline-flex items-center gap-1 font-semibold text-gold px-2 py-0.5 rounded bg-emerald border border-gold/40 text-xs">
                  <Share2 className="w-3 h-3" /> Share
                </span>
                <span>button in Safari.</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald flex items-center justify-center text-gold border border-gold/40 text-xs font-bold shrink-0">
                2
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm">
                <span>Scroll down and tap</span>
                <span className="inline-flex items-center gap-1 font-semibold text-gold px-2 py-0.5 rounded bg-emerald border border-gold/40 text-xs">
                  <PlusSquare className="w-3 h-3" /> Add to Home Screen
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full bg-emerald-dark/70 rounded-20 p-5 border border-gold/30 text-left text-sm text-cream/90 space-y-3 mb-6">
            <p className="text-xs text-gold uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <Laptop className="w-4 h-4" />
              <span>Install on Android or Laptop / Desktop:</span>
            </p>
            <div className="flex items-start gap-2.5 text-xs text-cream/80">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>
                Click the <strong>&ldquo;Install&rdquo; (⊕)</strong> icon in your browser address bar (top right).
              </span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-cream/80">
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>
                Or tap browser menu <strong>(⋮)</strong> &rarr; <strong>&ldquo;Install app&rdquo;</strong> / <strong>&ldquo;Add to Home screen&rdquo;</strong>.
              </span>
            </div>
          </div>
        )}

        <div className="w-full flex flex-col gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={() => {
              onTriggerInstall();
              onClose();
            }}
            className="w-full"
            icon={<Download className="w-4 h-4" />}
          >
            Confirm & Install App
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="w-full"
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export function InstallBanner({
  onInstall,
  onDismiss,
}: {
  onInstall: () => void;
  onDismiss: () => void;
}) {
  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-40 bg-emerald-dark/95 border-2 border-gold/40 shadow-2xl rounded-24 p-4 text-cream backdrop-blur-xl flex items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-5">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-16 bg-emerald border border-gold/40 flex items-center justify-center shrink-0 p-1">
          <Image
            src="/images/logo-emblem.png"
            alt="Logo"
            width={40}
            height={28}
            className="object-contain"
          />
        </div>
        <div>
          <h5 className="font-serif text-sm font-bold text-cream">
            {siteConfig.siteName}
          </h5>
          <p className="text-[11px] text-gold">One-tap portfolio access</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="primary"
          size="sm"
          onClick={onInstall}
          className="text-xs px-3 py-1.5"
        >
          Install
        </Button>
        <button
          onClick={onDismiss}
          className="text-cream/50 hover:text-white p-1"
          aria-label="Dismiss banner"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
