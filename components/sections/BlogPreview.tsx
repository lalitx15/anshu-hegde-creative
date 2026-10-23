"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/blogs";
import { Button } from "@/components/ui/Button";

export function BlogPreview() {
  const latestPost = blogPosts[0];

  if (!latestPost) return null;

  return (
    <section className="relative bg-emerald-dark emerald-luxury-bg py-24 sm:py-32 text-cream overflow-hidden">
      {/* Decorative fluted lines */}
      <div className="absolute inset-0 emerald-fluted-lines opacity-20 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald border border-gold/40 mb-4 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Insights & Thought Leadership
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream tracking-tight">
              From The Creative Journal
            </h2>
          </div>

          <Link href="/blogs">
            <Button variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Explore All Articles
            </Button>
          </Link>
        </div>

        {/* Featured Blog Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-28 overflow-hidden bg-emerald border border-gold/30 hover:border-gold/60 shadow-2xl transition-all duration-300 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image */}
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[320px] overflow-hidden">
              <Image
                src={latestPost.coverImage}
                alt={latestPost.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-emerald/80 hidden lg:block" />
              <div className="absolute top-5 left-5 bg-emerald-dark/90 backdrop-blur-md border border-gold/40 text-gold text-xs uppercase font-semibold tracking-wider px-3.5 py-1 rounded-full">
                {latestPost.category}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 text-xs text-gold/80 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    March 2026
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {latestPost.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream group-hover:text-gold transition-colors mb-4 leading-snug">
                  {latestPost.title}
                </h3>

                <p className="text-xs sm:text-sm text-cream/70 leading-relaxed mb-6">
                  {latestPost.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-gold/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative border border-gold/40">
                    <Image
                      src={latestPost.author.avatar}
                      alt={latestPost.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-cream">
                      {latestPost.author.name}
                    </p>
                    <p className="text-[10px] text-gold uppercase tracking-wider">
                      {latestPost.author.role}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/blogs/${latestPost.slug}`}
                  className="w-10 h-10 rounded-full bg-emerald-dark border border-gold/40 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-emerald-dark transition-all duration-300"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
