import { createFileRoute, Link } from '@tanstack/react-router'
import { FadeIn } from '#/components/FadeIn'
import { SiteFooter } from '#/components/SiteFooter'
import { TextLink } from '#/components/TextLink'
import { PERSON_ID, pageHead, SITE_URL, WEBSITE_ID } from '#/lib/seo'

const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}about#profilepage`,
  url: `${SITE_URL}about`,
  name: 'About Nikos Benakis',
  isPartOf: { '@id': WEBSITE_ID },
  mainEntity: { '@id': PERSON_ID },
  dateModified: '2026-10-09',
}

export const Route = createFileRoute('/about')({
  head: () => {
    const head = pageHead({
      title: 'About Nikos Benakis — From EY and Workable to Uizard, Miro and Astrocode',
      description:
        'The full story of Nikos Benakis: engineering studies in Athens, banking and consulting at EY and Fiserv, Workable, Uizard through its acquisition by Miro, and now Fractional CTO, Astrocode co-founder and AI angel investor.',
      path: '/about',
    })
    return {
      ...head,
      meta: [
        ...head.meta,
        { property: 'og:type', content: 'profile' },
        { property: 'profile:first_name', content: 'Nikos' },
        { property: 'profile:last_name', content: 'Benakis' },
      ],
      scripts: [{ type: 'application/ld+json', children: JSON.stringify(profilePageJsonLd) }],
    }
  },
  component: About,
})

