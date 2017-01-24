(function () {
'use strict';

 angular.module('NarrowItDownApp', [])
 .controller('NarrowItDownController', NarrowItDownController)
 .service('MenuSearchService', MenuSearchService)
 .directive('foundItems', FoundItemsDirective);
 
 function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'itemsloaderindicatortemplate.html',
    // scope: {
    //      items: '<',
    //      onRemove: '&'
    // }
  };
  return ddo;
 };

NarrowItDownController.$inject = ['MenuSearchService'];
 function NarrowItDownController(MenuSearchService) {
   var nidc = this;
   nidc.searchTerm="";
   nidc.found=function(){
   MenuSearchService.getMatchedMenuItems(nidc.searchTerm);}; /**/
   nidc.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);};
 };

 MenuSearchService.$inject =  ['$http'];
 function MenuSearchService($http){ 
     var service = this;
     service.getMatchedMenuItems = function (searchTerm) {
      return $http({
       method: "GET",
       url: ("https://davids-restaurant.herokuapp.com/menu_items.json") })
      .then(function (result) {
      // process result and only keep items that match
         var foundItems=[];
         var menuItems=result.data.menu_items;
         for (var i=0; i<menuItems.length; i++){
           if(searchTerm=="" || menuItems[i].description.indexOf(searchTerm)==-1) {console.log("Nothing found"); }
           else {foundItems.push(menuItems[i]);}
        
         }
        // return processed items
         console.log (foundItems);
         return foundItems;
      });}
      service.removeItem = function (itemIndex) {
         items.splice(itemIndex, 1);};
 };

})();
