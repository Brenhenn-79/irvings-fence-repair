import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: "Irving's Fence Repair | Premier Fence Installation & Custom Fencing in Irving, Texas",
  description:
    "Irving's Fence Repair is the #1 fence company in Irving, TX. Wood fences, vinyl fences, chain link, privacy fences & custom gates. 287+ 5-star reviews. Get your FREE estimate today!",
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does fence installation cost in Irving, TX?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fence installation in Irving, TX typically ranges from $18–$45 per linear foot depending on material and style. Wood privacy fences average $25–$35/LF, vinyl fences $30–$45/LF, and chain link $18–$28/LF. We provide free, accurate quotes for every project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a permit for a fence in Irving, Texas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Irving requires a permit for most fences over 4 feet tall. As your local Irving fence contractor, we handle all permit applications on your behalf at no extra charge – it's part of our full-service experience.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best fence material for the Texas heat and climate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the hot Irving, TX climate, vinyl and cedar wood are the most popular choices. Vinyl never warps, fades, or needs painting and handles Texas summers beautifully. Cedar is naturally rot and insect resistant. We also offer steel and aluminum for maximum longevity.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does fence installation take in Irving TX?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most residential fence installations in Irving take 1–3 days depending on the linear footage and material. We'll give you a precise timeline in your free quote, and we rarely run over schedule.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer fence repair or only full installation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely! Fence repair is one of our most popular services in Irving. Whether it's a few broken boards, a leaning fence, storm damage, or gate issues, we fix it right the first time – often same week.",
      },
    },
  ],
}

