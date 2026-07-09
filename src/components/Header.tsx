import { Search, ShoppingCart, Star } from 'lucide-react'
import { ASSETS } from '../assets'

const NAV_LINKS = [
  { label: 'Home', emphasis: true },
  { label: 'Shop', emphasis: false },
  { label: 'Delivery and payment', emphasis: false },
  { label: 'Brands', emphasis: false },
  { label: 'Blog', emphasis: false },
]

function Badge({ count }: { count: number }) {
  return (
    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent border-2 border-background text-white text-[10px] font-bold flex items-center justify-center leading-none">
      {count}
    </span>
  )
}

export default function Header() {
  return (
    <header className="shrink-0 relative z-30 w-full px-4 md:px-8 lg:px-12 py-4">
      <div className="flex items-center justify-between">
        <a href="#" className="animate-fade-in delay-100 shrink-0">
          <img
            src={ASSETS.logo}
            alt="CozyPaws"
            className="w-[130px] h-[33px] lg:w-[205px] lg:h-[52px]"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 animate-fade-in delay-200">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`text-sm font-medium whitespace-nowrap ${
                link.emphasis ? 'text-gray-900' : 'text-gray-600'
              } hover:text-primary transition-colors`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3 animate-fade-in delay-300">
          <button
            aria-label="Search"
            className="hidden sm:flex w-10 h-10 rounded-full border border-gray-300 items-center justify-center text-gray-700 hover:border-primary hover:text-primary transition-colors"
          >
            <Search size={18} />
          </button>

          <button
            aria-label="Favorites"
            className="relative w-10 h-10 rounded-full bg-accent hover:bg-accent-hover flex items-center justify-center transition-colors"
          >
            <Star size={18} className="text-white fill-white" />
            <Badge count={4} />
          </button>

          <button
            aria-label="Cart"
            className="relative w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:border-primary hover:text-primary transition-colors"
          >
            <ShoppingCart size={18} />
            <Badge count={1} />
          </button>

          <img
            src={ASSETS.avatar}
            alt="Account"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  )
}
