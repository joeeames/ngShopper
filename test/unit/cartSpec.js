'use strict';

/* jasmine specs for services go here */

describe('cart', function() {
  var d3 = {id: 3, name: 'diablo III', cost: 24.99};
  beforeEach(module('myApp.services'));


  beforeEach(module(function($provide) {
    $provide.value('catalog', {items: [d3]})
  }));

  describe('add', function() {
    it('should add diablo 3 with qty of 1 to the items', inject(function(cart) {
      cart.addItem(3, 1);
      expect(cart.items.length).toEqual(1);
      expect(cart.items[0]).toEqual({id: 3, name: 'diablo III', cost: 24.99, qty: 1});
    }));

    it('should add diablo 3 with qty of 2 when 2 are added', inject(function(cart) {
      cart.addItem(3, 2);
      expect(cart.items.length).toEqual(1);
      expect(cart.items[0]).toEqual({id: 3, name: 'diablo III', cost: 24.99, qty: 2});

    }));
  });
});
