/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*= End of MODULES =*/
/*=============================================<<<<<*/

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev') {
  require('dotenv').config();
}

module.exports = {
  entry:          {
    main:      [ './src/app/main.browser.ts' ],
    polyfills: [ './src/app/polyfills.browser.ts' ],
    vendors:    [ './src/app/vendors.browser.ts' ]
  },
  output: {
    path:       path.resolve(__dirname, '..', 'bin'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map'
  },
  resolve: {
    extensions: ['.js', '.ts'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
          'postcss-loader',
          'sass-loader?sourceMap',
        ],
      },
      {
        test: /\.html$/,
        use: [
          'html-loader'
        ],
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          'file-loader?name=[name].[ext]',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      showError:      true,
      template:       './src/index.html',
      filename:       'index.html',
      chunksSortMode: 'dependency'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['polyfills', 'vendors'].reverse(),
    }),
  ]
};
