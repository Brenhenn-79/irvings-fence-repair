import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Free Fence Quote in Irving, TX',
  description:
    "Get a free fence installation estimate in Irving, TX. Call, text, or fill out our form. Irving's Fence Repair responds within 2 hours. Licensed & insured fence contractors.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)',
        padding: '80px 24px 64px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: 'rgba(14,165,233,0.15)', color: '#7DD3FC',
            padding: '6px 16px', borderRadius: '100px', fontSize: '0.85rem',
            fontWeight: 600, marginBottom: '20px', border: '1px solid rgba(14,165,233,0.25)'
          }}>
            ⚡ Fast Response · Usually Under 2 Hours
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'white', fontWeight: 800, marginBottom: '16px', lineHeight: 1.1
          }}>
            Get Your Free Irving Fence Estimate
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.7 }}>
            No pressure. No obligation. Just an honest quote from Irving's most trusted fence company.
            Fill out the form below, call us, or send us a text — whatever's easiest for you.
          </p>
        </div>
      </section>

      {/* Contact Options Bar */}
      <section style={{ background: 'white', borderBottom: '1px solid #E2E8F0', padding: '24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', textAlign: 'center' }}>
          {[
            { icon: '📞', label: 'Call Us', value: '(972) 555-0190', href: 'tel:+19725550190', color: '#0EA5E9' },
            { icon: '💬', label: 'Text for Quote', value: 'Text (972) 555-0190', href: 'sms:+19725550190', color: '#14B8A6' },
            { icon: '✉️', label: 'Email Us', value: 'info@irvingsfencerepair.com', href: 'mailto:info@irvingsfencerepair.com', color: '#8B5CF6' },
            { icon: '🕐', label: 'Business Hours', value: 'Mon–Fri 7am–6pm · Sat 8am–4pm', href: '#', color: '#F59E0B' },
          ].map(item => (
            <a key={item.label} href={item.href} style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '6px' }}>{item.icon}</div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>{item.label}</div>
              <div style={{ color: item.color, fontWeight: 600, fontSize: '0.9rem', fontFamily: 'var(--font-display)' }}>{item.value}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '64px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>

          {/* Form */}
          <div style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', border: '1px solid #E2E8F0' }}>
            <ContactForm
              title="Request Your Free Fence Estimate"
              subtitle="Tell us about your Irving fencing project and we'll get right back to you."
            />
          </div>

          {/* Info Panel */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#0F172A', marginBottom: '16px' }}>
              What Happens After You Submit?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              {[
                { step: '1', title: 'We Review Your Request', desc: 'Our team reviews your submission and prepares for a site visit in your Irving neighborhood.' },
                { step: '2', title: 'We Call or Text You', desc: 'Typically within 2 business hours, we reach out to confirm details and schedule your free estimate.' },
                { step: '3', title: 'On-Site Estimate Visit', desc: 'We come to your Irving property, take measurements, and discuss your vision in person.' },
                { step: '4', title: 'Detailed Written Quote', desc: 'You receive a clear, itemized quote. No hidden fees, no surprises — just an honest price.' },
              ].map(item => (
                <div key={item.step} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{
                    minWidth: '36px', height: '36px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 800, fontFamily: 'var(--font-display)', fontSize: '0.9rem'
                  }}>
                    {item.step}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: '#0F172A', marginBottom: '4px', fontWeight: 700 }}>{item.title}</h3>
                    <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div style={{ background: '#F0F9FF', borderRadius: '16px', padding: '24px', border: '1px solid #BAE6FD' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#0F172A', marginBottom: '16px' }}>
                Why Irving Homeowners Trust Us
              </h3>
              {[
                '✅ 287+ five-star reviews across Google, Yelp & Nextdoor',
                '✅ Licensed, bonded & fully insured fence contractor',
                '✅ 5-year workmanship warranty on all installations',
                '✅ Irving fence permits handled at no extra cost',
                '✅ Upfront pricing — no hidden fees, ever',
                '✅ Serving Irving, TX since 2010',
              ].map(item => (
                <div key={item} style={{ color: '#374151', fontSize: '0.9rem', marginBottom: '8px' }}>{item}</div>
              ))}
            </div>

            {/* Map placeholder */}
            <div style={{
              marginTop: '24px', borderRadius: '16px', overflow: 'hidden',
              border: '1px solid #E2E8F0', background: '#E2E8F0',
              height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: '8px'
            }}>
              <div style={{ fontSize: '2rem' }}>📍</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#475569' }}>Serving Irving, TX 75060–75063</div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>and surrounding DFW communities</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
