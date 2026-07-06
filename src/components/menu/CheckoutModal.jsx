import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiX, HiOutlineCheckCircle } from 'react-icons/hi'
import { useCart } from '../../context/CartContext'
import { generateId } from '../../utils/demo'

const TABLES = [1, 2, 3, 4, 5, 6]

export default function CheckoutModal({ open, onClose }) {
  const { items, total, clearCart } = useCart()
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [table, setTable] = useState(null)
  const [processing, setProcessing] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [orderId, setOrderId] = useState('')

  useEffect(() => {
    if (open) {
      setName('')
      setMobile('')
      setTable(null)
      setProcessing(false)
      setConfirmed(false)
    }
  }, [open])

  if (!open) return null

  const canPay = name.trim().length > 1 && mobile.trim().length >= 10 && table

  const handlePay = () => {
    const id = generateId('RRO')
    setProcessing(true)
    setTimeout(() => {
      setProcessing(false)
      setConfirmed(true)
      setOrderId(id)
      try {
        const raw = localStorage.getItem('rr-orders-v1')
        const list = raw ? JSON.parse(raw) : []
        list.push({ id, items, total, name, mobile, table, at: Date.now() })
        localStorage.setItem('rr-orders-v1', JSON.stringify(list))
      } catch {
        /* demo mode */
      }
      clearCart()
    }, 1800)
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-0 sm:p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-strong w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl max-h-[92vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
            <h3 className="font-display font-semibold text-white text-lg">
              {confirmed ? 'Order Confirmed' : 'Checkout'}
            </h3>
            <button onClick={handleClose} aria-label="Close" className="focus-ring text-white/60 hover:text-white text-2xl p-1 rounded-lg">
              <HiX />
            </button>
          </div>

          <div className="p-6">
            {confirmed ? (
              <div className="py-4 flex flex-col items-center text-center">
                <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', bounce: 0.5 }}>
                  <HiOutlineCheckCircle className="text-6xl text-cue-400" />
                </motion.div>
                <p className="mt-3 text-cue-400 font-medium">Payment Successful ✅</p>
                <h4 className="mt-2 font-display font-bold text-2xl text-white">Order Confirmed</h4>
                <div className="mt-6 w-full glass rounded-2xl p-5 text-left space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-white/50">Order ID</span><span className="font-mono text-cue-400">{orderId}</span></div>
                  <div className="flex justify-between"><span className="text-white/50">Table</span><span className="text-white">Table {table}</span></div>
                  <div className="flex justify-between"><span className="text-white/50">Total Paid</span><span className="text-white font-semibold">₹{total}</span></div>
                </div>
                <button
                  onClick={handleClose}
                  className="focus-ring mt-8 w-full rounded-full py-3.5 font-semibold bg-cue-500 text-felt-950 hover:bg-cue-400 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : processing ? (
              <div className="py-14 flex flex-col items-center text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
                  className="w-14 h-14 rounded-full border-2 border-cue-500/30 border-t-cue-500"
                />
                <p className="mt-6 font-display font-medium text-white">Processing Payment...</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-white/60 mb-2">Customer Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="focus-ring w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Mobile Number</label>
                  <input
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ''))}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    inputMode="numeric"
                    className="focus-ring w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30"
                  />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-2">Choose Table Number</p>
                  <div className="grid grid-cols-3 gap-2">
                    {TABLES.map((t) => (
                      <button
                        key={t}
                        onClick={() => setTable(t)}
                        className={`focus-ring rounded-xl py-3 text-sm font-mono border transition-colors ${
                          table === t ? 'border-cue-500 bg-cue-500/15 text-white' : 'border-white/10 text-white/60 hover:border-white/30'
                        }`}
                      >
                        Table {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-white/8 text-sm">
                  <span className="text-white/60">Total</span>
                  <span className="font-mono font-bold text-lg text-white">₹{total}</span>
                </div>
                <button
                  disabled={!canPay}
                  onClick={handlePay}
                  className="focus-ring w-full rounded-full py-3.5 font-semibold bg-cue-500 text-felt-950 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-cue-400 transition-colors"
                >
                  Pay Now
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
