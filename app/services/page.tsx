"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Camera,
  Mic,
  Award,
  Film,
  Newspaper,
  Layout,
  Share2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { servicesData } from "@/components/sections/ServicesScroller";
import { ContactSection } from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/Button";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string>(
    servicesData[0].title
  );

  const scrollToContact = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Services Hero on Gold Band */}
      <section className="relative bg-gold gold-noise-bg pt-36 pb-20 md:pt-44 md:pb-28 text-ink overflow-hidden">
        <div className="absolute inset-0 gold-fluted-lines opacity-15 pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ink/10 border border-ink/15 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              Comprehensive Creative Capabilities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ink mb-6 tracking-tight"
          >
            Crafting Enduring Legacies.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base sm:text-xl text-ink/75 max-w-2xl mx-auto leading-relaxed"
          >
            From high-fashion cinematography and executive podcast production to
            strategic identity roadmaps, explore our eight specialized creative
            disciplines.
          </motion.p>
        </div>
      </section>

      {/* Services Main Section: Sticky Sidebar + Alternating Cards */}
      <section className="relative bg-emerald-dark emerald-luxury-bg py-24 sm:py-32 text-cream">
        <div className="absolute inset-0 emerald-fluted-lines opacity-20 pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Desktop Sticky Sidebar for Quick Navigation */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-28 bg-emerald/80 border border-gold/30 rounded-28 p-6 backdrop-blur-md shadow-2xl">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Service Directory
              </h3>

              <nav className="space-y-2">
                {servicesData.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      const el = document.getElementById(service.id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full text-left py-2.5 px-3.5 rounded-xl text-xs sm:text-sm font-medium text-cream/70 hover:text-gold hover:bg-emerald-dark/60 transition-all flex items-center justify-between group"
                  >
                    <span className="truncate pr-2">{service.title}</span>
                    <span className="text-[11px] font-serif text-gold/40 group-hover:text-gold">
                      {service.number}
                    </span>
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-gold/20 text-center">
                <p className="text-xs text-cream/70 mb-4">
                  Need a custom bundled creative retainer?
                </p>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => scrollToContact("Custom Retainer")}
                >
                  Request Consultation
                </Button>
              </div>
            </aside>

            {/* Alternating Service Cards List */}
            <div className="lg:col-span-8 space-y-12">
              {servicesData.map((service, idx) => {
                const Icon = service.icon;
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.7 }}
                    className="rounded-28 p-8 sm:p-12 bg-emerald/90 border border-gold/30 hover:border-gold/60 shadow-2xl backdrop-blur-md relative overflow-hidden group"
                  >
                    {/* Top gold line indicator */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient opacity-80" />

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-emerald-dark border border-gold/40 flex items-center justify-center text-gold shadow-gold-glow">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                            Discipline {service.number}
                          </span>
                          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream mt-1">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => scrollToContact(service.title)}
                        icon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Enquire
                      </Button>
                    </div>

                    <p className="text-sm sm:text-base text-cream/80 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Deliverables Bullet List */}
                    <div className="bg-emerald-dark/60 rounded-20 p-6 border border-gold/20">
                      <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-gold mb-4">
                        Key Strategic Deliverables:
                      </h4>
                      <ul className="space-y-3">
                        {service.deliverables.map((item, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-3 text-xs sm:text-sm text-cream/90"
                          >
                            <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Selected Contact Section */}
      <ContactSection defaultService={selectedService} />
    </main>
  );
}
