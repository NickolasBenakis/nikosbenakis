import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { FadeIn } from '#/components/FadeIn'
import { SiteFooter } from '#/components/SiteFooter'
import { SiteHeader } from '#/components/SiteHeader'
import { TextReveal } from '#/components/TextReveal'
import { formatPrice, getProduct, type Product } from '#/content/products'
import { breadcrumbJsonLd, jsonLdScript, pageHead, productJsonLd } from '#/lib/seo'

export const Route = createFileRoute('/store/$slug')({
  loader: ({ params }) => {
    const product = getProduct(params.slug)
    if (!product) throw notFound()
    return product
  },
  head: ({ loaderData: product }) => {
    if (!product) return {}
    const path = `/store/${product.slug}`
    return {
      ...pageHead({
        title: `${product.title} wallpapers — Nikos Benakis`,
        description: product.summary,
        path,
      }),
      scripts: [
        jsonLdScript(
          productJsonLd({
            name: product.title,
            description: product.summary,
            path,
            image: product.cover,
            price: product.price,
            currency: product.currency,
            checkoutUrl: product.checkoutUrl,
          }),
        ),
        jsonLdScript(
          breadcrumbJsonLd([
            ['Store', '/store'],
            [product.title, path],
          ]),
        ),
      ],
    }
  },
  component: ProductPage,
})

const sectionLabel = 'text-xs font-semibold tracking-widest uppercase text-foreground-muted mb-5'

function ProductPage() {
  const product = Route.useLoaderData()

  return (
    <main className="min-h-screen px-6 py-12 sm:px-8 lg:px-24 lg:py-20 max-w-6xl mx-auto">
      <SiteHeader />
      <article className="mb-20">
        <FadeIn>
          <Link
            to="/store"
            className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-200"
          >
            ← Store
          </Link>
        </FadeIn>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <div>
            <FadeIn delay={0.05}>
              <p className="text-sm text-accent font-medium">{product.kind}</p>
            </FadeIn>
            <h1 className="mt-3 text-4xl sm:text-5xl font-medium tracking-[-0.04em] leading-[1.15]">
              <TextReveal text={product.title} delay={0.1} />
            </h1>
            <FadeIn delay={0.3}>
              <p className="mt-5 max-w-[46ch] text-lg sm:text-xl leading-[160%] text-foreground-muted">
                {product.tagline}
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.35}>
            <BuyBox product={product} />
          </FadeIn>
        </div>

        <FadeIn delay={0.45}>
          <img
            src={product.cover}
            alt={`${product.title} shown on a desktop monitor and a phone`}
            width={1600}
            height={1000}
            className="mt-12 w-full h-auto rounded-xl border border-border"
          />
        </FadeIn>

        <div className="mt-16 space-y-16">
          <section className="reveal-on-scroll space-y-4 text-lg leading-[170%] max-w-[62ch]">
            {product.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="reveal-on-scroll">
            <h2 className={sectionLabel}>In the pack</h2>
            <table className="w-full max-w-3xl text-left text-base">
              <tbody>
                {product.contents.map((row) => (
                  <tr key={row.screen} className="border-t border-border last:border-b">
                    <th scope="row" className="py-3 pr-4 font-medium">
                      {row.screen}
                    </th>
                    <td className="py-3 pr-4 text-foreground-muted">{row.files}</td>
                    <td className="py-3 text-right text-foreground-muted tabular-nums whitespace-nowrap">
                      {row.size}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="reveal-on-scroll">
            <h2 className={sectionLabel}>Four colorways</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {product.colorways.map((colorway) => (
                <li key={colorway.name}>
                  <img
                    src={colorway.phone}
                    alt={`${colorway.name} colorway on a phone`}
                    width={540}
                    height={1170}
                    loading="lazy"
                    className="w-full h-auto rounded-2xl border border-border"
                  />
                  <span className="mt-3 block text-sm font-medium">{colorway.name}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {product.colorways.map((colorway) => (
                <li key={colorway.name}>
                  <img
                    src={colorway.desktop}
                    alt={`${colorway.name} colorway on a desktop`}
                    width={1400}
                    height={788}
                    loading="lazy"
                    className="w-full h-auto rounded-lg border border-border"
                  />
                </li>
              ))}
            </ul>
          </section>

          <section className="reveal-on-scroll">
            <h2 className={sectionLabel}>Set it up in a minute</h2>
            <ol className="grid gap-6 sm:grid-cols-3">
              {product.setup.map((step, i) => (
                <li key={step} className="text-base leading-[165%] text-foreground-muted">
                  <span className="block text-3xl font-medium tracking-tight text-foreground mb-2 tabular-nums">
                    0{i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          <section className="reveal-on-scroll max-w-3xl">
            <h2 className={sectionLabel}>Questions</h2>
            <div className="border-t border-border">
              {product.faq.map((item) => (
                <details key={item.q} className="group border-b border-border py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
                    {item.q}
                    <span
                      aria-hidden="true"
                      className="text-accent transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-base leading-[165%] text-foreground-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </article>

      <SiteFooter />
    </main>
  )
}

function BuyBox({ product }: { product: Product }) {
  const free = product.price === 0
  return (
    <div className="rounded-xl border border-border bg-white/60 p-6">
      <p className="flex items-baseline gap-2">
        <span className="text-4xl font-medium tracking-tight">{formatPrice(product)}</span>
        <span className="text-sm text-foreground-muted">
          {free ? 'no card needed' : 'one-time · yours to keep'}
        </span>
      </p>
      {product.checkoutUrl ? (
        <a
          href={product.checkoutUrl}
          className="mt-5 flex w-full items-center justify-center rounded-lg bg-foreground px-5 py-3 text-base font-medium text-surface transition-opacity duration-200 hover:opacity-85"
        >
          {free ? 'Download free' : `Get ${product.title}`}
        </a>
      ) : (
        <span
          aria-disabled="true"
          className="mt-5 flex w-full items-center justify-center rounded-lg border border-border px-5 py-3 text-base font-medium text-foreground-muted"
        >
          Coming soon
        </span>
      )}
      <ul className="mt-5 flex flex-wrap gap-2">
        {product.facts.map((fact) => (
          <li
            key={fact}
            className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground-muted"
          >
            {fact}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs leading-[165%] text-foreground-muted">
        Instant download · personal license for your own devices · checkout by Lemon Squeezy
      </p>
    </div>
  )
}
