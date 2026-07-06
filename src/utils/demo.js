// Demo-only helpers. No backend — everything is simulated frontend state.

export const generateId = (prefix) => {
  const num = Math.floor(10000 + Math.random() * 89999)
  return `${prefix}-${num}`
}

const START_HOUR = 12 // 12 PM
const END_HOUR = 23 // 11 PM last slot start, "late night"

export const generateSlots = (dateStr) => {
  const slots = []
  // Seed reserved slots deterministically per date so it feels consistent within a session
  let seed = 0
  for (let i = 0; i < dateStr.length; i++) seed += dateStr.charCodeAt(i)

  let hour = START_HOUR
  let idx = 0
  while (hour <= END_HOUR) {
    for (const minute of [0, 30]) {
      if (hour === END_HOUR && minute === 30) continue
      const label = formatSlot(hour, minute)
      const pseudoRandom = (seed * (idx + 7) * 13) % 10
      const reserved = pseudoRandom < 3 // ~30% reserved
      slots.push({ id: `${hour}-${minute}`, label, reserved })
      idx++
    }
    hour++
  }
  return slots
}

const formatSlot = (hour, minute) => {
  const period = hour >= 12 ? 'PM' : 'AM'
  let h = hour % 12
  if (h === 0) h = 12
  const m = minute.toString().padStart(2, '0')
  return `${h}:${m} ${period}`
}

export const todayISO = () => new Date().toISOString().split('T')[0]
