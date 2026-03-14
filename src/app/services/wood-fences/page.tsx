import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Wood Fence Installation Irving TX | Cedar Wood Fence Builders',
  description: "Irving's #1 wood fence builders. Custom cedar and pine wood fences installed by expert fence contractors in Irving, TX. Free estimates – call today!",
}

const benefits = [
  { icon: '🌲', title: 'Natural Beauty', desc: 'Nothing replicates the warm, classic look of real cedar or pine wood.' },
  { icon: '✂️', title: 'Fully Customizable', desc: 'Picket, board-on-board, shadowbox, rail fences – any style you want.' },
  { icon: '💰', title: 'Cost-Effective', desc: 'Wood is often the most affordable option per linear foot for quality fencing.' },
  { icon: '🔨', title: 'Easy to Repair', desc: 'Individual boards are simple to replace, keeping long-term costs low.' },
]

const relatedServices = [
  { href: '/services/privacy-fences', title: 'Privacy Fences' },
  { href: '/services/vinyl-fences', title: 'Vinyl Fences' },
  { href: '/services/fence-repair', title: 'Fence Repair' },
  { href: '/services/custom-gates', title: 'Custom Gates' },
]

export default function WoodFencesPage() {
  return (
    <ServicePageLayout
      title="Wood Fences"
      h1="Wood Fence Installation in Irving, TX — Classic Beauty Built to Last"
      metaDescription=""
      heroImage="https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroImageAlt="Custom wood fence installation Irving Texas"
      intro="A beautiful wood fence adds warmth, character, and value to any Irving property. We build wood fences that are straight, solid, and stunning — using quality cedar and pine that's meant to handle Texas weather."
      benefits={benefits}
      relatedServices={relatedServices}
      bodyContent={
        <>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 16px' }}>
            Why Wood Fences Remain Irving's Most Popular Choice
          </h2>
          <p style={{ marginBottom: '16px' }}>
            Walk through any Irving neighborhood and you'll see them everywhere — beautiful cedar wood fences defining backyards, lining properties, and giving homes that finished, cared-for look. Wood has been the go-to fencing material for generations, and for good reason: it's naturally beautiful, endlessly customizable, and built with the right materials and installation, it can last 15–25 years.
          </p>
          <p style={{ marginBottom: '16px' }}>
            We specialize in <strong>wood fence installation in Irving, TX</strong> using premium cedar and pressure-treated pine. Our crews set posts in concrete, use structural screws and proper spacing, and build every fence plumb, level, and tight. We're not rushing through your job — we're building something that represents our work for years to come.
          </p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#0F172A', margin: '32px 0 12px' }}>
            Popular Wood Fence Styles We Build in Irving
          </h3>
          <p style={{ marginBottom: '16px' }}>
            <strong>Board-on-Board Privacy Fence:</strong> The most popular style in Irving. Overlapping boards provide complete privacy with great visual depth. Looks great from both sides.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <strong>Shadowbox Fence:</strong> Alternating boards on both sides of the rail create a semi-private look that's attractive from either direction and allows some airflow — great for windy Texas days.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <strong>Picket Fence:</strong> The classic. Perfect for front yards, garden areas, and anywhere you want a charming boundary without full privacy.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <strong>Split Rail Fence:</strong> Simple and rustic. Ideal for large lot boundaries, horse properties, and giving a property a natural country feel.
          </p>
        </>
      }
    />
  )
}
