/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/attivita/teatro/scintille', destination: '/attivita/teatro/teatro-bambini', permanent: true },
      { source: '/attivita/teatro/bagliori', destination: '/attivita/teatro/teatro-ragazzi', permanent: true },
    ];
  },
};

export default nextConfig;