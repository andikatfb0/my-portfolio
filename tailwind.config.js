/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { 50:'#eef6ff', 500:'#3b82f6', 600:'#2563eb' },
        ink:   { 700:'#0f172a', 500:'#334155' }
      },
      fontFamily: { display: ['Inter', 'ui-sans-serif', 'system-ui'] },
      boxShadow: { card: '0 12px 40px rgba(2,6,23,.08)' }
    }    
  },
  plugins: []
}
