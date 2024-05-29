/** @type {import('next').NextConfig} */

// import withBundleAnalyzer from '@next/bundle-analyzer'

// eslint-disable-next-line @typescript-eslint/no-var-requires

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPurgeCSSModules = require('next-purge-css-modules')

// eslint-disable-next-line @typescript-eslint/no-var-requires

// const isAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === true })

const purgeConfig = {
  content: path.join(__dirname, 'src/**/*.{js,jsx,ts,tsx}'),
  enableDevPurge: true,
  safelist: ['body', 'html'],
  fontFace: true,
  keyframes: true,
  variables: true,
}

const nextConfig = {
  experimental: {
    optimizePackageImports: ['animate.css', 'react-icons'],
  },
}

module.exports = withPurgeCSSModules(purgeConfig, nextConfig)
