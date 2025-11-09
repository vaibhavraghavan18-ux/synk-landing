/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d9edff",
          200: "#b3d9ff",
          300: "#80c1ff",
          400: "#4da8ff",
          500: "#1A73E8",
          600: "#1558b6",
          700: "#0f3f84",
          800: "#0a2959",
          900: "#061733",
        }
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.15)',
        'glow': '0 0 40px rgba(26,115,232,0.25)',
      },
      backgroundImage: {
        'grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
        'noise': 'url("/noise.png")'
      }
    },
  },
  plugins: [],
}
