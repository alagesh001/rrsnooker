import SectionHeading from '../components/shared/SectionHeading'
import GlassCard from '../components/shared/GlassCard'
import PoolBall from '../components/shared/PoolBall'
import { PRICING } from '../data/pricingData'
import { useBooking } from '../context/BookingContext'

export default function Pricing() {
  const { openBooking } = useBooking()

  return (
    <div className="pt-28 pb-24 bg-felt-950 felt-texture min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Rates"
          title="Game Pricing"
          subtitle="Simple, transparent pricing for every session — pay by the half hour, hour, or minute."
          accent="chalk"
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {PRICING.map((g) => (
            <GlassCard key={g.id} className="p-8 relative overflow-hidden" delay={g.id === 'pool' ? 0 : 0.1}>
              <div
                className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl ${
                  g.accent === 'cue' ? 'bg-cue-500/20' : 'bg-chalk-500/20'
                }`}
              />
              <div className="relative flex items-center gap-4">
                <PoolBall number={g.ballNumber} color={g.ballColor} size={56} />
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">{g.name}</h3>
                  <p className="text-sm text-white/50 mt-0.5">{g.tagline}</p>
                </div>
              </div>

              <div className="relative mt-8 space-y-4">
                {g.tiers.map((t) => (
                  <div key={t.label} className="flex items-center justify-between border-b border-white/8 pb-4 last:border-0">
                    <span className="text-white/60">{t.label}</span>
                    <span className="font-mono font-bold text-2xl text-white">
                      ₹{t.price}
                      <span className="text-sm text-white/40">{t.unit}</span>
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => openBooking(g.id)}
                className={`focus-ring relative mt-8 w-full rounded-full py-4 font-semibold transition-colors ${
                  g.accent === 'cue'
                    ? 'bg-cue-500 text-felt-950 hover:bg-cue-400 shadow-glow'
                    : 'bg-chalk-500 text-felt-950 hover:bg-chalk-400 shadow-glowBlue'
                }`}
              >
                Book {g.name} Table
              </button>
            </GlassCard>
          ))}
        </div>

        <p className="text-center text-xs text-white/30 font-mono mt-10">
          * Prices are indicative for this demo experience and may vary at the venue.
        </p>
      </div>
    </div>
  )
}
