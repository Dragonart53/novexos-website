/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0f',
        'cyber-blue': '#00d4ff',
        'cyber-purple': '#6c63ff',
        'cyber-pink': '#ff006e',
        'cyber-green': '#00ff9f',
      },
      fontFamily: {
        'display': ['var(--font-display)'],
        'body': ['var(--font-body)'],
      },
    },
  },
  plugins: [],
}
