import { ArrowUpRight, Play, ArrowRight, Plus, Star } from 'lucide-react'
import { ASSETS } from '../assets'

export default function HeroDesktop() {
  return (
    <div className="hidden lg:block absolute inset-0">
      {/* Text layer */}
      <div className="relative z-[5] text-center px-12 pt-[5.4rem]">
        <h1 className="font-serif-display text-[#1a3d1a] text-[clamp(60px,7.5vw,110px)] leading-[0.95] tracking-tight">
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
        className="absolute top-[50px] left-12 z-20 animate-slide-in-left delay-600"
        style={{ width: 'clamp(160px, 14vw, 260px)' }}
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
            className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-primary hover:bg-primary-hover flex items-center justify-center transition-colors"
          >
            <ArrowUpRight size={18} className="text-white" />
          </button>
        </div>
        <div className="mt-3">
          <p className="text-gray-700" style={{ fontSize: 'clamp(13px, 1vw, 15px)' }}>
            Cozy Cat House
          </p>
          <p
            className="text-primary font-semibold"
            style={{ fontSize: 'clamp(15px, 1.2vw, 18px)' }}
          >
            $49.99
          </p>
        </div>
      </div>

      {/* Right video card */}
      <div
        className="absolute top-[50px] right-12 z-20 animate-slide-in-right delay-700"
        style={{ width: 'clamp(120px, 10vw, 177px)' }}
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
            className="absolute left-1/2 -translate-x-1/2 bottom-6 w-12 h-12 rounded-full bg-primary hover:bg-primary-hover flex items-center justify-center transition-colors"
          >
            <Play size={18} className="text-white fill-white" />
          </button>
        </div>
        <p
          className="mt-3 text-gray-700 text-center"
          style={{ fontSize: 'clamp(11px, 0.85vw, 13px)' }}
        >
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
            style={{ maxHeight: 'min(70vh, 55vw)' }}
          />
          <div
            className="absolute left-6 flex items-center gap-3 animate-scale-in delay-1000"
            style={{ bottom: 'clamp(20px, 4vh, 50px)' }}
          >
            <div className="flex items-center -space-x-2">
              <img
                src={ASSETS.avatar}
                alt=""
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
              />
              <div className="w-9 h-9 rounded-full bg-primary border-2 border-white flex items-center justify-center">
                <Plus size={14} className="text-white" />
              </div>
            </div>
            <span className="text-white font-semibold text-lg">98K+</span>
          </div>
        </div>

        <div className="relative animate-photo-reveal delay-600" style={{ flex: 1.265 }}>
          <img
            src={ASSETS.bottomCenter}
            alt=""
            className="w-full h-auto block"
            style={{ maxHeight: 'min(85vh, 70vw)' }}
          />
          <div
            className="absolute inset-x-0 flex flex-col items-center gap-4 animate-scale-in delay-1100"
            style={{ bottom: 'clamp(20px, 4vh, 50px)' }}
          >
            <h2 className="text-white font-serif-display text-3xl text-center px-4">
              Best Products for Your Pet
            </h2>
            <button className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white rounded-full px-6 py-3 font-medium transition-colors">
              Explore Products <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="relative flex-1 animate-photo-reveal delay-800">
          <img
            src={ASSETS.bottomRight}
            alt=""
            className="w-full h-auto block"
            style={{ maxHeight: 'min(70vh, 55vw)' }}
          />
          <div
            className="absolute right-6 flex items-center gap-2 animate-scale-in delay-1200"
            style={{ bottom: 'clamp(20px, 4vh, 50px)' }}
          >
            <Star size={20} className="text-accent fill-accent" />
            <span className="text-white font-semibold text-lg">4.6</span>
          </div>
        </div>
      </div>
    </div>
  )
}
