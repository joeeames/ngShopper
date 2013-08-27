'use strict';

angular.module('ngShopper').service('cart', function(catalog, orderDiscount, orderRepository) {
  return {
    items: [],
    add: function(id, qty) {
      var catalogItem = _.find(catalog.items, function(catItem) {
        return catItem.id === id;
      });
      var cartItem = _.find(this.items, function(item) {
        return item.id === id
      });

      if(!cartItem) {
        this.items.push({id: id, name: catalogItem.name, cost: catalogItem.cost, qty: qty});
      } else {
        cartItem.qty += qty;
      }
    },

    subtotal: function() {
      var sum = 0;
      _.each(this.items, function(item) {
        sum += item.cost * item.qty;
      })
      return sum;
    },

    clear: function(id) {
      var idx = -1;
      for(var i=0; i < this.items.length; i++) {
        if(this.items[i].id === id) {
          idx = i;
        }
      }
      if(idx !== -1) {
        this.items.splice(idx, 1);
      }
    },

    remove: function(id, qty) {
      var idx = -1;
      for(var i=0; i < this.items.length; i++) {
        if(this.items[i].id === id) {
          idx = i;
        }
      }
      if(idx !== -1) {
        this.items[idx].qty -= qty;
      }
      if(this.items[idx].qty <= 0) {
        this.clear(id);
      }
    },

    discount: function() {
      return orderDiscount.calculateDiscount(this.items);
    },

    total: function() {
      return this.subtotal() - this.discount();
    },

    reset: function() {
      this.items = [];
    },

    submitOrder: function() {
      orderService.saveOrder(this.items);
    }

  }


});
