import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { FadeIn } from '#/components/FadeIn'
import { SiteFooter } from '#/components/SiteFooter'
import { SiteHeader } from '#/components/SiteHeader'
import { TextReveal } from '#/components/TextReveal'
import { getPost } from '#/content/posts'
import { articleJsonLd, breadcrumbJsonLd, jsonLdScript, pageHead } from '#/lib/seo'

export const Route = createFileRoute('/writing/$slug')({
  loader: ({ params }) => {
    const post = getPost(params.slug)
    if (!post) throw notFound()
    return post
  },
  head: ({ loaderData: post }) => {
    if (!post) return {}
    const path = `/writing/${post.slug}`
    const head = pageHead({
      title: `${post.title} — Nikos Benakis`,
      description: post.description,
      path,
    })
    return {
      ...head,
      meta: [
        ...head.meta,
        { property: 'og:type', content: 'article' },
        { property: 'article:published_time', content: post.published },
        { property: 'article:author', content: 'Nikos Benakis' },
      ],
      scripts: [
        jsonLdScript(
          articleJsonLd({
            headline: post.title,
            description: post.description,
            path,
            published: post.published,
          }),
        ),
        jsonLdScript(
          breadcrumbJsonLd([
            ['Writing', '/writing'],
            [post.title, path],
          ]),
        ),
      ],
    }
  },
  component: PostPage,
})

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

function PostPage() {
  const post = Route.useLoaderData()
  return (
    <main className="min-h-screen px-6 py-12 sm:px-8 lg:px-24 lg:py-20 max-w-6xl mx-auto">
      <SiteHeader />
      <article className="max-w-[65ch] mb-20">
        <FadeIn>
          <Link
            to="/writing"
            className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-200"
          >
            ← Writing
          </Link>
        </FadeIn>
        <h1 className="mt-8 text-3xl sm:text-4xl font-medium tracking-[-0.04em] leading-[1.25]">
          <TextReveal text={post.title} delay={0.1} />
        </h1>
        <FadeIn delay={0.4}>
          <p className="mt-4 text-sm text-foreground-muted">
            <time dateTime={post.published}>{dateFormat.format(new Date(post.published))}</time> ·
            Nikos Benakis
          </p>
        </FadeIn>
        <FadeIn delay={0.5}>
          <div className="mt-10 space-y-5 text-lg leading-[175%] text-foreground-muted">
            {post.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>
      </article>
      <SiteFooter />
    </main>
  )
}
