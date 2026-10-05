/** Brand colours live in src/index.css as CSS variables (RGB channels).
 *  Change them there and the whole site re-themes. */
const c = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: c('forest'), deep: c('forest-deep') },
        sage: { DEFAULT: c('sage'), soft: c('sage-soft') },
        ivory: { DEFAULT: c('ivory'), deep: c('ivory-deep') },
        gold: c('gold'),
        charcoal: c('charcoal'),
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgb(23 74 58 / 0.04), 0 12px 32px -12px rgb(23 74 58 / 0.14)',
        lift: '0 2px 4px rgb(23 74 58 / 0.05), 0 24px 48px -16px rgb(23 74 58 / 0.22)',
      },
      maxWidth: { prose: '68ch' },
    },
  },
  plugins: [],
};
