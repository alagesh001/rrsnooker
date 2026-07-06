import { HiOutlineSearch, HiX } from 'react-icons/hi'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-lg" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for food..."
        className="focus-ring w-full rounded-full glass pl-11 pr-10 py-3 text-white placeholder-white/35 text-sm"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
        >
          <HiX />
        </button>
      )}
    </div>
  )
}
