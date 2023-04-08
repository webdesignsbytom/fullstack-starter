/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'news-bg': "url('../assets/img/backgrounds/newsletter-bg.jpg')",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'monts': ['Montserrat', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
      },
      colors: {
        'main-colour': '#1F2937',
        'nav-colour': '#1F2937',
        'footer-colour': '#1F2937',
        'colour-pale': '#f1f5f9',
        'colour-light': '#e2e8f0',
        'colour-med': '#94a3b8',
        'colour-dark': '#1e293b',
        'transparent-black': 'rgba(0, 0, 0, 0.65)',
        'transparent-white': 'rgba(255, 255, 255, 0.65)',
        'main-text': '#000000',
        'alt-text': '#ffffff',
        'hover-text': '#94a3b8',
        'active-text': '#6b7280',
        'placeholder-text': 'rgb(55 65 81)',
        'error-red': '',
        'success-green': '',
        'event-red': '',
        'hyperlink-blue': '#2563eb',
        'secleted': '#2563eb',
        'non-selected': '#cbd5e1',
      },
      gridTemplateRows: {
        'reg': 'auto 1fr',
        'rev': '1fr auto',
        'even': '1fr 1fr 1fr',
        'one': '1fr',
        'special': 'auto 1fr 0.5fr',
        'ls': '1fr 0.4fr',
        'a1a': 'auto 1fr auto',
        'aa': 'auto auto',
        '3x': '3fr 1fr',
        'item': '50px 1fr',
        'ten-one': '10fr 1fr',
      },
      gridTemplateColumns: {
        'reg': 'auto 1fr',
        'rev': '1fr auto',
        'even': '1fr 1fr 1fr',
        'one': '1fr',
        'xo': '1fr 0.6fr',
        'a1a': 'auto 1fr auto',
        '1a1': '1fr auto 1fr',
        'aa': 'auto auto',
        'faf': '1fr 0.5fr 1fr',
        '1p1': '1fr 30px 1fr',
        '2a': '2fr 1fr auto',
        '3a': '1fr 1fr 0.7fr auto',
        '3x': '3fr 1fr',
        'item': '50px 1fr',
      },
      width: {
        id: '12ch;'
      },
      fontSize: {
        'ss': '0.5rem'
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}