import type { Config } from 'tailwindcss';

export default {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          600: '#4B5563',
          500: '#6B7280',
          400: '#9CA3AF',
          200: '#E5E7EB',
          100: '#F3F4F6',
          50: '#F9FAFB',
        },
        blue: {
          100: '#3692FF',
          200: '#1967D6',
          300: '#1251AA',
        },
        red: {
          error: '#F74747',
        },
      },
      screens: {
        pc: '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config;
