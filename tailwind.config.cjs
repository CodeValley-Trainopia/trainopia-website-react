/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      minHeight: (theme) => ({
        ...theme('spacing')
      }),
      backgroundImage: {
        videoThumbnail: "url('/images/homeheader-1.jpg')"
      },
      colors: {
        tr_darkblue: '#1488CC',
        tr_lightblue: '#12b9c1',
        tr_green: '#18a282',
        tr_yellow: '#ffb900',
        tr_orange: '#f1622f',
        tr_red: '#e53046',
        tr_purple: '#522f84',
        tr_primary: '#12BCC3',
        tr_secondary: '#fdb813'
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        nav: '900px',
        // => @media (min-width: 900px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1427px'
        // => @media (min-width: 1536px) { ... }
      }
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9]
    }
  },
  variants: {
    aspectRatio: ['responsive']
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tw-elements/dist/plugin'),
    // eslint-disable-next-line no-undef
    require('tailwindcss-responsive-embed'),
    // eslint-disable-next-line no-undef
    require('tailwindcss-aspect-ratio'),
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar-hide')
  ]
};
