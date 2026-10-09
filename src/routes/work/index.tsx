import { createFileRoute, Link } from '@tanstack/react-router'
import { FadeIn } from '#/components/FadeIn'
import { SiteFooter } from '#/components/SiteFooter'
import { SiteHeader } from '#/components/SiteHeader'
import { TextReveal } from '#/components/TextReveal'
import { WorkWithMe } from '#/components/WorkWithMe'
import { caseStudies } from '#/content/caseStudies'
import { breadcrumbJsonLd, jsonLdScript, pageHead } from '#/lib/seo'

export const Route = createFileRoute('/work/')({
  head: () => ({
    ...pageHead({
      title: 'Selected work — Nikos Benakis',
      description:
        'Case studies from Nikos Benakis: shipping Autodesigner at Uizard before the Miro acquisition, leading the InstaPharm AI product at Materia Labs, and rebuilding the core ATS at Workable.',
      path: '/work',
    }),
    scripts: [jsonLdScript(breadcrumbJsonLd([['Work', '/work']]))],
  }),
  component: Work,
})

function Work() {
  return (
    <main className="min-h-screen px-6 py-12 sm:px-8 lg:px-24 lg:py-20 max-w-6xl mx-auto">
      <SiteHeader />
      <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.04em] leading-[1.25] mb-6">
        <TextReveal text="Selected work" />
      </h1>
      <FadeIn delay={0.3}>
        <p className="max-w-[60ch] text-lg leading-[165%] text-foreground-muted mb-14">
          A few projects that shaped how I build: AI products shipped to real users, and the core
          product work behind them.
        </p>
      </FadeIn>

      <ul className="border-t border-border mb-20">
        {caseStudies.map((study, i) => (
          <li
            key={study.slug}
            className="animate-fadeIn border-b border-border"
            style={{ animationDelay: `${0.4 + i * 0.08}s` }}
          >
            <Link
              to="/work/$slug"
              params={{ slug: study.slug }}
              className="group grid gap-2 py-7 sm:grid-cols-[1fr_2fr] sm:gap-10"
            >
              <span className="text-sm text-foreground-muted pt-1">{study.company}</span>
              <span>
                <span className="flex items-baseline gap-2 text-xl font-medium tracking-tight transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1">
                  {study.title}
                  <span
                    aria-hidden="true"
                    className="text-accent opacity-0 -translate-x-1 transition duration-500 ease-[var(--ease-out-expo)] group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    →
                  </span>
                </span>
                <span className="block mt-2 text-base leading-[165%] text-foreground-muted max-w-[60ch]">
                  {study.summary}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <WorkWithMe />
      <SiteFooter />
    </main>
  )
}
