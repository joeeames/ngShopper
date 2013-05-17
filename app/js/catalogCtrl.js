'use strict';

angular.module('myApp.controllers').controller('CatalogCtrl', function($scope, cart, catalog) {

  $scope.items = catalog.items;

  $scope.cart = cart;

});