type Logo = {
  name: string
  logo: string
}

/**
 * Greyscale logo row. Each company name is real text (visually hidden) so
 * search engines, LLMs and screen readers read names, not images.
 */
export function LogoRow({ items, delay = 0 }: { items: Array<Logo>; delay?: number }) {
  return (
    <ul className="flex flex-wrap items-center gap-x-10 gap-y-6 sm:gap-x-12">
      {items.map((item, i) => (
        <li
          key={item.name}
          className="animate-fadeIn flex items-center h-8"
          style={{ animationDelay: `${delay + i * 0.05}s` }}
        >
          <img
            src={item.logo}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="logo max-h-8 max-w-[96px] w-auto object-contain"
          />
          <span className="sr-only">{item.name}</span>
        </li>
      ))}
    </ul>
  )
}
