export const PRICING = [
  {
    id: 'pool',
    name: 'Pool',
    ballNumber: 8,
    ballColor: '#0A0D0E',
    accent: 'cue',
    tagline: 'American Pool on premium cloth-covered tables',
    tiers: [
      { label: 'Half Hour', price: 200, unit: '' },
      { label: 'One Hour', price: 300, unit: '' },
    ],
  },
  {
    id: 'snooker',
    name: 'Snooker',
    ballNumber: 15,
    ballColor: '#C0392B',
    accent: 'chalk',
    tagline: 'Full-size professional snooker tables',
    tiers: [
      { label: 'Per Hour', price: 420, unit: '/hr' },
      { label: 'Per Minute', price: 7, unit: '/min' },
    ],
  },
]
