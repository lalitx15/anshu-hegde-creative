import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Linkedin,
  Twitter,
  MessageCircle,
  Copy,
  Sparkles,
} from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/blogs";
import { siteConfig } from "@/lib/site-config";
import { ShareButton } from "@/components/ui/ShareButton";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Blog Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.coverImage }],
    },
  };
}

export default function SingleBlogPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://anshuhegdecreative.com${post.coverImage}`,
    "author": {
      "@type": "Person",
      "name": post.author.name,
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.siteName,
      "logo": {
        "@type": "ImageObject",
        "url": "https://anshuhegdecreative.com/icons/icon-512.png",
      },
    },
    "datePublished": post.publishedAt,
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner on Gold */}
      <section className="relative bg-gold gold-noise-bg pt-36 pb-20 md:pt-44 md:pb-28 text-ink overflow-hidden">
        <div className="absolute inset-0 gold-fluted-lines opacity-15 pointer-events-none" />

        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 relative z-10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-ink/70 hover:text-ink mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-emerald-dark mb-4">
            <span className="px-3.5 py-1 rounded-full bg-emerald text-gold">
              {post.category}
            </span>
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

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.2] mb-8">
            {post.title}
          </h1>

          {/* Author Badge */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-emerald">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-base font-bold text-ink">
                {post.author.name}
              </p>
              <p className="text-xs uppercase tracking-wider text-ink/60">
                {post.author.role}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content on Emerald Dark */}
      <section className="relative bg-emerald-dark emerald-luxury-bg py-16 sm:py-24 text-cream">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 relative z-10">
          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-28 overflow-hidden shadow-2xl border border-gold/40 mb-16">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Share Buttons Strip */}
          <ShareButton title={post.title} />

          {/* Body Content */}
          <div className="prose prose-invert max-w-none text-cream/90 space-y-8 font-light text-base sm:text-lg leading-relaxed">
            {/* Introduction */}
            {post.content.introduction.map((para, i) => (
              <p key={i} className="text-lg sm:text-xl font-normal text-cream leading-relaxed">
                {para}
              </p>
            ))}

            {/* Sections */}
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="pt-8 border-t border-gold/20">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gold mb-4">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="mb-4 text-cream/80 leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.bulletPoints && (
                  <ul className="space-y-3 my-6 pl-4">
                    {section.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-cream/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Conclusion */}
            {post.content.conclusion && (
              <div className="pt-8 border-t border-gold/20">
                {post.content.conclusion.map((cPara, cIdx) => (
                  <p key={cIdx} className="italic text-cream/85 text-lg">
                    {cPara}
                  </p>
                ))}
              </div>
            )}

            {/* Signoff */}
            {post.content.signoff && (
              <div className="pt-4 text-right">
                <p className="font-serif text-lg font-bold text-gold">
                  {post.content.signoff}
                </p>
              </div>
            )}
          </div>

          {/* Author Box */}
          <div className="mt-16 p-8 sm:p-10 rounded-28 bg-emerald border border-gold/40 shadow-2xl flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-20 h-20 rounded-full overflow-hidden relative border-2 border-gold shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-1">
                Written By Anshu Hegde
              </p>
              <h3 className="font-serif text-2xl font-bold text-cream mb-2">
                Founder & Creative Director
              </h3>
              <p className="text-xs sm:text-sm text-cream/70 leading-relaxed">
                Directing commercial TV productions for 15 years, operating luxury
                lifestyle businesses for 20 years, and mentoring visionaries for
                over three decades.
              </p>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 pt-16 border-t border-gold/20">
              <h3 className="font-serif text-2xl font-bold text-gold mb-8">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.slug}
                    href={`/blogs/${rPost.slug}`}
                    className="p-6 rounded-20 bg-emerald/60 border border-gold/30 hover:border-gold/60 transition-all block group"
                  >
                    <p className="text-xs text-gold uppercase tracking-wider mb-2">
                      {rPost.category}
                    </p>
                    <h4 className="font-serif text-lg font-bold text-cream group-hover:text-gold transition-colors leading-snug">
                      {rPost.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
