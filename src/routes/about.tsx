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
              , then did my Masters in Advanced Informatics and Computing
              Systems (Software Development and Artificial Intelligence) at the{' '}
              <a
                href="https://www.unipi.gr/unipi/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                University of Piraeus
              </a>
              . While still in school I interned at{' '}
              <a
                href="https://www.intrasoftintl.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Intrasoft
              </a>{' '}
              as an electrical engineer, working on the{' '}
              <a
                href="https://ruralconnect.gr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Rural Connect
              </a>{' '}
              project. That's where I first got a taste of building something
              real.
            </p>
            <p className="text-base leading-[170%] text-foreground-muted mt-4">
              From there I moved into banking and consulting at{' '}
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
              Big companies, slow processes, serious stakes. I learned a lot
              about how businesses actually work, how decisions get made, and
              what it takes to ship something inside a large organization. It
              was solid ground, but after a while I realized I wanted to be
              closer to the product. I wanted to build things people would
              actually touch and use every day.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.3}>
          <section>
            <ChapterTitle>Finding my stride</ChapterTitle>
            <p className="text-base leading-[170%] text-foreground-muted">
              So I moved into the startup world.{' '}
              <a
                href="https://www.workable.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Workable
              </a>{' '}
              was where things clicked for me. I stayed there long enough to
              not just contribute, but to own and recreate the core ATS
              experience, the part of the product that thousands of recruiters
              use daily. That's where I learned what it means to really care
              about a product section, to fight for the details that matter to
              actual users.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.4}>
          <section>
            <ChapterTitle>The startup ride</ChapterTitle>
            <p className="text-base leading-[170%] text-foreground-muted">
              Then I joined{' '}
              <a
                href="https://uizard.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Uizard
              </a>{' '}
              as the 6th engineer. That one changed everything. I got to
              experience the entire startup lifecycle firsthand. I started as a
              platform full-stack engineer, eventually grew into the Growth
              Tech Lead role, and went through all of it: the pivots, the late
              nights, the small wins that keep you going, and the big ones that
              make it all worth it. The ride ended when{' '}
              <a
                href="https://miro.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                Miro
              </a>{' '}
              acquired us.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.5}>
          <section>
            <ChapterTitle>Going independent</ChapterTitle>
            <p className="text-base leading-[170%] text-foreground-muted">
              After that, I started doing my own thing. Today I work as a
              freelance Product Engineer, Growth Engineering Advisor, and
              Fractional CTO. I help startups figure out their tech and product
              direction, the same way people helped me figure out mine when I
              was starting out.
            </p>
            <p className="text-base leading-[170%] text-foreground-muted mt-4">
              I've also tried to build my own products along the way.{' '}
              <strong className="text-foreground font-medium">Coyova</strong>{' '}
              was a traveling marketplace.{' '}
              <a
                href="https://snapcar.gr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                snapcar.gr
              </a>{' '}
              was a car leasing platform. Not all of them worked out, and
              that's fine. Every one of them taught me something I wouldn't
              have learned otherwise.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.6}>
          <section>
            <ChapterTitle>What keeps me going</ChapterTitle>
            <p className="text-base leading-[170%] text-foreground-muted">
              Honestly? Curiosity. I just like understanding how things work,
              whether that's a new technology, a business model, or why a team
              operates the way it does. I love learning new things and I don't
              think that ever goes away.
            </p>
            <p className="text-base leading-[170%] text-foreground-muted mt-4">
              But the thing I care about most is people. In a world where AI
              keeps getting more capable, I think the stuff that really matters
              is the human stuff: listening well, building trust, being someone
              others enjoy working with. The best work I've done has always
              come from teams where people genuinely liked being in the room
              together. That's what I look for, and it's what I try to bring.
            </p>
          </section>
        </FadeIn>
      </div>

      <FadeIn delay={0.7}>
        <section className="mt-14 mb-16">
          <h2 className="text-2xl font-medium tracking-tight mb-8">
            Along the way
          </h2>
          <div className="flex flex-wrap gap-6 items-center">
            {companyLogos.map((item) => (
              <img
                key={item.name}
                src={item.logo}
                alt={item.name}
                title={item.name}
                className="h-20 w-auto object-contain"
              />
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.75}>
        <section className="mb-16">
          <h2 className="text-2xl font-medium tracking-tight mb-8">
            My ventures
          </h2>
          <div className="flex flex-wrap gap-6 items-center">
            {ventureLogos.map((item) => (
              <img
                key={item.name}
                src={item.logo}
                alt={item.name}
                title={item.name}
                className="h-20 w-auto object-contain"
              />
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.77}>
        <section className="mb-16">
          <h2 className="text-2xl font-medium tracking-tight mb-8">
            Portfolio Investments
          </h2>
          <div className="flex flex-wrap gap-6 items-center">
            {portfolioLogos.map((item) => (
              <img
                key={item.name}
                src={item.logo}
                alt={item.name}
                title={item.name}
                className="h-20 w-auto object-contain"
              />
            ))}
          </div>
        </section>
      </FadeIn>

      <hr className="border-border mb-14" />

      <FadeIn delay={0.8}>
        <section className="mb-14">
          <SectionTitle>Projects</SectionTitle>
          <ul className="space-y-3 text-base list-none p-0 m-0">
            {projects.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-accent transition-colors duration-200"
                >
                  {item.name}
                </a>
                <span className="text-foreground-muted">
                  , {item.description}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

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

const portfolioLogos = [
  { name: 'Dikaio.ai', logo: '/logos/dikaio.svg' },
]

const ventureLogos = [
  { name: 'Astrocode', logo: '/logos/astrocode.png' },
  { name: 'Materia Technica', logo: '/logos/materia.png' },
]

const projects = [
  {
    name: 'cloudflare-images-client',
    description: 'Cloudflare Images API wrapper',
    url: 'https://github.com/NickolasBenakis/cloudflare-images-client',
  },
  {
    name: 'secure-pdf-chat',
    description: 'AI-powered PDF conversations',
    url: 'https://github.com/NickolasBenakis/secure-pdf-chat',
  },
]

const social = [
  { label: 'GitHub', url: 'https://github.com/NickolasBenakis' },
  { label: 'X', url: 'https://x.com/nickolasbenakis' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/' },
  { label: 'Email', url: 'mailto:hello@nikosbenakis.com' },
]

const educationLogos = [
  { name: 'University of West Attica', logo: '/logos/uniwa.png' },
  { name: 'University of Piraeus', logo: '/logos/unipi.png' },
]

const companyLogos = [
  { name: 'Perspective', logo: '/logos/perspective.png' },
  { name: 'Multiplier Holdings', logo: '/logos/multiplier.png' },
  { name: 'Arcjet', logo: '/logos/arcjet.png' },
  { name: 'Futurae', logo: '/logos/futurae.jpg' },
  { name: 'Miro', logo: '/logos/miro.png' },
  { name: 'Uizard', logo: '/logos/uizard.png' },
  { name: 'Workable', logo: '/logos/workable.png' },
  { name: 'Fiserv', logo: '/logos/fiserv.svg' },
  { name: 'EY', logo: '/logos/ey.png' },
  { name: 'Rural Connect', logo: '/logos/ruralconnect.png' },
  { name: 'Intrasoft', logo: '/logos/intrasoft.png' },
  { name: 'Shell', logo: '/logos/shell.png' },
]
