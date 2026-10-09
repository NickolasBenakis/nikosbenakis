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
    <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10 sm:gap-y-12">
      {items.map((item, i) => (
        <li
          key={item.name}
          className="animate-fadeIn flex items-center justify-center h-12"
          style={{ animationDelay: `${delay + i * 0.05}s` }}
        >
          <img
            src={item.logo}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="logo max-h-9 lg:max-h-10 max-w-[110px] w-auto object-contain"
          />
          <span className="sr-only">{item.name}</span>
        </li>
      ))}
    </ul>
  )
}
