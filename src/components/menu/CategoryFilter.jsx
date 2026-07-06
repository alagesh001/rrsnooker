export default function CategoryFilter({ categories, active, setActive }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
      {['All', ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`focus-ring shrink-0 rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
            active === cat
              ? 'bg-cue-500 border-cue-500 text-felt-950'
              : 'border-white/12 text-white/60 hover:text-white hover:border-white/30'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
