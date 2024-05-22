import type { Config } from 'tailwindcss'

const config: Config = {
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
  },

  theme: {
    extend: {
      backgroundImage: {
        'blur-gradient-mobile': 'url(assets/bg-mobile.svg)',
        'blur-gradient': 'url(assets/bg.svg)',
        'particles-mobile': 'url(assets/particles-mobile.svg)',
      },
      fontFamily: {
        ultralife: ['Ultralife', 'sans-serif'],
      },
      colors: {
        background: '#111026',
        primary: '#6850BF',
        'primary-light': '#9266F2',
        secondary: '#0E1A59',
        'secondary-light': '#52C5F2',
        'slate-200': '#E2E8F0',
      },
    },
  },
  plugins: [require('taos/plugin')],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
}
export default config
