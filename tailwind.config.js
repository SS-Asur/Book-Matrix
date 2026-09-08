/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#16150F',
          soft: '#211F17',
          rule: '#2B2A22',
        },
        ivory: {
          DEFAULT: '#F6F2E8',
          dim: '#EFE9DA',
          rule: '#E2DAC5',
        },
        brass: {
          DEFAULT: '#A9803D',
          light: '#C9A566',
          deep: '#8A6A31',
        },
        primary: { DEFAULT: '#2563EB', light: '#3B82F6', dark: '#1D4ED8', soft: '#EFF6FF', }, purple: { DEFAULT: '#7C3AED', light: '#8B5CF6', dark: '#6D28D9', soft: '#F5F3FF', },
        emerald: {
          DEFAULT: '#1F3D34',
          light: '#2E5C4E',
        },
        stone: {
          DEFAULT: '#8B8577',
          light: '#B4AE9E',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
      },
      letterSpacing: {
        widest2: '0.22em',
      },
    },
  },
  plugins: [],
}
