"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Quote,
  Compass,
  Award,
  Camera,
  Mic,
  Newspaper,
  Layout,
  Share2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Stats } from "@/components/sections/Stats";
import { ContactSection } from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/Button";

interface TimelineEvent {
  period: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    period: "Age 16",
    title: "Creative Genesis & Artisan Craft",
    description:
      "Driven by an innate passion for fine art, craft, and self-expression, Anshu began her hands-on creative journey at just 16 years old.",
  },
  {
    period: "15 Years Behind Camera",
    title: "Commercial Television Direction & Operations",
    description:
      "Shaped narrative visuals as an Assistant Director before rising to Operations Manager, directing high-stakes, broadcast-scale media productions.",
  },
  {
    period: "20 Years Entrepreneur",
    title: "Designer Boutique & Beauty Salon Founder",
    description:
      "Launched and operated two premier lifestyle enterprises for two decades, mastering customer psychology, tactile aesthetics, and operational excellence.",
  },
  {
    period: "30+ Years Mentorship",
    title: "Guiding Models, Founders & Professionals",
    description:
      "Empathetic mentorship transforming personal confidence, public posture, and strategic leadership for over three decades.",
  },
  {
    period: "Today",
    title: "Anshu Hegde Creative (The First Ray Concept)",
    description:
      "Synthesizing commercial TV rigor, luxury brand aesthetics, and psychological mentorship to craft enduring personal and corporate legacies.",
  },
];

