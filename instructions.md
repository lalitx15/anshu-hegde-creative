You are a senior creative developer + UI/UX designer. Build a production-grade, fully animated, mobile-first BUSINESS PORTFOLIO WEBSITE for **"Anshu Hegde Creative"** (tagline: *The First Ray Concept*). The tech stack is: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, GSAP + ScrollTrigger (for marquees and scroll-scrub effects), Lenis (smooth scroll), Lucide icons, Supabase (only for contact enquiries + newsletter subscribers). The project must deploy to Vercel with zero configuration issues.

This is NOT an e-commerce site. There is NO cart, NO checkout, NO products, NO Razorpay or any payment integration, NO user login. It is a luxury personal-brand / creative-agency portfolio. Every feature must actually work (no mockups, no "TODO" comments, no placeholder functions).

---
## SECTION 1 — PAGES (6 pages only)

1. **Home** (/)
2. **Services** (/services)
3. **Blogs** (/blogs and /blogs/[slug])
4. **Workshops** (/workshops)
5. **Gallery** (/gallery)
6. **About** (/about)

Plus: custom animated 404 page, /sitemap.xml, /robots.txt. Do NOT create any other pages.

---
## SECTION 2 — DESIGN SYSTEM (follow the reference image exactly)

The theme is a **luxury gold + deep emerald green** look with cream marble, tropical leaves, brass/gold arches, vertical gold fluted lines and round podium shapes. The reference image shows alternating full-width bands: a gold band (hero), a gold band with 3 feature cards, a deep green band with centered CTA, a gold band with 3 image cards, and a deep green footer. Reproduce this section rhythm (gold → gold → green → gold → green) across the site.

