/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Raleway:"Raleway , sans-serif"
      },
      backgroundColor:{
        fundo:"#232b3c",
        fundo2:"#181d29",
        fundo3:"#0c1524"
      },
      maxWidth:{
        padrao: "550px"
      }
    },
  },
  plugins: [],
}

