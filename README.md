# Anshu Hegde Creative — The First Ray Concept
### Luxury Personal Brand & Creative Agency Portfolio

A production-grade, fully animated, mobile-first business portfolio website built for **"Anshu Hegde Creative"**. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis Smooth Scrolling, Lucide Icons, and Supabase integration.

---

## 🎨 Design System & Palette

- **Rich Gold** (Primary Light): `#F0CB5E`, soft gradient to `#FBE38E` & `#D9A93A` with metallic texture
- **Deep Emerald** (Primary Dark): `#0B3B2C`, darker `#072A1F`, lighter `#14573F`
- **Marble Cream**: `#EADFC8`
- **Ink Black** (Text on gold): `#1A1A1A`
- **Cream** (Text on green): `#F6EFD9`
- **Alternating Rhythm**: Gold Band → Gold Feature Cards → Deep Green Band → Gold Gallery Cards → Deep Green Footer

---

## 📱 Mobile App (PWA) & App-like Experience

- **Native PWA**: Full Web App Manifest with stand-alone mobile mode (`/app/manifest.ts` & `/public/manifest.webmanifest`).
- **Service Worker**: Cache static assets and provides offline fallback screen (`/public/sw.js` & `/public/offline.html`).
- **iOS Safari Install Sheet**: Guided "Share → Add to Home Screen" modal on Apple devices.
- **No-Zoom Mobile Behavior**: Global touch-action manipulation, prevention of pinch-to-zoom gestures, disabled double-tap zoom, minimum 16px input fonts to prevent iOS zoom-on-focus, disabled rubber banding (`overscroll-behavior-y: none`).
- **Mobile Quick-Action Bar**: Fixed bottom bar (Call / WhatsApp / Enquire) that auto-hides on scroll down and reveals on scroll up.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Add your Supabase URL & keys (the app works seamlessly with in-memory fallbacks if Supabase is not yet connected).

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🛠️ How to Customize & Replace Content

### 1. Site Configuration (`/lib/site-config.ts`)
All primary client contact details, phone numbers, WhatsApp link, social links, and studio address are centralized in:
`file:///c:/Users/lalit/Pictures/website%20work/anshu%20hegde%20creative/lib/site-config.ts`

Replace the placeholders:
- `phone`: e.g. `"+91 98765 43210"`
- `phoneRaw`: e.g. `"+919876543210"`
- `whatsapp`: e.g. `"919876543210"`
- `email`: e.g. `"hello@anshuhegdecreative.com"`
- `address`: Studio address
- `mapEmbedUrl`: Google Maps embed iframe URL
- `mapLink`: Google Maps share URL
- `social`: URLs for Instagram, Facebook, YouTube, LinkedIn, X, Pinterest, Spotify, Threads.

### 2. Replacing Images
All images are located in `/public/images`:
- Hero Podium Composition: `/public/images/hero-podium.jpg`
- Anshu Hegde Founder Portrait: `/public/images/anshu-portrait.jpg`
- Blog Covers: `/public/images/blog-1.jpg`, `blog-2.jpg`
- Gallery Portfolio Items: `/public/images/gallery/` (`shoot-1.jpg`, `podcast-1.jpg`, `brand-1.jpg`, `workshop-1.jpg`, etc.)
- PWA Icons: `/public/icons/` (`icon-192.png`, `icon-512.png`, `icon-maskable.png`, `favicon.ico`)

### 3. Adding Blog Posts (`/lib/blogs.ts`)
Add entries to the `blogPosts` array in `/lib/blogs.ts`. The slug automatically generates the page route `/blogs/[slug]`.

### 4. Adding Workshops (`/lib/workshops.ts`)
Update the `workshopsData` array in `/lib/workshops.ts` to add dates, cohort modes, and registration links.

### 5. Adding Gallery Items (`/lib/gallery.ts`)
Update `galleryItems` in `/lib/gallery.ts` with categories: `"Shoots" | "Podcasts" | "Workshops" | "Brand"`.

---

## 🗄️ Database Setup (Supabase)

Run the SQL script located in `/supabase/migrations/001_init.sql` in your Supabase SQL editor:
1. Creates `enquiries` table with public insert & admin read policies.
2. Creates `subscribers` table for newsletter signups.
3. Enables Row Level Security (RLS).

---

## 🚢 Deploying to Vercel

1. Push your repository to GitHub.
2. Import the project into Vercel.
3. In Project Settings → Environment Variables, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_SITE_URL` (your custom domain or vercel.app URL)
   - `RESEND_API_KEY` (optional, for email alerts)
4. Click **Deploy**. Vercel will automatically build the Next.js 14 App Router project with zero configuration.
