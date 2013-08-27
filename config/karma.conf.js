module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      'app/lib/underscore.js',
      'app/lib/angular/angular.js',
      'app/lib/angular/angular-*.js',
      'test/lib/angular/angular-mocks.js',
      'test/lib/sinon-1.7.1.js',
      'app/js/controllers.js',
      'app/js/services.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],
    preprocessors: {

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
