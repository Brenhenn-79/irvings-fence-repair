import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'
export const metadata: Metadata = {
  title: 'Chain Link Fence Irving TX | Residential & Commercial Chain Link',
  description: "Affordable chain link fence installation in Irving, TX for homes and businesses. Galvanized, vinyl-coated, and privacy-slat options. Free estimates!",
}
const benefits = [
  { icon: '💰', title: 'Most Affordable', desc: 'Chain link is the most budget-friendly fencing option for larger areas.' },
  { icon: '🔧', title: 'Low Maintenance', desc: 'Galvanized chain link essentially maintains itself for decades.' },
  { icon: '🐕', title: 'Pet Containment', desc: 'Secure, reliable containment for dogs and large animals.' },
  { icon: '🏢', title: 'Commercial Grade', desc: 'We install heavy-gauge commercial chain link for businesses too.' },
]
const relatedServices = [
  { href: '/services/privacy-fences', title: 'Privacy Fences' },
  { href: '/services/wood-fences', title: 'Wood Fences' },
  { href: '/services/fence-repair', title: 'Fence Repair' },
]
export default function ChainLinkPage() {
  return (
    <ServicePageLayout
      title="Chain Link Fences"
      h1="Chain Link Fence Installation in Irving, TX — Practical, Durable, Affordable"
      metaDescription=""
      heroImage="https://images.pexels.com/photos/1084491/pexels-photo-1084491.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroImageAlt="Chain link fence yard Irving Texas"
      intro="Sometimes you just need a solid, practical fence that gets the job done without breaking the bank. Our chain link fences in Irving do exactly that."
      benefits={benefits}
      relatedServices={relatedServices}
      bodyContent={
        <>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 16px' }}>
            Chain Link Fence Options for Irving Homes & Businesses
          </h2>
          <p style={{ marginBottom: '16px' }}>
            Don't underestimate chain link. When properly installed with quality materials and set posts, a chain link fence can outlast almost any other fencing type. We offer galvanized (silver), black vinyl-coated, and green vinyl-coated options. We also install privacy slats for chain link customers who want some seclusion without paying for a full privacy fence.
          </p>
          <p style={{ marginBottom: '16px' }}>
            Chain link is especially popular in Irving for side yards, back yard pet runs, commercial properties, and perimeter fencing for larger lots where budget matters. We size everything appropriately — residential chain link typically uses lighter gauge than commercial applications, which we handle as well.
          </p>
        </>
      }
    />
  )
}
