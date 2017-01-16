(function() {
  'use strict';  

  function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/', 
        views: {
          'nav': {
            templateUrl: './app/nav/nav.html'
            // template: "<div class='nav'> Navigation Content </div>"
          }, 
          '': {
            templateUrl: './app/content/main-content.html'
            // template: "<h1> content </h1>"
          }, 
          'footer': {
            templateUrl: './app/footer/footer.html'
            // template: "<h1> footer </h1>"
          }
        }
      });
  }

  RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  angular.module('jtAngularPlayground').config(RouteConfig);
  
}());