'use strict';

module.exports = function(config) {
  const webpackTestConfig = require('./webpack.test');

  const testConfig = {
    basePath:         '',
    frameworks:       [ 'jasmine' ],
    exclude:          [],
    files:            [ { pattern: './config/spec-bundle.js', watched: false } ],
    preprocessors:    { './config/spec-bundle.js': [ 'coverage', 'webpack', 'sourcemap' ] },
    webpack:          webpackTestConfig,
    webpackServer:    { noInfo: true },
    coverageReporter: {
      dir:       'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'json' },
        { type: 'html' }
      ]
    },
    reporters: [ 'mocha', 'coverage' ],
    port:      9876,
    colors:    true,
    logLevel:  config.LOG_INFO,
    autoWatch: false,
    browsers:  [
      'PhantomJS'
    ],
    singleRun: true
  };

  config.set(testConfig);
};
