import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
          colors: {
            primary: '#f472b6',
            dark: '#64748b',
            secondary: '#0f172a',
            soft:  '#fff1f2',
            samar: '#d1d5db',
            skill: '#f9fafb',
            cream:'#fffcf9',
            ijo: '#036147',
            oren: '#ff8531',
            pink: '#F3CCE7',
            brow: '#b33f62',
            biru: '#AED9E4',
            ungu: '#CAA2B8'
          },
          screens: {
            gadget: '320px'
          },
    },
  },
  plugins: [],
};
export default config;
