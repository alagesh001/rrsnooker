import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', accent = 'cue' }) {
  const accentClass = accent === 'chalk' ? 'text-chalk-400' : accent === 'rail' ? 'text-rail-400' : 'text-cue-400'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <span className={`font-mono text-xs tracking-[0.3em] uppercase ${accentClass}`}>
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-white/60 text-base sm:text-lg leading-relaxed">{subtitle}</p>}
    </motion.div>
  )
}
