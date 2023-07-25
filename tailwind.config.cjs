/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#ECE4F4",
          100: "#D3BBEA",
          200: "#B595D5",
          300: "#9366C1",
          400: "#7033AC",
          500: "#5F209E",
          600: "#4B1C7A",
          700: "#3D1466",
          800: "#2B0E47",
          900: "#1F0A33",
          DEFAULT: "#5F209E",
        },
        yellow: {
          50: "#FDFCE7",
          100: "#FAFAD5",
          200: "#F5F5AB",
          300: "#EFEF82",
          400: "#EAEA58",
          500: "#E5E52E",
          600: "#B7B725",
          700: "#89891C",
          800: "#5C5C12",
          900: "#2E2E09",
          DEFAULT: "#E5E52E",
        },
        gray: {
          50: "#F6F2F7",
          100: "#E6E0E9",
          200: "#CAC5CD",
          300: "#AEA9B1",
          400: "#938F96",
          500: "#79767D",
          600: "#605D64",
          700: "#48464C",
          800: "#38363B",
          900: "#1D1B20",
          DEFAULT: "#79767D",
        },
      },
      backgroundImage: {
        'noise': "url('/images/noise.png')",
      }
    },
  },
  plugins: [],
};
