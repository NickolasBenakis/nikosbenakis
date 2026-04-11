import { createFileRoute } from '@tanstack/react-router'
import { TextReveal } from '#/components/TextReveal'
import { FadeIn } from '#/components/FadeIn'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="min-h-screen px-8 py-16 lg:px-24 lg:py-20 max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-2xl font-medium tracking-tight">
          <TextReveal>Nikos Benakis</TextReveal>
        </h1>
      </header>

      <hr className="border-border mb-12" />

      {/* Bio */}
      <FadeIn delay={0.3}>
        <section className="mb-14">
          <p className="text-sm leading-[170%] text-foreground-muted max-w-[480px]">
            I'm a software engineer and founder focused on AI and product. Over
            the past decade I've built products at EY, Workable, and Uizard
            (acquired by Miro), worked alongside great people at Multiplier
            Holdings, and founded snapcar.gr. Currently building at Ben Labs.
          </p>
        </section>
      </FadeIn>

      {/* Work */}
      <FadeIn delay={0.4}>
        <section className="mb-14">
          <SectionTitle>Work</SectionTitle>
          <ul className="space-y-3 text-sm list-none p-0 m-0">
            {work.map((item) => (
              <li
                key={item.company}
                className="flex justify-between items-baseline"
              >
                <span>
                  <span className="font-medium">{item.company}</span>
                  <span className="text-foreground-muted">
                    {' — '}
                    {item.role}
                  </span>
                </span>
                {item.current && (
                  <span className="text-[11px] text-accent">now</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      {/* Projects */}
      <FadeIn delay={0.5}>
        <section className="mb-14">
          <SectionTitle>Projects</SectionTitle>
          <ul className="space-y-3 text-sm list-none p-0 m-0">
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
                  {' — '}
                  {item.description}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      {/* Elsewhere */}
      <FadeIn delay={0.6}>
        <section className="mb-14">
          <SectionTitle>Elsewhere</SectionTitle>
          <div className="flex gap-6 text-sm font-medium">
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

      {/* Footer */}
      <FadeIn delay={0.7}>
        <footer className="pt-12 border-t border-border">
          <p className="text-xs text-foreground-muted">
            &copy; {new Date().getFullYear()} Nikos Benakis
          </p>
        </footer>
      </FadeIn>
    </main>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[11px] font-semibold tracking-widest uppercase text-foreground-muted mb-6">
      {children}
    </h2>
  )
}

// ——————————————————————————————————————————
// Data — update these with your real details
// ——————————————————————————————————————————

const work = [
  { company: 'Ben Labs', role: 'Engineering', current: true },
  { company: 'Uizard / Miro', role: 'Tech Lead', current: false },
  { company: 'Multiplier Holdings', role: 'Engineering', current: false },
  { company: 'Workable', role: 'Software Engineer', current: false },
  { company: 'EY', role: 'Consultant', current: false },
  { company: 'snapcar.gr', role: 'Founder', current: false },
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
