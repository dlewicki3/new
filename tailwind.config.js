// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main': '#e002a2',
        'second': '#47019d',
        'three': '#aa0000',
        'black': '#212121',
        'borderColor': 'rgba(2,23,53,.1)',
        'gray': '#808080e2',
        'g':'#687076',
       'literki':'#687076',
       'niebieski':'#006adc',
      },
      fontSize: {
        'custom': '15px', // Dodaj niestandardowy rozmiar czcionki
      },
      screens: {
        
         'fck':'200px',

        'exsm': '300px',

        'sm': '500px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
