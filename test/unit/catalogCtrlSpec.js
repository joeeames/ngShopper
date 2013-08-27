'use strict';

describe('catalogCtrl', function() {
  var ctrlr, scope;

  beforeEach(module('ngShopper'));

  beforeEach(inject(function($controller, $rootScope) {
    ctrlr = $controller;
    scope = $rootScope.$new();
  }));

  describe('addGameToCart', function() {

    it('should call the cart service add method with the game id, and a qty of 1', function() {

      var mockCart = sinon.stub({add: function() {}});
      var mockGame = { id: 3 }
      var ctrl = ctrlr('CatalogCtrl', {$scope:scope, cart: mockCart});
      scope.addGameToCart(mockGame);

      expect(mockCart.add.calledWith(3, 1)).toBe(true);
    });
  });

  describe('clear', function() {

    it('should call cart.clear with the game id', function() {
      var mockCart = sinon.stub({add: function() {}, clear: function() {}});
      var mockGame = { id: 4 }
      var ctrl = ctrlr('CatalogCtrl', {$scope:scope, cart: mockCart});
      scope.clear(mockGame);

      expect(mockCart.clear.calledWith(4)).toBe(true);
    });

  });

})