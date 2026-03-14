import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "About Irving's Fence Repair | Local Irving TX Fence Contractors Since 2010",
  description:
    "Meet the team behind Irving's Fence Repair. Family-owned fence company serving Irving, TX since 2010. Licensed, insured, 287+ 5-star reviews. Learn our story.",
}

const team = [
  {
    name: 'Carlos M.',
    role: 'Founder & Master Fence Builder',
    bio: "Born and raised in Irving. Started building fences right out of high school and never looked back. Carlos has personally overseen 1,000+ fence installations across the DFW area.",
    emoji: '👷',
  },
  {
    name: 'Miguel R.',
    role: 'Lead Installer – 12 Years Experience',
    bio: "Miguel is our go-to for complex installations — large properties, steep grades, and custom gate builds. The team jokes he can install a fence in his sleep.",
    emoji: '🔨',
  },
  {
    name: 'Jessica T.',
    role: 'Customer Experience Manager',
    bio: "Jessica makes sure every Irving homeowner has a smooth, stress-free experience from first quote to final walk-through. She's also the one who handles HOA correspondence.",
    emoji: '⭐',
  },
]

const milestones = [
  { year: '2010', event: 'Founded in Irving, TX with just a truck and a mission to build quality fences.' },
  { year: '2013', event: 'Reached our 100th satisfied Irving customer. Word of mouth started taking off.' },
  { year: '2016', event: 'Expanded crew and added vinyl fence installation and custom gate services.' },
  { year: '2019', event: 'Hit 4.9-star average rating across Google, Yelp, and Nextdoor. Still climbing.' },
  { year: '2022', event: 'Celebrated 500+ Irving homes fenced and 15 full-time team members.' },
  { year: '2024', event: 'Launched our storm damage rapid-response program for Irving homeowners.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A, #1E3A5F)',
        padding: '80px 24px 64px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              background: 'rgba(14,165,233,0.15)', color: '#7DD3FC',
              padding: '6px 16px', borderRadius: '100px', fontSize: '0.85rem',
              fontWeight: 600, marginBottom: '20px', border: '1px solid rgba(14,165,233,0.25)'
            }}>
              🏠 Locally Owned & Operated Since 2010
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', fontWeight: 800, marginBottom: '20px', lineHeight: 1.1 }}>
              We're Your Neighbors — and We Build Fences Like It
            </h1>
            <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px' }}>
              Irving's Fence Repair was founded right here in Irving, Texas by people who live in this community, raise families here, and genuinely care about doing great work for their neighbors. We're not a franchise, not a national chain. We're local — and that makes all the difference.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
              <a href="tel:+19722841718" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', background: 'transparent' }}>
                📞 (972) 555-0190
              </a>
            </div>
          </div>
          <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,0,0,0.3)' }}>
            <Image
              src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Irving's Fence Repair crew installing a fence in Irving Texas"
              width={600} height={400}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'white', padding: '48px 24px', borderBottom: '1px solid #F1F5F9' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '32px', textAlign: 'center' }}>
          {[
            { n: '15+', l: 'Years in Irving' },
            { n: '500+', l: 'Homes Fenced' },
            { n: '287+', l: 'Five-Star Reviews' },
            { n: '4.9★', l: 'Average Rating' },
          ].map(s => (
            <div key={s.l}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 800, background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.n}</div>
              <div style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '4px' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '80px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #0EA5E9, #14B8A6)', borderRadius: '2px', marginBottom: '16px' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0F172A', marginBottom: '24px' }}>
            Our Story: From One Truck in Irving to the City's Most Trusted Fence Company
          </h2>
          <div style={{ color: '#475569', lineHeight: 1.9, fontSize: '1rem' }}>
            <p style={{ marginBottom: '16px' }}>
              It started in 2010 with a single pickup truck, a quality nail gun, and a straightforward promise: build every fence like you're building it for your own family. Our founder Carlos grew up in Irving and learned the trade from the ground up — literally — starting as a laborer at 18 and spending years mastering every aspect of fence construction before starting Irving's Fence Repair.
            </p>
            <p style={{ marginBottom: '16px' }}>
              In those early years, we built our reputation one backyard at a time. Word spread through Irving neighborhoods — Las Colinas, Valley Ranch, North Irving, Hackberry Creek — that this was the crew who showed up when they said they would, did exactly what they quoted, and stood behind their work.
            </p>
            <p style={{ marginBottom: '16px' }}>
              Today, we're proud to be the fence company that Irving homeowners call first, recommend to their neighbors, and trust to get it right. We've grown to a full crew of experienced fence installers and craftsmen, but our values haven't changed: treat every property with respect, price every job fairly, and never cut corners.
            </p>
            <p style={{ marginBottom: '16px' }}>
              We know Irving inside and out. We know the HOA requirements for most neighborhoods. We know the soil conditions that affect post stability. We know which fence materials hold up best against DFW's intense summer heat and occasional winter ice storms. That local knowledge is something you can't get from a national franchise — and it's something every one of our customers benefits from.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0F172A', marginBottom: '40px', textAlign: 'center' }}>
            Our Journey in Irving, TX
          </h2>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(180deg, #0EA5E9, #14B8A6)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {milestones.map((m) => (
                <div key={m.year} style={{ display: 'flex', gap: '24px', paddingLeft: '56px', position: 'relative' }}>
                  <div style={{
                    position: 'absolute', left: '10px', top: '4px',
                    width: '22px', height: '22px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)',
                    border: '3px solid white', boxShadow: '0 0 0 2px #0EA5E9'
                  }} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#0EA5E9', fontSize: '0.9rem', marginBottom: '4px' }}>{m.year}</div>
                    <div style={{ color: '#475569', lineHeight: 1.7, fontSize: '0.95rem' }}>{m.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '80px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0F172A', marginBottom: '12px' }}>
              The Team Behind Your Irving Fence
            </h2>
            <p style={{ color: '#64748B', maxWidth: '500px', margin: '0 auto' }}>Real people. Real craftsmen. Your neighbors.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {team.map(member => (
              <div key={member.name} style={{
                background: 'white', borderRadius: '16px', padding: '32px',
                border: '1px solid #E2E8F0', textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}>
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2rem', margin: '0 auto 16px'
                }}>
                  {member.emoji}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#0F172A', marginBottom: '4px' }}>{member.name}</h3>
                <div style={{ color: '#0EA5E9', fontSize: '0.85rem', fontWeight: 600, marginBottom: '12px' }}>{member.role}</div>
                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.7 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'white', marginBottom: '16px' }}>
            Ready to Work with Irving's Best Fence Team?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '28px', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Let's talk about your Irving fencing project. We'll come out, take a look, and give you an honest, detailed quote with zero pressure.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'white', color: '#0EA5E9', fontFamily: 'var(--font-display)',
              fontWeight: 700, padding: '16px 32px', borderRadius: '8px', textDecoration: 'none'
            }}>
              🚀 Get Free Quote
            </Link>
            <a href="tel:+19725550190" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.15)', color: 'white',
              fontFamily: 'var(--font-display)', fontWeight: 600,
              padding: '15px 28px', borderRadius: '8px', textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.4)'
            }}>
              📞 (972) 555-0190
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
