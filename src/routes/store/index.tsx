import { createFileRoute, Link } from '@tanstack/react-router'
import { FadeIn } from '#/components/FadeIn'
import { SiteFooter } from '#/components/SiteFooter'
import { SiteHeader } from '#/components/SiteHeader'
import { TextReveal } from '#/components/TextReveal'
import { formatPrice, products } from '#/content/products'
import { breadcrumbJsonLd, jsonLdScript, pageHead } from '#/lib/seo'

export const Route = createFileRoute('/store/')({
  head: () => ({
    ...pageHead({
      title: 'Store — Nikos Benakis',
      description:
        'Digital goods by Nikos Benakis: original wallpaper packs for iPhone, Android, Mac and Windows, with live wallpapers.',
      path: '/store',
    }),
    scripts: [jsonLdScript(breadcrumbJsonLd([['Store', '/store']]))],
  }),
  component: Store,
})

function Store() {
  return (
    <main className="min-h-screen px-6 py-12 sm:px-8 lg:px-24 lg:py-20 max-w-6xl mx-auto">
      <SiteHeader />
      <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.04em] leading-[1.25] mb-6">
        <TextReveal text="Store" />
      </h1>
      <FadeIn delay={0.3}>
        <p className="max-w-[60ch] text-lg leading-[165%] text-foreground-muted mb-14">
          Small things I make on the side. Original wallpaper packs for every screen you own, with
          live versions that loop.
        </p>
      </FadeIn>

      <ul className="grid gap-10 sm:grid-cols-2 mb-20">
        {products.map((product, i) => (
          <li
            key={product.slug}
            className="animate-fadeIn"
            style={{ animationDelay: `${0.4 + i * 0.08}s` }}
          >
            <Link to="/store/$slug" params={{ slug: product.slug }} className="group block">
              <img
                src={product.cover}
                alt={`${product.title} wallpapers on a desktop and a phone`}
                width={1600}
                height={1000}
                className="w-full h-auto rounded-xl border border-border transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.015]"
              />
              <span className="mt-5 block text-xs font-semibold tracking-widest uppercase text-foreground-muted">
                {product.kind}
              </span>
              <span className="mt-2 flex items-baseline justify-between gap-4">
                <span className="text-xl font-medium tracking-tight">{product.title}</span>
                <span className="text-base font-medium">{formatPrice(product)}</span>
              </span>
              <span className="block mt-2 text-base leading-[165%] text-foreground-muted">
                {product.summary}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <SiteFooter />
    </main>
  )
}
