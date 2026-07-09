import HeroDesktop from '../components/HeroDesktop'
import HeroTablet from '../components/HeroTablet'
import HeroMobile from '../components/HeroMobile'

export default function Home() {
  return (
    <section className="flex-1 min-h-0 overflow-hidden relative">
      <HeroMobile />
      <HeroTablet />
      <HeroDesktop />
    </section>
  )
}
