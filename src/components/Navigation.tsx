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
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          backgroundColor: scrolled ? 'rgba(248, 250, 252, 0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(226, 232, 240, 0.8)' : 'none',
          boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '38px', height: '38px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem'
              }}>🏠</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: '#0F172A', lineHeight: 1.2 }}>
                  Irving's Fence Repair
                </div>
                <div style={{ fontSize: '0.7rem', color: '#0EA5E9', fontWeight: 600, letterSpacing: '0.5px' }}>
                  IRVING, TEXAS
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <div style={{ position: 'relative' }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="nav-link" style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '4px',
                  fontFamily: 'var(--font-sans)', padding: 0
                }}>
                  Services <span style={{ fontSize: '0.7rem' }}>▾</span>
                </button>
                {servicesOpen && (
                  <div style={{
                    position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                    backgroundColor: 'white', borderRadius: '12px', padding: '8px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)', minWidth: '220px',
                    border: '1px solid #E2E8F0', marginTop: '8px',
                    animation: 'fadeIn 0.15s ease-out'
                  }}>
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} style={{
                        display: 'block', padding: '10px 16px', color: '#475569',
                        textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
                        borderRadius: '8px', transition: 'all 0.15s ease'
                      }}
                        onMouseEnter={e => {
                          (e.target as HTMLElement).style.backgroundColor = '#F0F9FF'
                          ;(e.target as HTMLElement).style.color = '#0EA5E9'
                        }}
                        onMouseLeave={e => {
                          (e.target as HTMLElement).style.backgroundColor = 'transparent'
                          ;(e.target as HTMLElement).style.color = '#475569'
                        }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/blog" className="nav-link">Blog</Link>
              <Link href="/resources" className="nav-link">Resources</Link>
              <Link href="/contact" className="nav-link">Contact</Link>
            </div>

            {/* CTA Buttons */}
            <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a href="tel:+19725550190" style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                color: '#0EA5E9', textDecoration: 'none', fontWeight: 600,
                fontSize: '0.9rem', fontFamily: 'var(--font-display)'
              }}>
                📞 (972) 555-0190
              </a>
              <a href="/contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
                Free Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '1.5rem', padding: '4px', color: '#0F172A'
              }}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            backgroundColor: 'white', borderTop: '1px solid #E2E8F0',
            padding: '16px 24px 24px', animation: 'fadeIn 0.2s ease-out'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Link href="/" onClick={() => setMobileOpen(false)} style={{ padding: '12px', color: '#0F172A', textDecoration: 'none', fontWeight: 600, borderRadius: '8px' }}>Home</Link>
              {services.map(s => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} style={{ padding: '10px 12px 10px 24px', color: '#475569', textDecoration: 'none', fontSize: '0.9rem' }}>
                  {s.label}
                </Link>
              ))}
              <Link href="/about" onClick={() => setMobileOpen(false)} style={{ padding: '12px', color: '#0F172A', textDecoration: 'none', fontWeight: 600, borderRadius: '8px' }}>About</Link>
              <Link href="/blog" onClick={() => setMobileOpen(false)} style={{ padding: '12px', color: '#0F172A', textDecoration: 'none', fontWeight: 600, borderRadius: '8px' }}>Blog</Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} style={{ padding: '12px', color: '#0F172A', textDecoration: 'none', fontWeight: 600, borderRadius: '8px' }}>Contact</Link>
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="tel:+19725550190" className="btn-secondary" style={{ justifyContent: 'center' }}>📞 Call (972) 555-0190</a>
                <a href="/contact" className="btn-primary" style={{ justifyContent: 'center' }}>Get Free Quote</a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed nav */}
      <div style={{ height: '70px' }} />
    </>
  )
}
