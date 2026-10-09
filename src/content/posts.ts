/**
 * Writing. Posts with `draft: true` render only in `npm run dev` — they are
 * hidden from the live site, the sitemap and llms.txt until you flip the flag.
 */
export type Post = {
  slug: string
  title: string
  description: string
  /** ISO date */
  published: string
  draft: boolean
  paragraphs: Array<string>
}

const allPosts: Array<Post> = [
  {
    slug: 'tactical-empathy-for-engineering-teams',
    title: 'The hard part is rarely technical',
    description:
      'Why the teams that ship fastest are the ones where people can say the uncomfortable thing out loud — and what tactical empathy has to do with it.',
    published: '2026-10-10',
    draft: true,
    paragraphs: [
      'The hard parts of the projects I remember were rarely technical. More often it was a room of five or six people who all wanted the same outcome, stuck for weeks, because everyone was carrying a worry nobody had said out loud yet.',
      'Chris Voss has a name for the way out of that: tactical empathy. It sounds colder than it is. It mostly means getting curious about the person in front of you before you get attached to being right.',
      "I don't always manage it. But the teams I've loved working with were never the ones that agreed the most. They were the ones where you could say the uncomfortable thing out loud and nobody took it personally.",
      "Morgan Housel writes that the real luxury isn't money, it's getting to choose what you spend your days on and who you spend them with. That second part is the one I keep coming back to. Launches blur together after a while. What I remember is a specific night with a specific person, both of us tired, laughing at something completely broken, somehow sure we'd have it working by morning.",
      'So when I start working with a new team, that is the part I pay attention to first. Good people, learning from each other, enjoying the thing while we build it. The rest usually follows.',
    ],
  },
]

export const posts = allPosts
  .filter((post) => import.meta.env.DEV || !post.draft)
  .sort((a, b) => b.published.localeCompare(a.published))

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug)
}
