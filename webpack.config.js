const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env = {}) {

    const {production: isProd = false} = env;

    return  {
        entry: './src/app.js',
        mode: isProd ? 'production' : 'development',
        devtool: isProd ?
            false : 'source-map',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.[contenthash].js',
            clean: true,
            publicPath: '/'
        },
        devServer: {
            historyApiFallback: true,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'images/[name][contenthash][ext]',
                    },
                },
                {
                    test: /\.(ttf|otf|woff|woff2)$/,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name][contenthash][ext]',
                    },
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html'
            })
        ]
    }
}