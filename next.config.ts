/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚫 ignoruj błędy ESLint podczas budowania
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ tryb React Strict (pomaga wykrywać błędy)
  reactStrictMode: true
};

export default nextConfig;
