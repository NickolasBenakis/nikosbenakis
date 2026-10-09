import { CONTACT_MAILTO } from '#/components/SiteHeader'

const services = [
  {
    name: 'Fractional CTO',
    detail:
      'Hands-on technical leadership for seed to Series B teams: architecture, hiring, delivery.',
  },
  {
    name: 'AI product engineering',
    detail: 'From prototype to production: shipping AI features users actually adopt.',
  },
  {
    name: 'Growth advisory',
    detail: 'Experiment design and the product loops behind acquisition and activation.',
  },
]

export function WorkWithMe() {
  return (
    <section aria-labelledby="work-with-me" className="reveal-on-scroll mb-16">
      <h2
        id="work-with-me"
        className="text-xs font-semibold tracking-widest uppercase text-foreground-muted mb-6"
      >
        Work with me
      </h2>
      <dl className="grid gap-6 sm:grid-cols-3 mb-10">
        {services.map((service) => (
          <div key={service.name}>
            <dt className="text-lg font-medium mb-1.5">{service.name}</dt>
            <dd className="text-base leading-[165%] text-foreground-muted">{service.detail}</dd>
          </div>
        ))}
      </dl>
      <a
        href={CONTACT_MAILTO}
        className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-surface transition-colors duration-300 hover:bg-accent"
      >
        Start a conversation
        <span
          aria-hidden="true"
          className="transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0.5"
        >
          →
        </span>
      </a>
    </section>
  )
}
