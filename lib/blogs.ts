export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: {
    introduction: string[];
    sections: Array<{
      heading: string;
      paragraphs: string[];
      bulletPoints?: string[];
    }>;
    conclusion: string[];
    signoff: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "empowering-women-entrepreneurs-strategic-branding",
    title: "Empowering Women Entrepreneurs: How Strategic Branding Unlocks Business Growth",
    excerpt:
      "Building a successful business requires more than just offering a great product or service—it requires a clear, compelling, and strategic brand identity that turns passion into a thriving legacy.",
    category: "Brand Strategy",
    readTime: "5 min read",
    publishedAt: "2026-03-15",
    coverImage: "/images/blog-1.jpg",
    author: {
      name: "Anshu Hegde",
      role: "Founder & Creative Director",
      avatar: "/images/anshu-portrait.jpg",
    },
    content: {
      introduction: [
        "Building a successful business requires more than just offering a great product or service—it requires a clear, compelling, and strategic brand identity. For women entrepreneurs, turning a passion into a thriving business often comes down to how effectively that brand message reaches and resonates with the right audience.",
        "Whether you are launching a new venture or scaling an existing business, a results-driven brand strategy is key to standing out in today's crowded marketplace.",
      ],
      sections: [
        {
          heading: "1. Crafting Your Compelling Brand Narrative",
          paragraphs: [
            "Every business has a story, but not every business knows how to tell it effectively. Your brand narrative isn't just a brief history of your company; it is the emotional connection between your values and your ideal clients.",
          ],
          bulletPoints: [
            "Define Your Core Mission: Clearly articulate the unique problem you solve and why it matters to your audience.",
            "Highlight Your Authentic Voice: Modern clients resonate with authenticity, transparency, and human connections.",
            "Build Long-Term Authority: A clear, consistent narrative positions you as an industry expert from day one.",
          ],
        },
        {
          heading: "2. Dominating Social Media with Purpose",
          paragraphs: [
            "Posting content without a strategy rarely leads to meaningful business growth. To build brand dominance across social platforms, you need targeted strategies designed to drive real conversions.",
          ],
          bulletPoints: [
            "Targeted Content Strategy: Focus on value-driven content that speaks directly to your audience's specific needs.",
            "Cohesive Visual Identity: Maintain an elegant, premium look that reinforces your brand's quality at every touchpoint.",
            "Community Engagement: Turn casual followers into brand advocates and loyal long-term clients.",
          ],
        },
        {
          heading: "3. Customized, Results-Driven Packages",
          paragraphs: [
            "There is no one-size-fits-all solution when it comes to brand building. Every entrepreneur's journey demands a tailored approach based on current growth stages and future aspirations.",
            "By partnering with dedicated strategy experts, you receive personalized roadmaps designed specifically to amplify your reach, elevate your online presence, and convert leads into sustainable growth.",
          ],
        },
      ],
      conclusion: [
        "A strong brand is the foundation upon which lasting empires are built. When your narrative aligns with strategic visual media and purposeful engagement, sustainable growth naturally follows.",
      ],
      signoff: "— Anshu Hegde, Founder & Creative Director (Anshu Hegde Creative)",
    },
  },
  {
    slug: "the-first-ray-concept-creative-direction",
    title: "The First Ray Concept: Why Human-Centric Creative Direction Matters",
    excerpt:
      "A deep dive into why aesthetics without empathy fall flat, and how thirty years of mentorship shaped our holistic approach to brand storytelling.",
    category: "Creative Direction",
    readTime: "4 min read",
    publishedAt: "2026-02-28",
    coverImage: "/images/blog-2.jpg",
    author: {
      name: "Anshu Hegde",
      role: "Founder & Creative Director",
      avatar: "/images/anshu-portrait.jpg",
    },
    content: {
      introduction: [
        "In an era crowded with ephemeral digital trends, true longevity belongs to brands built on genuine human connection. 'The First Ray Concept' represents the awakening of that authentic spark within an individual or enterprise.",
      ],
      sections: [
        {
          heading: "1. Moving Beyond Surface Aesthetics",
          paragraphs: [
            "Creativity isn't merely about making things look good. It is about understanding human potential, dissecting psychological drivers, and translating inner vision into tangible visual authority.",
          ],
          bulletPoints: [
            "Authenticity as a differentiator in crowded markets.",
            "Translating commercial television production rigor into executive positioning.",
            "Building lasting emotional resonance with discerning audiences.",
          ],
        },
        {
          heading: "2. The Synthesis of Media Rigor and Retail Acumen",
          paragraphs: [
            "Having spent 15 years in commercial television production followed by 20 years managing direct-to-consumer enterprises, our methodology merges high-end visual storytelling with ground-level customer empathy.",
          ],
        },
      ],
      conclusion: [
        "When your brand embodies the clarity of the first ray of dawn, your audience doesn't just notice you—they remember you.",
      ],
      signoff: "— Anshu Hegde, Founder & Creative Director",
    },
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
