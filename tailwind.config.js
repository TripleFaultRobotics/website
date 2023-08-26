/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "mono": ["Space Mono"],
        "sans": ["Inter Tight"],
      }
    },
  },
  plugins: [],
}

