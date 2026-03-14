import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Fence Blog & Tips | Irving's Fence Repair – Irving TX",
  description:
    'Helpful fencing tips, guides, and local advice for Irving, TX homeowners. Learn about fence materials, permits, costs, and maintenance from your local fence experts.',
}

const posts = [
  {
    slug: 'best-fence-for-texas-heat',
    title: 'The Best Fence Materials for Texas Heat: A Complete Irving Homeowner Guide',
    excerpt: "Irving summers are brutal. Here's how to choose a fence material that won't warp, fade, or fail when temperatures soar past 100°F.",
    date: 'November 12, 2024',
    category: 'Fence Materials',
    readTime: '6 min read',
    img: 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    slug: 'privacy-fence-cost-irving',
    title: 'How Much Does a Privacy Fence Cost in Irving, TX? (2025 Pricing Guide)',
    excerpt: "We break down real privacy fence costs for Irving homeowners — material by material, including what affects the final price and how to budget right.",
    date: 'October 28, 2024',
    category: 'Cost & Budgeting',
    readTime: '8 min read',
    img: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    slug: 'wood-vs-vinyl-fence',
    title: 'Wood vs. Vinyl Fence in Irving: Which One Is Right for Your Home?',
    excerpt: "Two of the most popular fence materials, head to head. We compare cost, longevity, maintenance, and aesthetics for Irving's specific climate and lifestyle.",
    date: 'October 10, 2024',
    category: 'Fence Materials',
    readTime: '7 min read',
    img: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    slug: 'fence-permit-irving-tx',
    title: 'Do You Need a Fence Permit in Irving, TX? Everything You Need to Know',
    excerpt: "Before you install a fence in Irving, read this. We cover permit requirements, the application process, and why letting your contractor handle it is the smart move.",
    date: 'September 18, 2024',
    category: 'Permits & HOA',
    readTime: '5 min read',
    img: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    slug: 'how-long-fence-installation-takes',
    title: 'How Long Does Fence Installation Take? An Irving Homeowner Timeline',
    excerpt: "From quote to completed fence — we walk through every step of an Irving fence installation project so you know exactly what to expect and when.",
    date: 'September 3, 2024',
    category: 'Installation Process',
    readTime: '5 min read',
    img: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    slug: 'fence-maintenance-tips-texas',
    title: '5 Fence Maintenance Tips Every Irving Homeowner Should Know',
    excerpt: "Keep your fence looking great and lasting longer with these simple seasonal maintenance steps designed specifically for North Texas conditions.",
    date: 'August 20, 2024',
    category: 'Maintenance',
    readTime: '4 min read',
    img: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

const categories = ['All', 'Fence Materials', 'Cost & Budgeting', 'Permits & HOA', 'Installation Process', 'Maintenance']

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block', background: 'rgba(14,165,233,0.15)', color: '#7DD3FC',
            padding: '6px 16px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600,
            marginBottom: '16px', border: '1px solid rgba(14,165,233,0.25)'
          }}>
            📖 Fencing Tips & Local Advice
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'white', fontWeight: 800, marginBottom: '16px' }}>
            The Irving Fence Blog
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Helpful guides, tips, and real talk about fencing from your local Irving fence experts.
            No fluff, no filler — just useful information for Irving homeowners.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ background: 'white', borderBottom: '1px solid #E2E8F0', padding: '16px 24px', overflowX: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button key={cat} style={{
              background: cat === 'All' ? 'linear-gradient(135deg, #0EA5E9, #14B8A6)' : '#F1F5F9',
              color: cat === 'All' ? 'white' : '#64748B',
              border: 'none', borderRadius: '100px', padding: '8px 18px',
              fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
              fontFamily: 'var(--font-display)', whiteSpace: 'nowrap'
            }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section style={{ padding: '64px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <article className="card-hover" style={{
                  background: 'white', borderRadius: '16px', overflow: 'hidden',
                  border: '1px solid #E2E8F0', height: '100%', display: 'flex', flexDirection: 'column'
                }}>
                  <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    />
                    <div style={{
                      position: 'absolute', top: '12px', left: '12px',
                      background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)',
                      color: 'white', borderRadius: '100px', padding: '4px 12px',
                      fontSize: '0.75rem', fontWeight: 600
                    }}>
                      {post.category}
                    </div>
                  </div>
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>{post.date}</span>
                      <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>{post.readTime}</span>
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: '#0F172A', marginBottom: '10px', lineHeight: 1.4, fontWeight: 700 }}>
                      {post.title}
                    </h2>
                    <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.7, flex: 1 }}>
                      {post.excerpt}
                    </p>
                    <div style={{ marginTop: '16px', color: '#0EA5E9', fontWeight: 600, fontSize: '0.9rem', fontFamily: 'var(--font-display)' }}>
                      Read Article →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div style={{
            marginTop: '64px', background: 'linear-gradient(135deg, #0F172A, #1E3A5F)',
            borderRadius: '20px', padding: '48px', textAlign: 'center',
            border: '1px solid #1E293B'
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'white', marginBottom: '8px' }}>
              Get Irving Fencing Tips in Your Inbox
            </h3>
            <p style={{ color: '#94A3B8', marginBottom: '24px', fontSize: '0.95rem' }}>
              No spam — just occasional helpful tips for Irving homeowners and local fence deals.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '500px', margin: '0 auto' }}>
              <input
                type="email"
                placeholder="your@email.com"
                className="form-input"
                style={{ flex: '1', minWidth: '220px', background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)', color: 'white' }}
              />
              <button className="btn-primary" style={{ whiteSpace: 'nowrap' }}>Subscribe Free</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
