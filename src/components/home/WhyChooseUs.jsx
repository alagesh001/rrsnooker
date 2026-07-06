import {
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineCake,
  HiOutlineDeviceMobile,
  HiOutlineLightningBolt,
  HiOutlineHeart,
} from 'react-icons/hi'
import SectionHeading from '../shared/SectionHeading'
import GlassCard from '../shared/GlassCard'

const FEATURES = [
  { icon: HiOutlineSparkles, title: 'Premium Tables', desc: 'Professional-grade pool & snooker tables, precisely maintained.' },
  { icon: HiOutlineUserGroup, title: 'Comfortable Seating', desc: 'Lounge-style seating built for long, relaxed sessions.' },
  { icon: HiOutlineCake, title: 'Delicious Cafe', desc: 'A full menu of appetizers, mains, shakes & mocktails.' },
  { icon: HiOutlineDeviceMobile, title: 'Easy Online Booking', desc: 'Reserve your table in seconds — no calls needed.' },
  { icon: HiOutlineLightningBolt, title: 'Fast Service', desc: 'Quick table turnaround and prompt food service.' },
  { icon: HiOutlineHeart, title: 'Great Ambience', desc: 'Neon-lit, modern lounge vibe for every kind of hangout.' },
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28 bg-felt-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why RR" title="Why Choose Us" subtitle="Everything you need for the perfect game night, in one premium space." />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <GlassCard key={f.title} delay={i * 0.06} className="p-7">
              <div className="w-12 h-12 rounded-xl bg-cue-500/10 flex items-center justify-center text-cue-400 text-2xl">
                <f.icon />
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{f.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
