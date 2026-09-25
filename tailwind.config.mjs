/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#1a1917', soft: '#3b3835' },
        paper: { DEFAULT: '#f6f5f2', deep: '#edebe5' },
        // The brand orange is a graphic colour: it misses contrast as text, so `deep` carries the words.
        flame: { DEFAULT: '#f97c3d', deep: '#a8460b', tint: '#fdf1e8' },
      },
    },
  },
  plugins: [],
};
