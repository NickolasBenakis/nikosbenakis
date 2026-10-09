const social = [
  { label: 'GitHub', url: 'https://github.com/NickolasBenakis' },
  { label: 'X', url: 'https://x.com/nickolasbenakis' },
  { label: 'dev.to', url: 'https://dev.to/nickolasbenakis' },
  { label: 'Email', url: 'mailto:nickolasbenele@gmail.com' },
]

export function SiteFooter() {
  return (
    <footer className="pt-10 border-t border-border flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <nav aria-label="Elsewhere" className="flex gap-6 text-base font-medium">
        {social.map((item) => (
          <a
            key={item.label}
            href={item.url}
            target={item.url.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <p className="text-sm text-foreground-muted">
        &copy; {new Date().getFullYear()} Nikos Benakis · Athens, GR
      </p>
    </footer>
  )
}
