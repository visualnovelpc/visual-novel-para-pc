/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        lilita: ['Lilita One', 'sans-serif'],
        asap: ['Asap Variable', 'sans-serif'],
        concertOne: ['Concert One', 'cursive'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
