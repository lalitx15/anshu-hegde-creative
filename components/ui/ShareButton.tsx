"use client";

import React, { useState } from "react";
import { Share2, MessageCircle, Linkedin, Twitter, Copy, Check } from "lucide-react";
import { useToast } from "@/components/ui/Toast";

export function ShareButton({ title }: { title: string }) {
  const { showToast } = useToast();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      showToast({
        type: "success",
        title: "Link Copied",
        message: "Article URL copied to your clipboard.",
      });
      setTimeout(() => setIsCopied(false), 3000);
    }
  };

  const getShareUrl = (platform: "whatsapp" | "linkedin" | "twitter") => {
    if (typeof window === "undefined") return "#";
    const currentUrl = encodeURIComponent(window.location.href);
    const encodedTitle = encodeURIComponent(title);

    switch (platform) {
      case "whatsapp":
        return `https://wa.me/?text=${encodedTitle}%20${currentUrl}`;
      case "linkedin":
        return `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${currentUrl}`;
    }
  };

  return (
    <div className="py-6 my-8 border-y border-gold/20 flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-semibold">
        <Share2 className="w-4 h-4" />
        <span>Share This Article:</span>
      </div>

      <div className="flex items-center gap-3">
        <a
          href={getShareUrl("whatsapp")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="w-10 h-10 rounded-full bg-emerald border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-emerald-dark transition-all"
        >
          <MessageCircle className="w-4 h-4" />
        </a>

        <a
          href={getShareUrl("linkedin")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="w-10 h-10 rounded-full bg-emerald border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-emerald-dark transition-all"
        >
          <Linkedin className="w-4 h-4" />
        </a>

        <a
          href={getShareUrl("twitter")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X (Twitter)"
          className="w-10 h-10 rounded-full bg-emerald border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-emerald-dark transition-all"
        >
          <Twitter className="w-4 h-4" />
        </a>

        <button
          onClick={handleCopy}
          aria-label="Copy article link"
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald border border-gold/40 text-xs uppercase font-semibold text-gold hover:bg-gold hover:text-emerald-dark transition-all"
        >
          {isCopied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
