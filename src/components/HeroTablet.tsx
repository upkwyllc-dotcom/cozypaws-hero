import { ArrowUpRight, Play, ArrowRight, Plus, Star } from 'lucide-react'
import { ASSETS } from '../assets'

export default function HeroTablet() {
  return (
    <div className="hidden md:block lg:hidden absolute inset-0">
      {/* Text layer */}
      <div className="relative z-[5] text-center px-8 pt-12">
        <h1 className="font-serif-display text-[#1a3d1a] text-7xl leading-[0.95] tracking-tight">
          <span className="block">
            <span className="inline-block animate-word-pop delay-200">Everything</span>
          </span>
          <span className="block">
            <span className="inline-block animate-word-pop delay-300">Your</span>{' '}
            <span className="inline-block animate-word-pop delay-400">Pets</span>{' '}
            <span className="inline-block animate-word-pop delay-500">Love</span>
          </span>
        </h1>
      </div>

      {/* Left product card */}
      <div
        className="absolute top-[80px] left-4 z-20 animate-slide-in-left delay-600"
        style={{ width: '160px' }}
      >
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ aspectRatio: '260 / 257' }}
        >
          <img
            src={ASSETS.productCard}
            alt="Cozy Cat House"
            className="w-full h-full object-cover"
          />
          <button
            aria-label="View product"
            className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-primary hover:bg-primary-hover flex items-center justify-center transition-colors"
          >
            <ArrowUpRight size={14} className="text-white" />
          </button>
        </div>
        <div className="mt-2">
          <p className="text-gray-700 text-xs">Cozy Cat House</p>
          <p className="text-primary font-semibold text-sm">$49.99</p>
        </div>
      </div>

      {/* Right video card */}
      <div
        className="absolute top-[80px] right-4 z-20 animate-slide-in-right delay-700"
        style={{ width: '120px' }}
      >
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ aspectRatio: '177 / 287' }}
        >
          <img
            src={ASSETS.videoCard}
            alt="Product reviews"
            className="w-full h-full object-cover"
          />
          <button
            aria-label="Play video"
            className="absolute left-1/2 -translate-x-1/2 bottom-4 w-9 h-9 rounded-full bg-primary hover:bg-primary-hover flex items-center justify-center transition-colors"
          >
            <Play size={14} className="text-white fill-white" />
          </button>
        </div>
        <p className="mt-2 text-gray-700 text-center text-[11px]">
          Watch Product Reviews on TikTok and YouTube
        </p>
      </div>

      {/* Bottom images */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end">
        <div className="relative flex-1 animate-photo-reveal delay-700">
          <img
            src={ASSETS.bottomLeft}
            alt=""
            className="w-full h-auto block"
            style={{ maxHeight: '60vh' }}
          />
          <div
            className="absolute left-4 flex items-center gap-2 animate-scale-in delay-1000"
            style={{ bottom: 'clamp(16px, 3vh, 30px)' }}
          >
            <div className="flex items-center -space-x-2">
              <img
                src={ASSETS.avatar}
                alt=""
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <div className="w-8 h-8 rounded-full bg-primary border-2 border-white flex items-center justify-center">
                <Plus size={12} className="text-white" />
              </div>
            </div>
            <span className="text-white font-semibold">98K+</span>
          </div>
        </div>

        <div className="relative animate-photo-reveal delay-600" style={{ flex: 1.265 }}>
          <img
            src={ASSETS.bottomCenter}
            alt=""
            className="w-full h-auto block"
            style={{ maxHeight: '75vh' }}
          />
          <div
            className="absolute inset-x-0 flex flex-col items-center gap-3 animate-scale-in delay-1100"
            style={{ bottom: 'clamp(16px, 3vh, 30px)' }}
          >
            <h2 className="text-white font-serif-display text-xl text-center px-4">
              Best Products for Your Pet
            </h2>
            <button className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white rounded-full px-5 py-2.5 font-medium text-sm transition-colors">
              Explore Products <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div className="relative flex-1 animate-photo-reveal delay-800">
          <img
            src={ASSETS.bottomRight}
            alt=""
            className="w-full h-auto block"
            style={{ maxHeight: '60vh' }}
          />
          <div
            className="absolute right-4 flex items-center gap-2 animate-scale-in delay-1200"
            style={{ bottom: 'clamp(16px, 3vh, 30px)' }}
          >
            <Star size={16} className="text-accent fill-accent" />
            <span className="text-white font-semibold">4.6</span>
          </div>
        </div>
      </div>
    </div>
  )
}
