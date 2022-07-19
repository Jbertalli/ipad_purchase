/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  nextConfig
})

// module.exports = nextConfig

module.exports = {
  env: {
    MONGO_SRV: "mongodb+srv://JulianBertalli9:Illatreb96@ipad-purchase.riojt7m.mongodb.net/?retryWrites=true&w=majority"
  }
};
