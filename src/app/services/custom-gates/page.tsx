import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'
export const metadata: Metadata = {
  title: 'Custom Gates Irving TX | Driveway & Pedestrian Gates',
  description: "Custom gate installation in Irving, TX. Wood, iron & aluminum driveway gates, pedestrian gates, and automatic gate openers. Built to impress. Free quote!",
}
const benefits = [
  { icon: '🚪', title: 'Custom Built', desc: 'Every gate we build is designed specifically for your opening and style preferences.' },
  { icon: '🤖', title: 'Automatic Options', desc: 'Add a gate opener with keypad, remote, or smartphone control.' },
  { icon: '🎨', title: 'Any Material', desc: 'Wood, wrought iron, aluminum, vinyl – we match your fence perfectly.' },
  { icon: '🏠', title: 'Curb Appeal', desc: 'A grand gate makes a statement and significantly boosts property aesthetics.' },
]
const relatedServices = [
  { href: '/services/privacy-fences', title: 'Privacy Fences' },
  { href: '/services/wood-fences', title: 'Wood Fences' },
  { href: '/services/fence-repair', title: 'Fence Repair' },
]
export default function CustomGatesPage() {
  return (
    <ServicePageLayout
      title="Custom Gates"
      h1="Custom Gate Installation in Irving, TX — Make an Entrance Worth Remembering"
      metaDescription=""
      heroImage="https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroImageAlt="Custom gate installation Irving Texas home"
      intro="Your fence is only as good as its gate. Our custom gates in Irving are built to impress, function flawlessly, and complement your fence perfectly."
      benefits={benefits}
      relatedServices={relatedServices}
      bodyContent={
        <>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 16px' }}>
            Custom Gates Built for Irving Homes & Properties
          </h2>
          <p style={{ marginBottom: '16px' }}>
            Whether you're looking for a simple cedar pedestrian gate to match your privacy fence, or a grand double driveway gate that commands attention, our Irving gate installation team builds every gate from scratch to fit your exact opening and style.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <strong>Driveway Gates:</strong> Single and double swing gates in wood, ornamental iron, or aluminum. We size them for standard driveways and custom-width openings alike.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <strong>Pedestrian Gates:</strong> Walk-through gates with quality latching hardware, self-closing hinges, and keyed entry options. Standard and ADA-compliant widths available.
          </p>
          <p style={{ marginBottom: '16px' }}>
            <strong>Automatic Gate Openers:</strong> Add a gate operator for convenience and security. We install systems compatible with keypad, remote, and smartphone app control.
          </p>
        </>
      }
    />
  )
}
