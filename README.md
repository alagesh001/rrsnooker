# RR Snooker & Cafe — Demo Website

A premium, mobile-first demo website for **RR Snooker & Cafe** (Malviya Nagar, New Delhi). Built with React (Vite), Tailwind CSS, and Framer Motion. This is a **frontend-only prototype** — all bookings, orders, and payments are simulated in local state / `localStorage`. No backend, database, or real payment gateway is connected.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  assets/            Logo and static images
  components/
    layout/           Navbar, Footer, floating action buttons
    home/             Hero, Why Choose Us, Info strip, Gallery
    booking/          Multi-step booking modal (table booking)
    menu/             Menu cards, search, filters, cart, checkout
    shared/           Reusable UI: section headings, glass cards, pool ball icon
  context/            CartContext, BookingContext (React Context + localStorage)
  data/               Business info, game pricing, full cafe menu (from PDF)
  pages/              Home, About, Pricing, Menu, Contact
  utils/              Demo helpers (ID generation, time slot generation)
```

## Features

- Sticky navigation, floating Book Now / WhatsApp / Call buttons
- Multi-step table booking flow with simulated slot availability
- Full digital cafe menu with search + category filters, extracted from the provided PDF
- Cart + checkout flow with simulated payment and order confirmation
- Fully responsive, dark glassmorphism UI with neon green/blue accents

## Notes on Demo Mode

- "Pay Now" simulates a short processing delay before showing a success state.
- Booking/Order IDs are randomly generated (e.g. `RRB-45821`, `RRO-91274`).
- Table/slot availability is deterministically randomized per date so it feels consistent within a session.
- Gallery images use placeholder Unsplash queries — swap in real venue photography before going live.
- Replace the Google Maps embed query in `src/data/business.js` with the exact business listing once available.
