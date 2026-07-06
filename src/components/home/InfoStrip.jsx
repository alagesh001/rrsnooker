import { HiOutlineClock, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import { BUSINESS } from '../../data/business'
import GlassCard from '../shared/GlassCard'

const ITEMS = [
  { icon: HiOutlineClock, label: 'Business Hours', value: BUSINESS.hours },
  { icon: HiOutlinePhone, label: 'Call Us', value: BUSINESS.phone },
  { icon: HiOutlineLocationMarker, label: 'Location', value: 'Malviya Nagar, New Delhi' },
]

export default function InfoStrip() {
  return (
    <section className="relative -mt-2 py-6 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard hover={false} className="p-6 sm:p-8 grid sm:grid-cols-3 gap-6 sm:gap-4">
          {ITEMS.map((it) => (
            <div key={it.label} className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-chalk-500/10 flex items-center justify-center text-chalk-400 text-xl shrink-0">
                <it.icon />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-white/40">{it.label}</p>
                <p className="text-sm sm:text-base text-white font-medium mt-0.5">{it.value}</p>
              </div>
            </div>
          ))}
        </GlassCard>
      </div>
    </section>
  )
}
