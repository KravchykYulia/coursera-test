(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;
  list1.items = ShoppingListCheckOffService.getToBuyItems();
  list1.removeItem=function (item,itemIdex){
  ShoppingListCheckOffService.removeItem(item,itemIdex);
  };
}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;
  list2.items = ShoppingListCheckOffService.getBoughtItems();
};


// Sevice
 function ShoppingListCheckOffService() {
   var service = this;
  // Lists of shopping items "to buy" and "bought"
  var toBuyItems = [{ name: "cookies", quantity: 10 }, { name: "candies", quantity: 100 }, { name: "chocolate", quantity: 5 }, { name: "cakes", quantity: 2 }, { name: "ice cream", quantity: 1 }];
  var boughtItems = [];

  service.removeItem = function (item, itemIdex) {
    toBuyItems.splice(itemIdex, 1);
    boughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };
  service.getBoughtItems = function () {
    return boughtItems;
  };
}


})();
