const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: '.dist',
    },
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Library',
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /.\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
};