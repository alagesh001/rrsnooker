import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'rr-cart-v1'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore storage errors in demo mode */
    }
  }, [items])

  const addItem = (menuItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === menuItem.id)
      if (existing) {
        return prev.map((i) => (i.id === menuItem.id ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...prev, { ...menuItem, qty: 1 }]
    })
    setIsCartOpen(true)
  }

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id))

  const updateQty = (id, qty) => {
    if (qty <= 0) return removeItem(id)
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)))
  }

  const clearCart = () => setItems([])

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const count = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQty, clearCart, total, count, isCartOpen, setIsCartOpen }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
