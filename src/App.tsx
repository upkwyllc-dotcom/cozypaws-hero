import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Placeholder from './pages/Placeholder'

function App() {
  return (
    <HashRouter>
      <div className="h-screen flex flex-col overflow-hidden bg-background">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/delivery-and-payment" element={<Placeholder title="Delivery and Payment" />} />
          <Route path="/brands" element={<Placeholder title="Brands" />} />
          <Route path="/blog" element={<Placeholder title="Blog" />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
