'use strict';

describe('cart', function() {
  var d3 = {id: 3, name: 'diablo III', cost: 25};
  var bio = {id: 1, name: 'Bioshock Infinity', cost: 10};
  beforeEach(module('myApp.services'));


  beforeEach(module(function($provide) {
    $provide.value('catalog', {items: [d3, bio]})
  }));

  describe('add', function() {
    it('should add diablo 3 with qty of 1 to the items', inject(function(cart) {
      cart.addItem(3, 1);
      expect(cart.items.length).toEqual(1);
      expect(cart.items[0]).toEqual({id: 3, name: 'diablo III', cost: 25, qty: 1});
    }));

    it('should add diablo 3 with qty of 2 when 2 are added', inject(function(cart) {
      cart.addItem(3, 2);
      expect(cart.items.length).toEqual(1);
      expect(cart.items[0]).toEqual({id: 3, name: 'diablo III', cost: 25, qty: 2});

    }));
  });

  describe('subtotal', function() {
    it('should return the total of quantity * cost summed for each item', inject(function(cart) {
      cart.addItem(3, 3);
      cart.addItem(1, 1);
      expect(cart.subtotal()).toEqual(85);
    }));

    it('should return 100 for two items totaling 100', inject(function(cart) {
      cart.addItem(3, 2);
      cart.addItem(1, 5);
      expect(cart.subtotal()).toEqual(100);
    }));


  })
});
