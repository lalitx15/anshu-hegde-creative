import React from "react";
import { Hero } from "@/components/sections/Hero";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { GreenCtaBand } from "@/components/sections/GreenCtaBand";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { MarqueeStrips } from "@/components/sections/MarqueeStrips";
import { ServicesScroller } from "@/components/sections/ServicesScroller";
import { Stats } from "@/components/sections/Stats";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { WorkshopsPreview } from "@/components/sections/WorkshopsPreview";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero on Gold Band */}
      <Hero />

      {/* 2. Three Feature Cards on Gold Band */}
      <FeatureCards />

      {/* 3. Deep Green Band with Centered CTA */}
      <GreenCtaBand />

      {/* 4. Three Image Cards on Gold Band (Gallery Preview) */}
      <GalleryPreview />

      {/* 5. Infinite Marquee Strips */}
      <MarqueeStrips />

      {/* 6. Eight Services Scroller / Snap Carousel on Emerald */}
      <ServicesScroller />

      {/* 7. About Teaser + Quote + 3 Count-Up Stats on Gold */}
      <Stats />

      {/* 8. Latest Blog Feature on Emerald */}
      <BlogPreview />

      {/* 9. Workshops Masterclasses Teaser on Gold */}
      <WorkshopsPreview />

      {/* 10. Contact Enquiries + Google Map on Emerald */}
      <ContactSection />
    </main>
  );
}
