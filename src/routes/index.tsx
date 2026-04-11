import { createFileRoute, Link } from '@tanstack/react-router'
import { TextReveal } from '#/components/TextReveal'
import { FadeIn } from '#/components/FadeIn'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="min-h-screen px-8 py-16 lg:px-24 lg:py-20 max-w-6xl mx-auto">
      <header className="mb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          <div className="lg:max-w-[55%]">
            <h1 className="text-4xl font-medium tracking-[-0.04em] leading-[1.3] mb-8">
              <TextReveal>
                Hi, I'm Nikos. I build AI products and grow startups through experimentation.
              </TextReveal>
            </h1>
            <FadeIn delay={0.3}>
              <p className="text-xl leading-[170%] text-foreground-muted italic">
                Product Engineer, Growth Advisor, and Fractional CTO. I help
                companies grow faster by designing experiment strategies that
                improve conversion, activation, and retention. I helped rebuild
                the core product at Workable, scaled Uizard from 6 engineers
                to acquisition by Miro, and now I work with startups on their
                tech, product, and growth strategy. I'm also
                an
                angel investor in{' '}
                <a href="https://dikaio.ai" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium not-italic hover:text-accent transition-colors duration-200">Dikaio.ai</a>,
                the first AI Legal copilot in Greece.
              </p>
              <Link
                to="/about"
                className="inline-block mt-6 text-base font-medium text-accent hover:underline transition-colors duration-200"
              >
                Read my full story
              </Link>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="shrink-0">
              <img
                src="/profile.JPEG"
                alt="Nikos Benakis"
                className="w-56 h-72 lg:w-72 lg:h-96 object-cover object-[center_25%] rounded-lg shadow-xl"
              />
            </div>
          </FadeIn>
        </div>
      </header>

      <FadeIn delay={0.4}>
        <section className="mb-16">
          <h2 className="text-2xl font-medium tracking-tight mb-8">
            Worked with companies like
          </h2>
          <div className="flex flex-wrap gap-6 items-center">
            {companies.map((item) => (
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

      <FadeIn delay={0.45}>
        <section className="mb-16">
          <h2 className="text-2xl font-medium tracking-tight mb-8">
            Portfolio Investments
          </h2>
          <div className="flex flex-wrap gap-6 items-center">
            {portfolio.map((item) => (
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

      <FadeIn delay={0.5}>
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

      <FadeIn delay={0.6}>
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

      <FadeIn delay={0.7}>
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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold tracking-widest uppercase text-foreground-muted mb-6">
      {children}
    </h2>
  )
}

const portfolio = [
  { name: 'Dikaio.ai', logo: '/logos/dikaio.svg' },
]

const education = [
  { name: 'University of West Attica', logo: '/logos/uniwa.png' },
  { name: 'University of Piraeus', logo: '/logos/unipi.png' },
]

const companies = [
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
  { name: 'Shell', logo: '/logos/shell.png' },
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
  // TODO: update with your real LinkedIn URL
  { label: 'LinkedIn', url: 'https://linkedin.com/in/' },
  // TODO: update with your real email
  { label: 'Email', url: 'mailto:hello@nikosbenakis.com' },
]
