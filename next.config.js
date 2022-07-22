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
    MONGO_SRV: "mongodb+srv://JulianBertalli:U6YMbB0733DwXmDw@ipad-purchase1.i9igquh.mongodb.net/?retryWrites=true&w=majority",
    JWT_SECRET: "Illatreb96"
  }
};
