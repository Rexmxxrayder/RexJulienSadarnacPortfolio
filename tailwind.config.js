/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      animation: {
        bounceX: 'bounceX 1s ease-in-out infinite'
      },
      keyframes: {
        bounceX: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(20px)' }
        }
      }
    }
  },
  plugins: []
}