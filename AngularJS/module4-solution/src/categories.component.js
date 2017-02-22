(function () {
'use strict';

 angular.module('data')
 .component('categories', {
  templateUrl: 'src/menucategories.template.html',
  bindings: {
    items: '<'
  }



 });

})();
