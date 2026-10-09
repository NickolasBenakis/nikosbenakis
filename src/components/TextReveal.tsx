interface TextRevealProps {
  text: string
  /** Seconds before the first word starts */
  delay?: number
}

/** Word-by-word masked rise for headlines. Words stay plain text with real spaces for SEO. */
export function TextReveal({ text, delay = 0 }: TextRevealProps) {
  const words = text.split(' ')
  return (
    <span style={{ '--delay': `${delay}s` } as React.CSSProperties}>
      {words.map((word, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static text, words can repeat
        <span key={i}>
          <span className="reveal-word">
            <span style={{ '--i': i } as React.CSSProperties}>{word}</span>
          </span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </span>
  )
}
