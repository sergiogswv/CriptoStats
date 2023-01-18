/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx}', 'src/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        '0%, 100%': {
          transform: 'translateY(0%)',
        },
        '50%': {
          transform: 'translateY(0)',
        }
      },
      animation: {
        bounce: 'bounce 7.5s infinite'
      }
    },
  },
  plugins: [],
}
