interface TextLinkProps {
  href: string
  children: React.ReactNode
}

/** Inline external link: dark medium weight, gold underline on hover. */
export function TextLink({ href, children }: TextLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground font-medium underline decoration-transparent decoration-1 underline-offset-4 hover:decoration-accent-soft transition-colors duration-200"
    >
      {children}
    </a>
  )
}
