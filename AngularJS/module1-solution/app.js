(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchList = "";

  $scope.countItems = function () {
    var totalItems=countItemsForString($scope.lunchList);
    console.log (totalItems);
    return totalItems;
  };

  function countItemsForString (str) {
   var totalCountItem=0;
   var stringArray=str.split(",");
   /* I do NOT consider and empty item!!! Here is filter of 'empty' items */
   var correctStringArray=stringArray.filter(function(e){
    return e.search(/^\s*$/g)==-1;
   });                                                    // end filter
   totalCountItem=correctStringArray.length;
   return totalCountItem;
  };                                                      // end countItemsForString
  
   $scope.displayMessage = function() {
   	var condition=$scope.countItems();
    if (condition==0) {$scope.message="Please enter data first"}
     	else if (condition<=3) {$scope.message="Enjoy!"}
     		else {$scope.message="Too much"}
   };
};

})();
