// ────────────────────────────────────────────────────────────────────────────────
// MODULES

const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

const common = require('./common');

// ────────────────────────────────────────────────────────────────────────────────

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new WebpackNotifierPlugin({
      title: 'Webpack Bundler',
      alwaysNotify: true,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '..', 'bin'),
    compress: true,
    port: 8000,
    watchContentBase: true
  }
});
