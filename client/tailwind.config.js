import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{tsx,ts}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-100': '#2563eb',
        'primary-200': '#1e40af',
        'secondary-100': '#dee3e9',
        'secondary-200': '#f4f5f7',
        'secondary-300': '#e6ebee',
        'secondary-400': '#747c82',
      },
      boxShadow: {
        DEFAULT: '0 0 0 4px rgba(66, 153, 225, 0.5)',
        sm: '0 3px 5px rgba(0, 0, 0, 0.07)',
      },
    },
  },

  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hover-focus', ['&:hover', '&:focus']);
    }),
  ],
};
