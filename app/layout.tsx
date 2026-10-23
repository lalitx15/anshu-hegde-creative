import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { ToastProvider } from "@/components/ui/Toast";
import { ZoomBlocker } from "@/components/ui/ZoomBlocker";
import { Cursor } from "@/components/ui/Cursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { PageTransition } from "@/components/layout/PageTransition";
import { LenisWrapper } from "@/components/layout/LenisWrapper";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#0B3B2C",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://anshuhegdecreative.com"),
  title: {
    default: `${siteConfig.siteName} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Anshu Hegde",
    "The First Ray Concept",
    "Creative Director",
    "Personal Brand Strategy",
    "Executive Positioning",
    "Visual Media Shoots",
    "Commercial TV Direction",
    "Creative Mentorship",
    "Luxury Creative Agency",
  ],
  authors: [{ name: "Anshu Hegde" }],
  creator: "Anshu Hegde",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteConfig.siteName,
    title: `${siteConfig.siteName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero-podium.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.siteName} — Luxury Creative Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.siteName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/hero-podium.jpg"],
    creator: "@anshu_hegde",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/images/logo-icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/images/logo-icon.png",
    shortcut: "/images/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://anshuhegdecreative.com/#organization",
        "name": siteConfig.siteName,
        "alternateName": "The First Ray Concept",
        "url": "https://anshuhegdecreative.com",
        "logo": "https://anshuhegdecreative.com/icons/icon-512.png",
        "sameAs": [
          siteConfig.social.instagram,
          siteConfig.social.linkedin,
          siteConfig.social.youtube,
          siteConfig.social.facebook,
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": siteConfig.phoneRaw,
          "contactType": "Customer Service",
          "email": siteConfig.email,
        },
      },
      {
        "@type": "Person",
        "@id": "https://anshuhegdecreative.com/#person",
        "name": "Anshu Hegde",
        "jobTitle": "Founder & Creative Director",
        "worksFor": {
          "@id": "https://anshuhegdecreative.com/#organization",
        },
        "description":
          "Creative strategist and mentor with 30+ years of mentorship and 15 years in commercial television production.",
        "image": "https://anshuhegdecreative.com/images/anshu-portrait.jpg",
      },
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-gold selection:text-emerald-dark">
        <ToastProvider>
          <ZoomBlocker />
          <Cursor />
          <ScrollProgress />
          <LenisWrapper>
            <Header />
            <PageTransition>{children}</PageTransition>
            <Footer />
            <WhatsAppFloat />
          </LenisWrapper>
        </ToastProvider>
      </body>
    </html>
  );
}
