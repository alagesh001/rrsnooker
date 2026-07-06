import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiX, HiOutlineMinus, HiOutlinePlus, HiOutlineTrash, HiOutlineShoppingBag } from 'react-icons/hi'
import { useCart } from '../../context/CartContext'
import CheckoutModal from './CheckoutModal'

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQty, removeItem, total } = useCart()
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-full sm:w-[420px] glass-strong flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
                <h3 className="font-display font-semibold text-white text-lg flex items-center gap-2">
                  <HiOutlineShoppingBag className="text-cue-400" /> Your Cart
                </h3>
                <button onClick={() => setIsCartOpen(false)} aria-label="Close cart" className="focus-ring text-white/60 hover:text-white text-2xl p-1 rounded-lg">
                  <HiX />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-white/40">
                    <HiOutlineShoppingBag className="text-4xl mb-3" />
                    <p>Your cart is empty.</p>
                    <p className="text-xs mt-1">Add something delicious from the menu.</p>
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li key={item.id} className="flex items-center gap-3 glass rounded-xl p-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">{item.name}</p>
                          <p className="text-xs font-mono text-cue-400 mt-0.5">₹{item.price}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="focus-ring w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white"
                            aria-label="Decrease quantity"
                          >
                            <HiOutlineMinus className="text-xs" />
                          </button>
                          <span className="w-5 text-center text-sm text-white font-mono">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="focus-ring w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white"
                            aria-label="Increase quantity"
                          >
                            <HiOutlinePlus className="text-xs" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="focus-ring text-white/30 hover:text-red-400 shrink-0"
                        >
                          <HiOutlineTrash />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {items.length > 0 && (
                <div className="px-6 py-5 border-t border-white/8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/60">Total</span>
                    <span className="font-mono font-bold text-xl text-white">₹{total}</span>
                  </div>
                  <button
                    onClick={() => setCheckoutOpen(true)}
                    className="focus-ring w-full rounded-full py-3.5 font-semibold bg-cue-500 text-felt-950 hover:bg-cue-400 transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CheckoutModal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </>
  )
}
