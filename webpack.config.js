const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',

    entry: {
        index: './src/javascripts/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
        filename: 'bundle.js',
    },

    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        alias: {
            '@css': path.resolve(__dirname, 'src/stylesheets'),
            '@js': path.resolve(__dirname, 'src/javascripts'),
            '@images': path.resolve(__dirname, 'src/images'),
        },
    },
};
