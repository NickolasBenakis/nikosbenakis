interface TextLinkProps {
  href: string
  children: React.ReactNode
}

/** Inline external link: dark medium weight, gold underline that draws in on hover. */
export function TextLink({ href, children }: TextLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-draw text-foreground font-medium"
    >
      {children}
    </a>
  )
}
