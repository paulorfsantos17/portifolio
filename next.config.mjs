/** @type {import('next').NextConfig} */

import withCss from '@zeit/next-css'
import withPurgeCss from 'next-purgecss'

const nextConfig = {
  withCss: withCss(
    withPurgeCss({
      purgeCss: {
        paths: ['./app/**/*.{js,ts,jsx,tsx}'],
        extractors: [
          {
            extractor: class {
              static extract(content) {
                return content.match(/[A-Za-z0-9-_:/]+/g) || []
              }
            },
            extensions: ['js', 'jsx', 'ts', 'tsx'],
          },
        ],
      },
    }),
  ),
}

export default nextConfig
