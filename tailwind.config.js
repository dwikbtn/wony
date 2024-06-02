/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", 
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  "node_modules/flowbite-vue/**/*.{vue,js,jsx,ts,tsx}",
  "node_modules/flowbite/**/*.{vue,js,jsx,ts,tsx}",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '5rem',
        xl: '6rem',
   '2xl': '14rem',
      },
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

