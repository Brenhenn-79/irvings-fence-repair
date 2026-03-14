'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const services = [
  { href: '/services/privacy-fences', label: 'Privacy Fences' },
  { href: '/services/wood-fences', label: 'Wood Fences' },
  { href: '/services/vinyl-fences', label: 'Vinyl Fences' },
  { href: '/services/chain-link', label: 'Chain Link Fences' },
  { href: '/services/fence-repair', label: 'Fence Repair' },
  { href: '/services/custom-gates', label: 'Custom Gates' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: 'rgba(248, 250, 252, 0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '65px' }}>

            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <div style={{
                width: '34px', height: '34px', borderRadius: '8px',
                background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', flexShrink: 0
              }}>🏠</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: '#0F172A', lineHeight: 1.2 }}>
                  Irving's Fence Repair
                </div>
                <div style={{ fontSize: '0.62rem', color: '#0EA5E9', fontWeight: 600, letterSpacing: '0.5px' }}>
                  IRVING, TEXAS
                </div>
              </div>
            </Link>

            <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ position: 'relative' }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '4px',
                  fontFamily: 'var(--font-sans)', padding: 0,
                  color: '#475569', fontSize: '0.9rem', fontWeight: 500
                }}>
                  Services <span style={{ fontSize: '0.7rem' }}>▾</span>
                </button>
                {servicesOpen && (
                  <div style={{
                    position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                    backgroundColor: 'white', borderRadius: '12px', padding: '8px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)', minWidth: '220px',
                    border: '1px solid #E2E8F0', marginTop: '8px',
                  }}>
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} style={{
                        display: 'block', padding: '10px 16px', color: '#475569',
                        textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
                        borderRadius: '8px',
                      }}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/about" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>About</Link>
              <Link href="/blog" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Blog</Link>
              <Link href="/resources" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Resources</Link>
              <Link href="/contact" style={{ color: '#475569', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Contact</Link>
            </div>

            <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a href="tel:+19722841718" style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                color: '#0EA5E9', textDecoration: 'none', fontWeight: 600,
                fontSize: '0.9rem', fontFamily: 'var(--font-display)'
              }}>
                📞 (972) 284-1718
              </a>
              <a href="/contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
                Free Quote
              </a>
            </div>

            <div className="mobile-only" style={{ display: 'none', alignItems: 'center', gap: '12px' }}>
              <a href="tel:+19722841718" style={{
                color: '#0EA5E9', textDecoration: 'none', fontWeight: 700,
                fontSize: '0.85rem', fontFamily: 'var(--font-display)'
              }}>
                📞 Call
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  background: 'none', border: '1px solid #E2E8F0', cursor: 'pointer',
                  fontSize: '1.2rem', padding: '6px 10px', color: '#0F172A',
                  borderRadius: '8px', lineHeight: 1
                }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? '✕' : '☰'}
              </button>
            </div>
          </nav>
        </div>

        {mobileOpen && (
          <div style={{
            backgroundColor: 'white', borderTop: '1px solid #E2E8F0',
            padding: '16px', maxHeight: '80vh', overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Link href="/" onClick={() => setMobileOpen(false)} style={{
                padding: '14px 16px', color: '#0F172A', textDecoration: 'none',
                fontWeight: 700, borderRadius: '10px', background: '#F8FAFC',
                fontFamily: 'var(--font-display)', fontSize: '1rem',
                display: 'flex', alignItems: 'center', gap: '8px'
              }}>
                🏠 Home
              </Link>

              <div style={{ padding: '10px 16px 4px', fontSize: '0.75rem', fontWeight: 700, color: '#0EA5E9', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Services
              </div>
              {services.map(s => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} style={{
                  padding: '12px 16px 12px 28px', color: '#475569',
                  textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500,
                  borderRadius: '8px', display: 'block'
                }}>
                  → {s.label}
                </Link>
              ))}

              <div style={{ height: '1px', background: '#F1F5F9', margin: '8px 0' }} />

              {[
                { href: '/about', label: '👥 About Us' },
                { href: '/blog', label: '📖 Blog & Tips' },
                { href: '/resources', label: '📚 Fence Buying Guide' },
                { href: '/contact', label: '✉️ Contact Us' },
              ].map(item => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} style={{
                  padding: '14px 16px', color: '#0F172A', textDecoration: 'none',
                  fontWeight: 600, borderRadius: '10px', fontSize: '0.95rem', display: 'block'
                }}>
                  {item.label}
                </Link>
              ))}

              <div style={{ height: '1px', background: '#F1F5F9', margin: '8px 0' }} />

              <a href="tel:+19722841718" className="btn-primary" style={{ textAlign: 'center', display: 'block', marginBottom: '8px', fontSize: '1rem', padding: '16px' }}>
                📞 Call (972) 284-1718
              </a>
              <a href="sms:+19722841718" style={{
                display: 'block', textAlign: 'center',
                background: '#F0F9FF', color: '#0EA5E9', fontWeight: 600,
                padding: '14px', borderRadius: '8px', textDecoration: 'none',
                fontFamily: 'var(--font-display)', fontSize: '0.95rem',
                border: '1px solid #BAE6FD'
              }}>
                💬 Text for Quick Quote
              </a>
            </div>
          </div>
        )}
      </header>

      <div style={{ height: '65px' }} />

      <style>{`
        @media (min-width: 769px) {
          .desktop-only { display: flex !important; }
          .mobile-only { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}</style>
    </>
  )
}