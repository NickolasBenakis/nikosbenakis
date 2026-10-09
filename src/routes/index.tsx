import { createFileRoute, Link } from '@tanstack/react-router'
import { FadeIn } from '#/components/FadeIn'
import { SiteFooter } from '#/components/SiteFooter'
import { TextLink } from '#/components/TextLink'
import { TextReveal } from '#/components/TextReveal'
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
      <header className="mb-20">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          <div className="lg:max-w-[55%]">
            <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.04em] leading-[1.25] mb-6 lg:mb-8">
              <TextReveal>
                Hi, I'm Nikos Benakis. I build AI products and grow startups through
                experimentation.
              </TextReveal>
            </h1>
            <FadeIn delay={0.2}>
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
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </FadeIn>
          </div>
          <FadeIn delay={0.1}>
            <div className="shrink-0">
              <picture>
                <source srcSet="/profile.webp" type="image/webp" />
                <img
                  src="/profile.JPEG"
                  alt="Portrait of Nikos Benakis"
                  width={288}
                  height={384}
                  fetchPriority="high"
                  className="w-28 h-36 sm:w-40 sm:h-52 lg:w-72 lg:h-96 object-cover object-[center_25%] rounded-lg shadow-lg"
                />
              </picture>
            </div>
          </FadeIn>
        </div>
      </header>

      <FadeIn delay={0.3}>
        <section className="mb-16">
          <SectionTitle>Worked with</SectionTitle>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-lg sm:text-xl font-medium tracking-tight text-foreground">
            {companies.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </section>
      </FadeIn>

      <FadeIn delay={0.35}>
        <section className="mb-16">
          <SectionTitle>Ventures</SectionTitle>
          <ul className="border-t border-border">
            {ventures.map((venture) => (
              <li key={venture.name} className="border-b border-border">
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6 py-4"
                >
                  <span className="text-lg font-medium group-hover:text-accent transition-colors duration-200">
                    {venture.name}
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

      <FadeIn delay={0.4}>
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

      <FadeIn delay={0.45}>
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
  'Miro',
  'Uizard',
  'Workable',
  'Multiplier Holdings',
  'Perspective',
  'Futurae',
  'Arcjet',
  'Materia Labs',
  'EY',
  'Fiserv',
  'Netcompany',
  'Shell',
]

const ventures = [
  { name: 'Astrocode', role: 'Co-founder', url: 'https://www.astrocode.tech/' },
  { name: 'Dikaio.ai', role: 'Angel investor', url: 'https://dikaio.ai' },
]
