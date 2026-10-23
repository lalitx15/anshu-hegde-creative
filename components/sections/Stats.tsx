"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/Button";

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: "some", once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let animId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // easeOutCubic for smooth luxury deceleration
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * end));

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="inline-block tabular-nums">
      {count}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative bg-gold gold-noise-bg py-24 sm:py-32 text-ink overflow-hidden">
      {/* Decorative fluted lines */}
      <div className="absolute inset-0 gold-fluted-lines opacity-15 pointer-events-none" />

      {/* Decorative brass arch */}
      <div className="absolute -top-36 right-0 w-80 h-80 rounded-full border border-gold-dark/30 pointer-events-none opacity-40" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        {/* Quote & About Teaser Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Portrait on Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-28 overflow-hidden shadow-2xl border-2 border-white/60 bg-marble-cream">
              <Image
                src="/images/anshu-portrait.jpg"
                alt="Anshu Hegde — Founder & Creative Director"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <h4 className="font-serif text-2xl font-bold text-gold">
                  Anshu Hegde
                </h4>
                <p className="text-xs uppercase tracking-widest text-cream/80">
                  Founder & Creative Director
                </p>
              </div>
            </div>
            {/* Ambient gold glow */}
            <div className="absolute -inset-4 bg-gold-dark/20 rounded-[36px] -z-10 blur-xl pointer-events-none" />
          </motion.div>

          {/* Quote on Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="w-14 h-14 rounded-full bg-emerald text-gold flex items-center justify-center mb-8 shadow-emerald-glow">
              <Quote className="w-6 h-6 fill-gold/20" />
            </div>

            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink leading-snug font-bold mb-8">
              &ldquo;Creativity isn’t just about making things look good—it’s
              about understanding human potential, crafting meaningful stories,
              and building brands that last.&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-ink/75 leading-relaxed mb-8">
              With over three decades of multifaceted experience across media
              production, high-fashion styling, and lifestyle enterprise, Anshu
              synthesizes executive direction with empathetic human mentorship.
            </p>

            <Link href="/about">
              <Button
                variant="outline"
                size="md"
                className="border-ink/30 text-ink hover:bg-ink hover:text-gold"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Read Anshu&apos;s Full Story
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* 3 Animated Count-Up Stat Cards */}
        <div className="border-t border-ink/15 pt-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-2">
              Why Work With Anshu Hegde?
            </h3>
            <p className="text-xs uppercase tracking-widest text-ink/60">
              Decades of real-world mastery & media excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-24 bg-gold-glass border border-white/60 shadow-gold-card backdrop-blur-md text-center"
            >
              <div className="font-serif text-5xl sm:text-6xl font-bold text-emerald-dark mb-3 flex items-center justify-center">
                <Counter end={30} />
                <span>+</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-ink mb-2">
                Years of Mentorship
              </h4>
              <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                Proven ability to read personalities, unlock inner potential, and
                tailor strategies that genuinely fit the individual or brand.
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-8 rounded-24 bg-gold-glass border border-white/60 shadow-gold-card backdrop-blur-md text-center"
            >
              <div className="font-serif text-5xl sm:text-6xl font-bold text-emerald-dark mb-3 flex items-center justify-center">
                <Counter end={15} />
                <span>+</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-ink mb-2">
                Years in TV & Media
              </h4>
              <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                Deep industry expertise in creative direction, operations, and
                story-driven media production behind the camera.
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-24 bg-gold-glass border border-white/60 shadow-gold-card backdrop-blur-md text-center"
            >
              <div className="font-serif text-5xl sm:text-6xl font-bold text-emerald-dark mb-3 flex items-center justify-center">
                <Counter end={20} />
                <span>+</span>
              </div>
              <h4 className="font-serif text-xl font-bold text-ink mb-2">
                Years as a Business Owner
              </h4>
              <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                Practical, real-world business acumen rooted in running two
                customer-centric enterprises for two decades.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
