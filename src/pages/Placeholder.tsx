import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Placeholder({ title }: { title: string }) {
  return (
    <section className="flex-1 min-h-0 overflow-hidden relative flex flex-col items-center justify-center text-center px-6 animate-fade-up">
      <h1 className="font-serif-display text-[#1a3d1a] text-[clamp(36px,6vw,64px)] leading-[0.95] tracking-tight">
        {title}
      </h1>
      <p className="mt-4 text-gray-600 max-w-md">
        This page is coming soon. We're still getting everything ready for your pets.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white rounded-full px-6 py-3 font-medium transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>
    </section>
  )
}
