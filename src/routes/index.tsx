import { createFileRoute, Link } from '@tanstack/react-router'
import { TextReveal } from '#/components/TextReveal'
import { FadeIn } from '#/components/FadeIn'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="min-h-screen px-8 py-16 lg:px-24 lg:py-20 max-w-5xl mx-auto">
      <header className="mb-16">
        <h1 className="text-4xl font-medium tracking-[-0.04em]">
          <TextReveal>Nikos Benakis</TextReveal>
        </h1>
      </header>

      <hr className="border-border mb-12" />

      <FadeIn delay={0.3}>
        <section className="mb-14">
          <p className="text-lg leading-[170%] text-foreground-muted">
            Software engineer with ~10 years building products across banking,
            startups, and my own ventures. I've gone from consulting at{' '}
            <a href="https://www.ey.com/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent transition-colors duration-200">EY</a> to
            rebuilding core product at{' '}
            <a href="https://www.workable.com/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent transition-colors duration-200">Workable</a>,
            to joining{' '}
            <a href="https://uizard.io/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent transition-colors duration-200">Uizard</a> as the 6th
            engineer and growing it until{' '}
            <a href="https://miro.com/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent transition-colors duration-200">Miro</a> acquired us.
            These days I help startups as a Product Engineer, Growth Advisor,
            and Fractional CTO.
          </p>
          <Link
            to="/about"
            className="inline-block mt-4 text-base font-medium text-accent hover:underline transition-colors duration-200"
          >
            Read my full story
          </Link>
        </section>
      </FadeIn>

      <FadeIn delay={0.4}>
        <section className="mb-14">
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
                className="h-16 w-auto object-contain"
              />
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.45}>
        <section className="mb-14">
          <h2 className="text-2xl font-medium tracking-tight mb-8">
            Education &amp; Research
          </h2>
          <div className="flex flex-wrap gap-6 items-center">
            {education.map((item) => (
              <img
                key={item.name}
                src={item.logo}
                alt={item.name}
                title={item.name}
                className="h-16 w-auto object-contain"
              />
            ))}
          </div>
        </section>
      </FadeIn>

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

const education = [
  { name: 'University of West Attica', logo: '/logos/uniwa.png' },
  { name: 'University of Piraeus', logo: '/logos/unipi.png' },
]

const companies = [
  { name: 'Intrasoft', logo: '/logos/intrasoft.png' },
  { name: 'Rural Connect', logo: '/logos/ruralconnect.png' },
  { name: 'EY', logo: '/logos/ey.png' },
  { name: 'Fiserv', logo: '/logos/fiserv.svg' },
  { name: 'Workable', logo: '/logos/workable.png' },
  { name: 'Uizard', logo: '/logos/uizard.png' },
  { name: 'Miro', logo: '/logos/miro.png' },
  { name: 'Multiplier Holdings', logo: '/logos/multiplier.png' },
  { name: 'Perspective', logo: '/logos/perspective.png' },
  { name: 'Futurae', logo: '/logos/futurae.jpg' },
  { name: 'Arcjet', logo: '/logos/arcjet.png' },
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
