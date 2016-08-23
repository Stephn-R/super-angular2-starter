/* eslint no-magic-numbers:0 */
'use strict';

/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');
const WebpackNotifierPlugin = require('webpack-notifier');

/*= End of MODULES =*/
/*=============================================<<<<<*/

module.exports = merge(common, {
  debug:   false,
  output:  {
    path:              path.resolve('${__dirname}/../bin'),
    filename:          '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[chunkhash].bundle.map',
    chunkFilename:     '[id].[chunkhash].chunk.js',
    library:           'ac_[name]',
    libraryTarget:     'var'
  },
  plugins: [
    new WebpackMd5Hash(),
    new WebpackNotifierPlugin({
      title:        'SAS: Application',
      alwaysNotify: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:  { warnings: false },
      mangle:    false,
      comments:  false,
      sourceMap: false,
      exclude:   [ ]
    })
  ],
  htmlLoader: {
    minimize:              true,
    removeAttributeQuotes: false,
    caseSensitive:         true
  }
});