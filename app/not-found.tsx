import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-emerald emerald-luxury-bg text-cream flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden">
      {/* Background fluted lines */}
      <div className="absolute inset-0 emerald-fluted-lines opacity-30 pointer-events-none" />

      {/* Decorative Gold Arch */}
      <div className="absolute w-[500px] h-[500px] rounded-full border border-gold/20 pointer-events-none -top-40" />

      <div className="relative z-10 max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-emerald-dark border-2 border-gold text-gold flex items-center justify-center mx-auto mb-6 shadow-gold-glow">
          <Sparkles className="w-7 h-7" />
        </div>

        <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-3">
          404 · Page Not Found
        </p>

        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-cream mb-4">
          Lost in Creation.
        </h1>

        <p className="text-sm sm:text-base text-cream/75 leading-relaxed mb-8">
          The sanctuary or project you are searching for does not exist or has
          been relocated. Let us return you to the main portfolio.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link href="/">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowLeft className="w-4 h-4" />}
              iconPosition="left"
            >
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
