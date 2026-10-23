import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowUpRight, Sparkles } from "lucide-react";
import { blogPosts } from "@/lib/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Journal & Insights",
  description:
    "Explore strategic branding perspectives, creative direction essays, and mentorship reflections by Anshu Hegde.",
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen">
      {/* Blogs Hero on Gold */}
      <section className="relative bg-gold gold-noise-bg pt-36 pb-20 md:pt-44 md:pb-28 text-ink overflow-hidden">
        <div className="absolute inset-0 gold-fluted-lines opacity-15 pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ink/10 border border-ink/15 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              The First Ray Journal
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ink mb-6 tracking-tight">
            Perspectives on Influence.
          </h1>

          <p className="text-base sm:text-xl text-ink/75 max-w-2xl mx-auto leading-relaxed">
            In-depth strategic essays on personal brand architecture, commercial
            media direction, and executive leadership.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid on Emerald Dark */}
      <section className="relative bg-emerald-dark emerald-luxury-bg py-24 sm:py-32 text-cream">
        <div className="absolute inset-0 emerald-fluted-lines opacity-20 pointer-events-none" />

        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-28 overflow-hidden bg-emerald border border-gold/30 hover:border-gold/60 shadow-2xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 bg-emerald-dark/90 backdrop-blur-md border border-gold/40 text-gold text-xs uppercase font-semibold tracking-wider px-3.5 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-4 text-xs text-gold/80 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.publishedAt}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream group-hover:text-gold transition-colors mb-4 leading-snug">
                      <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-cream/75 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-8 sm:px-10 pb-8 pt-4 border-t border-gold/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden relative border border-gold/40">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-cream">
                        {post.author.name}
                      </p>
                      <p className="text-[10px] text-gold uppercase tracking-wider">
                        {post.author.role}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-gold group-hover:text-white"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
