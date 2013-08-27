'use strict';

angular.module('ngShopper').service('catalog', function() {
  return {
    items: [
      {id: 1, name: 'Diablo 3', cost: 29.99},
      {id: 2, name: 'Starcraft 2 - Heart of the Swarm', cost: 29.99},
      {id: 3, name: 'Assassin\'s Creed 3', cost: 39.99},
      {id: 4, name: 'Skyrim', cost: 29.99},
      {id: 5, name: 'Inustice: Gods Among Us', cost: 59.99},
      {id: 6, name: 'Far Cry 3', cost: 49.99},
      {id: 7, name: 'Bioshock Infinite', cost: 59.99},
      {id: 8, name: 'Tomb Raider', cost: 59.99},
    ]
  }

});
