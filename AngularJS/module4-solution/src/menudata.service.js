(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com"); // сли не сработает, то убрать константу

MenuDataService.$inject = ['$http', 'ApiBasePath'];

function MenuDataService ($http, ApiBasePath) {
  var service = this;

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return response;
  };

// where, before the call to the server, 
//your code should append whatever categoryShortName value was passed in as an argument into the getItemsForCategory method???
  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category="),
      params: {
        category: categoryShortName
      }
    });

    return response;
  };


};


})();
