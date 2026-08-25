type Logo = {
  name: string
  logo: string
}

export function LogoGrid({ items }: { items: Array<Logo> }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex items-center justify-center h-24 lg:h-28 px-6 bg-white border border-foreground/20"
        >
          <img
            src={item.logo}
            alt={item.name}
            title={item.name}
            loading="lazy"
            className="max-h-10 lg:max-h-12 max-w-full w-auto object-contain grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-200"
          />
        </div>
      ))}
    </div>
  )
}
