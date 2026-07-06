import { motion } from 'framer-motion'
import { HiOutlinePlus } from 'react-icons/hi'
import { useCart } from '../../context/CartContext'

const PLACEHOLDER_GRADIENTS = [
  'from-cue-500/25 to-felt-800',
  'from-chalk-500/25 to-felt-800',
  'from-rail-400/25 to-felt-800',
]

export default function MenuCard({ item, index = 0 }) {
  const { addItem } = useCart()
  const gradient = PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="glass rounded-2xl overflow-hidden flex flex-col group"
    >
      <div className={`relative h-32 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <span className="font-display text-3xl font-bold text-white/10 select-none">RR</span>
        <span
          className={`absolute top-3 left-3 w-3 h-3 rounded-sm rotate-45 ${
            item.veg ? 'bg-cue-500' : 'bg-red-500'
          }`}
          title={item.veg ? 'Vegetarian' : 'Non-Vegetarian'}
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-white text-sm leading-snug">{item.name}</h3>
        {item.desc && <p className="text-xs text-white/45 mt-1">{item.desc}</p>}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="font-mono font-semibold text-cue-400">₹{item.price}</span>
          <button
            onClick={() => addItem(item)}
            aria-label={`Add ${item.name} to cart`}
            className="focus-ring w-9 h-9 rounded-full bg-cue-500 text-felt-950 flex items-center justify-center hover:bg-cue-400 transition-colors group-hover:scale-105"
          >
            <HiOutlinePlus />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
