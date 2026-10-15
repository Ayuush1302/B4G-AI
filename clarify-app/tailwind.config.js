/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-brand-primary)',
          black: 'var(--color-brand-black)',
          white: 'var(--color-brand-white)',
          'dark-grey': 'var(--color-brand-dark-grey)',
          'medium-grey': 'var(--color-brand-medium-grey)',
          'light-grey': 'var(--color-brand-light-grey)',
          'lightest-grey': 'var(--color-brand-lightest-grey)',
        }
      },
      fontFamily: {
        sans: ['Aspekta', 'var(--font-family-primary)', 'sans-serif'],
        secondary: ['Aspekta', 'var(--font-family-secondary)', 'sans-serif'],
      },
      fontSize: {
        base: 'var(--font-size-body)',
        large: 'var(--font-size-h5)',
        '3xl': 'var(--font-size-h4)',
        '4xl': 'var(--font-size-h3)',
        '8xl': 'var(--font-size-h1)',
      },
      spacing: {
        'gap-default': 'var(--spacing-gap-default)',
        'section-desktop': '1.5rem',
        'section-tablet': '1rem',
        'section-mobile': '0.75rem',
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
      }
    },
  },
  plugins: [],
}
