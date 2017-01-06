(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchList = "";

  $scope.countItems = function () {
    var totalItems=countItemsForString($scope.lunchList);
    consol.log (totalItems);
    return totalItems;
  };

  function countItemsForString (str) {
   var totalCountItem=0;
   var stringArray=str.split(",");
   var correctStringArray=stringArray.filter(function(e){
    return e.search(/^\s*$/g)==-1;
   });
   totalCountItem=correctStringArray.length;
   return totalCountItem;
  };
  
  $scope.displayMessage = function() {
    if ($scope.countItems==0) {$scope.message="Please enter data first"}
    	else if ($scope.countItems<=3) {$scope.message="Enjoy!"}
    		else {$scope.message="Too much"}
  };
};

})();
