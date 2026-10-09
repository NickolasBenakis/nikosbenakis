import { createServerFn } from '@tanstack/react-start'

export const DEVTO_USERNAME = 'nickolasbenakis'
export const DEVTO_PROFILE = `https://dev.to/${DEVTO_USERNAME}`

export type ExternalPost = {
  title: string
  description: string
  url: string
  published: string
  readingMinutes: number
  tags: Array<string>
}

type DevtoArticle = {
  title: string
  description: string
  url: string
  published_at: string
  reading_time_minutes: number
  tag_list: Array<string>
}

const ONE_HOUR = 60 * 60 * 1000
let cache: { at: number; posts: Array<ExternalPost> } | undefined

/**
 * Latest public dev.to articles, fetched on the server and cached in memory for
 * an hour. Any failure returns [] so the page still renders.
 */
export const getDevtoPosts = createServerFn({ method: 'GET' }).handler(async () => {
  if (cache && Date.now() - cache.at < ONE_HOUR) return cache.posts
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${DEVTO_USERNAME}&per_page=30`, {
      headers: { accept: 'application/json' },
      signal: AbortSignal.timeout(4000),
    })
    if (!res.ok) return cache?.posts ?? []
    const articles = (await res.json()) as Array<DevtoArticle>
    const posts = articles.map((article) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      published: article.published_at.slice(0, 10),
      readingMinutes: article.reading_time_minutes,
      tags: article.tag_list ?? [],
    }))
    cache = { at: Date.now(), posts }
    return posts
  } catch {
    return cache?.posts ?? []
  }
})
