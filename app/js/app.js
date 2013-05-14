'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/catalog', {templateUrl: 'partials/catalog.html', controller: 'CatalogCtrl'});
    $routeProvider.when('/checkout', {templateUrl: 'partials/checkout.html', controller: 'CheckoutCtrl'});
    $routeProvider.otherwise({redirectTo: '/catalog'});
  }]);
