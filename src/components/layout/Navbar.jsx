import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../../assets/logo.png'
import { useBooking } from '../../context/BookingContext'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/pricing', label: 'Game Pricing' },
  { to: '/menu', label: 'Cafe Menu' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { openBooking } = useBooking()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        <NavLink to="/" className="flex items-center gap-3 focus-ring rounded-lg" onClick={() => setOpen(false)}>
          <img src={logo} alt="RR Snooker & Cafe logo" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover" />
          <span className="font-display font-semibold text-sm sm:text-base text-white tracking-wide hidden xs:block">
            RR Snooker <span className="text-cue-400">&</span> Cafe
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-colors focus-ring ${
                  isActive ? 'text-cue-400' : 'text-white/70 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={() => openBooking()}
            className="focus-ring rounded-full px-5 py-2.5 text-sm font-semibold bg-cue-500 text-felt-950 hover:bg-cue-400 transition-colors shadow-glow"
          >
            Book Now
          </button>
        </div>

        <button
          className="md:hidden text-white text-2xl focus-ring rounded-lg p-1"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-strong overflow-hidden"
          >
            <div className="flex flex-col px-4 pb-4 gap-1">
              {LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium ${
                      isActive ? 'bg-white/5 text-cue-400' : 'text-white/70'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <button
                onClick={() => {
                  setOpen(false)
                  openBooking()
                }}
                className="mt-2 focus-ring rounded-full px-5 py-3 text-sm font-semibold bg-cue-500 text-felt-950"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
