import React, { createContext, useContext, useState } from 'react'

const BookingContext = createContext(null)

export function BookingProvider({ children }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [presetGame, setPresetGame] = useState(null)

  const openBooking = (game = null) => {
    setPresetGame(game)
    setIsBookingOpen(true)
  }
  const closeBooking = () => setIsBookingOpen(false)

  return (
    <BookingContext.Provider value={{ isBookingOpen, openBooking, closeBooking, presetGame }}>
      {children}
    </BookingContext.Provider>
  )
}

export const useBooking = () => {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within BookingProvider')
  return ctx
}
