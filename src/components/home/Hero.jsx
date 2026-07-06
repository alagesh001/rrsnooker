import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { useBooking } from '../../context/BookingContext'
import PoolBall from '../shared/PoolBall'

export default function Hero() {
  const { openBooking } = useBooking()

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden felt-texture bg-felt-950 pt-24 pb-16">
      {/* Ambient glow orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-chalk-500/15 rounded-full blur-[140px]" />

      {/* Faint table-rail border frame */}
      <div className="absolute inset-4 sm:inset-8 border border-white/5 rounded-[2rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.25em] uppercase text-cue-400 border border-cue-500/30 rounded-full px-4 py-1.5"
          >
            Malviya Nagar · New Delhi
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-white"
          >
            Play.<br />
            <span className="text-gradient-cue">Relax.</span><br />
            Enjoy.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-white/60 text-lg max-w-md"
          >
            Experience premium Pool, Snooker &amp; delicious cafe food under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => openBooking()}
              className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold bg-cue-500 text-felt-950 hover:bg-cue-400 transition-colors shadow-glow"
            >
              Book a Table
              <HiOutlineArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
            <NavLink
              to="/menu"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold glass text-white hover:border-chalk-400/50 transition-colors"
            >
              Explore Menu
            </NavLink>
          </motion.div>
        </div>

        {/* Signature visual: floating rack of numbered balls */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="glass rounded-[2rem] p-10 aspect-square flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cue-500/10 to-chalk-500/10" />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative grid grid-cols-4 gap-4"
            >
              {[
                { n: 8, c: '#0A0D0E' },
                { n: 1, c: '#E4B429' },
                { n: 2, c: '#1F5FBF' },
                { n: 3, c: '#C0392B' },
                { n: 4, c: '#5E3B93' },
                { n: 5, c: '#D9622B' },
                { n: 6, c: '#1FB863' },
                { n: 7, c: '#7A2E2E' },
              ].map((b, idx) => (
                <motion.div
                  key={b.n}
                  animate={{ rotate: [0, 6, 0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: idx * 0.15 }}
                >
                  <PoolBall number={b.n} color={b.c} size={64} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
