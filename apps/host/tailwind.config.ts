import { join } from 'path';
import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    'apps/host/src/app/**/*.{ts,tsx,html}',
    'apps/host/src/components/**/*.{ts,tsx,html}',
    'apps/shared/src/app/**/*.{ts,tsx,html}',
    'apps/shared/src/components/**/*.{ts,tsx,html}',
    'apps/shop/src/app/**/*.{ts,tsx,html}',
    'apps/shop/src/components/**/*.{ts,tsx,html}',
    'apps/cart/src/app/**/*.{ts,tsx,html}',
    'apps/cart/src/components/**/*.{ts,tsx,html}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
        },
        transparent: 'transparent !important',
        secondary: {
          DEFAULT: 'var(--secondary-color)',
        },
        muted: {
          DEFAULT: 'var(--primary-color)',
        },
        light: {
          DEFAULT: 'var(--light-color)',
        },
        dark: {
          DEFAULT: 'var(--dark-color)',
        },
      },
      backgroundColor: (theme) => theme('colors'),
      gridTemplateColumns: {
        '3': 'repeat(3, minmax(0, 1fr))',
      },
      gridColumn: {
        '4': 'span 4 / span 4',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: '2.5rem',
          color: 'var(--dark-color)',
          lineHeight: '1.2',
          marginBottom: '0.5rem',
        },
        h2: {
          fontSize: '2rem',
          color: 'var(--dark-color)',
          lineHeight: '1.2',
          marginBottom: '0.5rem',
        },
        h3: {
          fontSize: '1.75rem',
          color: 'var(--dark-color)',
          lineHeight: '1.2',
          marginBottom: '0.5rem',
        },
        h4: {
          fontSize: '1.5rem',
          color: 'var(--dark-color)',
          lineHeight: '1.2',
          marginBottom: '0.5rem',
        },
        h5: {
          fontSize: '1.25rem',
          color: 'var(--dark-color)',
          lineHeight: '1.2',
          marginBottom: '0.5rem',
        },
        h6: {
          fontSize: '1rem',
          color: 'var(--dark-color)',
          lineHeight: '1.2',
          marginBottom: '0.5rem',
        },
        p: { marginBottom: '1rem' },
      });
    }),
  ],
};
