/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export a fully static site so it can be hosted on GitHub Pages
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
