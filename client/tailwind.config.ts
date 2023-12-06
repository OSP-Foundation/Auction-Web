import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "white": "#fff",
      "primary-bg": "var(--primary-bg)",
      "primary-black": "var(--primary-black)",
      "primary-blue": "var(--primary-blue)",
      "primary-grey": "var(--primary-grey)"
    }
  },
  plugins: [],
}
export default config
