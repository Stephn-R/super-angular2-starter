'use strict';

/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

/*= End of MODULES =*/
/*=============================================<<<<<*/

const METADATA = {
  title:       'SAS: Super Angular2 Starter',
  ENV:         (process.env.NODE_ENV)
};

const config = {
  metadata:       METADATA,
  entry:          {
    main:      [ './src/app/main.browser.ts' ],
    polyfills: [ './src/app/polyfills.browser.ts' ],
    vendor:    [ './src/app/vendors.browser.ts' ]
  },
  output: {
    path:       './bin',
    publicPath: '/',
    filename:   '[name].bundle.js'
  },
  resolve: {
    root:               '.',
    extensions:         [ '', '.js', '.ts', '.scss' ],
    modulesDirectories: [ 'node_modules' ]
  },
  preLoaders: [
    {
      test:    /\.js$/,
      loader:  'source-map-loader',
      exclude: [
        'node_modules/rxjs',
        'node_modules/@angular'
      ]
    }
  ],
  module: {
    loaders: [
      { test: /\.tsx?$/, loaders: [ 'ts' ], exclude: [ /\.(spec|e2e)\.ts$/ ] },
      { test: /\.(sass|scss)$/, exclude: /(node_modules)/, loaders: [ 'raw', 'sass?sourceMap' ] },
      { test: /\.(png|jpg|jpeg)$/, loader: 'file?name=[name].[ext]' },
      { test: /\.html$/, loader: 'html' }
    ]
  },
  node: {
    global:         'window',
    crypto:         'empty',
    module:         false,
    clearImmediate: false,
    setImmediate:   false
  },
  postcss: function() {
    return [ autoprefixer ];
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      showError:      true,
      template:       './index.ejs',
      filename:       'index.html',
      chunksSortMode: 'dependency'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: [ 'polyfills', 'vendor' ].reverse()
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ])
  ]
};

module.exports = config;
