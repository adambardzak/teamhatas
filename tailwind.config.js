/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          light: 'var(--primary-light)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          light: 'var(--secondary-light)',
        },
      },
      backgroundColor: {
        'primary-10': 'rgba(59, 130, 246, 0.1)', // 10% opacity of blue-500
        'primary-20': 'rgba(59, 130, 246, 0.2)', // 20% opacity
        'secondary-10': 'rgba(249, 115, 22, 0.1)', // 10% opacity of orange-500
        'secondary-20': 'rgba(249, 115, 22, 0.2)', // 20% opacity
      },
      textColor: {
        'primary-10': 'rgba(59, 130, 246, 0.1)', // 10% opacity of blue-500
        'primary-20': 'rgba(59, 130, 246, 0.2)', // 20% opacity
      },
      borderColor: {
        'primary-20': 'rgba(59, 130, 246, 0.2)', // 20% opacity
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};