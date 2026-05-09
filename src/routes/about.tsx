import { createFileRoute, Link } from '@tanstack/react-router'
import { FadeIn } from '#/components/FadeIn'

export const Route = createFileRoute('/about')({ component: About })

function About() {
  return (
    <main className="min-h-screen px-8 py-16 lg:px-24 lg:py-20 max-w-6xl mx-auto">
      <header className="mb-16">
        <Link
          to="/"
          className="text-base text-foreground-muted hover:text-foreground transition-colors duration-200"
        >
          Nikos Benakis
        </Link>
      </header>

      <hr className="border-border mb-12" />

      <div className="space-y-12">
        <FadeIn delay={0.2}>
          <section>
            <ChapterTitle>The early years</ChapterTitle>
            <p className="text-base leading-[170%] text-foreground-muted">
              I studied Electrical and Electronics Engineering at the{' '}
              <a
                href="https://eee.uniwa.gr/en/studies/undergraduate/curriculum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                University of West Attica
              </a>
              , then did a Masters in Software Development and AI at the{' '}
              <a
                href="https://www.unipi.gr/unipi/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                University of Piraeus
              </a>
              . While still a student I interned at{' '}
              <a
                href="https://www.intrasoftintl.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Intrasoft
              </a>{' '}
              as an electrical engineer, working on{' '}
              <a
                href="https://ruralconnect.gr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Rural Connect
              </a>
              . First time I got to build something real.
            </p>
            <p className="text-base leading-[170%] text-foreground-muted mt-4">
              After that, banking and consulting at{' '}
              <a
                href="https://www.ey.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                EY
              </a>{' '}
              and{' '}
              <a
                href="https://www.fiserv.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Fiserv
              </a>.
              Big organizations, deliberate processes. I learned how decisions
              actually get made at scale, and how long it takes to ship
              something when everyone has a say. Valuable, but not where I
              wanted to stay.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.3}>
          <section>
            <ChapterTitle>Finding my stride</ChapterTitle>
            <p className="text-base leading-[170%] text-foreground-muted">
              So I made the move into startups.{' '}
              <a
                href="https://www.workable.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Workable
              </a>{' '}
              is where things clicked. I stayed long enough to own and rebuild
              the core ATS experience, the part thousands of recruiters use
              every day. That's where I got what it means to really care about
              a product, to fight for the details that users actually notice.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.4}>
          <section>
            <ChapterTitle>The startup ride</ChapterTitle>
            <p className="text-base leading-[170%] text-foreground-muted">
              Then{' '}
              <a
                href="https://uizard.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Uizard
              </a>
              , as the 6th engineer. That one was different. I came in as a
              full-stack engineer, grew into the Growth Tech Lead role, and
              lived through the whole thing: the pivots, the pressure, and the
              wins. One of the biggest was shipping{' '}
              <a
                href="https://www.producthunt.com/products/uizard/launches/uizard-autodesigner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Autodesigner
              </a>
              , an AI feature that turns text prompts into UI designs. It blew
              up on Product Hunt and became one of the defining moments of the
              company. Not long after, we were acquired by{' '}
              <a
                href="https://miro.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Miro
              </a>
              . Hard to summarize. Worth every bit of it.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.5}>
          <section>
            <ChapterTitle>Going independent</ChapterTitle>
            <p className="text-base leading-[170%] text-foreground-muted">
              After Miro, I went independent. Today I work as a Product
              Engineer, Growth Advisor, and Fractional CTO. Mostly helping
              startups work out their tech and product direction. Over the
              years that's brought me to{' '}
              <a
                href="https://www.perspective.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Perspective
              </a>,{' '}
              <a
                href="https://www.futurae.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Futurae
              </a>,{' '}
              <a
                href="https://www.multiplierholdings.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Multiplier Holdings
              </a>,
              and others, working on product, growth, and AI.
            </p>
            <p className="text-base leading-[170%] text-foreground-muted mt-4">
              Along the way I tried building my own things too. <strong className="text-foreground font-medium">Coyova</strong>{' '}
              was a travel marketplace.{' '}
              <a
                href="https://snapcar.gr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                snapcar.gr
              </a>{' '}
              was a car leasing platform. Neither is active now, but both were
              worth doing.
            </p>
            <p className="text-base leading-[170%] text-foreground-muted mt-4">
              Right now I co-run{' '}
              <a
                href="https://www.astrocode.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Astrocode
              </a>
              , a software agency that helps companies and startups move faster
              with AI. We work on EU-funded projects, build internal tools, and
              help teams ship more without growing the team.
            </p>
            <p className="text-base leading-[170%] text-foreground-muted mt-4">
              I'm also involved with{' '}
              <a
                href="https://materiatechnica.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Materia Technica
              </a>
              , which is building AI tools to improve how pharmacies operate
              and how people with long-term health conditions manage their care.
            </p>
            <p className="text-base leading-[170%] text-foreground-muted mt-4">
              On top of that, I angel invest in early-stage AI startups.{' '}
              <a
                href="https://dikaio.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Dikaio.ai
              </a>{' '}
              is one I'm particularly excited about.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.6}>
          <section>
            <ChapterTitle>What keeps me going</ChapterTitle>
            <p className="text-base leading-[170%] text-foreground-muted">
              Curiosity, mostly. I like figuring out how things work, whether
              that's a new technology, a business model, or a team that's
              somehow shipping faster than it should be. That part hasn't
              changed since I started.
            </p>
            <p className="text-base leading-[170%] text-foreground-muted mt-4">
              The other thing is people. The best work I've been part of came
              from teams where people actually wanted to be there. That's what
              I look for when I take on new work, and it's what I try to bring
              to the teams I work with.
            </p>
          </section>
        </FadeIn>
      </div>

      <hr className="border-border my-14" />

      <FadeIn delay={0.9}>
        <section className="mb-14">
          <SectionTitle>Elsewhere</SectionTitle>
          <div className="flex gap-6 text-base font-medium">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={1.0}>
        <footer className="pt-12 border-t border-border flex items-center gap-3">
          <img src="/favicon.svg" alt="NB" className="w-6 h-6 shrink-0" />
          <p className="text-sm text-foreground-muted">
            &copy; {new Date().getFullYear()} Nikos Benakis
          </p>
        </footer>
      </FadeIn>
    </main>
  )
}

function ChapterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg font-semibold tracking-wide uppercase text-foreground mb-4">
      {children}
    </h2>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold tracking-widest uppercase text-foreground-muted mb-6">
      {children}
    </h2>
  )
}

const social = [
  { label: 'GitHub', url: 'https://github.com/NickolasBenakis' },
  { label: 'X', url: 'https://x.com/nickolasbenakis' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/' },
  { label: 'Email', url: 'mailto:hello@nikosbenakis.com' },
]

