import { ArrowRight, ArrowUpRight, Play, Plus, Star } from 'lucide-react'
import { ASSETS } from '../assets'

export default function HeroMobile() {
  return (
    <div className="block md:hidden absolute inset-0 flex flex-col overflow-hidden px-4">
      {/* Top section */}
      <div className="shrink-0 text-center pt-2">
        <h1 className="font-serif-display text-[#1a3d1a] text-[36px] leading-[0.95] tracking-tight animate-text-reveal">
          Everything Your Pets Love
        </h1>
        <p className="mt-2 text-gray-600 text-sm animate-fade-up delay-200">
          Toys, treats and gear picked with your best friend in mind.
        </p>
        <button className="mt-3 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white rounded-full px-5 py-2.5 font-medium text-sm transition-colors animate-scale-in delay-300">
          Explore Products <ArrowRight size={14} />
        </button>
      </div>

      {/* Two cards side by side */}
      <div className="flex gap-3 mt-4 shrink-0">
        <div className="relative flex-1 aspect-square rounded-2xl overflow-hidden animate-slide-up delay-400">
          <img
            src={ASSETS.productCard}
            alt="Cozy Cat House"
            className="w-full h-full object-cover"
          />
          <button
            aria-label="View product"
            className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center"
          >
            <ArrowUpRight size={14} className="text-white" />
          </button>
        </div>
        <div className="relative flex-1 aspect-[3/4] rounded-2xl overflow-hidden animate-slide-up delay-500">
          <img
            src={ASSETS.videoCard}
            alt="Product reviews"
            className="w-full h-full object-cover"
          />
          <button
            aria-label="Play video"
            className="absolute left-1/2 -translate-x-1/2 bottom-3 w-9 h-9 rounded-full bg-primary flex items-center justify-center"
          >
            <Play size={14} className="text-white fill-white" />
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center justify-center gap-4 mt-4 shrink-0 animate-fade-up delay-600">
        <div className="flex items-center gap-2">
          <div className="flex items-center -space-x-2">
            <img
              src={ASSETS.avatar}
              alt=""
              className="w-8 h-8 rounded-full border-2 border-background object-cover"
            />
            <div className="w-8 h-8 rounded-full bg-primary border-2 border-background flex items-center justify-center">
              <Plus size={12} className="text-white" />
            </div>
          </div>
          <span className="text-primary font-semibold text-sm">98K+</span>
        </div>
        <div className="w-px h-6 bg-gray-300" />
        <div className="flex items-center gap-1.5">
          <Star size={16} className="text-accent fill-accent" />
          <span className="text-primary font-semibold text-sm">4.6</span>
        </div>
      </div>

      {/* Bottom images */}
      <div className="mt-auto flex items-end">
        <div className="flex-1 animate-photo-reveal delay-700">
          <img src={ASSETS.bottomLeft} alt="" className="w-full h-auto block" />
        </div>
        <div className="flex-[1.265] animate-photo-reveal delay-600">
          <img src={ASSETS.bottomCenter} alt="" className="w-full h-auto block" />
        </div>
        <div className="flex-1 animate-photo-reveal delay-800">
          <img src={ASSETS.bottomRight} alt="" className="w-full h-auto block" />
        </div>
      </div>
    </div>
  )
}
