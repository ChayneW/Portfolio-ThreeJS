// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
    // webpack: (config, { isServer }) => {
    //   config.module.rules.push({
    //     test: /\.(glb|gltf)$/,
    //     use: [
    //       {
    //         loader: 'file-loader',
    //         options: {
    //           outputPath: 'static/models/', // Where the models will be saved
    //         },
    //       },
    //     ],
    //   });
  
    //   return config;
    // },
    images: {
      domains: ['images.unsplash.com', 
        'plus.unsplash.com', 
        'cdn.sanity.io', 
        'thenounproject.com', 
        'res.cloudinary.com', 
        'assets.aceternity.com'],
    }
  };
  
  export default nextConfig;