module.exports = {
    reactStrictMode: true, // Enforces the React Strict Mode
    webpack5: true, // Enables Webpack 5 support

    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config

        return config;
    },
    // You can add more configuration options here
    // ...

    // PostCSS configuration
    postcss: {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
        ],
    },
};