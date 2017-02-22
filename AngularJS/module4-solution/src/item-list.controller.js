(function () {
'use strict';

angular.module('data')
.controller('ItemsListController', ItemsListController);

// Version with resolving to 1 item based on $stateParams in route config
// ItemsListController.$inject = ['$stateParams', 'items'];
// function ItemsListController($stateParams, items) {
//   var itemDetail = this;
//   var item = items[$stateParams.itemId];
//   itemDetail.name = item.name;
//   itemDetail.quantity = item.quantity;
//   itemDetail.description = item.description;
// }

})();
