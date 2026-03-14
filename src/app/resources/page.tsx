import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Irving TX Fence Buying Guide 2025 | Irving\'s Fence Repair Resources',
  description:
    "Everything Irving homeowners need to know before buying a fence — materials, costs, permits, HOA rules, and how to choose the right fence contractor in Irving, TX.",
}

const guide = [
  {
    number: '01',
    title: 'Understand Your Goals',
    content: `Before you choose a material or call for quotes, start with "why?" Are you looking for privacy? Security for pets or kids? Pure aesthetics and curb appeal? Defining property lines? Each goal points toward different fence types and heights. For example, if privacy is your #1 driver, you'll want a solid 6–8ft board fence. If you just want to mark your property edge, a decorative picket or split-rail might be all you need.`,
  },
  {
    number: '02',
    title: 'Know Irving\'s Fence Permit Requirements',
    content: `The City of Irving requires a building permit for most fence installations over 4 feet tall. You'll need to submit a site plan showing fence location, height, and materials. Permits typically cost $50–$150 and require a city inspection. If you're in an HOA community (common in Las Colinas, Valley Ranch, and Hackberry Creek), you'll also need HOA approval before installation. Pro tip: a good Irving fence contractor handles this entire process for you.`,
  },
  {
    number: '03',
    title: 'Choose the Right Material',
    content: `The four most popular fencing materials in Irving are: Cedar Wood (natural beauty, 15–25 year lifespan with maintenance, most customizable), Vinyl (zero maintenance, UV-resistant, 25–40 year lifespan), Chain Link (most affordable, virtually maintenance-free, practical), and Wrought Iron / Aluminum (most elegant, maximum longevity, higher cost). For Irving's climate, cedar and vinyl are the top recommendations for most homeowners.`,
  },
  {
    number: '04',
    title: 'Understand Fence Costs in Irving',
    content: `Expect to pay $18–$45 per linear foot installed for most fence types in Irving. Chain link runs $18–$28/LF; cedar privacy fences $25–$35/LF; vinyl $30–$45/LF; ornamental iron $40–$80/LF. Gates add $300–$1,500+ depending on size and material. Always get a written, itemized quote. Any contractor who won't provide one in writing is a red flag.`,
  },
  {
    number: '05',
    title: 'Hire a Qualified Irving Fence Contractor',
    content: `Always verify: (1) Texas contractor license and registration, (2) General liability insurance (minimum $1M), (3) Workers' comp coverage for their crew, (4) Local reviews on Google, Yelp, and Nextdoor, (5) Written contract with scope, materials, timeline, and payment terms. Avoid contractors who want full payment upfront or can't provide proof of insurance. Get at least 2–3 quotes before deciding.`,
  },
  {
    number: '06',
    title: 'Prepare Your Property for Installation',
    content: `Before installation day: Call 811 (Texas 811) at least 3 days prior to have underground utilities marked — it's free and required by law. Clear vegetation and obstacles within 2 feet of the fence line. Know your property line (a survey or plat map helps). Notify neighbors if the fence sits on or near the property line. A good fence company will do some of this for you, but knowing what's expected makes the project run smoother.`,
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #0C4A6E)', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block', background: 'rgba(14,165,233,0.15)', color: '#7DD3FC',
            padding: '6px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600,
            marginBottom: '16px', border: '1px solid rgba(14,165,233,0.25)'
          }}>
            📚 Free Resource for Irving Homeowners
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'white', fontWeight: 800, marginBottom: '16px', lineHeight: 1.1 }}>
            The Complete Irving, TX Fence Buying Guide (2025)
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
            Everything you need to know before buying a fence in Irving — materials, costs, permits, HOA requirements, and how to choose a contractor you can trust.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            <a href="tel:+19725550190" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              color: 'white', textDecoration: 'none', fontWeight: 600,
              border: '2px solid rgba(255,255,255,0.3)', padding: '13px 24px',
              borderRadius: '8px', fontFamily: 'var(--font-display)'
            }}>
              📞 Ask a Question
            </a>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section style={{ background: 'white', borderBottom: '1px solid #E2E8F0', padding: '20px 24px', overflowX: 'auto' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {guide.map(item => (
            <a key={item.number} href={`#step-${item.number}`} style={{
              display: 'inline-block', background: '#F1F5F9', color: '#475569',
              borderRadius: '100px', padding: '7px 16px', fontSize: '0.82rem',
              fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap',
              transition: 'all 0.15s ease'
            }}>
              {item.number}. {item.title}
            </a>
          ))}
        </div>
      </section>

      {/* Main Guide + Sidebar */}
      <section style={{ padding: '64px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 360px', gap: '48px', alignItems: 'start' }}>

          {/* Guide Content */}
          <div>
            {guide.map((item, i) => (
              <div key={item.number} id={`step-${item.number}`} style={{
                background: 'white', borderRadius: '16px', padding: '36px',
                border: '1px solid #E2E8F0', marginBottom: '24px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{
                    minWidth: '48px', height: '48px', borderRadius: '12px',
                    background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 800, fontFamily: 'var(--font-display)', fontSize: '0.9rem'
                  }}>
                    {item.number}
                  </div>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: '#0F172A', marginBottom: '12px', fontWeight: 700 }}>
                      {item.title}
                    </h2>
                    <p style={{ color: '#475569', lineHeight: 1.85, fontSize: '0.97rem' }}>
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Related Resources */}
            <div style={{ background: '#F0F9FF', borderRadius: '16px', padding: '28px', border: '1px solid #BAE6FD' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#0F172A', marginBottom: '16px' }}>
                📖 Related Blog Posts
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { href: '/blog/best-fence-for-texas-heat', label: 'Best Fence Materials for Texas Heat' },
                  { href: '/blog/privacy-fence-cost-irving', label: 'Privacy Fence Cost in Irving, TX (2025)' },
                  { href: '/blog/wood-vs-vinyl-fence', label: 'Wood vs. Vinyl Fence: Which Is Right for You?' },
                  { href: '/blog/fence-permit-irving-tx', label: 'Do You Need a Fence Permit in Irving?' },
                ].map(l => (
                  <Link key={l.href} href={l.href} style={{ color: '#0EA5E9', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>
                    → {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ position: 'sticky', top: '90px' }}>
            {/* Quick cost reference */}
            <div style={{ background: 'white', borderRadius: '16px', padding: '28px', border: '1px solid #E2E8F0', marginBottom: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#0F172A', marginBottom: '16px', fontWeight: 700 }}>
                💰 Irving Fence Cost Quick Reference
              </h3>
              {[
                { type: 'Chain Link', cost: '$18–$28/LF' },
                { type: 'Cedar Wood', cost: '$25–$35/LF' },
                { type: 'Vinyl', cost: '$30–$45/LF' },
                { type: 'Ornamental Iron', cost: '$40–$80/LF' },
                { type: 'Walk Gate', cost: '$300–$600' },
                { type: 'Drive Gate', cost: '$800–$2,500+' },
              ].map(row => (
                <div key={row.type} style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '10px 0', borderBottom: '1px solid #F1F5F9',
                  fontSize: '0.9rem'
                }}>
                  <span style={{ color: '#475569' }}>{row.type}</span>
                  <span style={{ fontWeight: 700, color: '#0EA5E9', fontFamily: 'var(--font-display)' }}>{row.cost}</span>
                </div>
              ))}
              <p style={{ color: '#94A3B8', fontSize: '0.75rem', marginTop: '12px' }}>
                *Installed price per linear foot. Irving, TX market rates. Prices vary by site conditions.
              </p>
            </div>

            {/* Form */}
            <div style={{ background: 'white', borderRadius: '16px', padding: '28px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <ContactForm
                compact
                title="Get Your Free Irving Fence Quote"
                subtitle="We usually respond within 2 hours!"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
