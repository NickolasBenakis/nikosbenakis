import { Link } from '@tanstack/react-router'

const linkClass =
  'text-foreground-muted hover:text-foreground transition-colors duration-200 data-[status=active]:text-foreground'

/** Quiet top bar: name home link on the left, a few text links on the right. */
export function SiteHeader() {
  return (
    <header className="animate-fadeIn flex items-center justify-between gap-4 sm:gap-6 mb-14 lg:mb-20 text-sm sm:text-base">
      <Link to="/" className="font-medium text-foreground whitespace-nowrap">
        Nikos Benakis
      </Link>
      <nav aria-label="Main" className="flex items-center gap-4 sm:gap-7">
        <Link to="/work" className={linkClass}>
          Work
        </Link>
        <Link to="/writing" className={linkClass}>
          Writing
        </Link>
        <Link to="/about" className={linkClass}>
          About
        </Link>
        <a
          href={CONTACT_MAILTO}
          className="font-medium text-accent hover:text-foreground transition-colors duration-200"
        >
          Contact
        </a>
      </nav>
    </header>
  )
}

export const CONTACT_MAILTO = 'mailto:nickolasbenele@gmail.com?subject=Working%20together'
