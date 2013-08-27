angular.module('ngShopper').directive('gameTile', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/gameTile.html',
    replace: true,
    scope: {
      item: '=',
      tileClick: '&'
    }
  }
})