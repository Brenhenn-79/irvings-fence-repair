'use client'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Site Map | Irving's Fence Repair – Irving TX",
  description: "Full sitemap for Irving's Fence Repair website. Find all pages, services, blog posts, and resources for Irving, TX fence installation and repair.",
}

const sitemapData = [
  {
    section: 'Main Pages',
    color: '#0EA5E9',
    icon: '🏠',
    links: [
      { href: '/', label: 'Home – Premier Fence Installation in Irving, TX' },
      { href: '/about', label: 'About Irving\'s Fence Repair' },
      { href: '/contact', label: 'Contact Us & Get a Free Quote' },
      { href: '/blog', label: 'Fencing Blog & Tips for Irving Homeowners' },
      { href: '/resources', label: 'Irving Fence Buying Guide (2025)' },
    ]
  },
  {
    section: 'Fence Services',
    color: '#14B8A6',
    icon: '🔧',
    links: [
      { href: '/services/privacy-fences', label: 'Privacy Fence Installation Irving TX' },
      { href: '/services/wood-fences', label: 'Wood Fence Installation Irving TX' },
      { href: '/services/vinyl-fences', label: 'Vinyl Fence Installation Irving TX' },
      { href: '/services/chain-link', label: 'Chain Link Fence Irving TX' },
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
      { href: '/blog/privacy-fence-cost-irving', label: 'Privacy Fence Cost in Irving, TX (2025)' },
      { href: '/blog/wood-vs-vinyl-fence', label: 'Wood vs. Vinyl Fence in Irving' },
      { href: '/blog/fence-permit-irving-tx', label: 'Do You Need a Fence Permit in Irving, TX?' },
      { href: '/blog/how-long-fence-installation-takes', label: 'How Long Does Fence Installation Take?' },
      { href: '/blog/fence-maintenance-tips-texas', label: '5 Fence Maintenance Tips for Irving Homeowners' },
    ]
  },
  {
    section: 'Service Areas',
    color: '#F59E0B',
    icon: '📍',
    links: [
      { href: '/?area=irving', label: 'Fence Company Irving, TX' },
      { href: '/?area=las-colinas', label: 'Fence Installation Las Colinas TX' },
      { href: '/?area=valley-ranch', label: 'Fence Contractor Valley Ranch Irving TX' },
      { href: '/?area=grand-prairie', label: 'Fence Installation Grand Prairie TX' },
      { href: '/?area=coppell', label: 'Fence Company Coppell TX' },
      { href: '/?area=carrollton', label: 'Fence Installation Carrollton TX' },
    ]
  },
  {
    section: 'Legal & Technical',
    color: '#64748B',
    icon: '📄',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/sitemap.xml', label: 'XML Sitemap (for search engines)' },
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
            All pages on Irving's Fence Repair — your Irving, TX fence installation and repair experts.
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
                        transition: 'color 0.15s ease'
                      }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = section.color}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#475569'}
                      >
                        <span style={{ color: section.color, fontSize: '0.7rem' }}>▶</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact strip */}
          <div style={{
            marginTop: '48px', background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)',
            borderRadius: '16px', padding: '36px', textAlign: 'center'
          }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'white', marginBottom: '8px' }}>
              Didn't Find What You Were Looking For?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '20px' }}>
              Call us or get a free quote — we're happy to answer any questions about fencing in Irving.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
