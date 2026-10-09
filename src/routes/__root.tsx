import { createRootRoute, HeadContent, Link, Scripts } from '@tanstack/react-router'
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
      sameAs: [
        'https://github.com/NickolasBenakis',
        'https://x.com/nickolasbenakis',
        'https://dev.to/nickolasbenakis',
      ],
      makesOffer: ['Fractional CTO', 'AI product engineering', 'Growth advisory'].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name, provider: { '@id': PERSON_ID } },
      })),
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
  notFoundComponent: NotFound,
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

function NotFound() {
  return (
    <main className="min-h-screen px-6 py-12 sm:px-8 lg:px-24 lg:py-20 max-w-6xl mx-auto flex flex-col justify-center">
      <title>Page not found — Nikos Benakis</title>
      <meta name="robots" content="noindex" />
      <p className="text-sm tabular-nums text-accent mb-4">404</p>
      <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.04em] leading-[1.25] mb-6">
        This page doesn't exist.
      </h1>
      <p className="text-lg text-foreground-muted mb-8">
        It may have moved, or the link was mistyped.
      </p>
      <div className="flex gap-6 text-base font-medium">
        <Link to="/" className="text-accent">
          ← Home
        </Link>
        <Link to="/work" className="hover:text-accent transition-colors duration-200">
          Selected work
        </Link>
      </div>
    </main>
  )
}
