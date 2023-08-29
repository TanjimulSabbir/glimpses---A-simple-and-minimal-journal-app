/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors: {
        Primary: "#7d8285",
        Secondary:"#313437",
        Blue:"#055ada",
        BtnGray:"#ddd"
      },
    },
  },
  plugins: [],
}