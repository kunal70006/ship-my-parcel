/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateX(-200%)' },
        },
        marqueePhone: {
          '0%': { transform: 'translateX(1000%)' },
          '100%': { transform: 'translateX(-1000%)' },
        },
      },
      animation: {
        'marquee-infinite': 'marquee 25s linear infinite',
        'marquee-infinite-phone': 'marqueePhone 25s linear infinite',
      },
    },
  },
  plugins: [],
};
