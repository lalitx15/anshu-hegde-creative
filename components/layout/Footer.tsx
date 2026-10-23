"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  Music,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Download,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useInstallPrompt } from "@/hooks/useInstallPrompt";
import { useToast } from "@/components/ui/Toast";

export function Footer({ onOpenInstall }: { onOpenInstall?: () => void }) {
  const { isInstalled, triggerInstall } = useInstallPrompt();
  const { showToast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      showToast({
        type: "error",
        title: "Invalid Email",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setIsSuccess(true);
        showToast({
          type: "success",
          title: "Subscribed!",
          message: data.message,
        });
        setNewsletterEmail("");
      } else {
        showToast({
          type: "error",
          title: "Subscription Failed",
          message: data.error || "Please try again later.",
        });
      }
    } catch {
      showToast({
        type: "error",
        title: "Connection Error",
        message: "Could not reach server. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
    { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
    { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: siteConfig.social.x, label: "X (Twitter)" },
    { icon: Music, href: siteConfig.social.spotify, label: "Spotify" },
    { icon: MessageCircle, href: siteConfig.social.whatsapp, label: "WhatsApp" },
  ];

  return (
    <footer className="bg-emerald-dark text-cream relative overflow-hidden pt-20 pb-12 border-t border-gold/25">
      {/* Background fluted lines effect */}
      <div className="absolute inset-0 emerald-fluted-lines opacity-25 pointer-events-none" />

      {/* Decorative ambient gold glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        {/* Top Newsletter & Brand Banner */}
        <div className="pb-16 mb-16 border-b border-gold/15 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-13 h-13 rounded-full bg-emerald border-2 border-gold flex items-center justify-center shadow-gold-glow relative overflow-hidden shrink-0">
                <Image
                  src="/images/logo-icon.png"
                  alt="Anshu Hegde Logo"
                  fill
                  className="object-cover scale-115 p-0.5"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-cream">
                  {siteConfig.siteName}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-gold">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>
            <p className="text-cream/70 text-sm max-w-md leading-relaxed">
              Curating authentic narratives, high-impact visual media shoots, and
              executive personal branding with three decades of creative mastery.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6">
            <div className="bg-emerald/70 border border-gold/30 rounded-24 p-6 sm:p-8 backdrop-blur-md">
              <h4 className="font-serif text-xl text-gold mb-2">
                Join The First Ray Circle
              </h4>
              <p className="text-xs text-cream/70 mb-5 leading-relaxed">
                Receive private insights on brand authority, visual storytelling,
                and upcoming exclusive studio masterclasses.
              </p>

              {isSuccess ? (
                <div className="flex items-center gap-2 text-gold text-sm font-medium py-3">
                  <CheckCircle2 className="w-5 h-5 text-gold" />
                  <span>You are subscribed to our private newsletter.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="flex-1 bg-emerald-dark/80 border border-gold/40 rounded-full px-5 py-3 text-sm text-cream placeholder-cream/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="shimmer-btn bg-gold-btn text-emerald-dark font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:brightness-110 flex items-center justify-center gap-2 transition-all shadow-gold-card disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-gold/15">
          {/* Col 1: Quick Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              Quick Navigation
            </h4>
            <ul className="space-y-3.5 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/80 hover:text-gold hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              Core Capabilities
            </h4>
            <ul className="space-y-3 text-sm text-cream/75">
              {siteConfig.servicesList.slice(0, 6).map((service, idx) => (
                <li key={idx}>
                  <Link
                    href="/services"
                    className="hover:text-gold hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              Direct Studio Enquiries
            </h4>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-3 text-sm text-cream/85 hover:text-gold transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-emerald border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-emerald-dark transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{siteConfig.phone}</span>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-sm text-cream/85 hover:text-gold transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-emerald border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-emerald-dark transition-colors">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span>{siteConfig.email}</span>
            </a>

            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-cream/85 hover:text-gold transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-emerald border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-emerald-dark transition-colors">
                <MessageCircle className="w-3.5 h-3.5" />
              </div>
              <span>WhatsApp Direct</span>
            </a>

            <div className="flex items-start gap-3 text-sm text-cream/70 pt-2">
              <div className="w-8 h-8 rounded-full bg-emerald border border-gold/40 flex items-center justify-center text-gold shrink-0 mt-0.5">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span className="leading-relaxed text-xs sm:text-sm">
                {siteConfig.address}
              </span>
            </div>
          </div>
        </div>

        {/* Social Icons Strip */}
        <div className="py-8 flex flex-wrap items-center justify-between gap-6 border-b border-gold/15">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-gold/80 font-medium mr-2">
              Follow Anshu:
            </span>
            {socialLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full border border-gold/40 bg-emerald/60 flex items-center justify-center text-gold hover:bg-gold hover:text-emerald-dark hover:scale-110 transition-all duration-300 shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {!isInstalled && (
            <button
              onClick={() => {
                if (onOpenInstall) onOpenInstall();
                else triggerInstall();
              }}
              className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-gold hover:text-white px-5 py-2.5 rounded-full border border-gold/50 bg-emerald/60 hover:bg-gold/20 transition-all"
            >
              <Download className="w-4 h-4 text-gold" />
              <span>Install Mobile App (PWA)</span>
            </button>
          )}
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/50 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.</p>
          <p className="tracking-widest uppercase text-[11px] text-gold/70">
            The First Ray Concept · Production-Grade Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}
