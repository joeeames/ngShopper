basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/underscore.js',
  'app/lib/angular/angular.js',
  'app/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'test/lib/sinon-1.7.1.js',
  'app/js/controllers.js',
  'app/js/services.js',
  'app/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
