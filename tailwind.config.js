/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  safelist: [
    {
      pattern: /bg-\[.*\]/, // Allow all arbitrary background classes
    },
  ],
  theme: {
    colors: {
      'gray-border': '#E5E5E580',
      'red-avatar': '#BF0637',
      'gray-one': '#F8F8F8',
      'gray-two': "#D9D9D9",
      'gray-three': "#F9F9F9",
      'gray-text': "#292D32",
      'gray-badge': "#747478",
      'white': "#FFFFFF",
      'black': "#000000",
      "green-toggle": "#39B588",
      'black-modal': "#1E1E1E",
      'blue-btn': "#332089",
      'blue-border': "#332098",
      'red-error': "#bf0637",
    },
    extend: {},
  },
  plugins: [],
}

