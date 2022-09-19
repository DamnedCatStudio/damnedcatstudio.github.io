/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost:3000",
      "tailwindui.com",
      "images.unsplash.com",
      "damnedcat-studio.imgix.net",
      "lh3.googleusercontent.com",
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    loader: "imgix",
    path: "https://damnedcat.studio",
  },
};

module.exports = nextConfig;
