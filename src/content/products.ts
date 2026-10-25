/**
 * Digital products sold through Lemon Squeezy. Images live in /public/store/<slug>/ and are the
 * watermarked web previews from make_pack.py — never the files buyers pay for.
 * Leave `checkoutUrl` empty until the product exists in Lemon Squeezy: the page then shows
 * "Coming soon" instead of a buy button.
 */
export type Product = {
  slug: string
  title: string
  /** Short line under the title */
  tagline: string
  /** Small label above the title */
  kind: string
  /** One sentence used on cards, meta description and llms.txt */
  summary: string
  description: Array<string>
  price: number
  currency: 'USD'
  checkoutUrl: string
  /** "In the pack" table: one row per screen type */
  contents: Array<{ screen: string; files: string; size: string }>
  /** Short facts shown as chips, e.g. 'PNG + MP4' */
  facts: Array<string>
  /** "Set it up in a minute" steps */
  setup: Array<string>
  faq: Array<{ q: string; a: string }>
  colorways: Array<{ name: string; phone: string; desktop: string }>
  cover: string
  /** ISO date the page was published, for structured data */
  published: string
}

/** Watermarked preview image for a product, from /public/store/<slug>/ */
const preview = (slug: string, file: string) => `/store/${slug}/${file}`

const colorways = (slug: string, names: Array<string>) =>
  names.map((name) => ({
    name,
    phone: preview(slug, `phone-${name.toLowerCase()}.webp`),
    desktop: preview(slug, `desktop-${name.toLowerCase()}.webp`),
  }))

// Every pack ships the same formats, so contents, setup and FAQ are shared
const packContents: Product['contents'] = [
  { screen: 'iPhone', files: '4 stills · 4 Live Photos', size: '1290 × 2796' },
  { screen: 'Android', files: '4 stills', size: '1440 × 3200' },
  { screen: 'MacBook & 6K displays', files: '8 stills', size: 'up to 6016 × 3384' },
  { screen: 'Desktop 4K', files: '4 stills · loop video', size: '3840 × 2160' },
  { screen: 'Ultrawide', files: '4 stills · loop video', size: '5120 × 2160' },
]

const packFacts = ['24 wallpapers', '4 colorways', 'PNG + MP4 + Live Photo', 'Up to 6K']

const packSetup = [
  'Check out and download the zip straight away — the link also lands in your inbox.',
  'Open the folder for your device; the README has a 30-second guide for each one.',
  'On iPhone, AirDrop a Live Photo to your phone and set it as wallpaper to make it move.',
]

const packFaq: Product['faq'] = [
  {
    q: 'Can I use it on all my devices?',
    a: 'Yes. One purchase covers every phone, laptop and monitor you personally use.',
  },
  {
    q: 'Do the live wallpapers work on Android and Mac?',
    a: 'The iPhone Live Photos animate natively. On Android, Mac and Windows, play the looping MP4 with any video-wallpaper app.',
  },
  {
    q: 'Can I share or resell the files?',
    a: 'Please don’t — the license is personal. Point friends here instead; it’s less than a coffee.',
  },
]

export const products: Array<Product> = [
  {
    slug: 'frostleaf',
    title: 'Frostleaf',
    tagline: 'A snow-spotted guardian wading through white fire and a storm of teal leaves.',
    kind: 'Live wallpaper set',
    summary:
      'The icy sibling of Emberleaf: a pale, leopard-spotted guardian with a white mane, teal leaves and cold white flames — 24 wallpapers in 4 colorways for every screen, plus live wallpapers.',
    description: [
      'Frostleaf is Emberleaf’s winter twin, drawn in the same woodcut style: a pale guardian with dark snow-leopard rosettes and a flowing white mane, crossing a field of cold, white-blue fire beneath a canopy of teal leaves.',
      'In the live versions a cold silver sheen glides across its fur while the white flames rise slowly beneath it, and the guardian stays perfectly still. Four colorways — including Bloom, where the leaves turn crimson and the guardian glows copper-gold.',
    ],
    price: 1.99,
    currency: 'USD',
    checkoutUrl: '',
    contents: packContents,
    facts: packFacts,
    setup: packSetup,
    faq: packFaq,
    colorways: colorways('frostleaf', ['Original', 'Tide', 'Bloom', 'Ash']),
    cover: preview('frostleaf', 'cover.webp'),
    published: '2026-10-25',
  },
  {
    slug: 'emberleaf',
    title: 'Emberleaf',
    tagline: 'A gold-veined guardian wrapped in living leaves, rising out of golden fire.',
    kind: 'Live wallpaper set',
    summary:
      'An original woodcut-style guardian with gold-veined skin, a mane of green leaves and a field of golden fire: 24 wallpapers in 4 colorways for every screen, plus live wallpapers.',
    description: [
      'Emberleaf is an original creature drawn like an old woodcut print: a dark serpentine guardian whose skin is cracked with veins of gold, crowned by a glowing crystal and a mane of countless leaves, wading through a sea of golden flame.',
      'In the live versions a slow glint of light travels along the gold veins, the crystal on its brow breathes and the flames rise, while the guardian stays perfectly still. Four colorways — including Bloom, where the leaves turn magenta and the fire burns blue.',
    ],
    price: 1.99,
    currency: 'USD',
    checkoutUrl: '',
    contents: packContents,
    facts: packFacts,
    setup: packSetup,
    faq: packFaq,
    colorways: colorways('emberleaf', ['Original', 'Inferno', 'Bloom', 'Ash']),
    cover: preview('emberleaf', 'cover.webp'),
    published: '2026-10-24',
  },
  {
    slug: 'ember-aurora',
    title: 'Ember Aurora',
    tagline: 'Ribbons of ember light for every screen you own — still or in motion.',
    kind: 'Live wallpaper set',
    summary:
      'Flowing ribbons of ember light over a violet night: 24 wallpapers in 4 colorways for iPhone, Android, Mac, Windows and ultrawide, plus live wallpapers.',
    description: [
      'Ember Aurora is an original abstract series: rivers of warm light drifting through a deep violet haze, with embers rising off the brightest lines. Calm enough for a home screen, striking on a lock screen.',
      'Every wallpaper comes in four colorways and is cut for each screen rather than stretched, so it stays sharp from a phone to a 6K display. In the live versions, light travels slowly along the ribbons while the violet haze breathes — a calm, seamless loop.',
    ],
    price: 1.99,
    currency: 'USD',
    checkoutUrl: '',
    contents: packContents,
    facts: packFacts,
    setup: packSetup,
    faq: packFaq,
    colorways: colorways('ember-aurora', ['Original', 'Inferno', 'Nebula', 'Ash']),
    cover: preview('ember-aurora', 'cover.webp'),
    published: '2026-10-24',
  },
]

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function formatPrice(product: Product) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.currency,
    minimumFractionDigits: 0,
  }).format(product.price)
}
