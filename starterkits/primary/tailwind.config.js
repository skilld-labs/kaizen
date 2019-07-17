module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      white: 'var(--color-1)',
      black: 'var(--color-2)',
      'gray-dark': 'var(--color-3)',
      'gray-light': 'var(--color-4)',
      green: 'var(--color-5)',
      'green-light': 'var(--color-6)',
      'green-lighter': 'var(--color-7)',
      lime: 'var(--color-8)',
      'lime-light': 'var(--color-9)',
      error: 'var(--color-10)',
      'error-light': 'var(--color-11)',
    },
    fill: theme => ({
      transparent: 'transparent',
      white: theme('colors.white'),
      error: theme('colors.error'),
    }),
    boxShadow: {
      none: 'none',
      outline: '0 0 0 3px var(--color-8)',
      'outline-error': '0 0 0 2px var(--color-10)',
      'outline-gray-dark': '0 0 0 2px var(--color-3)',
    },
    fontSize: {
      none: 0,
      '1px': '1px',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    rotate: {
      180: '180deg',
    },
  },
  variants: {},
  plugins: [
    ({ addUtilities, config, e }) => {
      const rotateUtilities = Object.keys(config('theme.rotate')).map(key => {
        return {
          [`.${e(`rotate-${key}`)}`]: {
            transform: `rotate(${config('theme.rotate')[key]})`,
          },
        };
      });

      addUtilities(rotateUtilities);
    },
  ],
};