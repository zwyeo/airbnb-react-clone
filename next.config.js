/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com"],
  },
  // only for public API key, private API key put on .env file
  env: {
    mapbox_key:
      "pk.eyJ1Ijoia3l6ZXllbyIsImEiOiJjbDV1ZWN6NWMwYzFmM2RqeThxeDJmdTN1In0.8TxcFTuJ4c9Wokh9s3Pw9A",
  },
};

module.exports = nextConfig;
