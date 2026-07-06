import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlinePhone, HiOutlineCalendar } from 'react-icons/hi'
import { useBooking } from '../../context/BookingContext'
import { BUSINESS } from '../../data/business'

export default function FloatingButtons() {
  const { openBooking } = useBooking()

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-8 sm:right-8 z-40 flex flex-col items-end gap-3">
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href={`https://wa.me/${BUSINESS.whatsappRaw}?text=${encodeURIComponent('Hi! I want to know more about RR Snooker & Cafe.')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="focus-ring w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/40 text-xl sm:text-2xl"
      >
        <FaWhatsapp />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href={`tel:${BUSINESS.phoneRaw}`}
        aria-label="Call us"
        className="focus-ring w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-chalk-500 text-felt-950 flex items-center justify-center shadow-lg shadow-black/40 text-xl sm:text-2xl"
      >
        <HiOutlinePhone />
      </motion.a>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => openBooking()}
        aria-label="Book a table now"
        className="focus-ring flex items-center gap-2 rounded-full pl-4 pr-5 py-3 sm:py-3.5 bg-cue-500 text-felt-950 font-semibold shadow-glow text-sm sm:text-base"
      >
        <HiOutlineCalendar className="text-lg" />
        Book Now
      </motion.button>
    </div>
  )
}
