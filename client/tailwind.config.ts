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
      "transparent": "transparent",
      "primary-bg": "var(--primary-bg)",
      "primary-black": "var(--primary-black)",
      "primary-blue": "var(--primary-blue)",
      "primary-grey": "var(--primary-grey)",
      "secondary-black": "var(--secondary-black)",
      "secondary-blue": "var(--secondary-blue)",
      "primary-border": "var(--primary-border)",
      "pure-black": "var(--pure-black)"
    },
    extend: {
      spacing: {
        "container": "1.5rem 1rem",
        "container-md": "2rem 5rem"
      },
      boxShadow: {
        "primary-box-shadow": "var(--primary-box-shadow)"
      },
      maxWidth: {
        "7xl": "var(--w-7xl)"
      }
    }
  },
  plugins: [],
}
export default config
