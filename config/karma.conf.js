module.exports = function(config) {
  config.set({
    basePath: '../app',
    frameworks: ['jasmine'],
    files: [
      'lib/jquery.js',
      'lib/underscore.js',
      'lib/angular/angular.js',
      'lib/angular/angular-*.js',
      '../test/lib/angular/angular-mocks.js',
      '../test/lib/sinon-1.7.1.js',
      'js/**/*.js',
      'partials/gameTile.html',
      '../test/unit/**/*.js'
    ],
    preprocessors: {
      'partials/gameTile.html': 'html2js'
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    captureTimeout: 60000,
    singleRun: false
  });
};
