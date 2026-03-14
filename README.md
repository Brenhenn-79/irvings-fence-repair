# Irving's Fence Repair – Next.js Website

A high-converting, SEO-optimized lead generation website for Irving's Fence Repair, a fence installation and repair company in Irving, Texas.

## 🚀 Live Preview
Deploy instantly to Vercel: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with Schema.org JSON-LD, GA4
│   ├── page.tsx                # Homepage (1,200+ words, full SEO content)
│   ├── globals.css             # Design system, animations, custom fonts
│   ├── sitemap.ts              # Auto-generated XML sitemap
│   ├── robots.ts               # robots.txt
│   ├── about/page.tsx          # About page with team & timeline
│   ├── blog/
│   │   ├── page.tsx            # Blog index
│   │   └── best-fence-for-texas-heat/page.tsx   # Sample blog post
│   ├── contact/page.tsx        # Contact page with form
│   ├── resources/page.tsx      # Fence Buying Guide (lead magnet)
│   ├── sitemap/page.tsx        # HTML sitemap (visible to users & crawlers)
│   ├── services/
│   │   ├── privacy-fences/page.tsx
│   │   ├── wood-fences/page.tsx
│   │   ├── vinyl-fences/page.tsx
│   │   ├── chain-link/page.tsx
│   │   ├── fence-repair/page.tsx
│   │   └── custom-gates/page.tsx
│   └── api/
│       └── contact/route.ts    # Form submission API (Supabase + Resend ready)
└── components/
    ├── Navigation.tsx           # Sticky nav with dropdown
    ├── Footer.tsx               # Full footer with HTML sitemap
    ├── ContactForm.tsx          # Reusable form with validation
    └── ServicePageLayout.tsx    # Template for all service pages
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
```bash
cp .env.example .env.local
# Fill in your Supabase, Resend, and GA4 keys
```

### 3. Run Development Server
```bash
npm run dev
# Open http://localhost:3000
```

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard or:
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add RESEND_API_KEY
```

---

## 📧 Supabase Setup (Lead Storage)

1. Create a project at [supabase.com](https://supabase.com)
2. Run this SQL in your Supabase SQL editor:

```sql
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT,
  service TEXT,
  message TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  source TEXT DEFAULT 'website-form'
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow inserts from API with service role key only
CREATE POLICY "Allow service role inserts" ON leads
  FOR INSERT TO service_role WITH CHECK (true);
```

3. Uncomment the Supabase code in `src/app/api/contact/route.ts`
4. Add your credentials to `.env.local`

---

## ✉️ Resend Setup (Email Notifications)

1. Create account at [resend.com](https://resend.com)
2. Add and verify your domain (`irvingsfencerepair.com`)
3. Create an API key
4. Uncomment the Resend code in `src/app/api/contact/route.ts`
5. Add `RESEND_API_KEY` to `.env.local`

---

## 📊 Google Analytics 4

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Replace `G-XXXXXXXX` in `src/app/layout.tsx`
4. Or set `NEXT_PUBLIC_GA4_ID` in `.env.local` and update layout to use it

---

## 🎨 Design System

**Fonts:**
- Display: Sora (headings, CTAs, brand)
- Body: DM Sans (content, UI)

**Colors:**
- Primary Blue: `#0EA5E9` (sky-500)
- Teal Accent: `#14B8A6` (teal-500)  
- Dark: `#0F172A` (slate-900)
- Background: `#F8FAFC` (slate-50)

**Key CSS Classes:**
- `.btn-primary` – gradient CTA button
- `.btn-secondary` – outlined button
- `.gradient-text` – blue-to-teal text gradient
- `.card-hover` – lift effect on hover
- `.section-divider` – gradient accent bar
- `.badge` – pill label component
- `.form-input` – styled form inputs

---

## 🔍 SEO Features

- ✅ Full JSON-LD schema: LocalBusiness, FAQPage, BreadcrumbList, WebSite
- ✅ Dynamic XML sitemap at `/sitemap.xml`
- ✅ HTML sitemap page at `/sitemap`
- ✅ robots.txt at `/robots.txt`
- ✅ Open Graph + Twitter Card metadata on all pages
- ✅ Alt text on all images
- ✅ Semantic HTML (H1→H6 hierarchy)
- ✅ Keyword-optimized copy throughout
- ✅ Local SEO (Irving, TX geo-targeting)
- ✅ Mobile-first responsive design
- ✅ Core Web Vitals optimized (next/image, font preloading)

---

## 📞 Business Info (Update These)

Search and replace throughout the project:
- Phone: `(972) 555-0190` → Your real number
- Email: `info@irvingsfencerepair.com` → Your email
- Address: `4500 W Airport Fwy, Irving, TX 75062` → Your address
- Domain: `irvingsfencerepair.com` → Your domain

---

## 📝 Adding Blog Posts

Create a new folder in `src/app/blog/your-post-slug/` with a `page.tsx` file following the pattern in `src/app/blog/best-fence-for-texas-heat/page.tsx`. Add it to `src/app/sitemap.ts` and `src/app/blog/page.tsx`.

---

Built with ❤️ for Irving's Fence Repair · Irving, Texas
