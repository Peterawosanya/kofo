/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#0a0a0a',
          900: '#111111',
          800: '#1a1a1a',
          700: '#222222',
          600: '#2e2e2e',
          500: '#3a3a3a',
        },
        bone: {
          50: '#f5f5f0',
          100: '#e8e6e0',
          200: '#d4d2cc',
          300: '#b8b6b0',
          400: '#8a8884',
        },
      },
    },
  },
  plugins: [],
};
