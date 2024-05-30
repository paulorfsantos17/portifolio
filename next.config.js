/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPurgeCSSModules = require('next-purge-css-modules')

const purgeConfig = {
  content: path.join(__dirname, 'src/**/*.{js,jsx,ts,tsx}'),
  enableDevPurge: false,
  fontFace: true,
  keyframes: true,
  variables: true,
  safelist: ['body', 'html'],
}

const nextConfig = {
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
}

const NextConfigAndPurgeCss = withPurgeCSSModules(purgeConfig, nextConfig)

module.exports = withBundleAnalyzer(NextConfigAndPurgeCss)
