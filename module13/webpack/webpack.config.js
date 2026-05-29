const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
require('dotenv').config();

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        open: true,
        port: 8080,
        hot: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};