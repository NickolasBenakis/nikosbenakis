import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { FadeIn } from '#/components/FadeIn'
import { SiteFooter } from '#/components/SiteFooter'
import { SiteHeader } from '#/components/SiteHeader'
import { TextLink } from '#/components/TextLink'
import { TextReveal } from '#/components/TextReveal'
import { WorkWithMe } from '#/components/WorkWithMe'
import { caseStudies, getCaseStudy } from '#/content/caseStudies'
import { articleJsonLd, breadcrumbJsonLd, jsonLdScript, pageHead } from '#/lib/seo'

export const Route = createFileRoute('/work/$slug')({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug)
    if (!study) throw notFound()
    return study
  },
  head: ({ loaderData: study }) => {
    if (!study) return {}
    const path = `/work/${study.slug}`
    return {
      ...pageHead({ title: `${study.title} — Nikos Benakis`, description: study.summary, path }),
      scripts: [
        jsonLdScript(
          articleJsonLd({
            headline: study.title,
            description: study.summary,
            path,
            published: study.published,
            about: { name: study.company, url: study.companyUrl },
          }),
        ),
        jsonLdScript(
          breadcrumbJsonLd([
            ['Work', '/work'],
            [study.title, path],
          ]),
        ),
      ],
    }
  },
  component: CaseStudyPage,
})

function CaseStudyPage() {
  const study = Route.useLoaderData()
  // Match by slug: loader data is a deserialized copy on the client, not the same object
  const index = caseStudies.findIndex((item) => item.slug === study.slug)
  const next = caseStudies[(index + 1) % caseStudies.length]

  return (
    <main className="min-h-screen px-6 py-12 sm:px-8 lg:px-24 lg:py-20 max-w-6xl mx-auto">
      <SiteHeader />
      <article className="mb-20">
        <FadeIn>
          <Link
            to="/work"
            className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-200"
          >
            ← Selected work
          </Link>
        </FadeIn>
        <h1 className="mt-8 text-3xl sm:text-4xl font-medium tracking-[-0.04em] leading-[1.25] max-w-[22ch]">
          <TextReveal text={study.title} delay={0.1} />
        </h1>

        <FadeIn delay={0.4}>
          <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 border-y border-border py-6 text-sm">
            <div>
              <dt className="text-foreground-muted mb-1">Company</dt>
              <dd>
                <TextLink href={study.companyUrl}>{study.company}</TextLink>
              </dd>
            </div>
            <div>
              <dt className="text-foreground-muted mb-1">Role</dt>
              <dd className="font-medium">{study.role}</dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-foreground-muted mb-1">Focus</dt>
              <dd className="font-medium">{study.tags.join(' · ')}</dd>
            </div>
          </dl>
        </FadeIn>

        {study.results.length > 0 && (
          <FadeIn delay={0.5}>
            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {study.results.map((result) => (
                <div key={result.label}>
                  <dt className="sr-only">{result.label}</dt>
                  <dd>
                    <span className="block text-4xl font-medium tracking-tight">
                      {result.value}
                    </span>
                    <span className="block mt-1 text-sm text-foreground-muted">{result.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        )}

        <FadeIn delay={0.55}>
          <p className="mt-12 max-w-[65ch] text-lg sm:text-xl leading-[165%] text-foreground">
            {study.summary}
          </p>
        </FadeIn>

        <div className="mt-12 max-w-[65ch] space-y-12">
          {study.sections.map((section) => (
            <section key={section.heading} className="reveal-on-scroll">
              <h2 className="text-xl font-medium tracking-tight mb-4">{section.heading}</h2>
              <div className="space-y-4 text-base leading-[170%] text-foreground-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {study.links.length > 0 && (
          <ul className="reveal-on-scroll mt-12 flex flex-wrap gap-x-6 gap-y-2 text-base">
            {study.links.map((link) => (
              <li key={link.url}>
                <TextLink href={link.url}>{link.label} ↗</TextLink>
              </li>
            ))}
          </ul>
        )}
      </article>

      {next && next.slug !== study.slug && (
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="reveal-on-scroll group block border-y border-border py-8 mb-20"
        >
          <span className="block text-xs font-semibold tracking-widest uppercase text-foreground-muted mb-2">
            Next case study
          </span>
          <span className="flex items-baseline gap-2 text-xl sm:text-2xl font-medium tracking-tight transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1">
            {next.title}
            <span aria-hidden="true" className="text-accent">
              →
            </span>
          </span>
        </Link>
      )}

      <WorkWithMe />
      <SiteFooter />
    </main>
  )
}
