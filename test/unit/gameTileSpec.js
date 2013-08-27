'use strict';

describe('gameTile', function() {
  var el, clickHandlerStub;

  beforeEach(module('ngShopper'));
  beforeEach(module('partials/gameTile.html'));

  beforeEach(inject(function($compile, $rootScope) {
    // set up scope
    var scope = $rootScope;

    // create and compile directive
    el = angular.element('<game-tile></game-tile>');
    $compile(el)(scope);
    scope.$digest();
  }));


});
