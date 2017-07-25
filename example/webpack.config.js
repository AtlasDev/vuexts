const { boilerpack } = require('boilerpack');
const { resolve } = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = boilerpack({
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  devtool: 'inline-source-maps',
})
  .addEntry('main', [resolve(__dirname, './src/index')])
  .addExtensions('.ts', 'vue', 'scss')
  .addRule('typescript', {
    test: /\.ts$/,
    exclude: /node_modules|vue\/src/,
    loader: 'ts-loader',
    options: {
      appendTsSuffixTo: [/\.vue$/],
    },
  })
  .addRule('vue', {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      esModule: true,
    },
  })
  .addPlugin(
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './index.html'),
    }),
  )
  .make();
