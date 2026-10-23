import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eight Pillars of Creative Mastery — Services & Deliverables",
  description:
    "Explore our 8 bespoke creative disciplines: Strategic Campaign Design, Visual Media Shoots, Podcast Curation, Brand Identity, Short-Form Reels, PR, Web Design, and Social Media Strategy.",
  keywords: [
    "Creative Direction Services",
    "Brand Campaign Strategy",
    "High-Fashion Editorial Shoots",
    "Podcast Production Studio Bengaluru",
    "C-Suite Personal Branding",
    "Luxury Web Design Agency",
    "Public Relations Management",
  ],
  openGraph: {
    title: "Eight Pillars of Creative Mastery — Anshu Hegde Creative",
    description:
      "Full spectrum creative strategy, media production, and executive brand positioning.",
    images: ["/images/hero-podium.jpg"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
