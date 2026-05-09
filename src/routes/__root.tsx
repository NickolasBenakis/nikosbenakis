import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Nikos Benakis' },
      { name: 'description', content: 'Software engineer and founder focused on AI and product.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.nikosbenakis.com' },
      { property: 'og:title', content: 'Nikos Benakis' },
      { property: 'og:description', content: 'Software engineer and founder focused on AI and product.' },
      { property: 'og:image', content: 'https://www.nikosbenakis.com/profile.JPEG' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Nikos Benakis' },
      { name: 'twitter:description', content: 'Software engineer and founder focused on AI and product.' },
      { name: 'twitter:image', content: 'https://www.nikosbenakis.com/profile.JPEG' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'preload',
        href: '/fonts/GeistVF.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
