'use strict';

angular.module('myApp.services').service('cart', function(catalog) {
  return {
    items: [],
    addItem: function(id, qty) {
      var foundItem = _.find(catalog.items, function(catItem) {
        return catItem.id === id;
      });
      this.items.push({id: id, name: foundItem.name, cost: foundItem.cost, qty: 1});
    }
  }


});