function About() {
  return (
    <main className="min-h-screen px-8 py-16 lg:px-24 lg:py-20 max-w-6xl mx-auto">
      <header className="mb-14">
        <Link
          to="/"
          className="text-base text-foreground-muted hover:text-foreground transition-colors duration-200"
        >
          ← Nikos Benakis
        </Link>
        <h1 className="mt-10 text-3xl sm:text-4xl font-medium tracking-[-0.04em] leading-[1.25]">
          My story
        </h1>
      </header>

      <hr className="border-border mb-12" />

      <div className="max-w-[65ch] space-y-14">
        <FadeIn delay={0.2}>
          <section>
            <ChapterTitle number="01">The early years</ChapterTitle>
            <p className="text-base leading-[170%] text-foreground-muted">
              I studied Electrical and Electronics Engineering at the{' '}
              <TextLink href="https://eee.uniwa.gr/en/studies/undergraduate/curriculum">
                University of West Attica
              </TextLink>
              , then did a Masters in Software Development and AI at the{' '}
              <TextLink href="https://www.unipi.gr/unipi/en/">University of Piraeus</TextLink>.
              While still a student I interned at{' '}
              <TextLink href="https://netcompany.com/">Netcompany</TextLink> (Intrasoft at the time)
              as an electrical engineer, working on{' '}
              <TextLink href="https://ruralconnect.gr/">Rural Connect</TextLink>. First time I got
              to build something real.
            </p>
            <p className="text-base leading-[170%] text-foreground-muted mt-4">
              After that, banking and consulting at{' '}
              <TextLink href="https://www.ey.com/">EY</TextLink> and{' '}
              <TextLink href="https://www.fiserv.com/">Fiserv</TextLink>. Big organizations,
              deliberate processes. I learned how decisions actually get made at scale, and how long
              it takes to ship something when everyone has a say. Valuable, but not where I wanted
              to stay.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.3}>
          <section>
            <ChapterTitle number="02">Finding my stride</ChapterTitle>
            <p className="text-base leading-[170%] text-foreground-muted">
              So I made the move into startups.{' '}
              <TextLink href="https://www.workable.com/">Workable</TextLink> is where things
              clicked. I stayed long enough to own and rebuild the core ATS experience, the part
              thousands of recruiters use every day. That's where I got what it means to really care
              about a product, to fight for the details that users actually notice.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.4}>
          <section>
            <ChapterTitle number="03">The startup ride</ChapterTitle>
            <p className="text-base leading-[170%] text-foreground-muted">
              Then <TextLink href="https://uizard.io/">Uizard</TextLink>, as the 6th engineer. That
              one was different. I came in as a full-stack engineer, grew into the Growth Tech Lead
              role, and lived through the whole thing: the pivots, the pressure, and the wins. One
              of the biggest was shipping{' '}
              <TextLink href="https://www.producthunt.com/products/uizard/launches/uizard-autodesigner">
                Autodesigner
              </TextLink>
              , an AI feature that turns text prompts into UI designs. It blew up on Product Hunt
              and became one of the defining moments of the company. Not long after, we were
              acquired by <TextLink href="https://miro.com/">Miro</TextLink>. Hard to summarize.
              Worth every bit of it.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.5}>
          <section>
            <ChapterTitle number="04">Going independent</ChapterTitle>
            <p className="text-base leading-[170%] text-foreground-muted">
              After Miro, I went independent. Today I work as a Product Engineer, Growth Advisor,
              and Fractional CTO. Mostly helping startups work out their tech and product direction.
              Over the years that's brought me to{' '}
              <TextLink href="https://www.perspective.co/">Perspective</TextLink>,{' '}
              <TextLink href="https://www.futurae.com/">Futurae</TextLink>,{' '}
              <TextLink href="https://www.multiplierholdings.com/">Multiplier Holdings</TextLink>,{' '}
              <TextLink href="https://materiatechnica.com/">Materia Labs</TextLink>, and others,
              working on product, growth, and AI. At Materia Labs I led{' '}
              <TextLink href="https://materiatechnica.com/en/instapharm">InstaPharm</TextLink>, an
              AI product built to improve how pharmacies operate and how people with long-term
              health conditions manage their care.
            </p>
            <p className="text-base leading-[170%] text-foreground-muted mt-4">
              Along the way I tried building my own things too.{' '}
              <strong className="text-foreground font-medium">Coyova</strong> was a travel
              marketplace. <TextLink href="https://snapcar.gr/">snapcar.gr</TextLink> was a car
              leasing platform. Neither is active now, but both were worth doing.
            </p>
            <p className="text-base leading-[170%] text-foreground-muted mt-4">
              Right now I co-run <TextLink href="https://www.astrocode.tech/">Astrocode</TextLink>,
              a software agency that helps companies and startups move faster with AI. We work on
              EU-funded projects, build internal tools, and help teams ship more without growing the
              team.
            </p>
            <p className="text-base leading-[170%] text-foreground-muted mt-4">
              On top of that, I angel invest in early-stage AI startups.{' '}
              <TextLink href="https://dikaio.ai">Dikaio.ai</TextLink> is one I'm particularly
              excited about.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.6}>
          <section>
            <ChapterTitle number="05">What keeps me going</ChapterTitle>
            <p className="text-base leading-[170%] text-foreground-muted">
              Curiosity, mostly. I like figuring out how things work, whether that's a new
              technology, a business model, or a team that's somehow shipping faster than it should
              be. That part hasn't changed since I started.
            </p>
            <p className="text-base leading-[170%] text-foreground-muted mt-4">
              The other thing is people, and honestly that's the bigger half. The hard parts of the
              projects I remember were rarely technical. More often it was a room of five or six
              people who all wanted the same outcome, stuck for weeks, because everyone was carrying
              a worry nobody had said out loud yet.
            </p>
            <p className="text-base leading-[170%] text-foreground-muted mt-4">
              Chris Voss has a name for the way out of that: tactical empathy. It sounds colder than
              it is. It mostly means getting curious about the person in front of you before you get
              attached to being right. I don't always manage it. But the teams I've loved working
              with were never the ones that agreed the most. They were the ones where you could say
              the uncomfortable thing out loud and nobody took it personally.
            </p>
            <blockquote className="border-l-2 border-accent-soft pl-5 my-6">
              <p className="text-base leading-[170%] text-foreground italic">
                “If you want to go fast, go alone. If you want to go far, go together.”
              </p>
            </blockquote>
            <p className="text-base leading-[170%] text-foreground-muted mt-4">
              And it was never really about the destination. Morgan Housel writes that the real
              luxury isn't money, it's getting to choose what you spend your days on and who you
              spend them with. That second part is the one I keep coming back to. Launches blur
              together after a while. What I remember is a specific night with a specific person,
              both of us tired, laughing at something completely broken, somehow sure we'd have it
              working by morning.
            </p>
            <p className="text-base leading-[170%] text-foreground-muted mt-4">
              So when I start working with a new team, that's the part I pay attention to. Good
              people, learning from each other, enjoying the thing while we build it. The rest
              usually follows.
            </p>
          </section>
        </FadeIn>
      </div>

      <FadeIn delay={0.7}>
        <div className="mt-16">
          <SiteFooter />
        </div>
      </FadeIn>
    </main>
  )
}

function ChapterTitle({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <h2 className="flex items-baseline gap-3 text-xl font-medium tracking-tight text-foreground mb-4">
      <span className="text-sm font-normal tabular-nums text-accent">{number}</span>
      {children}
    </h2>
  )
}
