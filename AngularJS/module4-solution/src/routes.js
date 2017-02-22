(function () {

angular.module('MenuApp',['ui.router']);

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/home.template.html'
    })

// // Premade categories list page
//    .state('categories', {
//      url: '/categories',
//      templateUrl: 'src/categorieslist.template.html',
//      controller: 'CategoriesListController as mainList',
//      resolve: {
//       items: ['MenuDataService', function (MenuDataService) {
//         return MenuDataService.getAllCategories();
//       }]
//      }
//    })

   // //items list
   // .state('items', {
   //   url: '/items/{itemId}', //?
   //   templateUrl: 'src/itemslist.template.html',
   //   controller: 'ItemsListController as itemDetail',

   //  params: {
   //    itemId: null
   //  }
   // });




//   // *** Set up UI states ***
//   $stateProvider

//   // Home page
//   .state('home', {
//     url: '/',
//     templateUrl: 'src/shoppinglist/templates/home.template.html'
//   })

//   

 }


})();


// The categories view should list all available categories of items on the menu. Each listing should be a link. 
// Clicking that link should take the user to the /items view. 
// Note that since what the items view state shows is dependent on which category the user clicked, 
// the URL mapping will need to have a parameter in it.
//  I.e., don't take the URLs I am listing in the assignment description as literal URLs. They are just naming hints. 