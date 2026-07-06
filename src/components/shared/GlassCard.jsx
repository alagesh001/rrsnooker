import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true, delay = 0, as = 'div' }) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      whileHover={hover ? { y: -6, borderColor: 'rgba(52,227,122,0.4)' } : undefined}
      className={`glass rounded-2xl transition-colors duration-300 ${className}`}
    >
      {children}
    </Comp>
  )
}
