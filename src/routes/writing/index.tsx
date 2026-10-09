import { createFileRoute, Link } from '@tanstack/react-router'
import { FadeIn } from '#/components/FadeIn'
import { SiteFooter } from '#/components/SiteFooter'
import { SiteHeader } from '#/components/SiteHeader'
import { TextLink } from '#/components/TextLink'
import { TextReveal } from '#/components/TextReveal'
import { posts } from '#/content/posts'
import { DEVTO_PROFILE, getDevtoPosts } from '#/lib/devto'
import { breadcrumbJsonLd, jsonLdScript, pageHead } from '#/lib/seo'

export const Route = createFileRoute('/writing/')({
  loader: () => getDevtoPosts(),
  head: () => ({
    ...pageHead({
      title: 'Writing — Nikos Benakis',
      description:
        'Essays and posts by Nikos Benakis on building AI products, web engineering, growth experimentation and leading engineering teams.',
      path: '/writing',
    }),
    scripts: [jsonLdScript(breadcrumbJsonLd([['Writing', '/writing']]))],
  }),
  component: Writing,
})

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

type Entry = {
  key: string
  title: string
  description: string
  published: string
  meta: string
} & ({ slug: string } | { href: string })

function Writing() {
  const external = Route.useLoaderData()
  const entries: Array<Entry> = [
    ...posts.map((post) => ({
      key: post.slug,
      slug: post.slug,
      title: post.title,
      description: post.description,
      published: post.published,
      meta: post.draft ? 'Draft' : 'Essay',
    })),
    ...external.map((post) => ({
      key: post.url,
      href: post.url,
      title: post.title,
      description: post.description,
      published: post.published,
      meta: `dev.to · ${post.readingMinutes} min`,
    })),
  ].sort((a, b) => b.published.localeCompare(a.published))

  return (
    <main className="min-h-screen px-6 py-12 sm:px-8 lg:px-24 lg:py-20 max-w-6xl mx-auto">
      <SiteHeader />
      <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.04em] leading-[1.25] mb-6">
        <TextReveal text="Writing" />
      </h1>
      <FadeIn delay={0.3}>
        <p className="max-w-[60ch] text-lg leading-[165%] text-foreground-muted mb-14">
          Notes on building AI products, web engineering and working with teams. Most posts are
          published on <TextLink href={DEVTO_PROFILE}>dev.to</TextLink>.
        </p>
      </FadeIn>

      {entries.length > 0 && (
        <ul className="border-t border-border mb-20">
          {entries.map((entry, i) => {
            const body = (
              <>
                <span className="text-sm text-foreground-muted pt-1">
                  <time dateTime={entry.published}>
                    {dateFormat.format(new Date(entry.published))}
                  </time>
                  <span className="block">{entry.meta}</span>
                </span>
                <span>
                  <span className="flex items-baseline gap-2 text-xl font-medium tracking-tight transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1">
                    {entry.title}
                    <span
                      aria-hidden="true"
                      className="text-accent opacity-0 -translate-x-1 transition duration-500 ease-[var(--ease-out-expo)] group-hover:opacity-100 group-hover:translate-x-0"
                    >
                      {'href' in entry ? '↗' : '→'}
                    </span>
                  </span>
                  {entry.description && (
                    <span className="block mt-2 text-base leading-[165%] text-foreground-muted max-w-[60ch]">
                      {entry.description}
                    </span>
                  )}
                </span>
              </>
            )
            const className = 'group grid gap-2 py-7 sm:grid-cols-[1fr_3fr] sm:gap-10'
            return (
              <li
                key={entry.key}
                className="animate-fadeIn border-b border-border"
                style={{ animationDelay: `${0.35 + Math.min(i, 8) * 0.06}s` }}
              >
                {'href' in entry ? (
                  <a href={entry.href} target="_blank" rel="noopener" className={className}>
                    {body}
                  </a>
                ) : (
                  <Link to="/writing/$slug" params={{ slug: entry.slug }} className={className}>
                    {body}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      )}

      {entries.length === 0 && (
        <p className="mb-20 text-base">
          <TextLink href={DEVTO_PROFILE}>Read my posts on dev.to ↗</TextLink>
        </p>
      )}

      <SiteFooter />
    </main>
  )
}
