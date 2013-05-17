'use strict';

angular.module('myApp.controllers').controller('CatalogCtrl', function($scope, cart, catalog) {

  $scope.items = catalog.items;

  $scope.cart = cart;

  $scope.addGameToCart = function(game) {
    cart.add(game.id, 1);
  }

  $scope.clear = function(game) {
    cart.clear(game.id);
  }

});