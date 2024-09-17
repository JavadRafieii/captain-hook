/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
      }
    },
    extend: {
      screens: {
        '3xl': '1950px',
      },
      colors: {
        'dark-navy': '#242A3A',
        'steel-gray': '#3B3F4E',
        'sunset-yellow': '#F6B12B',
        'smoky-gray': '#3a3a3a',
        'storm-gray': '#42485C',
      },
      backgroundImage: {
        'footer': "url('/bg-footer.png')",
        'stick-slider': "url('/stick-background-slider.png')",
        'blue': "url('/blue-background.png')",
        'paper-play': "url('/paper-play-CH.png')",
        'paper-play-mobile': "url('/paper-play-CH-mobile.png')",
        'stick-about': "url('/stick-background-about.jpg')",
        'paper-about': "url('/paper-about.png')",
        'linear': " linear-gradient(90deg, rgba(26,31,63,1) 10%, rgba(31,37,77,1) 50%, rgba(26,31,63,1) 90%)",

      }
    },
  },
  plugins: [],
}