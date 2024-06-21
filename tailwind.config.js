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
        translate: 'translate 1s linear',
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
      },
    },
  },
  plugins: [],
};
