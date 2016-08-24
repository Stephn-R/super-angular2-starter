'use strict';

/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

const webpack = require('webpack');

/*= End of MODULES =*/
/*=============================================<<<<<*/

process.env.NODE_ENV = 'test';

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    root:               '.',
    extensions:         [ '', '.ts', '.js', '.scss' ],
    modulesDirectories: [ 'node_modules' ]
  },
  module: {
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
    loaders: [
      { test: /\.tsx?$/, loaders: [ 'ts' ] },
      { test: /\.(sass|scss)$/, exclude: /(node_modules)/, loaders: [ 'raw', 'sass?sourceMap' ] },
      { test: /\.(png|jpg|jpeg)$/, loader: 'file?name=[name].[ext]' },
      { test: /\.html$/, loader: 'html' }
    ],
    postLoaders: [
      {
        test:    /\.(js|ts)$/,
        loader:  'istanbul-instrumenter-loader',
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ]
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV'
    ])
  ],
  node: {
    global:         'window',
    crypto:         'empty',
    module:         false,
    clearImmediate: false,
    setImmediate:   false
  }
};
