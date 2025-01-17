/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      animation: {
        'bounce-x': 'bounceX 1s ease-in-out infinite'
      },
      keyframes: {
        bounceX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' }
        }
      }
    }
  },
  plugins: []
}