export const SITE_URL = 'https://www.nikosbenakis.com/'

export const PERSON_ID = `${SITE_URL}#person`
export const WEBSITE_ID = `${SITE_URL}#website`

export const DEFAULT_DESCRIPTION =
  'Nikos Benakis is a Product Engineer, Growth Advisor, and Fractional CTO based in Athens, Greece. Co-founder of Astrocode and angel investor in early-stage AI startups like Dikaio.ai.'

type PageMetaOptions = {
  title: string
  description: string
  path: string
}

/** Per-page title, description, canonical and social tags. Route meta overrides root meta by name/property. */
export function pageHead({ title, description, path }: PageMetaOptions) {
  const url = new URL(path, SITE_URL).href
  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ],
    links: [{ rel: 'canonical', href: url }],
  }
}

/** BreadcrumbList for nested pages, e.g. [['Work', '/work'], ['Uizard', '/work/uizard']] */
export function breadcrumbJsonLd(trail: Array<[name: string, path: string]>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [['Home', '/'] as const, ...trail].map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: new URL(path, SITE_URL).href,
    })),
  }
}

type ArticleOptions = {
  headline: string
  description: string
  path: string
  published: string
  about?: { name: string; url: string }
}

export function articleJsonLd({ headline, description, path, published, about }: ArticleOptions) {
  const url = new URL(path, SITE_URL).href
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    url,
    mainEntityOfPage: url,
    datePublished: published,
    dateModified: published,
    inLanguage: 'en',
    image: `${SITE_URL}og.png`,
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
    isPartOf: { '@id': WEBSITE_ID },
    ...(about && { about: { '@type': 'Organization', name: about.name, url: about.url } }),
  }
}

export function jsonLdScript(data: object) {
  return { type: 'application/ld+json', children: JSON.stringify(data) }
}
