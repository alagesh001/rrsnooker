import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingButtons from './components/layout/FloatingButtons'
import BookingModal from './components/booking/BookingModal'
import { BookingProvider } from './context/BookingContext'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Menu from './pages/Menu'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <CartProvider>
      <BookingProvider>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
        <BookingModal />
      </BookingProvider>
    </CartProvider>
  )
}
