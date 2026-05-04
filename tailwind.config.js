/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#FFF9F0',
          100: '#FFF0DB',
          200: '#FFE0B5',
          300: '#FFCC85',
          400: '#F5A623',
          500: '#E8941A',
          600: '#D47D10',
          700: '#A85F0A',
          800: '#7A4408',
          900: '#4D2B05',
        },
        cream: '#FAF7F2',
        charcoal: '#2A2A2A',
        slate: '#5A5550',
      },
      fontFamily: {
        display: ['"DIN Alternate"', '"DIN"', '"Bebas Neue"', 'system-ui', 'sans-serif'],
        body: ['"Gill Sans"', '"Gill Sans MT"', 'Calibri', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
