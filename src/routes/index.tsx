import { createFileRoute, Link } from '@tanstack/react-router'
import { FadeIn } from '#/components/FadeIn'
import { LogoRow } from '#/components/LogoRow'
import { SiteFooter } from '#/components/SiteFooter'
import { SiteHeader } from '#/components/SiteHeader'
import { TextLink } from '#/components/TextLink'
import { TextReveal } from '#/components/TextReveal'
import { WorkWithMe } from '#/components/WorkWithMe'
import { caseStudies } from '#/content/caseStudies'
import { DEFAULT_DESCRIPTION, pageHead } from '#/lib/seo'

export const Route = createFileRoute('/')({
  head: () =>
    pageHead({
      title: 'Nikos Benakis — Product Engineer & Fractional CTO, Athens',
      description: DEFAULT_DESCRIPTION,
      path: '/',
    }),
  component: Home,
})

function Home() {
  return (
    <main className="min-h-screen px-6 py-12 sm:px-8 lg:px-24 lg:py-20 max-w-6xl mx-auto">
      <SiteHeader />
      <section aria-label="Introduction" className="mb-20">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          <div className="lg:max-w-[55%]">
            <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.04em] leading-[1.25] mb-6 lg:mb-8">
              <TextReveal text="Hi, I'm Nikos Benakis. I build AI products and grow startups through experimentation." />
            </h1>
            <FadeIn delay={0.45}>
              <p className="text-lg sm:text-xl leading-[165%] text-foreground-muted">
                I advise startups as a fractional CTO, product engineer, and growth advisor. I also
                angel invest in AI startups like{' '}
                <TextLink href="https://dikaio.ai">Dikaio.ai</TextLink>.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-1.5 mt-6 text-base font-medium text-accent"
              >
                Read my full story
                <span
                  aria-hidden="true"
                  className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </FadeIn>
          </div>
          <div className="shrink-0">
            <div
              className="animate-fadeIn inline-block rounded-lg shadow-lg overflow-hidden"
              style={{ animationDelay: '0.3s' }}
            >
              <picture>
                <source srcSet="/profile.webp" type="image/webp" />
                <img
                  src="/profile.JPEG"
                  alt="Portrait of Nikos Benakis"
                  width={288}
                  height={384}
                  fetchPriority="high"
                  className="block w-28 h-36 sm:w-40 sm:h-52 lg:w-72 lg:h-96 object-cover object-[center_25%]"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <FadeIn delay={0.7}>
          <SectionTitle>Worked with</SectionTitle>
        </FadeIn>
        <LogoRow items={companies} delay={0.8} />
      </section>

      <FadeIn onScroll>
        <section className="mb-16">
          <div className="flex items-baseline justify-between gap-6">
            <SectionTitle>Selected work</SectionTitle>
            <Link
              to="/work"
              className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-200 mb-6"
            >
              All case studies →
            </Link>
          </div>
          <ul className="border-t border-border">
            {caseStudies.map((study) => (
              <li key={study.slug} className="border-b border-border">
                <Link
                  to="/work/$slug"
                  params={{ slug: study.slug }}
                  className="group grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
                >
                  <span className="flex items-baseline gap-2 text-lg font-medium transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1">
                    {study.title}
                    <span
                      aria-hidden="true"
                      className="text-accent opacity-0 -translate-x-1 transition duration-500 ease-[var(--ease-out-expo)] group-hover:opacity-100 group-hover:translate-x-0"
                    >
                      →
                    </span>
                  </span>
                  <span className="text-sm sm:text-base text-foreground-muted">
                    {study.company}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      <FadeIn onScroll>
        <section className="mb-16">
          <SectionTitle>Ventures</SectionTitle>
          <ul className="border-t border-border">
            {ventures.map((venture) => (
              <li key={venture.name} className="border-b border-border">
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6 py-5"
                >
                  <span className="flex items-baseline gap-2 text-lg font-medium transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1">
                    {venture.name}
                    <span
                      aria-hidden="true"
                      className="text-accent opacity-0 -translate-x-1 transition duration-500 ease-[var(--ease-out-expo)] group-hover:opacity-100 group-hover:translate-x-0"
                    >
                      ↗
                    </span>
                  </span>
                  <span className="text-sm sm:text-base text-foreground-muted text-right">
                    {venture.role}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      <FadeIn onScroll>
        <section className="mb-16">
          <SectionTitle>About</SectionTitle>
          <div className="max-w-[65ch] space-y-5 text-base leading-[170%] text-foreground-muted">
            <p>
              Over the past decade I've worked across banking, consulting, and startups — enterprise
              at EY and Fiserv, core product at Workable, and Uizard from the sixth engineer until
              Miro acquired us. Today I advise startups (seed to Series B) on product, engineering,
              and growth, and work hands-on as a Fractional CTO when teams need someone in the
              trenches.
            </p>
            <p>
              Drop me a line to chat about building AI products, growth experimentation, scaling
              engineering teams, or anything else you're working on.
            </p>
          </div>
        </section>
      </FadeIn>

      <WorkWithMe />

      <FadeIn onScroll>
        <SiteFooter />
      </FadeIn>
    </main>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground-muted mb-6">
      {children}
    </h2>
  )
}

const companies = [
  { name: 'Miro', logo: '/logos/miro.png' },
  { name: 'Uizard', logo: '/logos/uizard.png' },
  { name: 'Workable', logo: '/logos/workable.png' },
  { name: 'Multiplier Holdings', logo: '/logos/multiplier.png' },
  { name: 'Perspective', logo: '/logos/perspective.png' },
  { name: 'Futurae', logo: '/logos/futurae.jpg' },
  { name: 'Arcjet', logo: '/logos/arcjet.png' },
  { name: 'Materia Labs', logo: '/logos/materia.png' },
  { name: 'EY', logo: '/logos/ey.png' },
  { name: 'Fiserv', logo: '/logos/fiserv.svg' },
  { name: 'Netcompany', logo: '/logos/netcompany.png' },
  { name: 'Shell', logo: '/logos/shell.png' },
]

const ventures = [
  { name: 'Astrocode', role: 'Co-founder', url: 'https://www.astrocode.tech/' },
  { name: 'Dikaio.ai', role: 'Angel investor', url: 'https://dikaio.ai' },
]
