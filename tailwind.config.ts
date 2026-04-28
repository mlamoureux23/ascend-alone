import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#111111',
          white: '#FFFFFF',
          gray: {
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#CCCCCC',
            500: '#757575',
            700: '#333333',
          },
        },
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'hero-sub': ['1.25rem', { lineHeight: '1.5', fontWeight: '500' }],
      },
    },
  },
} satisfies Config
