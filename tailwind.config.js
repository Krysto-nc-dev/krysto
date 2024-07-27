/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9196CA', // Couleur primaire
          light: '#A3A8D6',
          dark: '#7A7FAF',
        },
        secondary: {
          DEFAULT: '#7EC7B8', // Couleur secondaire
          light: '#95D6C8',
          dark: '#6AB8A7',
        },
        neutral: {
          DEFAULT: '#F5F5F5',
          light: '#FFFFFF',
          dark: '#E0E0E0',
        },
        success: {
          DEFAULT: '#4CAF50', // Couleur de succès
          light: '#66BB6A',
          dark: '#388E3C',
        },
        warning: {
          DEFAULT: '#FFC107', // Couleur d'avertissement
          light: '#FFCA28',
          dark: '#FFA000',
        },
        danger: {
          DEFAULT: '#F44336', // Couleur de danger
          light: '#EF5350',
          dark: '#D32F2F',
        },
        info: {
          DEFAULT: '#2196F3', // Couleur d'information
          light: '#42A5F5',
          dark: '#1976D2',
        },
      },
      fontFamily: {
        gravesend: ['Gravesend Sans', 'sans-serif'],
        animated: ['Animated', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
