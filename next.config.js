/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_WEB3AUTH_ClIENT_ID:
      "BHcMlfmYEYtVViPA6yIjGz7rIShHIuA679D0qW4g1sKsnoJixgPFi9e-phdQmvJd9HoAJr6GxbS0-nq0xROLyi4",
    WEB3AUTH_ClIENT_SECRET:
      "b0807d78d2d13dad1c1ab52fafdf36f0670e05c74dc4bdef114508d4b5b5fc93",
  },
  // swcMinify: true,
};

module.exports = nextConfig;
