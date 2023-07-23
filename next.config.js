const path = require('path');

const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
});
const nextConfig = withPWA({
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'static/fonts/',
                    publicPath: '_next/static/fonts/',
                    context: path.resolve(__dirname, 'assets/fonts/'),
                },
            },
        });

        // Add support for MP3 files
        config.module.rules.push({
            test: /\.(mp3)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '/',

                },
            },
        });

        return config;
    },
});

module.exports = nextConfig;