import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curated Studio Masterclasses & Mentorship Cohorts",
  description:
    "Intimate, personalized workshops led by Anshu Hegde for models, women entrepreneurs, corporate executives, and creative couples. Master camera poise, narrative clarity, and brand authority.",
  keywords: [
    "Anshu Hegde Workshops",
    "Model Camera Presence Masterclass",
    "Women Entrepreneur Brand Coaching",
    "Executive Presence Workshop Bengaluru",
    "Posing and Poise Intensive",
  ],
  openGraph: {
    title: "Curated Studio Masterclasses — Anshu Hegde Creative",
    description: "Hands-on creative direction cohorts hosted personally by Anshu Hegde.",
    images: ["/media/IMG-20261023-WA0013.jpg"],
  },
};

export default function WorkshopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