### Color palette
- Rich Gold (primary light background): #F0CB5E, with soft gradient to #FBE38E and #D9A93A (subtle metallic grain/noise overlay at 4–6% opacity).
- Deep Emerald (primary dark background): #0B3B2C, darker shade #072A1F, lighter shade #14573F.
- Marble Cream: #EADFC8 (cards, marble shapes, soft sections).
- Ink Black (text on gold): #1A1A1A. Text on green: #F6EFD9 (cream) and gold accents #F0CB5E.
- Muted text on gold: rgba(26,26,26,0.62). Muted text on green: rgba(246,239,217,0.65).
- Buttons: Primary = gold gradient pill (#F7D56B → #E5B83E) with dark green text on green sections / black text on gold sections; Secondary = round dark-green circular play/arrow button with gold icon; Outline = 1.5px gold border pill.
- Cards on gold: slightly lighter gold glass (rgba(255,236,160,0.55)), 1px border rgba(255,255,255,0.45), radius 20px, shadow 0 8px 30px rgba(120,90,10,0.15). Cards must have a round dark-green icon circle with gold icon (as in the reference image).
- Define all colors as CSS variables + Tailwind theme tokens. Never hardcode random colors.

### Typography
- Headings: a premium serif — **Playfair Display** (or Cormorant Garamond). Body/UI: **Inter** (or Manrope). Small labels: 12–13px uppercase, letter-spacing 0.14em, in a short gold bar style like the small bar above headings in the reference.
- Fluid sizes with clamp(): Hero H1 clamp(40px, 7vw, 84px); Section H2 clamp(30px, 4.5vw, 56px); Body 16px (never below 15px on mobile); line-height 1.15 headings, 1.65 body.

### Layout & spacing
- 8px grid. Max content width 1320px centered. Side padding: 20px mobile, 32px tablet, 64px desktop.
- Section vertical padding: 72px mobile, 120px desktop.
- Rounded corners 20–28px for image blocks (like the hero image in the reference), pill-shaped buttons.
- Decorative elements (SVG/CSS): gold vertical fluted lines, gold circle outlines/arches, marble-cream circles, hanging gold spheres, leaf silhouettes. Build as reusable SVG components with parallax movement. Use real image slots (next/image) for hero and gallery with a placeholder image set stored in /public/images that matches this look (emerald, gold, marble, plants, velvet chair, podium). Make images easy to replace.

### Section rhythm (Home page must mirror the reference image)
1. Sticky header (dark emerald, gold logo circle + nav links + gold pill CTA "Book a Call").
2. HERO on gold band: left = small gold bar label, 2-line big headline, subtext, gold pill CTA + round play button with "Watch Showreel" label; right = large rounded image (podium/marble/plant composition) with parallax and a small vertical dot indicator on its right edge.
3. THREE FEATURE CARDS on gold band (icons: cube, target, bar-chart): "Strategy", "Storytelling", "Growth" with short copy.
4. DEEP GREEN BAND: centered label, big headline, one-line sub, centered gold CTA, with marble circles, gold arch and hanging gold spheres decorating both sides.
5. THREE IMAGE CARDS on gold band (gallery preview) → link to /gallery.
6. Marquee strips (see animations), testimonials/“Why Work With Anshu” stats, blog preview, workshops preview, contact CTA.
7. DEEP GREEN FOOTER (see Section 5).

---
## SECTION 3 — ANIMATION SYSTEM (MOST IMPORTANT — website must feel fully animated)

Use Lenis for smooth scrolling. Use Framer Motion for UI/page animations and GSAP ScrollTrigger for scrub/pinned/marquee effects. Respect `prefers-reduced-motion` (simplify animations, never break layout).

1. **Page-to-page transitions**: wrap in AnimatePresence. Use a gold-to-emerald curtain wipe (two panels sliding up, ease [0.76, 0, 0.24, 1], 0.8s) with the brand logo flashing in the middle, then new page content fades up (y 40→0). Also a first-load preloader: gold screen, logo + "The First Ray" text reveal, then curtain lift.
2. **Text animations**: hero headline reveals word-by-word and line-by-line with mask (overflow hidden, y 110%→0, stagger 0.06). Section headings use split-text reveal on scroll. Paragraphs fade-up with blur (blur 8px→0). Add a gold underline that draws under key words. Add a "text scramble"/letter stagger effect on nav link hover.
3. **Scroll animations**: every section, card and image uses whileInView fade-up (opacity 0→1, y 40→0, 0.7s, stagger 0.1 for grids, once: true). Add scroll-linked parallax on hero image, marble shapes, plants and gold lines (different speeds). Add a scroll progress bar (gold, 3px) at the top of the page.
4. **Zoom in / zoom out effects**: (a) images scale from 1.25→1 as they enter the viewport inside a rounded mask; (b) a pinned scroll section where a full-bleed image/showreel starts small (rounded card) and scales up to fill the whole screen as the user scrolls, then scales back (GSAP scrub); (c) hero image slowly zooms (Ken Burns 1→1.08); (d) card hover: image scale 1.08 over 0.6s; (e) headline "zoom-through" effect on the green CTA band where text scales up and fades as the next section arrives.
5. **Marquee**: at least 3 infinite marquees — (a) giant outlined/solid serif text strip "STRATEGY ✦ STORYTELLING ✦ BRANDING ✦ MEDIA ✦ GROWTH ✦" running left, (b) services names strip running right with gold ✦ separators, (c) logos/social-proof strip. Marquees speed up slightly with scroll velocity and pause on hover (desktop). Seamless loop, no gaps, works on mobile.
6. **Horizontal scroll section**: Services preview on Home as a pinned horizontal scroll gallery of the 8 service cards on desktop; on mobile convert to a swipeable snap carousel.
7. **Buttons**: whileTap scale 0.97; magnetic hover effect on primary CTA (desktop only); gold shimmer sweep on hover; arrow icon slides on hover.
8. **Cursor** (desktop only, hidden on touch): custom gold circular cursor that grows over links and shows "View" over images.
9. **Cards**: 3D tilt on hover (desktop), lift + gold glow border, icon circle rotates slightly.
10. **Counters**: animated count-up for stats (30+ Years Mentorship, 15 Years TV & Media, 20 Years Business Owner).
11. **Mobile menu**: full-screen emerald overlay, links slide in staggered from left with large serif type, gold social icons at the bottom.
12. **Skeleton/lazy loading**: shimmer skeletons for images and blog cards; blur placeholders on all next/image.
13. **Gallery**: masonry-free uniform grid with filter tabs (All / Shoots / Podcasts / Workshops / Brand), lightbox with swipe + keyboard navigation, animated layout transitions between filters (Framer Motion layout).
14. Floating "scroll to top" gold circular button that appears after scrolling, with progress ring.

Performance: animate only transform and opacity, use will-change sparingly, dynamic import GSAP/heavy components, keep Lighthouse Performance ≥ 90 on mobile.

---
## SECTION 4 — RESPONSIVE + MOBILE + NO-ZOOM REQUIREMENTS

- Mobile-first. Must look perfect at 360px, 375px, 414px, 768px, 1024px, 1280px, 1440px+. No horizontal scroll at any width (use overflow-x: clip on body).
- Touch targets minimum 44×44px. Use `100svh`/`dvh` instead of `100vh`. Respect safe-area insets (env(safe-area-inset-*)).
- **App-like, NOT zoomable**: set viewport meta as `width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover`. Use Next.js `viewport` export for this. Also add `touch-action: manipulation` globally, disable double-tap zoom, and add JS listeners to block pinch-zoom (`gesturestart`, `gesturechange`, `gestureend`, and `touchmove` with more than one touch → preventDefault, `{ passive: false }`) and Ctrl+wheel / Ctrl+plus/minus zoom on desktop. Set input font-size to 16px minimum so iOS never auto-zooms on focus. Disable text-size-adjust (`-webkit-text-size-adjust: 100%`). Lightbox must also not allow pinch zoom.
- Disable text selection highlight/tap highlight on UI controls (`-webkit-tap-highlight-color: transparent`), `overscroll-behavior-y: none` to avoid rubber-band pull on the app feel.
- Bottom-fixed mobile quick-action bar (Call / WhatsApp / Enquire) in gold, hides on scroll down and returns on scroll up.
- Typography and spacing scale fluidly; image art direction different for mobile (crop focal point).

---
## SECTION 5 — CONTACT, SOCIAL, MAP, WHATSAPP, INSTALL APP

Create a single config file `/lib/site-config.ts` holding all editable details so the owner can update in one place:
```
siteName: "Anshu Hegde Creative"
tagline: "The First Ray Concept"
phone: "+91 XXXXXXXXXX"
whatsapp: "91XXXXXXXXXX"
email: "hello@anshuhegdecreative.com"
address: "<Studio address, City, State, PIN>"
mapEmbedUrl: "<Google Maps embed URL>"
mapLink: "<Google Maps share link>"
social: { instagram, facebook, youtube, linkedin, x, pinterest, whatsapp, spotify, threads }
```
(Use clearly marked placeholder values and list them in README.)

- **Footer (deep emerald, as in the reference)**: gold logo circle, 3 columns (Quick Links, Services, Contact), social icon row in gold circles (Instagram, Facebook, YouTube, LinkedIn, X, Pinterest, Spotify, WhatsApp), phone (tap-to-call `tel:`), email (`mailto:`), WhatsApp (`https://wa.me/<number>?text=Hi%20Anshu%2C%20I%20would%20like%20to%20know%20more`), address, copyright, "Install App" button.
- **Contact section** (on Home bottom + dedicated block on About page): left = contact details cards with icons (Phone, Email, WhatsApp, Location) and social icons; right = enquiry form (Name, Email, Phone, Service dropdown with the 8 services, Message) with floating labels, validation with inline errors, success animation, stored in Supabase `enquiries` table. Below/side: responsive Google Map iframe (lazy loaded, rounded 24px, gold border) + "Get Directions" button.
- **Floating WhatsApp button** (bottom-right, green-gold styled, pulse animation) on every page, opening WhatsApp chat with prefilled message.
- **Newsletter signup** in footer storing emails in Supabase `subscribers` table with animated submit.
- **Download / Install Mobile App (PWA)**: make the site a full PWA — `manifest.webmanifest` (name "Anshu Hegde Creative", short_name "AH Creative", theme_color #0B3B2C, background_color #F0CB5E, display "standalone", orientation "portrait", icons 192/512/maskable), service worker (offline fallback page, cache static assets), app icons generated from the logo. Add a small, elegant **"Download App"** button (gold pill with download icon) in the header on desktop, inside the mobile menu, and in the footer. Logic: capture `beforeinstallprompt` and trigger the native install prompt on click (Chrome/Edge/Android/desktop). On iOS Safari (no prompt support) open a small animated bottom-sheet explaining "Tap Share → Add to Home Screen" with an icon illustration. Hide the button when the app is already installed (`display-mode: standalone`). Also show a one-time dismissible install banner after 20s on mobile.

---
## SECTION 6 — PAGE CONTENT (use this text exactly; do not invent facts)

### HOME
Hero label: "ANSHU HEGDE CREATIVE · THE FIRST RAY CONCEPT". Headline suggestion: "Stories That Shine. Brands That Last." Sub: short line about holistic, human-centric creative strategy. CTAs: "Book a Call" and "Watch Showreel". Feature cards (3): Strategy, Storytelling, Growth. Then services marquee/horizontal scroll, About teaser (with quote below), stats (30+ / 15 / 20 years), blog preview (latest blog), workshops teaser, gallery preview (3 images), contact + map.

### SERVICES (/services)
Page hero + 8 service blocks. Each has an icon, title, 2–3 line description, 3 bullet deliverables, and "Enquire" button (opens the contact form with the service pre-selected). Layout: alternating cards with scroll-reveal; a sticky sidebar list on desktop for quick navigation. Services (exact titles):
1. Strategic Campaign Design — Translating business goals into cohesive, high-impact creative campaigns.
2. Visual Media & Shoots — Directing visual shoots that capture attention.
3. Podcast Curation & Hosting — Designing, structuring and hosting engaging audio and video podcast experiences.
4. Brand Identity & Executive Positioning — Crafting distinct visual identities and shaping personal brands for leaders and founders.
5. Short-Form Video & Music Visuals — Short-form video content and music visuals that capture audience attention.
6. Public Relations & Reputation Management — Building credibility, media presence and sustainable brand trust.
7. Digital Experience & Web Design — Creating modern, user-friendly digital touchpoints that reflect brand authenticity.
8. Social Media Strategy & Upliftment — Elevating digital presence with content strategies that drive real engagement and growth.

### BLOGS (/blogs, /blogs/[slug])
Blog list in a card grid with image, category, read time. Blog content stored as MDX/TS data file (easy to add more posts), with reading progress bar, share buttons (WhatsApp, LinkedIn, X, copy link), author box and "Related posts". First post:

**Title: Empowering Women Entrepreneurs: How Strategic Branding Unlocks Business Growth**

Building a successful business requires more than just offering a great product or service—it requires a clear, compelling, and strategic brand identity. For women entrepreneurs, turning a passion into a thriving business often comes down to how effectively that brand message reaches and resonates with the right audience.

Whether you are launching a new venture or scaling an existing business, a results-driven brand strategy is key to standing out in today's crowded marketplace.

**1. Crafting Your Compelling Brand Narrative**
Every business has a story, but not every business knows how to tell it effectively. Your brand narrative isn't just a brief history of your company; it is the emotional connection between your values and your ideal clients.
- Define Your Core Mission: Clearly articulate the unique problem you solve and why it matters to your audience.
- Highlight Your Authentic Voice: Modern clients resonate with authenticity, transparency, and human connections.
- Build Long-Term Authority: A clear, consistent narrative positions you as an industry expert from day one.

**2. Dominating Social Media with Purpose**
Posting content without a strategy rarely leads to meaningful business growth. To build brand dominance across social platforms, you need targeted strategies designed to drive real conversions.
- Targeted Content Strategy: Focus on value-driven content that speaks directly to your audience's specific needs.
- Cohesive Visual Identity: Maintain an elegant, premium look that reinforces your brand's quality at every touchpoint.
- Community Engagement: Turn casual followers into brand advocates and loyal long-term clients.

**3. Customized, Results-Driven Packages**
There is no one-size-fits-all solution when it comes to brand building. Every entrepreneur's journey demands a tailored approach based on current growth stages and future aspirations.
By partnering with dedicated strategy experts, you receive personalized roadmaps designed specifically to amplify your reach, elevate your online presence, and convert leads into sustainable growth.

— Anshu Hegde, Founder & Creative Director (Anshu Hegde Creative)

### WORKSHOPS (/workshops)
No workshop details were provided. Build a polished page with: hero, a "Who these workshops are for" row (aspiring models, women entrepreneurs, students, working professionals, couples — taken from the About text), a card grid of upcoming workshops driven by a `workshops` data file (title, date, mode, short description, "Register / Enquire on WhatsApp" button), and an empty-state card "New workshops coming soon — join the waitlist" with the enquiry form. Use clearly marked sample entries that are easy to edit. Do not invent prices or specific claims.

### GALLERY (/gallery)
Animated grid + category filters + lightbox as described above, images loaded from `/public/images/gallery` via a data file with alt text.

### ABOUT (/about)
Hero: **Anshu Hegde — Founder & Creative Director**
Quote: "Creativity isn't just about making things look good—it's about understanding human potential, crafting meaningful stories, and building brands that last."

**About Anshu**
Anshu Hegde is a seasoned entrepreneur, creative strategist, and mentor with over three decades of multifaceted experience across media production, brand building, lifestyle ventures, and personal development. As the Founder and Creative Director of her latest venture - Anshu Hegde Creative (The First Ray Concept), Anshu brings a holistic, human-centric approach to brand identity, executive positioning, and modern media strategy.

Her journey began at the age of 16, driven by an innate passion for art, craft, and self-expression. That hands-on creative foundation quickly evolved into a 15-year career behind the camera in the commercial television sector—first as an Assistant Director shaping narrative visuals, and later as an Operations Manager overseeing high-impact media productions.

Fueled by an entrepreneurial spirit, Anshu paralleled her media career by launching and operating two successful lifestyle businesses—a bespoke Designer Boutique and a Beauty Salon—which she successfully ran for 20 years. This dual experience in high-end media production and direct-to-consumer business gave her a rare, 360-degree understanding of visual aesthetics, customer psychology, and operational excellence.

Beyond her business achievements, Anshu's true calling has always been nurturing talent and sharing knowledge. For over 30 years, she has served as a trusted mentor to aspiring models, women entrepreneurs, students, working professionals, and couples. Her deep empathetic understanding of diverse personalities allows her to craft tailored growth strategies, helping individuals elevate their confidence, communication, and personal brand.

Today, Anshu synthesizes her decades of production expertise, aesthetic refinement, and personal mentorship to help brands, executives, and creators tell compelling stories and make an indelible mark on the world.

**Core Capabilities & Services** (render as animated cards, same 7 items):
- Strategic Campaign Design: Translating business goals into cohesive, high-impact creative campaigns.
- Brand Identity & Executive Positioning: Crafting distinct visual identities and shaping personal brands for leaders and founders.
- Visual Media & Production: Directing visual shoots, short-form video content, and music visuals that capture audience attention.
- Podcast Curation & Hosting: Designing, structuring, and hosting engaging audio and video podcast experiences.
- Public Relations & Reputation Management: Building credibility, media presence, and sustainable brand trust.
- Digital Experience & Web Design: Creating modern, user-friendly digital touchpoints that reflect brand authenticity.
- Social Media Strategy & Upliftment: Elevating digital presence with content strategies that drive real engagement and growth.

**Why Work With Anshu Hegde?** (3 count-up stat cards)
- 30+ Years of Mentorship: Proven ability to read personalities, unlock potential, and tailor strategies that genuinely fit the individual or brand.
- 15 Years in Commercial TV & Media: Deep industry expertise in creative direction, operations, and story-driven media production.
- 20 Years as a Business Owner: Practical, real-world business acumen rooted in running customer-centric enterprises.

Also add an animated timeline of her journey (age 16 creative start → 15 years TV → 20 years boutique & salon → 30+ years mentoring → Anshu Hegde Creative today), a portrait image slot, and the contact + map section.

---
## SECTION 7 — SUPABASE (minimal)

Tables with RLS (public insert only, admin read via service role): 
1. `enquiries` — id, name, email, phone, service, message, created_at.
2. `subscribers` — id, email (unique), created_at.
Provide the SQL migration file. Add basic spam protection (honeypot field + simple rate limit in the API route). Optional: send a notification email via Resend if `RESEND_API_KEY` is present (skip silently otherwise).

---
## SECTION 8 — SEO, ACCESSIBILITY, TECH

- Next.js Metadata API on each page (title template "%s | Anshu Hegde Creative", description, OG image, Twitter card), JSON-LD `Organization`/`LocalBusiness` + `Person` + `BlogPosting`, sitemap, robots, canonical URLs, favicon from logo.
- Semantic HTML, alt text for all images, focus-visible gold ring (2px offset), color contrast AA, full keyboard navigation. (Note: zoom is intentionally disabled per client request.)
- All images via next/image with blur placeholders; fonts via next/font; strict TypeScript; ESLint clean; no console errors.
- Environment variables in `.env.local` and `.env.example`: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY, NEXT_PUBLIC_SITE_URL, optional RESEND_API_KEY.
- README.md with setup, how to edit `site-config.ts`, how to add blogs/workshops/gallery images, how to replace images, how to deploy to Vercel, and how to test PWA install.

### Project structure
```
/app
  layout.tsx, page.tsx (home), not-found.tsx, manifest.ts, sitemap.ts, robots.ts
  /services/page.tsx
  /blogs/page.tsx, /blogs/[slug]/page.tsx
  /workshops/page.tsx
  /gallery/page.tsx
  /about/page.tsx
  /api/enquiry/route.ts, /api/subscribe/route.ts
/components
  /ui (Button, Input, Modal, Toast, Skeleton, Marquee, SplitText, MagneticButton, Cursor, ScrollProgress)
  /layout (Header, Footer, MobileMenu, PageTransition, Preloader, MobileActionBar, WhatsAppFloat)
  /sections (Hero, FeatureCards, ServicesScroller, Stats, BlogPreview, WorkshopsPreview, GalleryPreview, ContactSection, MapEmbed, InstallAppButton)
/lib (site-config.ts, supabase.ts, utils.ts, blogs.ts, workshops.ts, gallery.ts)
/hooks (useInstallPrompt, useLenis, useMediaQuery, useScrollVelocity)
/public (icons, images, sw.js)
/supabase/migrations/001_init.sql
```

---
## SECTION 9 — BUILD ORDER

1. Init Next.js 14 + TS + Tailwind + Framer Motion + GSAP + Lenis; set design tokens, fonts, viewport/no-zoom setup.
2. Build UI components (Button, Input, Modal, Toast, Skeleton, Marquee, SplitText, Cursor, ScrollProgress).
3. Build Preloader, PageTransition, Header, MobileMenu, Footer, WhatsApp float, mobile action bar, Install App (PWA).
4. Build Home with every section in the reference image's order.
5. Build Services, Blogs (+ detail), Workshops, Gallery, About.
6. Build Contact form + Google Map + Supabase API routes + SQL.
7. SEO, sitemap, manifest, service worker, 404.
8. Test at 360 / 768 / 1440 px, fix overflow, verify no pinch-zoom, verify PWA installability, verify animations on mobile at 60fps.

Generate ALL files with complete working code. No placeholder comments, no unfinished functions. When done, list the placeholders I must replace (phone, email, WhatsApp, address, map link, social URLs, images).

---
## VISUAL REFERENCE (append for design quality)
The site must feel like a luxury boutique creative agency: metallic gold surfaces, deep emerald green, cream marble, brass accents, soft shadows, generous white space, elegant serif headlines and smooth, cinematic motion (think Awwwards-level agency sites). When unsure, choose the more elegant, more spacious, more refined option.