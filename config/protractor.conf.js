'use strict';

require('ts-node/register');
const SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  baseUrl: 'http://localhost:5555/',

  // use `npm run e2e`
  specs: [
    './app/**/**.e2e.ts',
    './app/*.e2e.ts'
  ],
  exclude: [],

  framework: 'jasmine2',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming:             true,
    showColors:             true,
    isVerbose:              false,
    includeStackTrace:      false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  capabilities: {
    'browserName':   'chrome',
    'chromeOptions': {
      'args': [ 'show-fps-counter=true' ]
    }
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'all' }));
  },

   useAllAngular2AppRoots: true
};
