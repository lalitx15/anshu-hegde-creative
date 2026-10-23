import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Anshu Hegde — 30+ Years of Creative Mastery & Mentorship",
  description:
    "Learn about Anshu Hegde, Founder & Creative Director of Anshu Hegde Creative (The First Ray Concept). 30+ years of mentorship, 15 years in commercial TV, and 20 years in luxury lifestyle enterprise.",
  keywords: [
    "Anshu Hegde",
    "About Anshu Hegde",
    "The First Ray Concept",
    "Creative Director Bengaluru",
    "Commercial TV Production Veteran",
    "Executive Brand Strategist",
    "Fashion Shoot Creative Director",
    "Creative Mentorship India",
  ],
  openGraph: {
    title: "About Anshu Hegde — Founder & Creative Director",
    description:
      "Synthesizing 15 years in commercial television and 30+ years of empathetic creative mentorship.",
    images: ["/images/anshu-portrait.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
