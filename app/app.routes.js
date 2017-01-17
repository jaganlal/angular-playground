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
          }, 
          '': {
            templateUrl: './app/content/main-content.html', 
            controller: 'MainContentController', 
            controllerAs: 'vm'
          }, 
          'footer': {
            templateUrl: './app/footer/footer.html'
          }
        }
      });
  }

  RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  angular.module('jtAngularPlayground').config(RouteConfig);
  
}());