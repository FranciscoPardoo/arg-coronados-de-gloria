
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluelight: {
          light: '#85d7ff',
          DEFAULT: '#0086C0',
          dark: '#009eeb',
        },
    },
    height: {
      '120': '32rem',
    },
    width: {
      '100': '90rem',
    }
  },
    fontFamily: {
      montserrat: ['montserrat', 'sans-serif'],
    },
    
  },
  plugins: [
  ],
}
