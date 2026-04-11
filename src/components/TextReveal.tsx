interface TextRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function TextReveal({
  children,
  delay = 0,
  className = '',
}: TextRevealProps) {
  return (
    <span className="inline-block overflow-hidden">
      <span
        className={`inline-block animate-reveal ${className}`}
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
      </span>
    </span>
  )
}
