/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Primary Palette
        'primary-brand': '#43D88D', // Vibrant Green - main action and success color
        'primary-background': '#D9F1F0', // Light Mint Green/Teal - primary background
        'primary-dark': '#403837', // Dark Charcoal/Brown - text and CTA buttons
        'primary-blue': '#D9F1F0', // Using mint green for consistency
        
        // Secondary Accents
        'secondary-orange': '#FFC298', // Warm Orange - streaks and activity
        'secondary-purple': '#E3DFF2', // Soft Lavender - specific states
        'light-blue': '#D9F1F0', // Light Mint Green/Teal
        
        // Neutral Colors
        'text-dark': '#403837', // Dark Charcoal/Brown
        'text-gray': '#73757B',
        'text-grayx': '#D9F1F0',

        'background-white': '#F6F6F6', // Off-White/Light Grey for cards
        'background-pure': '#FFFFFF', // Pure white when needed
        'border-light': '#E1E2E6',
        
        // Legacy aliases (for backwards compatibility)
        'off-white': '#F6F6F6',
        'mint-green': '#D9F1F0',
        'vibrant-green': '#43D88D',
        'warm-orange': '#FFC298',
        'soft-lavender': '#E3DFF2',
      },
      borderRadius: {
        '2xl': '24px',
        'full': '9999px',
      },
      animation: {
        'scroll-left': 'scroll-left 40s linear infinite',
        'scroll-right': 'scroll-right 40s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      }
    }
  },
  plugins: [],
}
