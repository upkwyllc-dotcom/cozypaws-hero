import Header from './components/Header'
import HeroDesktop from './components/HeroDesktop'
import HeroTablet from './components/HeroTablet'
import HeroMobile from './components/HeroMobile'

function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background">
      <Header />
      <section className="flex-1 min-h-0 overflow-hidden relative">
        <HeroMobile />
        <HeroTablet />
        <HeroDesktop />
      </section>
    </div>
  )
}

export default App
