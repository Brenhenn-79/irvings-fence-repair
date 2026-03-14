'use client'
import Link from 'next/link'

const services = [
  { href: '/services/privacy-fences', label: 'Privacy Fences Irving TX' },
  { href: '/services/wood-fences', label: 'Wood Fence Installation' },
  { href: '/services/vinyl-fences', label: 'Vinyl Fence Irving TX' },
  { href: '/services/chain-link', label: 'Chain Link Fences' },
  { href: '/services/fence-repair', label: 'Fence Repair Irving TX' },
  { href: '/services/custom-gates', label: 'Custom Gates Irving' },
]

const resources = [
  { href: '/about', label: 'About Irving\'s Fence Repair' },
  { href: '/blog', label: 'Fencing Tips & Blog' },
  { href: '/resources', label: 'Irving Fence Buying Guide' },
  { href: '/contact', label: 'Contact & Free Quote' },
  { href: '/sitemap', label: 'Site Map' },
]

const areas = [
  'Irving, TX', 'Las Colinas', 'Valley Ranch', 'Grand Prairie',
  'Coppell', 'Carrollton', 'Euless', 'Grapevine', 'Bedford',
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F172A', color: '#CBD5E1', paddingTop: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Top CTA Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          marginBottom: '64px'
        }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'white', marginBottom: '12px' }}>
            Ready to Transform Your Irving Property?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '24px', fontSize: '1.05rem' }}>
            Join 500+ happy Irving homeowners. Get your free, no-pressure estimate today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'white', color: '#0EA5E9', fontFamily: 'var(--font-display)',
              fontWeight: 700, padding: '14px 28px', borderRadius: '8px',
              textDecoration: 'none', fontSize: '1rem'
            }}>
              🚀 Get Free Quote
            </a>
            <a href="tel:+19722841718" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.15)', color: 'white',
              fontFamily: 'var(--font-display)', fontWeight: 600,
              padding: '14px 28px', borderRadius: '8px', textDecoration: 'none',
              fontSize: '1rem', border: '2px solid rgba(255,255,255,0.4)'
            }}>
              📞 (972) 284-1718
            </a>
          </div>
        </div>

        {/* Footer Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '48px' }}>

          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem'
              }}>🏠</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '0.95rem' }}>Irving's Fence Repair</div>
                <div style={{ fontSize: '0.7rem', color: '#0EA5E9', fontWeight: 600 }}>IRVING, TEXAS</div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#94A3B8', marginBottom: '20px' }}>
              Irving's most trusted fence installation and repair company. Serving Irving, TX and the DFW metroplex since 2010.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="tel:+19722841718" style={{ color: '#0EA5E9', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
                📞 (972) 555-0190
              </a>
              <a href="sms:+19722841718" style={{ color: '#14B8A6', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
                💬 Text for Quick Quote
              </a>
              <a href="mailto:info@irvingsfencerepair.com" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.85rem' }}>
                ✉️ info@irvingsfencerepair.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'white', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Fence Services
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {services.map(s => (
                <li key={s.href}>
                  <Link href={s.href} style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.15s ease' }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = '#0EA5E9'}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = '#94A3B8'}
                  >
                    → {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'white', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Company
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {resources.map(r => (
                <li key={r.href}>
                  <Link href={r.href} style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.15s ease' }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = '#0EA5E9'}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = '#94A3B8'}
                  >
                    → {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'white', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Service Areas
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {areas.map(area => (
                <li key={area} style={{ color: '#94A3B8', fontSize: '0.88rem' }}>
                  📍 {area}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: '20px' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: '4px' }}>Hours</div>
              <div style={{ fontSize: '0.88rem', color: '#94A3B8' }}>Mon–Fri: 7am–6pm</div>
              <div style={{ fontSize: '0.88rem', color: '#94A3B8' }}>Sat: 8am–4pm</div>
              <div style={{ fontSize: '0.88rem', color: '#64748B' }}>Sun: Closed</div>
            </div>
          </div>
        </div>

        {/* HTML Sitemap Section */}
        <div style={{ borderTop: '1px solid #1E293B', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'white', marginBottom: '20px' }}>
            📍 Site Map – Irving's Fence Repair
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '24px' }}>
            <div>
              <h4 style={{ color: '#0EA5E9', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Main Pages</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[['/', 'Home'], ['/about', 'About Us'], ['/contact', 'Contact & Free Quote'], ['/blog', 'Fencing Blog'], ['/resources', 'Resources']].map(([href, label]) => (
                  <li key={href}><Link href={href} style={{ color: '#64748B', textDecoration: 'none', fontSize: '0.85rem' }}>{label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#14B8A6', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Fence Services</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {services.map(s => (
                  <li key={s.href}><Link href={s.href} style={{ color: '#64748B', textDecoration: 'none', fontSize: '0.85rem' }}>{s.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#0EA5E9', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Blog Posts</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[
                  ['/blog/best-fence-for-texas-heat', 'Best Fences for Texas Heat'],
                  ['/blog/privacy-fence-cost-irving', 'Privacy Fence Cost in Irving'],
                  ['/blog/wood-vs-vinyl-fence', 'Wood vs Vinyl Fences'],
                  ['/blog/fence-permit-irving-tx', 'Do I Need a Fence Permit in Irving?'],
                ].map(([href, label]) => (
                  <li key={href}><Link href={href} style={{ color: '#64748B', textDecoration: 'none', fontSize: '0.85rem' }}>{label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#14B8A6', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Legal</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[['/privacy', 'Privacy Policy'], ['/terms', 'Terms of Service'], ['/sitemap.xml', 'XML Sitemap']].map(([href, label]) => (
                  <li key={href}><Link href={href} style={{ color: '#64748B', textDecoration: 'none', fontSize: '0.85rem' }}>{label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #1E293B', paddingTop: '24px', paddingBottom: '32px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '16px'
        }}>
          <p style={{ fontSize: '0.85rem', color: '#475569' }}>
            © {new Date().getFullYear()} Irving's Fence Repair. All rights reserved. | Irving, TX 75062
          </p>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '4px', color: '#F59E0B', fontSize: '0.9rem' }}>★★★★★</div>
            <span style={{ color: '#475569', fontSize: '0.85rem' }}>4.9/5 – 287 Reviews</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
