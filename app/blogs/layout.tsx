import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Perspectives — Luxury Branding & Media Essays",
  description:
    "Explore strategic essays and industry perspectives by Anshu Hegde on personal branding, commercial storytelling, visual aesthetics, and creative mentorship.",
  keywords: [
    "Luxury Branding Blog",
    "Creative Direction Insights",
    "Personal Branding Articles",
    "Media Production Guide",
    "Anshu Hegde Essays",
  ],
  openGraph: {
    title: "Insights & Perspectives — Anshu Hegde Creative",
    description: "Thought leadership on luxury brand positioning and visual media storytelling.",
    images: ["/images/hero-podium.jpg"],
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
