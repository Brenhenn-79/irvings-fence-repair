import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'
export const metadata: Metadata = {
  title: 'Fence Repair Irving TX | Fast, Reliable Fence Repair Service',
  description: "Need fast fence repair in Irving TX? We fix broken boards, leaning posts, storm damage & sagging gates. Same-week service available. Free estimates!",
}
const benefits = [
  { icon: '⚡', title: 'Same-Week Service', desc: 'Most fence repairs in Irving can be scheduled within the same week you call.' },
  { icon: '🎯', title: 'Honest Assessment', desc: "We tell you if repair is better than replacement – no upselling." },
  { icon: '🛡️', title: 'Repair Warranty', desc: 'All repair work comes with our standard workmanship guarantee.' },
  { icon: '🌩️', title: 'Storm Damage Experts', desc: 'We work with insurance claims and can document storm damage for you.' },
]
const relatedServices = [
  { href: '/services/privacy-fences', title: 'Privacy Fences' },
  { href: '/services/wood-fences', title: 'Wood Fences' },
  { href: '/services/custom-gates', title: 'Custom Gates' },
]
export default function FenceRepairPage() {
  return (
    <ServicePageLayout
      title="Fence Repair"
      h1="Fence Repair in Irving, TX — Fast, Honest, Done Right the First Time"
      metaDescription=""
      heroImage="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1600"
      heroImageAlt="Fence repair crew working Irving Texas"
      intro="Broken boards, leaning posts, storm damage, or a gate that won't close right? Our Irving fence repair team fixes it fast and backs the work with a warranty."
      benefits={benefits}
      relatedServices={relatedServices}
      bodyContent={
        <>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#0F172A', margin: '0 0 16px' }}>
            Common Fence Repairs We Handle in Irving
          </h2>
          <p style={{ marginBottom: '16px' }}>
            Fences take a beating in Irving — from summer heat and UV exposure to those Texas storms that blow through without warning. Here are the most common fence repair jobs we handle throughout Irving:
          </p>
          <p style={{ marginBottom: '16px' }}><strong>Broken or rotted boards:</strong> We replace individual boards or sections without tearing out your whole fence. We match your existing fence material as closely as possible.</p>
          <p style={{ marginBottom: '16px' }}><strong>Leaning or damaged posts:</strong> If posts are leaning, rotted at the base, or pushed out by tree roots, we repair or replace them with proper re-setting in concrete.</p>
          <p style={{ marginBottom: '16px' }}><strong>Storm damage:</strong> After hailstorms, high winds, or heavy rain events, we provide fast assessment and repairs — and we can document damage for insurance purposes.</p>
          <p style={{ marginBottom: '16px' }}><strong>Gate problems:</strong> Sagging, sticking, or broken gates are one of our most common repairs. We adjust hinges, replace hardware, rebuild gate frames, and get your gate working like new.</p>
        </>
      }
    />
  )
}
