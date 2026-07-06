import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiX, HiOutlineCheckCircle, HiOutlineClock } from 'react-icons/hi'
import { useBooking } from '../../context/BookingContext'
import { PRICING } from '../../data/pricingData'
import { generateId, generateSlots, todayISO } from '../../utils/demo'
import PoolBall from '../shared/PoolBall'

const STEPS = ['Game', 'Date & Time', 'Details', 'Payment']

export default function BookingModal() {
  const { isBookingOpen, closeBooking, presetGame } = useBooking()
  const [step, setStep] = useState(0)
  const [game, setGame] = useState(presetGame)
  const [date, setDate] = useState(todayISO())
  const [slot, setSlot] = useState(null)
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [payMethod, setPayMethod] = useState(null)
  const [processing, setProcessing] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [bookingId, setBookingId] = useState('')

  const slots = useMemo(() => generateSlots(date + (game || '')), [date, game])

  useEffect(() => {
    if (isBookingOpen) {
      setGame(presetGame)
      setStep(0)
      setDate(todayISO())
      setSlot(null)
      setName('')
      setMobile('')
      setPayMethod(null)
      setProcessing(false)
      setConfirmed(false)
    }
  }, [isBookingOpen, presetGame])

  if (!isBookingOpen) return null

  const canNext = [!!game, !!slot, name.trim().length > 1 && mobile.trim().length >= 10, !!payMethod][step]

  const handleNext = () => {
    if (step < STEPS.length - 1) {
      setStep((s) => s + 1)
    } else {
      confirmBooking()
    }
  }

  const confirmBooking = () => {
    const id = generateId('RRB')
    setBookingId(id)
    if (payMethod === 'now') {
      setProcessing(true)
      setTimeout(() => {
        setProcessing(false)
        setConfirmed(true)
        saveBooking(id)
      }, 1800)
    } else {
      setConfirmed(true)
      saveBooking(id)
    }
  }

  const saveBooking = (id) => {
    try {
      const raw = localStorage.getItem('rr-bookings-v1')
      const list = raw ? JSON.parse(raw) : []
      list.push({ id, game, date, slot: slot?.label, name, mobile, payMethod, at: Date.now() })
      localStorage.setItem('rr-bookings-v1', JSON.stringify(list))
    } catch {
      /* demo mode, ignore */
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-0 sm:p-4"
        onClick={closeBooking}
      >
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="glass-strong w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl max-h-[92vh] overflow-y-auto"
        >
          <div className="sticky top-0 glass-strong flex items-center justify-between px-6 py-5 border-b border-white/8 z-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-cue-400">
                {confirmed ? 'Confirmation' : `Step ${step + 1} of ${STEPS.length}`}
              </p>
              <h3 className="font-display font-semibold text-white text-lg mt-0.5">
                {confirmed ? 'Booking Confirmed' : 'Book a Table'}
              </h3>
            </div>
            <button onClick={closeBooking} aria-label="Close" className="focus-ring text-white/60 hover:text-white text-2xl p-1 rounded-lg">
              <HiX />
            </button>
          </div>

          {!confirmed && (
            <div className="flex gap-1.5 px-6 pt-4">
              {STEPS.map((_, i) => (
                <div key={i} className={`h-1 flex-1 rounded-full ${i <= step ? 'bg-cue-500' : 'bg-white/10'}`} />
              ))}
            </div>
          )}

          <div className="p-6">
            {confirmed ? (
              <ConfirmationView bookingId={bookingId} game={game} date={date} slot={slot} payMethod={payMethod} onClose={closeBooking} />
            ) : processing ? (
              <ProcessingView />
            ) : (
              <>
                {step === 0 && <StepGame game={game} setGame={setGame} />}
                {step === 1 && (
                  <StepDateTime date={date} setDate={setDate} slots={slots} slot={slot} setSlot={setSlot} />
                )}
                {step === 2 && <StepDetails name={name} setName={setName} mobile={mobile} setMobile={setMobile} />}
                {step === 3 && <StepPayment payMethod={payMethod} setPayMethod={setPayMethod} />}

                <div className="mt-8 flex gap-3">
                  {step > 0 && (
                    <button
                      onClick={() => setStep((s) => s - 1)}
                      className="focus-ring flex-1 rounded-full py-3.5 font-medium border border-white/15 text-white/70 hover:text-white transition-colors"
                    >
                      Back
                    </button>
                  )}
                  <button
                    disabled={!canNext}
                    onClick={handleNext}
                    className="focus-ring flex-1 rounded-full py-3.5 font-semibold bg-cue-500 text-felt-950 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-cue-400 transition-colors"
                  >
                    {step === STEPS.length - 1 ? 'Confirm Booking' : 'Continue'}
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function StepGame({ game, setGame }) {
  return (
    <div>
      <p className="text-sm text-white/60 mb-4">Choose your game</p>
      <div className="grid grid-cols-2 gap-4">
        {PRICING.map((g) => (
          <button
            key={g.id}
            onClick={() => setGame(g.id)}
            className={`focus-ring rounded-2xl p-5 text-left border transition-all ${
              game === g.id ? 'border-cue-500 bg-cue-500/10' : 'border-white/10 hover:border-white/25'
            }`}
          >
            <PoolBall number={g.ballNumber} color={g.ballColor} size={40} />
            <p className="mt-3 font-display font-semibold text-white">{g.name}</p>
            <p className="text-xs text-white/50 mt-1">{g.tagline}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

function StepDateTime({ date, setDate, slots, slot, setSlot }) {
  return (
    <div>
      <label className="block text-sm text-white/60 mb-2">Choose Date</label>
      <input
        type="date"
        value={date}
        min={todayISO()}
        onChange={(e) => {
          setDate(e.target.value)
          setSlot(null)
        }}
        className="focus-ring w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white [color-scheme:dark]"
      />

      <p className="text-sm text-white/60 mt-6 mb-3">Choose Time Slot</p>
      <div className="flex items-center gap-4 mb-3 text-xs text-white/50">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-cue-500 inline-block" /> Available</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" /> Reserved</span>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-56 overflow-y-auto pr-1">
        {slots.map((s) => (
          <button
            key={s.id}
            disabled={s.reserved}
            onClick={() => setSlot(s)}
            className={`focus-ring rounded-xl py-2.5 text-xs font-mono flex items-center justify-center gap-1.5 border transition-all ${
              s.reserved
                ? 'border-white/5 bg-white/[0.02] text-white/25 cursor-not-allowed'
                : slot?.id === s.id
                ? 'border-cue-500 bg-cue-500/15 text-white'
                : 'border-white/10 text-white/70 hover:border-cue-500/50'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${s.reserved ? 'bg-red-500' : 'bg-cue-500'}`} />
            {s.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function StepDetails({ name, setName, mobile, setMobile }) {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm text-white/60 mb-2">Name</label>
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
    </div>
  )
}

function StepPayment({ payMethod, setPayMethod }) {
  return (
    <div className="space-y-3">
      <button
        onClick={() => setPayMethod('now')}
        className={`focus-ring w-full rounded-2xl p-5 text-left border transition-all ${
          payMethod === 'now' ? 'border-cue-500 bg-cue-500/10' : 'border-white/10 hover:border-white/25'
        }`}
      >
        <p className="font-display font-semibold text-white">Pay Now</p>
        <p className="text-xs text-white/50 mt-1">Simulated secure payment (demo mode)</p>
      </button>
      <button
        onClick={() => setPayMethod('venue')}
        className={`focus-ring w-full rounded-2xl p-5 text-left border transition-all ${
          payMethod === 'venue' ? 'border-cue-500 bg-cue-500/10' : 'border-white/10 hover:border-white/25'
        }`}
      >
        <p className="font-display font-semibold text-white">Pay at Venue</p>
        <p className="text-xs text-white/50 mt-1">Settle your bill when you arrive</p>
      </button>
    </div>
  )
}

function ProcessingView() {
  return (
    <div className="py-14 flex flex-col items-center text-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
        className="w-14 h-14 rounded-full border-2 border-cue-500/30 border-t-cue-500"
      />
      <p className="mt-6 font-display font-medium text-white">Processing Payment...</p>
      <p className="text-sm text-white/40 mt-1 font-mono">Please don't close this window</p>
    </div>
  )
}

function ConfirmationView({ bookingId, game, date, slot, payMethod, onClose }) {
  const gameLabel = PRICING.find((g) => g.id === game)?.name
  return (
    <div className="py-6 flex flex-col items-center text-center">
      <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', bounce: 0.5 }}>
        <HiOutlineCheckCircle className="text-6xl text-cue-400" />
      </motion.div>
      {payMethod === 'now' && <p className="mt-3 text-cue-400 font-medium">Payment Successful ✅</p>}
      <h4 className="mt-2 font-display font-bold text-2xl text-white">Booking Confirmed</h4>
      <div className="mt-6 w-full glass rounded-2xl p-5 text-left space-y-2">
        <Row label="Booking ID" value={bookingId} mono />
        <Row label="Game" value={gameLabel} />
        <Row label="Date" value={date} />
        <Row label="Time Slot" value={slot?.label} icon />
        <Row label="Payment" value={payMethod === 'now' ? 'Paid Online' : 'Pay at Venue'} />
      </div>
      <button
        onClick={onClose}
        className="focus-ring mt-8 w-full rounded-full py-3.5 font-semibold bg-cue-500 text-felt-950 hover:bg-cue-400 transition-colors"
      >
        Done
      </button>
    </div>
  )
}

function Row({ label, value, mono, icon }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-white/50">{label}</span>
      <span className={`text-white font-medium flex items-center gap-1.5 ${mono ? 'font-mono text-cue-400' : ''}`}>
        {icon && <HiOutlineClock className="text-white/40" />}
        {value}
      </span>
    </div>
  )
}
