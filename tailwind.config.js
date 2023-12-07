/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'headingfont':'30px',
        'subheadingfont':'20px',
        'pairagraphfont': '15px', 
        
      },
      
      // backgroundColor: {
      //   'deepfuchsia': '#C054D4', 
      //   'whitecolor':"#FFFFFF",
      //   'Darkviolet': '#9900CC'
      // },

      textColor: {
        'blackcolor': '#000', 
        'peacockblue': '#006197', 
        // 'whitecolor':"#FFFFFF",
      },
      fontFamily: {
       font:['Nunito','sans-serif']
      },
      
    },
  },
  plugins: [],
}