const capabilities = [
  {
    title: "Strategic Campaign Design",
    description: "Translating business goals into cohesive, high-impact creative campaigns.",
    icon: Compass,
  },
  {
    title: "Brand Identity & Executive Positioning",
    description: "Crafting distinct visual identities and shaping personal brands for leaders and founders.",
    icon: Award,
  },
  {
    title: "Visual Media & Production",
    description: "Directing visual shoots, short-form video content, and music visuals that capture audience attention.",
    icon: Camera,
  },
  {
    title: "Podcast Curation & Hosting",
    description: "Designing, structuring, and hosting engaging audio and video podcast experiences.",
    icon: Mic,
  },
  {
    title: "Public Relations & Reputation Management",
    description: "Building credibility, media presence, and sustainable brand trust.",
    icon: Newspaper,
  },
  {
    title: "Digital Experience & Web Design",
    description: "Creating modern, user-friendly digital touchpoints that reflect brand authenticity.",
    icon: Layout,
  },
  {
    title: "Social Media Strategy & Upliftment",
    description: "Elevating digital presence with content strategies that drive real engagement and growth.",
    icon: Share2,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero on Gold Band */}
      <section className="relative bg-gold gold-noise-bg pt-36 pb-20 md:pt-44 md:pb-28 text-ink overflow-hidden">
        <div className="absolute inset-0 gold-fluted-lines opacity-15 pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ink/10 border border-ink/15 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              The Visionary Behind The Brand
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ink mb-6 tracking-tight">
            Anshu Hegde
          </h1>

          <p className="text-sm sm:text-lg uppercase tracking-[0.25em] text-emerald-dark font-semibold max-w-xl mx-auto mb-8">
            Founder & Creative Director · The First Ray Concept
          </p>

          <div className="max-w-3xl mx-auto bg-gold-glass border border-white/60 rounded-28 p-8 sm:p-10 shadow-gold-card backdrop-blur-md">
            <Quote className="w-8 h-8 text-emerald-dark mx-auto mb-4 opacity-75" />
            <blockquote className="font-serif text-xl sm:text-2xl text-ink leading-relaxed italic">
              &ldquo;Creativity isn’t just about making things look good—it’s about
              understanding human potential, crafting meaningful stories, and
              building brands that last.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* About Anshu: In-Depth Narrative on Emerald Dark */}
      <section className="relative bg-emerald-dark emerald-luxury-bg py-24 sm:py-32 text-cream">
        <div className="absolute inset-0 emerald-fluted-lines opacity-20 pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Portrait Image Slot */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] rounded-28 overflow-hidden shadow-2xl border-2 border-gold/40 bg-emerald">
                <Image
                  src="/images/anshu-portrait.jpg"
                  alt="Anshu Hegde Portrait"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-gold/40 pointer-events-none hidden sm:block" />
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-7 space-y-6 text-cream/80 text-base sm:text-lg leading-relaxed font-light">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald border border-gold/40 text-xs font-semibold uppercase tracking-wider text-gold mb-2">
                About Anshu
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
                Three Decades of Aesthetic & Mentorship Mastery
              </h2>

              <p>
                Anshu Hegde is a seasoned entrepreneur, creative strategist, and
                mentor with over three decades of multifaceted experience across
                media production, brand building, lifestyle ventures, and
                personal development. As the Founder and Creative Director of her
                latest venture - Anshu Hegde Creative (The First Ray Concept),
                Anshu brings a holistic, human-centric approach to brand
                identity, executive positioning, and modern media strategy.
              </p>

              <p>
                Her journey began at the age of 16, driven by an innate passion
                for art, craft, and self-expression. That hands-on creative
                foundation quickly evolved into a 15-year career behind the
                camera in the commercial television sector—first as an Assistant
                Director shaping narrative visuals, and later as an Operations
                Manager overseeing high-impact media productions.
              </p>

              <p>
                Fueled by an entrepreneurial spirit, Anshu paralleled her media
                career by launching and operating two successful lifestyle
                businesses—a bespoke Designer Boutique and a Beauty Salon—which
                she successfully ran for 20 years. This dual experience in
                high-end media production and direct-to-consumer business gave her
                a rare, 360-degree understanding of visual aesthetics, customer
                psychology, and operational excellence.
              </p>

              <p>
                Beyond her business achievements, Anshu’s true calling has always
                been nurturing talent and sharing knowledge. For over 30 years,
                she has served as a trusted mentor to aspiring models, women
                entrepreneurs, students, working professionals, and couples. Her
                deep empathetic understanding of diverse personalities allows her
                to craft tailored growth strategies, helping individuals elevate
                their confidence, communication, and personal brand.
              </p>

              <p className="text-cream font-normal">
                Today, Anshu synthesizes her decades of production expertise,
                aesthetic refinement, and personal mentorship to help brands,
                executives, and creators tell compelling stories and make an
                indelible mark on the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Timeline of Her Journey */}
      <section className="relative bg-gold gold-noise-bg py-24 sm:py-32 text-ink">
        <div className="absolute inset-0 gold-fluted-lines opacity-15 pointer-events-none" />

        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-20">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink mb-3">
              The Journey Timeline
            </h2>
            <p className="text-xs uppercase tracking-widest text-ink/60">
              The evolution of an artistic and entrepreneurial legacy
            </p>
          </div>

          <div className="relative border-l-2 border-emerald-dark/30 ml-4 sm:ml-32 space-y-12">
            {timelineEvents.map((evt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-8 sm:pl-12 group"
              >
                {/* Timeline Node Ring */}
                <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-emerald border-4 border-gold shadow-md group-hover:scale-125 transition-transform" />

                {/* Period Badge */}
                <div className="sm:absolute sm:-left-36 sm:top-1 sm:text-right sm:w-28 mb-2 sm:mb-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald text-gold text-xs font-bold uppercase tracking-wider">
                    {evt.period}
                  </span>
                </div>

                <div className="rounded-24 p-6 sm:p-8 bg-gold-glass border border-white/70 shadow-gold-card backdrop-blur-md">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink mb-2">
                    {evt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities & Services (7 Animated Cards) on Emerald */}
      <section className="relative bg-emerald-dark emerald-luxury-bg py-24 sm:py-32 text-cream">
        <div className="absolute inset-0 emerald-fluted-lines opacity-20 pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream mb-4">
              Core Capabilities & Disciplines
            </h2>
            <p className="text-sm text-cream/70">
              The pillars underpinning Anshu Hegde Creative’s advisory and
              production work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-24 p-8 bg-emerald/90 border border-gold/30 hover:border-gold/60 shadow-xl backdrop-blur-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-emerald-dark border border-gold/40 flex items-center justify-center text-gold mb-6 shadow-gold-glow">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-cream mb-3">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cream/75 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Work With Anshu (3 Count-up stats) */}
      <Stats />

      {/* Contact & Map Section */}
      <ContactSection />
    </main>
  );
}
