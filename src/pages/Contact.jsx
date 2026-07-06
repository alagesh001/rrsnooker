import { HiOutlinePhone, HiOutlineClock, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeading from '../components/shared/SectionHeading'
import GlassCard from '../components/shared/GlassCard'
import { BUSINESS } from '../data/business'

export default function Contact() {
  return (
    <div className="pt-28 pb-24 bg-felt-950 felt-texture min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Get In Touch" title="Contact Us" subtitle="Drop by, call, or message us on WhatsApp — we're ready when you are." />

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-5">
            <GlassCard className="p-6" hover={false}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-cue-500/10 flex items-center justify-center text-cue-400 text-xl shrink-0">
                  <HiOutlineLocationMarker />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-white/40">Address</p>
                  <p className="text-white mt-1 leading-relaxed">{BUSINESS.address.full}</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6" hover={false}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-chalk-500/10 flex items-center justify-center text-chalk-400 text-xl shrink-0">
                  <HiOutlineClock />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-white/40">Business Hours</p>
                  <p className="text-white mt-1">{BUSINESS.hours}</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6" hover={false}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-rail-400/10 flex items-center justify-center text-rail-400 text-xl shrink-0">
                  <HiOutlinePhone />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-white/40">Phone</p>
                  <p className="text-white mt-1">{BUSINESS.phone}</p>
                </div>
              </div>
            </GlassCard>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="focus-ring flex items-center justify-center gap-2 rounded-full py-3.5 font-semibold bg-cue-500 text-felt-950 hover:bg-cue-400 transition-colors"
              >
                <HiOutlinePhone /> Call Now
              </a>
              <a
                href={`https://wa.me/${BUSINESS.whatsappRaw}`}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center justify-center gap-2 rounded-full py-3.5 font-semibold bg-[#25D366] text-white hover:opacity-90 transition-opacity"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>

          <GlassCard className="lg:col-span-3 overflow-hidden p-0" hover={false}>
            <iframe
              title="RR Snooker & Cafe location"
              src={BUSINESS.mapsEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
