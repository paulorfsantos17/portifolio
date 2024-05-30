/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

// eslint-disable-next-line @typescript-eslint/no-var-requires

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

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
    optimizePackageImports: ['react-icons'],
  },
}

const nextConfigAndPurgeCss = (purgeConfig, nextConfig)

module.exports = withBundleAnalyzer(nextConfigAndPurgeCss)
