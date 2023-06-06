/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    './homepage/*.js',
    './slideshow-page/*.js',
    '*.html',
    '*.js'
  ],
  theme: {
    fontFamily:{
      'libre':['Libre Baskerville', 'serif']
    },
    screens: {
      'mobile': {'min':'200px','max':'427px'},
      'tablet': {'min':'427px','max':'782px'},
      'laptop': {'min':'782.1px'}
    },
    colors:{
      //primary colors
      'black':'#000',
      'white':'#fff',
      'boulder':'#7D7D7D',
      'mercury':'#E5E5E5',
      'concrete':'#F3F3F3'
    },
    extend: {},
  },
  plugins: [
    plugin(function({addVariant,addComponents,addBase}){
      addVariant("children","&>*");

      addComponents({
        '.year-text':{
          fontWeight:'700',
          fontSize:'12.5rem',
          lineHeight:'9.375rem',
          
        },

        '.subhead1':{
          fontSize:'0.9375rem',
          lineHeight:'1.1875rem',
        },

        '.subhead2':{
          fontSize:'0.8125rem',
          lineHeight:'1.0625rem',
        },

        '.link1':{
          fontSize:'0.75rem',
          lineHeight:'0.9375rem',
          letterSpacing:'0.15625rem',
          height:'0.6875rem',
          width:'9rem',
         },
        
        '.link2':{
          fontSize:'0.5625rem',
          lineHeight:'0.6875rem',
          letterSpacing:'0.125rem',
        },

        
      });

      addBase({
        'body':{

        },

        'h1':{
          fontSize:'3.5rem',
          lineHeight:'4rem',
        },

        'h2':{
          fontSize:'1.5rem',
          lineHeight:'1.8125rem',
        },

        'h3':{
          color:'#fa2',
          fontSize:'1.125rem',
          lineHeight:'1.375rem'
        }
      });
    })
  ],
}

