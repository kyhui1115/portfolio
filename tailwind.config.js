/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        216: '54rem',
        136: '34rem',
      },
      width: {
        84: '21rem',
        140: '35rem',
        240: '60rem',
      },
      colors: {
        'beige-100': '#FAF5F0',
        'beige-200': '#E9E4DF',
        'beige-300': '#E1DCD7',
        'beige-400': '#BBAA9F',
        'gray-100': '#A2A2A2',
        'gray-200': '#888888',
        'gray-300': '#7E7E7E',
        'gray-400': '#404040',
        'gray-500': '#2B2B2B',
        'red-100': '#EE6C6C',
        'yellow-100': '#ECC96B',
        'green-100': '#7FD52A',
      },
      animation: {
        translate: 'translate 1s linear',
        scale: 'scale 1s',
      },
      keyframes: {
        translate: {
          from: {
            transform: 'translateY(-10%)',
          },
          to: {
            transform: 'translateY(0%)',
          },
        },
        scale: {
          from: {
            transform: 'scale(.5)',
          },
          to: {
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
