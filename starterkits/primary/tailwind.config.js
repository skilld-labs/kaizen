module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      white: 'var(--color-1)',
      black: 'var(--color-2)',
      'gray-dark': 'var(--color-3)',
      green: 'var(--color-4)',
      'green-light': 'var(--color-5)',
      'green-lighter': 'var(--color-6)',
      lime: 'var(--color-7)',
      'lime-light': 'var(--color-8)',
      error: 'var(--color-9)',
      'error-light': 'var(--color-10)',
    },
    fill: theme => ({
      transparent: 'transparent',
      white: theme('colors.white'),
    }),
    boxShadow: {
      outline: '0 0 0 3px var(--color-7)',
    },
  },
  variants: {},
  plugins: [],
};
