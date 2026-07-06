export default function PoolBall({ number, color = '#1FB863', size = 40, striped = false }) {
  return (
    <div
      className="relative rounded-full flex items-center justify-center shrink-0 shadow-lg"
      style={{
        width: size,
        height: size,
        background: striped
          ? `linear-gradient(180deg, #0e1211 0%, #0e1211 30%, ${color} 30%, ${color} 70%, #0e1211 70%, #0e1211 100%)`
          : `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 35%), ${color}`,
        boxShadow: `0 2px 10px rgba(0,0,0,0.5), inset 0 0 8px rgba(0,0,0,0.25)`,
      }}
    >
      <span
        className="rounded-full bg-white flex items-center justify-center font-display font-bold text-[0.65em] text-felt-900"
        style={{ width: size * 0.52, height: size * 0.52 }}
      >
        {number}
      </span>
    </div>
  )
}
