import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { DEFAULT_DESCRIPTION, PERSON_ID, SITE_URL, WEBSITE_ID } from '#/lib/seo'
import appCss from '../styles.css?url'

const OG_IMAGE = `${SITE_URL}og.png`

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Nikos Benakis',
      alternateName: ['Nickolas Benakis', 'Νίκος Μπενάκης'],
      url: SITE_URL,
      image: `${SITE_URL}profile.JPEG`,
      description: DEFAULT_DESCRIPTION,
      jobTitle: ['Product Engineer', 'Growth Advisor', 'Fractional CTO'],
      worksFor: { '@type': 'Organization', name: 'Astrocode', url: 'https://www.astrocode.tech/' },
      address: { '@type': 'PostalAddress', addressLocality: 'Athens', addressCountry: 'GR' },
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'University of West Attica' },
        { '@type': 'CollegeOrUniversity', name: 'University of Piraeus' },
      ],
      knowsAbout: [
        'AI products',
        'Product engineering',
        'Growth experimentation',
        'Fractional CTO',
        'Startup advising',
        'TypeScript',
      ],
      sameAs: ['https://github.com/NickolasBenakis', 'https://x.com/nickolasbenakis'],
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL,
      name: 'Nikos Benakis',
      inLanguage: 'en',
      publisher: { '@id': PERSON_ID },
    },
  ],
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#fafaf8' },
      { name: 'author', content: 'Nikos Benakis' },
      { title: 'Nikos Benakis' },
      { name: 'description', content: DEFAULT_DESCRIPTION },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Nikos Benakis' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Nikos Benakis — Product Engineer & Fractional CTO' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@nickolasbenakis' },
      { name: 'twitter:creator', content: '@nickolasbenakis' },
      { name: 'twitter:image', content: OG_IMAGE },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'icon', href: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'alternate', type: 'text/plain', href: '/llms.txt', title: 'llms.txt' },
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'preload',
        href: '/fonts/GeistVF.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      },
    ],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify(jsonLd) }],
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
