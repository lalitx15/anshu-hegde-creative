export interface Workshop {
  id: string;
  title: string;
  category: string;
  audience: string;
  date: string;
  duration: string;
  mode: "In-Person (Studio)" | "Interactive Masterclass" | "Hybrid Cohort";
  description: string;
  highlights: string[];
  status: "Open for Registration" | "Waitlist Open" | "Upcoming";
}

export interface TargetAudience {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
}

export const workshopAudiences: TargetAudience[] = [
  {
    title: "Aspiring Models & Creators",
    subtitle: "Camera Presence & Poise",
    icon: "Sparkles",
    description:
      "Master high-fashion posing, camera choreography, visual aesthetics, and building an indelible personal portfolio.",
  },
  {
    title: "Women Entrepreneurs",
    subtitle: "Brand Leadership",
    icon: "Crown",
    description:
      "Transform your passion into authority with executive brand positioning, confident communication, and compelling storytelling.",
  },
  {
    title: "Working Professionals",
    subtitle: "Executive Positioning",
    icon: "Briefcase",
    description:
      "Elevate your corporate presence, personal branding, media communication, and leadership charisma.",
  },
  {
    title: "Students & Emerging Talent",
    subtitle: "Creative Fundamentals",
    icon: "GraduationCap",
    description:
      "Learn foundational visual arts, camera confidence, creative direction, and interpersonal communication skills.",
  },
  {
    title: "Couples & Creative Duos",
    subtitle: "Harmonious Storytelling",
    icon: "HeartHandshake",
    description:
      "Specialized sessions on coordinated public appearances, joint lifestyle ventures, and couple media shoots.",
  },
];

export const workshopsData: Workshop[] = [
  {
    id: "ws-01",
    title: "The Camera & Executive Presence Masterclass",
    category: "Personal Brand & Media",
    audience: "Entrepreneurs, Executives & Creators",
    date: "Upcoming Cohort — Spring 2026",
    duration: "2-Day Intensive",
    mode: "In-Person (Studio)",
    description:
      "A high-impact workshop focusing on camera confidence, body language alignment, vocal resonance, and framing your authentic narrative.",
    highlights: [
      "Live studio video test & playback analysis",
      "Executive posture, lighting, and wardrobe guidance",
      "Overcoming camera hesitation & developing natural charisma",
    ],
    status: "Open for Registration",
  },
  {
    id: "ws-02",
    title: "Strategic Storytelling for Brand Founders",
    category: "Brand Strategy",
    audience: "Women Entrepreneurs & Business Owners",
    date: "Upcoming Cohort — Summer 2026",
    duration: "Full Day Masterclass",
    mode: "Interactive Masterclass",
    description:
      "Synthesize your life journey and core mission into an irresistible brand narrative that commands market authority and customer loyalty.",
    highlights: [
      "Defining your unique brand narrative pillar",
      "Translating values into premium visual touchpoints",
      "Reputation management & executive PR essentials",
    ],
    status: "Waitlist Open",
  },
  {
    id: "ws-03",
    title: "Posing, Poise & Creative Direction for Shoots",
    category: "Visual Media",
    audience: "Aspiring Models & Visual Creators",
    date: "Upcoming Cohort — Autumn 2026",
    duration: "Weekend Workshop",
    mode: "In-Person (Studio)",
    description:
      "Drawing from 15 years in commercial television and 30+ years mentoring models, learn directional movement, lighting angles, and emotional expression.",
    highlights: [
      "Directorial breakdown of lighting, angles, and facial symmetry",
      "Posing choreography for stills and cinematic video",
      "Portfolio review and constructive critique by Anshu Hegde",
    ],
    status: "Waitlist Open",
  },
];
