const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require("webpack");

module.exports = {
  mode: "development",

  entry: {
    app: './src/app.js',
  }, output: {
    path: path.resolve(__dirname, 'dist'), // publicPath: "/",
    filename: 'bundle.js',
  },

  devtool: 'inline-source-map', devServer: {
    static: './dist', hot: true,
  },

  module: {
    rules: [{
      test: /\.js$/, exclude: /node_modules/, use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.css$/i, use: ["style-loader", "css-loader", "sass-loader"],
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource',
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource',
    },],
  },

  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
    template: 'src/app.html'
  }), new webpack.HotModuleReplacementPlugin()], resolve: {
    alias: {
      '@css': path.resolve(__dirname, 'src/'), //경로 바꾸기
      '@js': path.resolve(__dirname, 'src/'), '@assets': path.resolve(__dirname, 'src/'),
    }
  }
};