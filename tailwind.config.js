/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Deep Slate
        secondary: "#1e293b", // Slate 800
        accent: {
          cyan: "#06b6d4",
          emerald: "#10b981",
          gold: "#fbbf24",
        },
        jade: "#00a86b",
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Noto Serif JP', 'serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          'from': { boxShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4' },
          'to': { boxShadow: '0 0 20px #06b6d4, 0 0 40px #06b6d4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
