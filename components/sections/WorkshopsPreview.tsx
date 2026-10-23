"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  Clock,
  ArrowRight,
  MessageCircle,
  Users,
  GraduationCap,
  Crown,
  Briefcase,
  HeartHandshake,
} from "lucide-react";
import { workshopsData, workshopAudiences } from "@/lib/workshops";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Crown,
  Briefcase,
  GraduationCap,
  HeartHandshake,
};

export function WorkshopsPreview() {
  return (
    <section className="relative bg-gold gold-noise-bg py-24 sm:py-32 text-ink overflow-hidden">
      {/* Decorative fluted lines */}
      <div className="absolute inset-0 gold-fluted-lines opacity-15 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ink/10 border border-ink/15 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              Mentorship & Masterclasses
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink mb-4 tracking-tight">
            Curated Studio Workshops
          </h2>

          <p className="text-sm sm:text-base text-ink/75 leading-relaxed">
            Hands-on creative direction, camera choreography, and executive
            positioning cohorts hosted personally by Anshu Hegde.
          </p>
        </div>

        {/* Who these workshops are for — Row */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-dark">
              Who These Masterclasses Are Designed For:
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {workshopAudiences.map((audience, idx) => {
              const Icon = iconMap[audience.icon] || Users;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-20 p-5 bg-gold-glass border border-white/60 shadow-sm text-center flex flex-col items-center justify-center hover:bg-white/80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald text-gold flex items-center justify-center mb-3 shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-ink mb-1">
                    {audience.title}
                  </h4>
                  <p className="text-[11px] text-emerald-dark font-medium">
                    {audience.subtitle}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Workshop Cards (Preview 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {workshopsData.slice(0, 2).map((workshop) => {
            const whatsappEnrollUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
              `Hi Anshu, I would like to enquire about enrolling in the workshop: "${workshop.title}".`
            )}`;

            return (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-28 p-8 sm:p-10 bg-gold-glass border border-white/70 shadow-gold-card backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald text-gold text-xs font-semibold tracking-wider uppercase">
                      {workshop.mode}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-dark">
                      {workshop.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                    {workshop.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink/75 leading-relaxed mb-6">
                    {workshop.description}
                  </p>

                  <div className="space-y-2 mb-8 text-xs text-ink/80 border-t border-ink/10 pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-emerald-dark" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-emerald-dark" />
                      <span>{workshop.duration}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={whatsappEnrollUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full text-center"
                    icon={<MessageCircle className="w-4 h-4" />}
                  >
                    Enquire on WhatsApp
                  </Button>
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/workshops">
            <Button
              variant="outline"
              size="md"
              className="border-ink/30 text-ink hover:bg-ink hover:text-gold"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore All Workshops & Cohort Schedules
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
