import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#2563eb',
        'primary-200': '#1e40af',
        secondary: '#dee3e9',
      },
      boxShadow: {
        DEFAULT: '0 0 0 4px rgba(66, 153, 225, 0.5)',
      },
    },
  },

  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hover-focus', ['&:hover', '&:focus']);
    }),
  ],
};
