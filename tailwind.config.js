module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  backgroundImage: {
    'imb': "url('/img/concert.jpg')",
    'imb2' : "url('/img/cercle1.png')",
    'imb3' : "url('/img/hero-artistes.jpg')",
    'imb4' : "url('/img/hero-programmation.jpg')",
    'imb5' : "url('/img/deco-rose.png')",
    'imb6' : "url('/img/hero-artiste.jpg')",
    'imb7' : "url('/img/hero-home.jpg')",
    'imb8' : "url('/img/img-a-propos.jpg')",
  },
    
  theme: {
    extend: {
      screens: {
        'light': { 'raw': '(prefers-color-scheme: light)' },
      },

      "colors": {
       "fondsite": "#191919",
       "illustrationrose": "#ab468b",
       "boutonorange": "#d56e64",
       "boutonvert": "#53b657",
       "fond gris ": "#272727",
       "formulaire et composants - fond blanc": "#ffffff",
       "fond2footer": "#161616",
       "fond1footer": "#272727",
       "degrade-1": "#c75f71",
       "degrade-2": "#b34c83",
       "degrade-3": "#9d4b8a",
       "degrade-4": "#8e4297"
      },
      "fontSize": {
       "base": "1.25rem",
       "lg": "1.5625rem",
       "xl": "1.875rem",
       "2xl": "2.1875rem",
       "3xl": "3.125rem",
       "4xl": "4.375rem",
       "5xl": "12.5rem"
      },
      "fontFamily": {
       "inter": "Inter",
       "oswald": "Oswald",
       "roboto": "Roboto"
      },
      "borderRadius": {
       "none": "0",
       "xs": "0.05624999850988388rem",
       "sm": "0.0625rem",
       "default": "0.125rem",
       "lg": "0.15625rem",
       "xl": "0.25rem",
       "2xl": "0.35121950507164rem",
       "3xl": "0.5rem",
       "4xl": "0.5625rem",
       "5xl": "0.625rem",
       "6xl": "0.75rem",
       "7xl": "0.84375rem",
       "8xl": "1rem",
       "9xl": "1.0625rem",
       "10xl": "1.09375rem",
       "11xl": "1.25rem",
       "12xl": "1.5rem",
       "13xl": "1.875rem",
       "14xl": "1.90625rem",
       "15xl": "1.9375rem",
       "16xl": "2rem",
       "17xl": "2.032520294189453rem",
       "18xl": "2.1875rem",
       "19xl": "2.5rem",
       "20xl": "2.8271484375rem",
       "21xl": "3.03125rem",
       "22xl": "3.71875rem",
       "23xl": "5.0888671875rem",
       "full": "9999px"

      }
      
     }

  },
  plugins: [],
}
