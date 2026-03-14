import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Site Map | Irving's Fence Repair – Irving TX",
  description: "Full sitemap for Irving's Fence Repair website.",
}

const sitemapData = [
  {
    section: 'Main Pages',
    color: '#0EA5E9',
    icon: '🏠',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Us' },
      { href: '/contact', label: 'Contact & Free Quote' },
      { href: '/blog', label: 'Fencing Blog' },
      { href: '/resources', label: 'Resources' },
    ]
  },
  {
    section: 'Fence Services',
    color: '#14B8A6',
    icon: '🔧',
    links: [
      { href: '/services/privacy-fences', label: 'Privacy Fences Irving TX' },
      { href: '/services/wood-fences', label: 'Wood Fence Installation' },
      { href: '/services/vinyl-fences', label: 'Vinyl Fence Irving TX' },
      { href: '/services/chain-link', label: 'Chain Link Fences' },
      { href: '/services/fence-repair', label: 'Fence Repair Irving TX' },
      { href: '/services/custom-gates', label: 'Custom Gates Irving TX' },
    ]
  },
  {
    section: 'Blog Posts',
    color: '#8B5CF6',
    icon: '📖',
    links: [
      { href: '/blog/best-fence-for-texas-heat', label: 'Best Fence Materials for Texas Heat' },
      { href: '/blog/privacy-fence-cost-irving', label: 'Privacy Fence Cost in Irving TX' },
      { href: '/blog/wood-vs-vinyl-fence', label: 'Wood vs Vinyl Fence' },
      { href: '/blog/fence-permit-irving-tx', label: 'Fence Permit in Irving TX' },
    ]
  },
  {
    section: 'Legal',
    color: '#64748B',
    icon: '📄',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/sitemap.xml', label: 'XML Sitemap' },
    ]
  }
]

export default function SitemapPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'white', fontWeight: 800, marginBottom: '12px' }}>
            Site Map
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1rem' }}>
            All pages on Irving's Fence Repair — Irving, TX fence installation experts.
          </p>
        </div>
      </section>

      <section style={{ padding: '64px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '28px' }}>
            {sitemapData.map(section => (
              <div key={section.section} style={{
                background: 'white', borderRadius: '16px', padding: '28px',
                border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}>
                <h2 style={{
                  fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.5px',
                  color: section.color, marginBottom: '16px',
                  display: 'flex', alignItems: 'center', gap: '8px'
                }}>
                  <span>{section.icon}</span> {section.section}
                </h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {section.links.map(link => (
                    <li key={link.href}>
                      <Link href={link.href} style={{
                        color: '#475569', textDecoration: 'none', fontSize: '0.9rem',
                        display: 'flex', alignItems: 'center', gap: '6px',
                      }}>
                        <span style={{ color: section.color, fontSize: '0.7rem' }}>▶</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '48px', background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)',
            borderRadius: '16px', padding: '36px', textAlign: 'center'
          }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'white', marginBottom: '8px' }}>
              Ready for Your Free Irving Fence Quote?
            </h2>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
              <Link href="/contact" style={{ background: 'white', color: '#0EA5E9', fontFamily: 'var(--font-display)', fontWeight: 700, padding: '13px 24px', borderRadius: '8px', textDecoration: 'none' }}>
                Get Free Quote
              </Link>
              <a href="tel:+19725550190" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', fontFamily: 'var(--font-display)', fontWeight: 600, padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.3)' }}>
                📞 (972) 555-0190
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
