/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        conatiner:"1604px",
      },
      colors: {
        'primary': '#262626',
        'secoundery':'#6D6D6D'
      },
      fontFamily:{
        DMSans: ["DM Sans"]
      },
      backgroundImage:{
        Img:''
      }
    },
  },
  plugins: [],
}