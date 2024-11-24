/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff' },
          '100%': { boxShadow: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff' },
        },
      },
    },
  },
  plugins: [],
};