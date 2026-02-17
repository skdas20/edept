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
        background: '#F4F7FB',
        surface: '#FFFFFF',
        'surface-2': '#EEF3F9',
        text: '#0F172A',
        'muted-text': '#4B5565',
        border: '#D7E0EC',
        primary: {
          DEFAULT: '#0F2B59',
          600: '#0C2247',
          50: '#E8EFFC',
          dark: '#081A39',
        },
        accent: {
          DEFAULT: '#C89A2B',
          600: '#A97F20',
          50: '#FAF2DF',
          light: '#E0B84F',
        },
        success: '#16A34A',
        warning: '#F59E0B',
        danger: '#DC2626',
        info: '#2563EB',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        heading: ['Sora', 'Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        pill: '999px',
        input: '12px',
        '3xl': '24px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(15, 23, 42, 0.05)',
        md: '0 10px 30px rgba(15, 23, 42, 0.10)',
        lg: '0 20px 45px rgba(15, 23, 42, 0.12)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glow-primary': '0 0 30px rgba(15, 43, 89, 0.3)',
        'glow-accent': '0 0 30px rgba(200, 154, 43, 0.3)',
      },
      maxWidth: {
        content: '1200px',
        paragraph: '75ch',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        scroll: 'scroll 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        scroll: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(15px)', opacity: '0' },
        },
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(11, 58, 120, 0.9), rgba(10, 47, 99, 0.95)), url('/images/pattern-bg.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
