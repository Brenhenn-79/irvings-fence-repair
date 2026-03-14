import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://irvingsfencerepair.com'),
  title: {
    default: "Irving's Fence Repair | #1 Fence Installation Company Irving TX",
    template: "%s | Irving's Fence Repair – Irving, Texas",
  },
  description:
    "Irving's Fence Repair is Irving's most trusted fence installation company. Wood fences, vinyl fences, chain link, privacy fences & custom gates. Serving Irving, TX. Get a free quote today!",
  keywords: [
    'fence installation Irving TX',
    'Irving fence company',
    'privacy fence Irving',
    'wood fence builders near me Irving',
    'fence repair Irving Texas',
    'custom fencing Irving',
    'vinyl fence Irving',
    'chain link fence Irving',
    'fence contractor Irving TX',
    'fencing company Irving',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://irvingsfencerepair.com',
    siteName: "Irving's Fence Repair",
    title: "Irving's Fence Repair | Premier Fence Installation in Irving, TX",
    description:
      "Irving, TX's most trusted fence company. Beautiful, durable fencing installed right – wood, vinyl, chain link, privacy fences & custom gates. Free quotes!",
    images: [
      {
        url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
        width: 1200,
        height: 630,
        alt: 'Beautiful privacy fence installation in Irving Texas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Irving's Fence Repair | Irving TX Fence Company",
    description: 'Beautiful, durable fences for Irving homeowners. Free estimates!',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://irvingsfencerepair.com/#business',
      name: "Irving's Fence Repair",
      alternateName: 'Irvings Fence Repair',
      url: 'https://irvingsfencerepair.com',
      logo: 'https://irvingsfencerepair.com/logo.png',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      description:
        "Irving Texas' premier fence installation and repair company. We specialize in wood fences, vinyl fences, privacy fences, chain link fences, and custom gates serving Irving, TX and surrounding DFW communities.",
      telephone: '+1-972-555-0190',
      email: 'info@irvingsfencerepair.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '4500 W Airport Fwy',
        addressLocality: 'Irving',
        addressRegion: 'TX',
        postalCode: '75062',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 32.8141,
        longitude: -96.9489,
      },
      areaServed: [
        { '@type': 'City', name: 'Irving', sameAs: 'https://en.wikipedia.org/wiki/Irving,_Texas' },
        { '@type': 'City', name: 'Las Colinas' },
        { '@type': 'City', name: 'Grand Prairie' },
        { '@type': 'City', name: 'Coppell' },
        { '@type': 'City', name: 'Carrollton' },
        { '@type': 'City', name: 'Euless' },
        { '@type': 'City', name: 'Grapevine' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:00',
          closes: '16:00',
        },
      ],
      priceRange: '$$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Credit Card, Check, Financing',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '287',
        bestRating: '5',
        worstRating: '1',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Fence Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wood Fence Installation Irving TX' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vinyl Fence Installation Irving TX' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Privacy Fence Installation Irving TX' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chain Link Fence Irving TX' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fence Repair Irving TX' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Gates Irving TX' } },
        ],
      },
      sameAs: [
        'https://www.facebook.com/irvingsfencerepair',
        'https://www.yelp.com/biz/irvings-fence-repair',
        'https://www.google.com/maps/place/irvings-fence-repair',
        'https://nextdoor.com/pages/irvings-fence-repair',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://irvingsfencerepair.com/#website',
      url: 'https://irvingsfencerepair.com',
      name: "Irving's Fence Repair",
      publisher: { '@id': 'https://irvingsfencerepair.com/#business' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.pexels.com" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {/* GA4 - Replace G-XXXXXXXX with real ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXX');
          `}
        </Script>

        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
