/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,

    webpack5: true,

    webpack: (config) => {

        config.module.rules.push({
            
                test: /\.svg$/,
                use: [{loader:'@svgr/webpack',options:{icon:true}}],
              
        })

        return config;
    }
  };
  
  export default nextConfig;

