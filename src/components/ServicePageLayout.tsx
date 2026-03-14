'use client'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

interface ServicePageProps {
  title: string
  h1: string
  metaDescription: string
  heroImage: string
  heroImageAlt: string
  intro: string
  benefits: { icon: string; title: string; desc: string }[]
  bodyContent: React.ReactNode
  relatedServices: { href: string; title: string }[]
}

export default function ServicePageLayout({
  title,
  h1,
  heroImage,
  heroImageAlt,
  intro,
  benefits,
  bodyContent,
  relatedServices,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
        <Image src={heroImage} alt={heroImageAlt} fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,23,42,0.85), rgba(14,165,233,0.3))' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 60px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <nav style={{ marginBottom: '16px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link>
            {' → '}
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Services</Link>
            {' → '}
            <span style={{ color: '#7DD3FC' }}>{title}</span>
          </nav>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'white', fontWeight: 800, marginBottom: '16px', maxWidth: '700px', lineHeight: 1.15 }}>
            {h1}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
            {intro}
          </p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
            <a href="#quote" className="btn-primary">Get Free Quote</a>
            <a href="tel:+19725550190" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'white', textDecoration: 'none', fontWeight: 600, border: '2px solid rgba(255,255,255,0.35)', padding: '13px 24px', borderRadius: '8px', fontFamily: 'var(--font-display)' }}>
              📞 (972) 555-0190
            </a>
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section style={{ padding: '64px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '48px', alignItems: 'start' }}>
          {/* Left: Content */}
          <div>
            {/* Benefits */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px', marginBottom: '48px' }}>
              {benefits.map(b => (
                <div key={b.title} style={{ background: 'white', borderRadius: '12px', padding: '20px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: '10px' }}>{b.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: '#0F172A', marginBottom: '6px', fontWeight: 700 }}>{b.title}</h3>
                  <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.6 }}>{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Body Content */}
            <div style={{ color: '#475569', lineHeight: 1.9, fontSize: '1rem' }}>
              {bodyContent}
            </div>

            {/* Related Services */}
            <div style={{ marginTop: '48px', padding: '24px', background: '#F0F9FF', borderRadius: '12px', border: '1px solid #BAE6FD' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#0F172A', marginBottom: '12px' }}>Other Fence Services in Irving</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {relatedServices.map(s => (
                  <Link key={s.href} href={s.href} style={{ background: 'white', border: '1px solid #BAE6FD', borderRadius: '100px', padding: '6px 16px', fontSize: '0.85rem', color: '#0EA5E9', textDecoration: 'none', fontWeight: 500 }}>
                    {s.title} →
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sticky Form */}
          <div id="quote" style={{ position: 'sticky', top: '90px', background: 'white', borderRadius: '20px', padding: '32px', border: '1px solid #E2E8F0', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <ContactForm
              title="Get Your Free Estimate"
              subtitle="Irving fence quotes — usually within 2 hours!"
            />
            <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #F1F5F9', textAlign: 'center' }}>
              <a href="tel:+19725550190" style={{ color: '#0EA5E9', textDecoration: 'none', fontWeight: 700, fontFamily: 'var(--font-display)', display: 'block', marginBottom: '4px' }}>
                📞 (972) 555-0190
              </a>
              <a href="sms:+19725550190" style={{ color: '#14B8A6', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
                💬 Text for Quick Response
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
