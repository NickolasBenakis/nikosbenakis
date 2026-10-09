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
