'use strict';

describe('cart', function() {
  var bio = {id: 1, name: 'Bioshock Infinity', cost: 10};
  var skyrim = {id: 2, name: 'Skyrim', cost: 15};
  var d3 = {id: 3, name: 'diablo III', cost: 25};

  var mockOrderDiscount = sinon.stub({calculateDiscount: function() {}});
  var mockOrderService = sinon.stub({saveOrder: function() {}});

  beforeEach(module('myApp.services'));

  beforeEach(module(function($provide) {
    $provide.value('catalog', {items: [bio, skyrim, d3]})
    $provide.value('orderDiscount', mockOrderDiscount);
    $provide.value('orderService', mockOrderService);
  }));

  describe('add', function() {
    it('should add items correctly when the quantity is 1', inject(function(cart) {
      cart.add(3, 1);
      expect(cart.items.length).toEqual(1);
      expect(cart.items[0]).toEqual({id: 3, name: 'diablo III', cost: 25, qty: 1});
    }));

    it('should add items correctly when the quantity is greater than 1', inject(function(cart) {
      cart.add(3, 2);
      expect(cart.items.length).toEqual(1);
      expect(cart.items[0]).toEqual({id: 3, name: 'diablo III', cost: 25, qty: 2});
    }));

    it('should add the same item multiple times correctly', inject(function(cart) {
      cart.add(3,1);
      cart.add(3,4);
      expect(cart.items.length).toEqual(1);
      expect(cart.items[0]).toEqual({id: 3, name: 'diablo III', cost: 25, qty: 5});
    }))


  });

  describe('subtotal', function() {
    it('should return the total of quantity * cost summed for each item', inject(function(cart) {
      cart.add(3, 3);
      cart.add(1, 1);
      expect(cart.subtotal()).toEqual(85);
    }));

    it('should return 100 for two items totaling 100', inject(function(cart) {
      cart.add(3, 2);
      cart.add(1, 5);
      expect(cart.subtotal()).toEqual(100);
    }));
  });

  describe('clear', function() {
    it('should remove the item from the cart', inject(function(cart) {
      cart.add(3, 4);
      cart.clear(3);
      expect(cart.items.length).toBe(0);
    }));

    it('should only remove the requested item from the cart', inject(function(cart) {
      cart.add(1, 4);
      cart.add(2, 4);
      cart.add(3, 4);
      cart.clear(2);
      expect(cart.items.length).toBe(2);
      expect(cart.items[0].id).toBe(1);
      expect(cart.items[1].id).toBe(3);
    }));
  });

  describe('remove', function() {
    it('should remove the correct number of items', inject(function(cart) {
      cart.add(1, 4);
      cart.add(2, 4);
      cart.add(3, 4);
      cart.remove(2, 1);
      expect(cart.items[1].qty).toBe(3);
    }));

    it('should remove the item if qty reaches 0', inject(function(cart) {
      cart.add(1, 3);
      cart.remove(1, 3);
      expect(cart.items.length).toBe(0);
    }));

    it('should remove the item if qty goes below 0', inject(function(cart) {
      cart.add(1, 3);
      cart.remove(1, 5);
      expect(cart.items.length).toBe(0);
    }));
  });

  describe('discount', function() {
    it('should show the discount from the orderDiscount object', inject(function(cart) {
      mockOrderDiscount.calculateDiscount.returns(20);
      cart.add(1, 4);
      cart.add(2, 4);
      cart.add(3, 4);
      var discount = cart.discount();
      expect(discount).toBe(20);
    }));

    it('should show pass the cart items to the orderDiscount object\'s calculateDiscount method', inject(function(cart) {
      cart.add(1, 4);
      cart.add(2, 4);
      cart.discount();
      expect(mockOrderDiscount.calculateDiscount.calledWith(cart.items)).toBe(true);
    }));
  });

  describe('total', function() {
    it('should be the sum of the subtotal plus the discount', inject(function(cart) {
      mockOrderDiscount.calculateDiscount.returns(10);
      cart.add(1, 4);
      expect(cart.total()).toBe(30);
    }));
  });

  describe('reset', function() {
    it('should empty out the cart', inject(function(cart) {
      cart.add(1, 4);
      cart.add(2, 4);
      cart.add(3, 4);
      cart.reset();
      expect(cart.items.length).toBe(0);
    }));
  });

  describe('submitOrder', function() {
    it('should call orderService.submit with the items', inject(function(cart) {
      cart.add(1, 4);
      cart.add(2, 4);
      cart.submitOrder();
      expect(mockOrderService.saveOrder.calledWith(cart.items)).toBe(true);
    }));
  })


});
