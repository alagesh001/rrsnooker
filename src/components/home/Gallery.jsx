import { motion } from 'framer-motion'
import SectionHeading from '../shared/SectionHeading'

import pool1 from '../../assets/gallery/pool1.jpg'
import pool2 from '../../assets/gallery/pool2.jpg'
import snooker1 from '../../assets/gallery/snooker1.jpg'
import cafe1 from '../../assets/gallery/cafe1.jpg'
import burger from '../../assets/gallery/burger.jpg'
import drink from '../../assets/gallery/drink.jpg'

const IMAGES = [
  { src: pool1, alt: 'Pool Table', tall: true },
  { src: pool2, alt: 'Pool Game', tall: false },
  { src: snooker1, alt: 'Snooker Table', tall: false },
  { src: cafe1, alt: 'Cafe Interior', tall: false },
  { src: burger, alt: 'Food', tall: true },
  { src: drink, alt: 'Drinks', tall: false },
]

export default function Gallery() {
  return (
    <section className="relative py-20 sm:py-28 bg-felt-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Inside RR"
          title="Take a Look Around"
          subtitle="A glimpse of the tables, food & vibe waiting for you."
          accent="chalk"
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-2xl border border-white/10 group ${
                img.tall ? 'row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover min-h-[160px] group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-felt-950/60 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}