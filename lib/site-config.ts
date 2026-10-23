export interface SiteConfig {
  siteName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappDefaultMessage: string;
  email: string;
  address: string;
  mapEmbedUrl: string;
  mapLink: string;
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
    linkedin: string;
    x: string;
    pinterest: string;
    whatsapp: string;
    spotify: string;
    threads: string;
  };
  navigation: Array<{ name: string; href: string }>;
  servicesList: string[];
}

export const siteConfig: SiteConfig = {
  siteName: "Anshu Hegde Creative",
  tagline: "The First Ray Concept",
  description:
    "Luxury personal brand & creative agency portfolio. Holistic, human-centric creative strategy, executive positioning, visual media shoots, and brand storytelling.",
  // NOTE: Replace these placeholder values with actual client details
  phone: "+91 96203 75315",
  phoneRaw: "+919620375315",
  whatsapp: "919620375315",
  whatsappDefaultMessage: "Hi Anshu, I would like to know more about your creative services.",
  email: "anshuhegdecreative@gmail.com",
  address: "Bangalore, India",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8865390924!2d77.49085221081555!3d12.953959988118836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  mapLink: "https://maps.google.com/?q=Bengaluru,+Karnataka",
  social: {
    instagram: "https://www.instagram.com/anshuhegdecreative?psln=MWxqZzhhZHcxcWc0ZQ==",
    facebook: "https://facebook.com/anshuhegdecreative",
    youtube: "https://youtube.com/@anshuhegdecreative?si=IiEfwyouFKtSq_iN",
    linkedin: "https://linkedin.com/in/anshu-hegde",
    x: "https://x.com/anshu_hegde",
    pinterest: "https://pinterest.com/anshuhegdecreative",
    whatsapp: "https://wa.me/919620375315?text=Hi%20Anshu%2C%20I%20would%20like%20to%20know%20more",
    spotify: "https://open.spotify.com/show/anshuhegde",
    threads: "https://threads.net/@anshuhegdecreative",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Workshops", href: "/workshops" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
  ],
  servicesList: [
    "Strategic Campaign Design",
    "Visual Media & Shoots",
    "Podcast Curation & Hosting",
    "Brand Identity & Executive Positioning",
    "Short-Form Video & Music Visuals",
    "Public Relations & Reputation Management",
    "Digital Experience & Web Design",
    "Social Media Strategy & Upliftment",
  ],
};
