"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MessageCircle,
  Sparkles,
  Users,
  CheckCircle2,
  Crown,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { workshopsData, workshopAudiences } from "@/lib/workshops";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { ContactSection } from "@/components/sections/ContactSection";

const audienceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Crown,
  Briefcase,
  GraduationCap,
  HeartHandshake,
};

export default function WorkshopsPage() {
  const [selectedCohort, setSelectedCohort] = useState("Workshops & Masterclasses");

  const scrollToWaitlist = (workshopTitle: string) => {
    setSelectedCohort(`Workshop: ${workshopTitle}`);
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      {/* Workshops Hero on Gold Band */}
      <section className="relative bg-gold gold-noise-bg pt-36 pb-20 md:pt-44 md:pb-28 text-ink overflow-hidden">
        <div className="absolute inset-0 gold-fluted-lines opacity-15 pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ink/10 border border-ink/15 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              The Mentorship Atelier
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ink mb-6 tracking-tight">
            Curated Studio Masterclasses.
          </h1>

          <p className="text-base sm:text-xl text-ink/75 max-w-2xl mx-auto leading-relaxed">
            Personalized, intimate masterclasses blending camera poise, executive
            presence, and narrative clarity, led directly by Anshu Hegde.
          </p>
        </div>
      </section>

      {/* "Who These Workshops Are For" Section */}
      <section className="relative bg-emerald-dark emerald-luxury-bg py-20 sm:py-28 text-cream">
        <div className="absolute inset-0 emerald-fluted-lines opacity-20 pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gold mb-3">
              Who These Workshops Are For
            </h2>
            <p className="text-sm text-cream/75 leading-relaxed">
              Synthesizing 30+ years of mentorship across diverse creative and
              executive disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {workshopAudiences.map((item, idx) => {
              const Icon = audienceIcons[item.icon] || Users;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-24 p-6 bg-emerald/80 border border-gold/30 hover:border-gold/60 backdrop-blur-md flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-emerald-dark border border-gold/40 flex items-center justify-center text-gold mb-5 shadow-gold-glow">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-cream mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-gold font-medium mb-3">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-cream/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops Grid on Gold */}
      <section className="relative bg-gold gold-noise-bg py-24 sm:py-32 text-ink">
        <div className="absolute inset-0 gold-fluted-lines opacity-15 pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink mb-4">
              Upcoming Cohort Schedules
            </h2>
            <p className="text-sm text-ink/70">
              Limited seats per cohort to maintain deeply personalized creative
              critique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {workshopsData.map((workshop) => {
              const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                `Hi Anshu, I would like to enquire about enrolling in the workshop: "${workshop.title}".`
              )}`;

              return (
                <motion.div
                  key={workshop.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-28 p-8 bg-gold-glass border border-white/70 shadow-gold-card backdrop-blur-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <span className="px-3 py-1 rounded-full bg-emerald text-gold text-xs font-semibold uppercase tracking-wider">
                        {workshop.mode}
                      </span>
                      <span className="text-xs font-semibold text-emerald-dark uppercase tracking-wider">
                        {workshop.status}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-ink mb-3 leading-snug">
                      {workshop.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-dark mb-4">
                      Designed for: {workshop.audience}
                    </p>
                    <p className="text-xs sm:text-sm text-ink/75 leading-relaxed mb-6">
                      {workshop.description}
                    </p>

                    <div className="border-t border-ink/10 pt-4 mb-6 space-y-2 text-xs text-ink/80">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-emerald-dark" />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-emerald-dark" />
                        <span>{workshop.duration}</span>
                      </div>
                    </div>

                    <div className="bg-white/60 rounded-xl p-4 mb-6 border border-white/80 space-y-2">
                      <p className="text-[11px] uppercase font-bold text-ink/70 tracking-wider">
                        Curriculum Highlights:
                      </p>
                      {workshop.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-ink/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-4 border-t border-ink/10">
                    <a
                      href={whatsappUrl}
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
                        Register / Enquire
                      </Button>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Empty-State Card: "New workshops coming soon — join the waitlist" */}
          <div className="rounded-28 p-8 sm:p-12 bg-white/70 border border-white/90 shadow-gold-card text-center max-w-2xl mx-auto backdrop-blur-md">
            <div className="w-14 h-14 rounded-full bg-emerald text-gold flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-ink mb-2">
              New Workshops Coming Soon
            </h3>
            <p className="text-xs sm:text-sm text-ink/70 max-w-md mx-auto mb-6 leading-relaxed">
              We frequently announce specialized masterclasses on luxury
              branding, public speaking, and wardrobe direction. Join the private
              waitlist for early cohort access.
            </p>
            <Button
              variant="outline"
              size="md"
              className="border-ink/30 text-ink hover:bg-ink hover:text-gold"
              onClick={() => scrollToWaitlist("General Waitlist")}
            >
              Join The Priority Waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* Contact & Waitlist Form on Emerald */}
      <ContactSection
        defaultService={selectedCohort}
        showMap={false}
      />
    </main>
  );
}
