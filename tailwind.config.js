/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        felt: {
          950: '#07090A',
          900: '#0A0D0E',
          800: '#0F1413',
          700: '#161C1B',
          600: '#212927',
        },
        cue: {
          400: '#5CFFA0',
          500: '#34E37A',
          600: '#1FB863',
        },
        chalk: {
          400: '#5FD6FF',
          500: '#22C9FF',
          600: '#0FA0D6',
        },
        rail: {
          300: '#E6CE9C',
          400: '#D4AF6A',
          500: '#B8934F',
        },
      },
      fontFamily: {
        display: ['"Unbounded"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(52,227,122,0.35)',
        glowBlue: '0 0 40px -8px rgba(34,201,255,0.35)',
        glowGold: '0 0 30px -6px rgba(212,175,106,0.35)',
      },
      backgroundImage: {
        felt: 'radial-gradient(120% 120% at 50% -10%, rgba(52,227,122,0.08) 0%, rgba(7,9,10,0) 60%)',
      },
    },
  },
  plugins: [],
}
