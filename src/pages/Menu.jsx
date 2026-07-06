import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import SectionHeading from '../components/shared/SectionHeading'
import CategoryFilter from '../components/menu/CategoryFilter'
import SearchBar from '../components/menu/SearchBar'
import MenuCard from '../components/menu/MenuCard'
import CartDrawer from '../components/menu/CartDrawer'
import { CATEGORIES, MENU_ITEMS } from '../data/menuData'
import { useCart } from '../context/CartContext'

export default function Menu() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const { count, setIsCartOpen } = useCart()

  const filtered = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category
      const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  return (
    <div className="pt-28 pb-24 bg-felt-950 felt-texture min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="RR Food" title="Cafe Menu" subtitle="Freshly redesigned from our in-house menu — browse, search, and order." />

        <div className="mt-10 sticky top-16 sm:top-20 z-20 -mx-4 px-4 sm:mx-0 sm:px-0 py-3 bg-felt-950/80 backdrop-blur-md">
          <div className="max-w-md mx-auto">
            <SearchBar value={query} onChange={setQuery} />
          </div>
          <div className="mt-4">
            <CategoryFilter categories={CATEGORIES} active={category} setActive={setCategory} />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 text-white/40">
            <p>No items match your search.</p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <MenuCard key={item.id} item={item} index={i} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {count > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="focus-ring fixed bottom-24 sm:bottom-8 left-4 sm:left-8 z-40 flex items-center gap-2 rounded-full pl-4 pr-5 py-3.5 glass-strong text-white font-semibold shadow-lg"
        >
          <span className="relative">
            <HiOutlineShoppingBag className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-cue-500 text-felt-950 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {count}
            </span>
          </span>
          View Cart
        </button>
      )}

      <CartDrawer />
    </div>
  )
}
