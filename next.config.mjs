const { protocol, hostname, port, pathname } = new URL(
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  );
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['thebookclub.netsons.org', 'basketto-genius.local'],
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
    },
   
    webpack(config) {
      // Grab the existing rule that handles SVG imports
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.('.svg')
      )
  
      config.module.rules.push(
        // Reapply the existing rule, but only for svg imports ending in ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert all other *.svg imports to React components
        {
          test: /\.svg$/i,
          issuer: {not: /\.(css|scss|sass)$/},
          resourceQuery: {not: /url/}, // exclude if *.svg?url
          loader: '@svgr/webpack',
          options: {
            dimensions: false,
            titleProp: true,
          },
        }
      )
  
      // Modify the file loader rule to ignore *.svg, since we have it handled now.
      fileLoaderRule.exclude = /\.svg$/i
  
      return config
    },
};

export default nextConfig;
