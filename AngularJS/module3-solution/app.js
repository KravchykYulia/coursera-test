(function () {
'use strict';

 angular.module('NarrowItDownApp', [])
 .controller('NarrowItDownController', NarrowItDownController)
 .service('MenuSearchService', MenuSearchService)
 .directive('foundItems', FoundItemsDirective);
 
 function FoundItemsDirective() {
  var ddo = {
    templateUrl:'foundItems.html',
     scope: {
          foundItems: '<',
          onRemove: '&'
     },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true};
  return ddo;
 };

 function FoundItemsDirectiveController() {
  var list = this;

  list.foundSearchItems = function () {
      if (list.foundItems.length==0) {return true;}
      else {return false;}
    };
}

// NarrowItDownController.$inject = ['MenuSearchService'];
//  function NarrowItDownController(MenuSearchService) {
//    var list = this;
//  //  list.searchTerm="";
//    list.found= function(){
//    MenuSearchService.getMatchedMenuItems(list.searchTerm);
//   // console.log (MenuSearchService.foundItems); //??????????
//    }; 
//    list.removeItem = function (itemIndex) {
//     MenuSearchService.removeItem(itemIndex);};
//    };

NarrowItDownController.$inject = ['MenuSearchService'];
 function NarrowItDownController(MenuSearchService) {
   var list = this;
   var promis=MenuSearchService.getMenuItems();
   promis.then(function(result) {
     list.menuItems=result.data.menu_items;
   });
    
 //  list.searchTerm="";
   list.found= function(){
   ;
  // console.log (MenuSearchService.foundItems); //??????????
   }; 
   list.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);};
   };

 // MenuSearchService.$inject =  ['$http'];
 // function MenuSearchService($http){ 
 //     var service = this;
 //     service.getMatchedMenuItems = function (searchTerm) {
 //       return $http({
 //       method: "GET",
 //       url: ("https://davids-restaurant.herokuapp.com/menu_items.json")})
 //       .then(function (result) {
 //      // process result and only keep items that match
 //         var menuItems=result.data.menu_items;
 //         var foundItems=[];
 //         for (var i=0; i<menuItems.length; i++){
 //           if(searchTerm!=="" && menuItems[i].description.indexOf(searchTerm)!==-1) 
 //           {foundItems.push(menuItems[i]);}     
 //          }
 //        // return processed items
 //         console.log (foundItems);
 //         service.foundItems=foundItems
 //         return service.foundItems;
 //       });
 //    }; 
    MenuSearchService.$inject =  ['$http'];
    function MenuSearchService($http){ 
     var service = this;
     service.getMenuItems = function () {
      var result=$http({
       method: "GET",
       url: ("https://davids-restaurant.herokuapp.com/menu_items.json")});
       return result;
       };
      service.getMatchedMenuItems = function (searchTerm) {
        
      };
      service.removeItem = function (itemIndex) {
         foundItems.splice(itemIndex, 1);};
 };

})();
