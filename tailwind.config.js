/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        backgroundWhite:"#fff",
        backgroundBlack:"#151515",
        backgroundhalfWhite:"#F5F5F5",
        backgroundcreem:"#FCFCFC",
        backgroundgreen: "#42B00F",
        backgroundgray: "#F9F9F9",
        textColor: "#7E8284",
        textColor1: "#737373",
        textColor3: "#151515",
        borderColor: "#D9D9D9",
        buttonColor:"#42B00F"
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "2rem"
      },
      fontFamily: {
        fontArimo :"'Arimo', sans-serif;"
      },
      boxShadow: {
        shadow:" 0px 2.97466px 19.831px rgba(0, 0, 0, 0.05)"
      }

    },
  },
 plugins: [
        
    ]
}