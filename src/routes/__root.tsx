import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?url'

const SITE_URL = 'https://www.nikosbenakis.com/'

const DESCRIPTION =
  'Nikos Benakis is a Product Engineer, Growth Advisor, and Fractional CTO based in Athens, Greece. Co-founder of Astrocode and angel investor in early-stage AI startups like Dikaio.ai.'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}#person`,
  name: 'Nikos Benakis',
  alternateName: ['Nickolas Benakis', 'Νίκος Μπενάκης'],
  url: SITE_URL,
  image: `${SITE_URL}profile.JPEG`,
  description: DESCRIPTION,
  jobTitle: ['Product Engineer', 'Growth Advisor', 'Fractional CTO'],
  worksFor: { '@type': 'Organization', name: 'Astrocode', url: 'https://www.astrocode.tech/' },
  address: { '@type': 'PostalAddress', addressLocality: 'Athens', addressCountry: 'GR' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'University of West Attica' },
    { '@type': 'CollegeOrUniversity', name: 'University of Piraeus' },
  ],
  knowsAbout: ['AI products', 'Product engineering', 'Growth experimentation', 'TypeScript'],
  sameAs: ['https://github.com/NickolasBenakis', 'https://x.com/nickolasbenakis'],
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Nikos Benakis' },
      { name: 'description', content: DESCRIPTION },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:title', content: 'Nikos Benakis' },
      {
        property: 'og:description',
        content: DESCRIPTION,
      },
      { property: 'og:image', content: 'https://www.nikosbenakis.com/profile.JPEG' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Nikos Benakis' },
      {
        name: 'twitter:description',
        content: DESCRIPTION,
      },
      { name: 'twitter:image', content: 'https://www.nikosbenakis.com/profile.JPEG' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'icon', href: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'preload',
        href: '/fonts/GeistVF.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      },
    ],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify(personJsonLd) }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
