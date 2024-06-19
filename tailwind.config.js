/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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
      },
      animation: {
        'scaleup-2s': 'scaleup 2s linear',
        'scaleup-1s': 'scaleup 1s linear',
      },
      keyframes: {
        scaleup: {
          from: {
            transform: 'scale(0)',
          },
          to: {
            transform: 'scale(1)',
          },
        },
        appear2s: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
