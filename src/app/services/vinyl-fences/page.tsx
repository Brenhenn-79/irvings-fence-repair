import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'
export const metadata: Metadata = {
  title: 'Vinyl Fence Installation Irving TX | White & Tan Vinyl Fences',
  description: "Zero-maintenance vinyl fence installation in Irving, TX. White, tan & gray vinyl privacy fences that never rot, warp, or need painting. Free quote today!",
}
const benefits = [
  { icon: '🧹', title: 'Zero Maintenance', desc: 'Never paint, stain, or treat your fence again. Just rinse it off occasionally.' },
  { icon: '☀️', title: 'UV Resistant', desc: 'Our vinyl is UV-stabilized to resist fading in the intense Texas sun.' },
  { icon: '🌧️', title: 'Weather Proof', desc: 'Vinyl will not rot, warp, or splinter from moisture or humidity.' },
  { icon: '🎨', title: 'Color Options', desc: 'White, tan, gray, and more — choose the look that fits your Irving home.' },
]
const relatedServices = [
  { href: '/services/privacy-fences', title: 'Privacy Fences' },
  { href: '/services/wood-fences', title: 'Wood Fences' },
  { href: '/services/fence-repair', title: 'Fence Repair' },
  { href: '/services/custom-gates', title: 'Custom Gates' },
]
export default function VinylFencesPage() {
  return (
    <ServicePageLayout
      title="Vinyl Fences"
      h1="Vinyl Fence Installation in Irving, TX — Beautiful, Zero-Maintenance Fencing"
      metaDescription=""
      heroImage="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroImageAlt="White vinyl fence residential Irving Texas"
      intro="Vinyl fences are the set-it-and-forget-it solution for Irving homeowners who want a beautiful, long-lasting fence without the ongoing maintenance headache."
      benefits={benefits}
      relatedServices={relatedServices}
      bodyContent={
        <>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 16px' }}>
            Why Vinyl Fences Are Growing in Popularity in Irving
          </h2>
          <p style={{ marginBottom: '16px' }}>
            Irving homeowners love vinyl fences for one simple reason: once it's installed, you're done. No staining every few years, no painting when the wood starts to look tired, no worrying about rot or insects. Vinyl fences are engineered to look beautiful and perform flawlessly with almost no effort on your part.
          </p>
          <p style={{ marginBottom: '16px' }}>
            Our vinyl privacy fences in Irving are built with heavy-duty vinyl panels that are significantly thicker and stronger than bargain-bin options. We use proper post depths in concrete and stainless steel hardware to ensure your fence stays straight and tight even through Texas wind and storm events.
          </p>
        </>
      }
    />
  )
}
