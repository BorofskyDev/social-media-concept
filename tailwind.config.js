module.exports = {
  mode: 'jit',
  content: [

    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'MrDafoe': ['"Mr Dafoe"', 'cursive']
    },
    extend: {
      // animation: {
      //   ''
      // }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}