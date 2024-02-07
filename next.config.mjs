const { protocol, hostname, port, pathname } = new URL(
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  );
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['basketto-genius.local'],
        remotePatterns: [
            {
                protocol: protocol.slice(0, -1),
                hostname,
                port,
                pathname: `${pathname}/**`,
              },
              {
                hostname: `*.gravatar.com`,
              },
          ],
    }
};

export default nextConfig;
