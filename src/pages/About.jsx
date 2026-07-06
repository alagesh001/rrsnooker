import { motion } from 'framer-motion'
import {
  HiOutlineSparkles,
  HiOutlineCube,
  HiOutlineCake,
  HiOutlineUserGroup,
  HiOutlineEmojiHappy,
  HiOutlineHeart,
  HiOutlineBadgeCheck,
} from 'react-icons/hi'
import SectionHeading from '../components/shared/SectionHeading'
import GlassCard from '../components/shared/GlassCard'

const POINTS = [
  { icon: HiOutlineCube, title: 'Premium Pool Tables', desc: 'Regulation-size tables with precision cloth for a true, satisfying roll.' },
  { icon: HiOutlineBadgeCheck, title: 'Professional Snooker Tables', desc: 'Full-size snooker tables set up for serious and casual players alike.' },
  { icon: HiOutlineCake, title: 'Delicious Food & Drinks', desc: 'A full cafe menu — appetizers, mains, shakes, mocktails & more.' },
  { icon: HiOutlineUserGroup, title: 'Comfortable Seating', desc: 'Lounge-style seating designed for long, unhurried evenings.' },
  { icon: HiOutlineEmojiHappy, title: 'Friendly Staff', desc: 'A team that knows the game and keeps the energy right.' },
  { icon: HiOutlineHeart, title: 'Perfect Hangout Spot', desc: 'Whether it\'s a quick match or a long night in — RR fits the mood.' },
  { icon: HiOutlineSparkles, title: 'Clean Environment', desc: 'Spotless tables, fresh cues, and a space that feels premium.' },
]

export default function About() {
  return (
    <div className="pt-28 pb-24 bg-felt-950 felt-texture min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Story"
          title="About RR Snooker & Cafe"
          subtitle="A premium gaming lounge in Malviya Nagar where sport meets comfort — built for players and hangouts alike."
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mt-8 text-white/55 leading-relaxed"
        >
          RR Snooker &amp; Cafe was built for people who take their leisure seriously. From
          professional-grade tables to a full cafe menu, every corner of the space is designed to
          make you want to stay for one more frame — and one more shake.
        </motion.p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {POINTS.map((p, i) => (
            <GlassCard key={p.title} delay={i * 0.05} className="p-7">
              <div className="w-12 h-12 rounded-xl bg-chalk-500/10 flex items-center justify-center text-chalk-400 text-2xl">
                <p.icon />
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{p.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
