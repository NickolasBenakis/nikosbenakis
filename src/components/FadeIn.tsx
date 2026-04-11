interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function FadeIn({
  children,
  delay = 0,
  className = '',
}: FadeInProps) {
  return (
    <div
      className={`animate-fadeIn ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
