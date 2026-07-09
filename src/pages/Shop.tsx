import { MapPin, Utensils, BedDouble, Puzzle, ShieldCheck, type LucideIcon } from 'lucide-react'

type Product = {
  name: string
  description: string
  price: string
  Icon: LucideIcon
}

const PRODUCTS: Product[] = [
  {
    name: 'Smart GPS Dog Collar',
    description: 'Real-time location tracking and activity monitoring.',
    price: '$59.99',
    Icon: MapPin,
  },
  {
    name: 'Freeze-Dried Raw Dog Food',
    description: 'Minimally processed nutrition with real meat.',
    price: '$34.99',
    Icon: Utensils,
  },
  {
    name: 'Orthopedic Cooling Dog Bed',
    description: 'Memory foam support for joints, all sizes.',
    price: '$89.99',
    Icon: BedDouble,
  },
  {
    name: 'Interactive Puzzle Treat Toy',
    description: 'Mental enrichment that slows down fast eaters.',
    price: '$24.99',
    Icon: Puzzle,
  },
  {
    name: 'No-Pull Adjustable Harness',
    description: 'Comfortable, secure control for daily walks.',
    price: '$39.99',
    Icon: ShieldCheck,
  },
]

export default function Shop() {
  return (
    <section className="flex-1 min-h-0 overflow-y-auto relative">
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="font-serif-display text-primary text-[clamp(32px,5vw,52px)] leading-[0.95] tracking-tight animate-text-reveal">
          Top Dog Products, 2026
        </h1>
        <p className="mt-4 text-gray-600 animate-fade-up delay-200">
          Five of the most-shopped picks for dogs so far this year.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 text-left">
          {PRODUCTS.map((product, i) => (
            <div
              key={product.name}
              className={`bg-white rounded-2xl p-5 shadow-sm flex flex-col items-start animate-scale-in delay-${300 + i * 100}`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <product.Icon size={22} className="text-white" />
              </div>
              <p className="mt-4 font-semibold text-gray-900">{product.name}</p>
              <p className="mt-1 text-sm text-gray-600">{product.description}</p>
              <p className="mt-3 text-primary font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