const services = [
  {
    icon: '🏡',
    title: 'Privacy Fences Irving',
    desc: "Keep your backyard your sanctuary. Our 6–8 ft cedar and vinyl privacy fences block out neighbors, street noise, and that one guy who never stops staring.",
    href: '/services/privacy-fences',
    img: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: '🌲',
    title: 'Wood Fences Irving TX',
    desc: 'Nothing beats the warmth and character of a beautiful cedar wood fence. We build them to last Texas summers – tight, level, and gorgeous.',
    href: '/services/wood-fences',
    img: 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: '⚡',
    title: 'Vinyl Fences Irving TX',
    desc: "Zero maintenance, maximum curb appeal. Vinyl fences never rot, warp, or need painting – perfect for Irving's hot summers.",
    href: '/services/vinyl-fences',
    img: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: '🔗',
    title: 'Chain Link Fences Irving',
    desc: "Affordable, durable, and low-maintenance. Chain link fences are ideal for keeping pets in, defining property lines, and securing commercial spaces.",
    href: '/services/chain-link',
    img: 'https://images.pexels.com/photos/1084491/pexels-photo-1084491.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: '🔧',
    title: 'Fence Repair Irving TX',
    desc: 'Got a leaning post, broken boards, or storm damage? We fix it fast, right, and at a price that won\'t make you wince.',
    href: '/services/fence-repair',
    img: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: '🚪',
    title: 'Custom Gates Irving TX',
    desc: 'Complete the look with a custom driveway or pedestrian gate. Manual or automatic, wood or iron – we build gates that make a statement.',
    href: '/services/custom-gates',
    img: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

const reviews = [
  {
    name: 'Maria T.',
    location: 'Las Colinas, Irving',
    stars: 5,
    text: "Irving's Fence Repair was incredible from start to finish. They installed our cedar privacy fence in just 2 days – straight, solid, and exactly what we envisioned. Our backyard finally feels like ours!",
    service: 'Cedar Privacy Fence',
  },
  {
    name: 'James R.',
    location: 'Valley Ranch, Irving',
    stars: 5,
    text: "After getting 4 quotes, Irving's Fence Repair beat everyone on price AND quality. The crew was on time, cleaned up everything, and the vinyl fence looks absolutely perfect. Couldn't be happier.",
    service: 'Vinyl Fence Installation',
  },
  {
    name: 'Sarah K.',
    location: 'North Irving, TX',
    stars: 5,
    text: "Called them on a Tuesday about fence damage from that last storm. They came Thursday, assessed it, and fixed three panels plus a sagging gate the same day. Responsive, professional, and reasonably priced.",
    service: 'Storm Damage Fence Repair',
  },
]

const whyUs = [
  { icon: '⭐', title: '287+ Five-Star Reviews', desc: "We've earned our reputation one satisfied Irving homeowner at a time." },
  { icon: '📋', title: 'Permits Handled Free', desc: 'We manage all Irving fence permits so you never have to deal with the city yourself.' },
  { icon: '🛡️', title: '5-Year Workmanship Warranty', desc: "If something fails due to our installation, we fix it. Period. That's our promise to you." },
  { icon: '💰', title: 'Upfront Pricing. No Surprises.', desc: 'Your quote is your price. We never sneak in hidden fees after the job starts.' },
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Most Irving projects start within a week of your quote. We know you\'re eager to enjoy your new fence.' },
  { icon: '📍', title: 'Local Irving Experts', desc: "We live and work in Irving. We know HOA rules, neighbor regulations, and local soil conditions." },
]

const stats = [
  { number: '500+', label: 'Irving Homes Fenced' },
  { number: '4.9★', label: 'Average Review Rating' },
  { number: '15+', label: 'Years in Business' },
  { number: '48hr', label: 'Average Quote Turnaround' },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://irvingsfencerepair.com' }],
          }),
        }}
      />

      {/* ==================== HERO SECTION ==================== */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: 'calc(100vh - 70px)', display: 'flex', alignItems: 'center' }}>
        {/* Background Image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Beautiful privacy fence installation in Irving Texas backyard"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(15,23,42,0.82) 0%, rgba(14,165,233,0.25) 100%)'
          }} />
        </div>

        {/* Hero Content */}
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '80px 24px', width: '100%' }}>
          <div style={{ maxWidth: '680px' }}>
            <div className="badge animate-fade-in" style={{ background: 'rgba(14,165,233,0.2)', color: '#7DD3FC', border: '1px solid rgba(14,165,233,0.3)', marginBottom: '24px' }}>
              ⭐ #1 Rated Fence Company in Irving, TX – 287+ Reviews
            </div>

            <h1 className="animate-fade-up" style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'white', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px'
            }}>
              Premier Fence Installation &amp;{' '}
              <span style={{ background: 'linear-gradient(90deg, #0EA5E9, #14B8A6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Custom Fencing
              </span>{' '}
              in Irving, Texas
            </h1>

            <p className="animate-fade-up delay-100" style={{
              fontSize: '1.2rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.7, marginBottom: '32px'
            }}>
              Beautiful, durable fences installed by Irving's most trusted fence contractor.
              Wood, vinyl, chain link, privacy fences &amp; custom gates — done right, on time, and on budget.
            </p>

            <div className="animate-fade-up delay-200" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#quote-form" className="btn-primary btn-pulse" style={{ fontSize: '1.05rem', padding: '16px 32px' }}>
                🚀 Get Your Free Irving Fence Quote Today
              </a>
              <a href="tel:+19725550190" className="btn-secondary" style={{
                background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.4)', color: 'white', padding: '15px 28px'
              }}>
                📞 Call (972) 284-1718
              </a>
            </div>

            {/* Trust indicators */}
            <div className="animate-fade-up delay-300" style={{ display: 'flex', gap: '24px', marginTop: '32px', flexWrap: 'wrap' }}>
              {['✅ Free Estimates', '✅ Licensed & Insured', '✅ 5-Year Warranty', '✅ Permits Handled'].map(item => (
                <span key={item} style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', fontWeight: 500 }}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Floating quote form */}
        <div className="hero-float-form animate-fade-in delay-400"
          id="quote-form"
          style={{
            position: 'absolute', right: '24px', top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)',
            borderRadius: '20px', padding: '32px', width: '360px',
            boxShadow: '0 24px 48px rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.9)',
            zIndex: 2
          }}
        >
          <ContactForm
            compact
            title="Get Your Free Quote"
            subtitle="Most homeowners get a response in under 2 hours!"
          />
        </div>
      </section>

      {/* Mobile CTA strip */}
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E293B)', padding: '20px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="tel:+19725550190" className="btn-primary" style={{ padding: '12px 24px' }}>📞 Call Now</a>
          <a href="sms:+19725550190" className="btn-secondary" style={{ padding: '11px 24px', background: 'transparent', borderColor: '#0EA5E9', color: '#0EA5E9' }}>💬 Text for Quote</a>
          <a href="/contact" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.9rem' }}>Or fill out our form →</a>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section style={{ background: 'white', padding: '48px 24px', borderBottom: '1px solid #F1F5F9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '32px' }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 800, background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {stat.number}
              </div>
              <div style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '4px', fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== INTRO / ABOUT SECTION ==================== */}
      <section style={{ padding: '80px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div>
              <div className="section-divider" />
              <div className="badge" style={{ marginBottom: '16px' }}>Your Local Irving Fence Experts</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0F172A', marginBottom: '20px', lineHeight: 1.2 }}>
                Why Irving Homeowners Choose Us for Their Fencing Needs
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '16px', fontSize: '1rem' }}>
                Let's be real — living in Irving means dealing with brutal Texas summers, occasional heavy storms, and the very relatable desire to actually enjoy your backyard without feeling like you're on display. That's where we come in.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '16px', fontSize: '1rem' }}>
                We're <strong>Irving's Fence Repair</strong> — your neighbors, your local fence experts, and the company that's been transforming Irving properties since 2010. We've installed fences from Las Colinas to Valley Ranch, from North Irving to the neighborhoods surrounding DFW Airport. We know this city, its HOA rules, its soil conditions, and exactly what makes a fence last through Texas weather.
              </p>
              <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '24px', fontSize: '1rem' }}>
                Whether you want a beautiful cedar privacy fence for your backyard oasis, a sleek vinyl fence that never needs painting, a budget-friendly chain link to keep the dog in, or just need to get that storm-damaged section fixed ASAP — we do it all, and we do it well.
              </p>
              <a href="/about" className="btn-primary">
                Learn About Our Story →
              </a>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,0,0,0.12)' }}>
                <Image
                  src="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional wood fence installation Irving Texas"
                  width={600} height={450}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div style={{
                position: 'absolute', bottom: '-20px', left: '-20px',
                background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)',
                borderRadius: '16px', padding: '20px 24px', color: 'white',
                boxShadow: '0 8px 24px rgba(14,165,233,0.4)'
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800 }}>500+</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 500, opacity: 0.9 }}>Irving homes fenced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-divider" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0F172A', marginBottom: '16px' }}>
              Our Popular Fence Services in Irving, TX
            </h2>
            <p style={{ color: '#64748B', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
              From classic cedar wood to low-maintenance vinyl, we install and repair every type of residential and commercial fence in Irving and the greater DFW area.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {services.map((service) => (
              <Link key={service.href} href={service.href} style={{ textDecoration: 'none' }}>
                <div className="card-hover" style={{
                  borderRadius: '16px', overflow: 'hidden', background: '#F8FAFC',
                  border: '1px solid #E2E8F0', height: '100%'
                }}>
                  <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <Image
                      src={service.img}
                      alt={`${service.title} – Irving Texas fence company`}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{service.icon}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: '#0F172A', marginBottom: '10px' }}>
                      {service.title}
                    </h3>
                    <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '16px' }}>
                      {service.desc}
                    </p>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      color: '#0EA5E9', fontWeight: 600, fontSize: '0.9rem',
                      fontFamily: 'var(--font-display)'
                    }}>
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a href="/contact" className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 40px' }}>
              Get a Free Estimate for Any Fence Service
            </a>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section style={{ padding: '80px 24px', background: 'linear-gradient(180deg, #F8FAFC 0%, #F0F9FF 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-divider" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0F172A', marginBottom: '16px' }}>
              What Makes Irving's Fence Repair Different?
            </h2>
            <p style={{ color: '#64748B', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7, fontSize: '1.05rem' }}>
              Plenty of companies can hammer in posts. We do something different — we treat your property like it's our own, and we back that up with real guarantees.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {whyUs.map((item) => (
              <div key={item.title} className="card-hover" style={{
                background: 'white', borderRadius: '16px', padding: '28px',
                border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '14px' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#0F172A', marginBottom: '10px', fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHAT TO EXPECT ==================== */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }}>
                <Image
                  src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fence installation crew working in Irving Texas"
                  width={600} height={450}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
            <div>
              <div className="section-divider" />
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0F172A', marginBottom: '24px', lineHeight: 1.2 }}>
                What to Expect from Your Irving Fence Project
              </h2>
              <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: '16px' }}>
                We know getting any home improvement project done can feel like a gamble. Will they show up on time? Will the price match the quote? Will the work actually look good? We get it — and we've built our entire process around eliminating those worries.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { step: '01', title: 'Free On-Site Estimate', desc: "We come to your Irving property, take measurements, discuss your vision, and give you a detailed written quote — no guesswork, no pressure." },
                  { step: '02', title: 'We Handle the Paperwork', desc: "Need an Irving fence permit? We file it. HOA approval needed? We know the process. You just sit back and wait for installation day." },
                  { step: '03', title: 'Fast, Professional Installation', desc: "Our crew arrives on time, respects your property, and builds your fence to last. Most Irving residential projects wrap up in 1–3 days." },
                  { step: '04', title: 'Final Walk-Through & Warranty', desc: "We walk every inch of your new fence with you before we call it done. Then you get our 5-year workmanship warranty in writing." },
                ].map((item) => (
                  <div key={item.step} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      minWidth: '40px', height: '40px', borderRadius: '10px',
                      background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-display)', fontWeight: 800, color: 'white', fontSize: '0.8rem'
                    }}>
                      {item.step}
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#0F172A', marginBottom: '4px', fontWeight: 700 }}>
                        {item.title}
                      </h3>
                      <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== LONG-FORM SEO CONTENT SECTION ==================== */}
      <section style={{ padding: '80px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="section-divider" />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: '#0F172A', marginBottom: '24px' }}>
            Irving's Best Fence Company: Our Commitment to This Community
          </h2>
          <div style={{ color: '#475569', lineHeight: 1.9, fontSize: '1rem' }}>
            <p style={{ marginBottom: '20px' }}>
              Here's the honest truth about fence installation in Irving, TX: not all fence companies are created equal. Some show up with a low quote, rush the job, and disappear when problems arise. We've had plenty of customers come to us after exactly that experience — and we've spent 15 years being the opposite of that.
            </p>
            <p style={{ marginBottom: '20px' }}>
              When Irving homeowners search for a <strong>"fence installation Irving TX"</strong> or <strong>"fence contractor Irving TX"</strong> they deserve to find a company that actually cares about the result. That's not marketing fluff — it's something we've built our reputation on, one backyard at a time.
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#0F172A', margin: '32px 0 16px' }}>
              The Right Fence Material for Irving's Climate
            </h3>
            <p style={{ marginBottom: '20px' }}>
              Irving's weather is no joke. We're talking about summers that push into the triple digits, occasional ice storms in January, and those spring storms that can knock a poorly-installed fence flat overnight. Choosing the right fence material isn't just about looks — it's about making sure your investment lasts.
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>Cedar wood fences</strong> are a perennial Irving favorite. Cedar is naturally resistant to rot and insects — which matters a lot in a Texas climate. A well-built cedar privacy fence, properly sealed and maintained, can last 15–20 years. It's also beautiful, with a warm natural aesthetic that vinyl can't quite replicate.
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>Vinyl fences</strong>, on the other hand, are the zero-maintenance dream. No painting, no staining, no rot, no insects — just wipe it clean and enjoy it. For busy families in Irving who don't want another weekend chore, vinyl is an increasingly popular choice. Modern vinyl comes in styles that genuinely look great, from classic white privacy panels to more contemporary board-on-board designs.
            </p>
            <p style={{ marginBottom: '20px' }}>
              And don't count out <strong>chain link fences</strong> for practical applications — they're budget-friendly, virtually maintenance-free, and perfect for keeping pets contained, securing side yards, or defining property lines without blocking airflow.
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#0F172A', margin: '32px 0 16px' }}>
              Irving Fence Permit Requirements: What You Should Know
            </h3>
            <p style={{ marginBottom: '20px' }}>
              Here's a question we get a lot: "Do I need a permit for a fence in Irving, TX?" Short answer: usually yes, if your fence is more than 4 feet tall (which most privacy and yard fences are). The City of Irving requires a permit for most new fence installations and significant repairs. The permit process involves submitting a site plan, getting approval from the city, and scheduling an inspection.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Sound like a headache? It can be — which is exactly why we handle all permitting for every Irving fence installation we do. It's included in your project, free of charge. We know the city's requirements inside and out, and we've never had a permit rejected. Just one more thing you don't have to worry about.
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#0F172A', margin: '32px 0 16px' }}>
              Custom Gates: Because Your Fence Deserves a Great Entrance
            </h3>
            <p style={{ marginBottom: '20px' }}>
              A beautiful fence deserves an equally beautiful gate. Whether you need a simple pedestrian gate to match your wood privacy fence, a grand double driveway gate for your property, or an automatic gate with keypad entry — we design and build custom gates that complement your fence and add serious curb appeal.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Many of our <strong>custom gate Irving</strong> projects involve upgrading an existing fence with a new gate. Maybe your old gate is sagging, latching poorly, or just doesn't match the aesthetic you're going for anymore. We can build a brand new gate — wood, iron, aluminum, or vinyl — that fits perfectly and functions flawlessly.
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#0F172A', margin: '32px 0 16px' }}>
              Fast Fence Repair in Irving When You Need It Most
            </h3>
            <p style={{ marginBottom: '20px' }}>
              Storms happen. Posts rot. Kids run into things. Whatever caused your fence damage, our <strong>fence repair Irving Texas</strong> team moves fast. We offer the same week repair scheduling for most fence issues, and we always start with an honest assessment — if repair is the right call, we repair it. If replacement makes more financial sense, we'll tell you that honestly too.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Common fence repairs we handle throughout Irving: broken or rotted boards, leaning or damaged posts, sagging or misaligned gates, storm damage, graffiti cleanup, and section replacements to match your existing fence style.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== REVIEWS ==================== */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-divider" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0F172A', marginBottom: '12px' }}>
              What Irving Homeowners Are Saying
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', color: '#F59E0B', fontSize: '1.3rem', marginBottom: '8px' }}>
              ★★★★★
            </div>
            <p style={{ color: '#64748B', fontSize: '0.95rem' }}>4.9 out of 5 stars — 287 verified reviews across Google, Yelp &amp; Nextdoor</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {reviews.map((review) => (
              <div key={review.name} className="card-hover" style={{
                background: '#F8FAFC', borderRadius: '16px', padding: '28px',
                border: '1px solid #E2E8F0'
              }}>
                <div style={{ display: 'flex', gap: '4px', color: '#F59E0B', marginBottom: '16px', fontSize: '1rem' }}>
                  ★★★★★
                </div>
                <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '20px', fontStyle: 'italic' }}>
                  &ldquo;{review.text}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0EA5E9, #14B8A6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 700, fontFamily: 'var(--font-display)'
                  }}>
                    {review.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>{review.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748B' }}>{review.location}</div>
                    <div style={{ fontSize: '0.75rem', color: '#0EA5E9', marginTop: '2px' }}>{review.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="https://g.page/irvings-fence-repair/review" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Read All 287 Reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ==================== PHOTO GALLERY ==================== */}
      <section style={{ padding: '80px 24px', background: '#F0F9FF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-divider" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0F172A', marginBottom: '12px' }}>
              Recent Irving Fence Projects
            </h2>
            <p style={{ color: '#64748B' }}>Real work, real results — right here in Irving, TX</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              { src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Cedar privacy fence Irving TX backyard' },
              { src: 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Wood fence installation Irving Texas home' },
              { src: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'White vinyl fence residential Irving TX' },
              { src: 'https://images.pexels.com/photos/1084491/pexels-photo-1084491.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Chain link fence yard Irving Texas' },
              { src: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Custom gate Irving TX fence company' },
              { src: 'https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Beautiful backyard fence Irving suburban home' },
            ].map((img) => (
              <div key={img.src} className="card-hover img-overlay" style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-divider" style={{ margin: '0 auto 16px' }} />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0F172A', marginBottom: '12px' }}>
              Frequently Asked Questions About Irving Fence Installation
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                q: 'How much does fence installation cost in Irving, TX?',
                a: "Fence installation in Irving typically runs $18–$45 per linear foot depending on material and style. Wood privacy fences average $25–$35/LF, vinyl $30–$45/LF, and chain link $18–$28/LF. The only way to know your exact price is with a free on-site quote — and we're happy to come take a look!",
              },
              {
                q: 'Do I need a permit for a fence in Irving, Texas?',
                a: "Yes — Irving requires a permit for most fences over 4 feet tall. But here's the good news: we handle all permit applications on your behalf at no extra charge. It's part of our full-service experience, and we know the city's requirements inside and out.",
              },
              {
                q: 'What is the best fence material for Irving\'s Texas climate?',
                a: "For the hot Irving climate, vinyl and cedar are the most popular choices. Vinyl never warps or needs painting. Cedar is naturally rot-resistant and beautiful. We help you pick the right material for your budget, aesthetic, and HOA requirements.",
              },
              {
                q: 'How quickly can you start my Irving fence project?',
                a: "After your free quote is approved, most Irving residential projects start within 5–10 business days. Emergency fence repairs can often be scheduled within 48 hours. We'll give you an exact timeline in your estimate.",
              },
              {
                q: 'Do you offer fence repair or just full replacement?',
                a: "Both! Fence repair is actually one of our most popular services. Whether you have a few broken boards, a leaning post, gate issues, or storm damage — we repair it right the first time, often for a fraction of replacement cost.",
              },
            ].map((faq, i) => (
              <details key={i} style={{
                background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0',
                overflow: 'hidden'
              }}>
                <summary style={{
                  padding: '20px 24px', cursor: 'pointer', fontFamily: 'var(--font-display)',
                  fontWeight: 600, fontSize: '1rem', color: '#0F172A',
                  listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                  {faq.q}
                  <span style={{ color: '#0EA5E9', fontSize: '1.2rem', minWidth: '20px', textAlign: 'right' }}>+</span>
                </summary>
                <div style={{ padding: '0 24px 20px', color: '#475569', lineHeight: 1.8, fontSize: '0.95rem' }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/resources" style={{ color: '#0EA5E9', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
              Read Our Full Irving Fence Buying Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== SERVICE AREAS ==================== */}
      <section style={{ padding: '60px 24px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#0F172A', marginBottom: '8px' }}>
            Serving Irving, TX &amp; Surrounding DFW Communities
          </h2>
          <p style={{ color: '#64748B', marginBottom: '24px', fontSize: '0.95rem' }}>
            Fence installation and repair throughout the greater Irving and DFW metroplex area
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {['Irving, TX', 'Las Colinas', 'Valley Ranch', 'Grand Prairie', 'Coppell', 'Carrollton', 'Euless', 'Grapevine', 'Bedford', 'Hurst', 'Colleyville', 'Southlake'].map(area => (
              <span key={area} style={{
                background: 'white', border: '1px solid #E2E8F0', borderRadius: '100px',
                padding: '6px 16px', fontSize: '0.85rem', color: '#475569',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
              }}>
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA SECTION ==================== */}
      <section style={{
        padding: '100px 24px',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0C4A6E 100%)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <div className="badge" style={{ background: 'rgba(14,165,233,0.15)', color: '#7DD3FC', border: '1px solid rgba(14,165,233,0.25)', marginBottom: '20px' }}>
              Free Estimates · No Pressure · No Obligation
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '20px', lineHeight: 1.1 }}>
              Ready to Get Your Irving Fence Quote?
            </h2>
            <p style={{ color: '#CBD5E1', lineHeight: 1.8, marginBottom: '24px', fontSize: '1.05rem' }}>
              Stop wondering what your new fence is going to cost. Fill out the form, or give us a call — we'll come out, measure your property, and give you a detailed written estimate. Free. No strings attached. No high-pressure sales tactics.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="tel:+19725550190" className="btn-primary" style={{ padding: '16px 28px' }}>
                📞 Call (972) 555-0190
              </a>
              <a href="sms:+19725550190" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: '2px solid rgba(255,255,255,0.3)', color: 'white',
                padding: '15px 27px', borderRadius: '8px', textDecoration: 'none',
                fontWeight: 600, transition: 'all 0.2s ease',
                fontFamily: 'var(--font-display)'
              }}>
                💬 Text Us
              </a>
            </div>
          </div>
          <div style={{ background: 'white', borderRadius: '20px', padding: '36px', boxShadow: '0 24px 48px rgba(0,0,0,0.3)' }}>
            <ContactForm
              title="Get Your Free Irving Fence Estimate"
              subtitle="We respond within 2 hours during business hours."
            />
          </div>
        </div>
      </section>
    </>
  )
}
