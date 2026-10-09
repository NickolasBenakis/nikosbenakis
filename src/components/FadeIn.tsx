interface FadeInProps {
  children: React.ReactNode
  /** Seconds before the entrance starts (load-triggered only) */
  delay?: number
  /** Reveal as it scrolls into view instead of on load */
  onScroll?: boolean
  className?: string
}

export function FadeIn({ children, delay = 0, onScroll = false, className = '' }: FadeInProps) {
  return (
    <div
      className={`${onScroll ? 'reveal-on-scroll' : 'animate-fadeIn'} ${className}`}
      style={onScroll ? undefined : { animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
