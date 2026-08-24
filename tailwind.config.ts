import type { Config } from 'tailwindcss';

// Same semantic token names/values as the app's own Tailwind v4 @theme
// (dark mode, the app's default look) — kept in sync by hand since this
// is a separate Next.js project.
const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#181210',
        surface: '#251e1c',
        'surface-alt': '#2f2826',
        'surface-highest': '#3b3331',
        primary: '#ba880f',
        'primary-light': '#f7bd48',
        'primary-dark': '#9a6e0a',
        'on-primary': '#181210',
        'on-surface': '#ede0dc',
        'on-surface-variant': '#d3c4af',
        'outline-variant': '#4f4535',
        success: '#10b981',
        danger: '#ef4444',
        warning: '#f59e0b',
      },
      fontFamily: {
        display: ['var(--font-inter)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
