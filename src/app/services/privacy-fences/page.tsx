import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Privacy Fence Installation Irving TX | Cedar & Vinyl Privacy Fences',
  description: "Irving's Fence Repair installs beautiful cedar and vinyl privacy fences in Irving, TX. 6–8ft tall, fully opaque, built to last Texas weather. Free estimates!",
}

const benefits = [
  { icon: '👁️', title: 'Complete Privacy', desc: 'Block neighbors, street traffic, and passersby with a solid 6–8ft privacy fence.' },
  { icon: '🔇', title: 'Noise Reduction', desc: 'A solid board fence can significantly reduce street noise for a quieter backyard.' },
  { icon: '🐕', title: 'Pet-Safe & Secure', desc: 'Keep kids and pets safely contained in your Irving yard.' },
  { icon: '🏡', title: 'Boosts Home Value', desc: 'A quality privacy fence adds curb appeal and measurable resale value.' },
]

const relatedServices = [
  { href: '/services/wood-fences', title: 'Wood Fences' },
  { href: '/services/vinyl-fences', title: 'Vinyl Fences' },
  { href: '/services/custom-gates', title: 'Custom Gates' },
  { href: '/services/fence-repair', title: 'Fence Repair' },
]

export default function PrivacyFencesPage() {
  return (
    <ServicePageLayout
      title="Privacy Fences"
      h1="Privacy Fence Installation in Irving, TX — Your Backyard, Your Business"
      metaDescription=""
      heroImage="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroImageAlt="Privacy fence installation Irving Texas backyard"
      intro="Living in Irving means you deserve a backyard you can truly enjoy. Our custom privacy fences give you the seclusion, security, and serenity you've been looking for."
      benefits={benefits}
      relatedServices={relatedServices}
      bodyContent={
        <>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 16px' }}>
            Why Irving Homeowners Love Our Privacy Fences
          </h2>
          <p style={{ marginBottom: '16px' }}>
            Let's be honest — one of the best things about owning a home in Irving is having your own outdoor space. But if your backyard feels like a fishbowl, you're not fully enjoying it. That's where a well-built privacy fence changes everything.
          </p>
          <p style={{ marginBottom: '16px' }}>
            We install <strong>privacy fences in Irving, TX</strong> using premium cedar and high-grade vinyl — the two most popular and durable materials for North Texas conditions. Whether you want the warm, natural look of cedar or the zero-maintenance appeal of vinyl, we'll build you a fence that looks great and holds up for years.
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#0F172A', margin: '32px 0 12px' }}>
            Cedar Privacy Fences in Irving
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Nothing beats the look and feel of a genuine cedar privacy fence. Cedar is naturally resistant to rot, insects, and moisture — all important factors in Irving's climate. We build cedar privacy fences in 6ft and 8ft heights, using pressure-treated 4x4 posts set in concrete for maximum stability.
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#0F172A', margin: '32px 0 12px' }}>
            Vinyl Privacy Fences in Irving
          </h3>
          <p style={{ marginBottom: '16px' }}>
            If you'd rather not think about your fence ever again after installation day, vinyl is your answer. Our vinyl privacy fences never rot, warp, or need painting. They're UV-stabilized for Texas sun resistance and come in white, tan, and gray options. They look crisp and clean for decades with minimal care.
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#0F172A', margin: '32px 0 12px' }}>
            Privacy Fence Cost in Irving, TX
          </h3>
          <p style={{ marginBottom: '16px' }}>
            Privacy fence installation in Irving typically ranges from $25–$45 per linear foot installed, depending on material, height, and site conditions. Cedar is generally on the lower end; vinyl costs a bit more upfront but saves you maintenance costs over time. The only way to get an accurate price for your specific Irving property is with a free on-site quote — which we're happy to provide.
          </p>
        </>
      }
    />
  )
}
