import { NavLink } from 'react-router-dom'
import { HiOutlinePhone, HiOutlineClock, HiOutlineLocationMarker } from 'react-icons/hi'
import logo from '../../assets/logo.png'
import { BUSINESS } from '../../data/business'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-felt-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="RR Snooker & Cafe logo" className="h-11 w-11 rounded-full object-cover" />
            <span className="font-display font-semibold text-white">RR Snooker & Cafe</span>
          </div>
          <p className="mt-4 text-sm text-white/50 leading-relaxed">
            Premium pool, snooker &amp; cafe food under one roof in Malviya Nagar, New Delhi.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-wide text-white/80 uppercase mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-white/50">
            <li><NavLink to="/about" className="hover:text-cue-400 transition-colors">About Us</NavLink></li>
            <li><NavLink to="/pricing" className="hover:text-cue-400 transition-colors">Game Pricing</NavLink></li>
            <li><NavLink to="/menu" className="hover:text-cue-400 transition-colors">Cafe Menu</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-cue-400 transition-colors">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-wide text-white/80 uppercase mb-4">Visit Us</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li className="flex items-start gap-2">
              <HiOutlineLocationMarker className="mt-0.5 text-cue-400 shrink-0" /> {BUSINESS.address.full}
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineClock className="text-cue-400 shrink-0" /> {BUSINESS.hours}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-wide text-white/80 uppercase mb-4">Contact</h4>
          <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-2 text-sm text-white/50 hover:text-cue-400 transition-colors">
            <HiOutlinePhone className="text-cue-400" /> {BUSINESS.phone}
          </a>
          <p className="mt-4 text-xs text-white/30 font-mono">DEMO SITE — for client presentation only</p>
        </div>
      </div>
      <div className="border-t border-white/8 py-5 text-center text-xs text-white/30 font-mono">
        © {new Date().getFullYear()} RR Snooker & Cafe — All rights reserved.
      </div>
    </footer>
  )
}
