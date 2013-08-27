'use strict';

describe('gameTile', function() {
  var el, clickHandlerStub;

  beforeEach(module('ngShopper'));
  beforeEach(module('partials/gameTile.html'));

  beforeEach(inject(function($compile, $rootScope) {
    // set up scope
    var scope = $rootScope;
    scope.item = {name: 'Some Game', cost: '9.99'};
    clickHandlerStub = sinon.stub();
    scope.clickHandler = clickHandlerStub;

    // create and compile directive
    el = angular.element('<game-tile item="item" tile-click="clickHandler()"></game-tile>');
    $compile(el)(scope);
    scope.$digest();
    console.log(el[0].outerHTML);
  }));

  it('should bind the data', function() {
    expect(el.text()).toContain('Some Game');
  });

  it('should bind to the scope\'s event', function() {
    el.click();
//    this.scope.$digest();
//    expect(this.scope.clickHandler.called).toBe(true);
  });
});
