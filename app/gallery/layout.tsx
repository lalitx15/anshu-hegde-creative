import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visual Harmony & Elegance — 31 Media Production Portfolio",
  description:
    "Browse the full archive of 31 authentic productions from Anshu Hegde: cinematic video reels, broadcast television podcasts (Nimma Payana & Parichayaa), and bespoke bridal and fashion editorial shoots.",
  keywords: [
    "Anshu Hegde Portfolio",
    "Fashion Photography Bengaluru",
    "Bridal Styling Shoots",
    "Cinematic Video Reels",
    "Nimma Payana Episodes",
    "Parichayaa Podcast",
    "Commercial TV Director Portfolio",
  ],
  openGraph: {
    title: "Visual Harmony & Elegance — Anshu Hegde Creative Portfolio",
    description: "Explore 31 authentic productions from Anshu Hegde’s studio archive.",
    images: ["/media/IMG-20261022-WA0009.jpg"],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
