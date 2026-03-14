import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Best Fence Materials for Texas Heat | Irving Fence Guide',
  description:
    "Which fence materials hold up best in Irving, TX's brutal summer heat? We compare cedar, vinyl, chain link, and iron — with real advice from your local fence experts.",
}

export default function BlogPostTexasHeat() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '380px', overflow: 'hidden' }}>
        <Image
          src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Wood fence standing strong in Texas summer heat"
          fill style={{ objectFit: 'cover' }} priority
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.75)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', padding: '80px 24px 60px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <nav style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginBottom: '12px' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Home</Link>
            {' → '}
            <Link href="/blog" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Blog</Link>
            {' → '}
            <span style={{ color: '#7DD3FC' }}>Best Fence for Texas Heat</span>
          </nav>
          <div style={{ display: 'inline-block', background: 'linear-gradient(135deg,#0EA5E9,#14B8A6)', color: 'white', borderRadius: '100px', padding: '4px 14px', fontSize: '0.78rem', fontWeight: 600, marginBottom: '12px', width: 'fit-content' }}>
            Fence Materials
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,4vw,2.5rem)', color: 'white', fontWeight: 800, lineHeight: 1.15 }}>
            The Best Fence Materials for Texas Heat: A Complete Irving Homeowner Guide
          </h1>
          <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', marginTop: '12px' }}>
            November 12, 2024 · 6 min read · By Irving's Fence Repair Team
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section style={{ padding: '64px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '48px', alignItems: 'start' }}>

          {/* Article */}
          <article style={{ background: 'white', borderRadius: '16px', padding: '40px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ color: '#475569', lineHeight: 1.9, fontSize: '1rem' }}>
              <p style={{ marginBottom: '20px', fontSize: '1.05rem', fontWeight: 500, color: '#374151' }}>
                Irving's summers are not messing around. When you're dealing with 100°F+ heat, intense UV radiation, and the kind of dry spells that crack ground and warp wood, picking the right fence material isn't just a style decision — it's a practical one.
              </p>
              <p style={{ marginBottom: '20px' }}>
                We've installed and repaired fences across Irving for 15 years, and we've seen first-hand what Texas weather does to different materials. Here's our honest breakdown of the best fence options for the Irving climate.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#0F172A', margin: '32px 0 14px' }}>
                1. Cedar Wood — The Classic That Still Wins
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Cedar is hands-down the most popular fencing material for Irving homeowners, and there's a good reason it's been that way for decades. Cedar contains natural oils that repel insects and resist moisture — both critical factors in a Texas climate.
              </p>
              <p style={{ marginBottom: '16px' }}>
                <strong>How it handles heat:</strong> Cedar handles the heat reasonably well, especially when properly sealed and stained. The main enemy isn't the heat itself — it's the UV radiation and the cycle of hot days and cooler nights that can cause expansion and contraction. A quality exterior stain every 2–3 years keeps cedar looking great and prevents premature cracking.
              </p>
              <p style={{ marginBottom: '16px' }}>
                <strong>Lifespan in Irving:</strong> With proper maintenance, a cedar fence lasts 15–25 years. Without it, expect 8–12 years before significant deterioration sets in.
              </p>
              <p style={{ marginBottom: '20px' }}>
                <strong>Best for:</strong> Homeowners who love the natural look and don't mind some annual maintenance.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#0F172A', margin: '32px 0 14px' }}>
                2. Vinyl — The Zero-Maintenance Texas Champion
              </h2>
              <p style={{ marginBottom: '16px' }}>
                If you want a fence that truly laughs at Texas heat, vinyl is your answer. Modern vinyl fences are engineered specifically to handle UV exposure and temperature extremes without warping, fading, or cracking.
              </p>
              <p style={{ marginBottom: '16px' }}>
                <strong>How it handles heat:</strong> Premium vinyl contains UV stabilizers that prevent sun-induced degradation. High-quality vinyl does expand slightly in extreme heat, but it's designed with that in mind — posts and rails accommodate thermal movement without damage.
              </p>
              <p style={{ marginBottom: '16px' }}>
                <strong>Lifespan in Irving:</strong> 25–40 years with virtually zero maintenance beyond occasional cleaning with a garden hose.
              </p>
              <p style={{ marginBottom: '20px' }}>
                <strong>Best for:</strong> Busy homeowners who want a "set it and forget it" fence solution.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#0F172A', margin: '32px 0 14px' }}>
                3. Chain Link — Underrated Heat Warrior
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Chain link might not be the most glamorous option, but from a pure durability standpoint in Texas heat, it's tough to beat. Galvanized steel doesn't care about UV radiation, won't warp, and requires essentially no maintenance.
              </p>
              <p style={{ marginBottom: '20px' }}>
                <strong>Best for:</strong> Side yards, pet containment, budget-conscious homeowners, and large-perimeter fencing projects.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#0F172A', margin: '32px 0 14px' }}>
                4. Wrought Iron & Aluminum — Elegant and Nearly Indestructible
              </h2>
              <p style={{ marginBottom: '16px' }}>
                For homeowners who want maximum longevity and don't mind a higher upfront investment, ornamental iron or aluminum fencing is virtually indestructible in Texas conditions. Properly coated aluminum won't rust, and both materials easily outlast wood or vinyl.
              </p>
              <p style={{ marginBottom: '20px' }}>
                <strong>Best for:</strong> Front yard borders, pool enclosures, upscale properties, and any application where aesthetics and permanence both matter.
              </p>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#0F172A', margin: '32px 0 14px' }}>
                Our Recommendation for Irving Homeowners
              </h2>
              <p style={{ marginBottom: '16px' }}>
                For most Irving homeowners, we typically recommend either <strong>vinyl for low-maintenance privacy fencing</strong> or <strong>cedar for those who prefer a natural aesthetic and don't mind light maintenance</strong>. Both materials handle Irving's climate well when properly installed — and proper installation is everything.
              </p>
              <p style={{ marginBottom: '20px' }}>
                Not sure which is right for your specific situation? Give us a call or fill out our contact form — we'll talk through your goals, your property, and your budget to help you make the right call.
              </p>
            </div>

            {/* Author box */}
            <div style={{ marginTop: '40px', padding: '24px', background: '#F0F9FF', borderRadius: '12px', border: '1px solid #BAE6FD', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg,#0EA5E9,#14B8A6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', minWidth: '56px' }}>👷</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>Irving's Fence Repair Team</div>
                <div style={{ color: '#64748B', fontSize: '0.85rem' }}>
                  Over 15 years installing and repairing fences across Irving, TX and the DFW metroplex.
                </div>
              </div>
            </div>

            {/* Related posts */}
            <div style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid #F1F5F9' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#0F172A', marginBottom: '16px' }}>Related Articles</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { href: '/blog/privacy-fence-cost-irving', label: 'Privacy Fence Cost in Irving, TX (2025 Guide)' },
                  { href: '/blog/wood-vs-vinyl-fence', label: 'Wood vs. Vinyl: Which Is Right for You?' },
                  { href: '/blog/fence-permit-irving-tx', label: 'Do You Need a Fence Permit in Irving?' },
                ].map(l => (
                  <Link key={l.href} href={l.href} style={{ color: '#0EA5E9', textDecoration: 'none', fontSize: '0.92rem', fontWeight: 500 }}>→ {l.label}</Link>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <div style={{ position: 'sticky', top: '90px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: 'white', borderRadius: '16px', padding: '28px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <ContactForm compact title="Get a Free Irving Fence Quote" subtitle="We respond in under 2 hours!" />
            </div>
            <div style={{ background: 'linear-gradient(135deg,#0F172A,#1E3A5F)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>📞</div>
              <div style={{ fontFamily: 'var(--font-display)', color: 'white', fontWeight: 700, marginBottom: '4px' }}>Call or Text Us</div>
              <a href="tel:+19722841718" style={{ color: '#7DD3FC', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem', display: 'block', marginBottom: '8px' }}>(972) 555-0190</a>
              <div style={{ color: '#94A3B8', fontSize: '0.82rem' }}>Mon–Fri 7am–6pm · Sat 8am–4pm</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
