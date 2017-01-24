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
            templateUrl: './app/content/maincontent/main-content.html', 
            controller: 'MainContentController', 
            controllerAs: 'vm'
          }, 
          'footer': {
            templateUrl: './app/footer/footer.html'
          }
        }
      })
      .state('almanac', {
        url: '/almanac', 
        views: {
          'nav': {
            templateUrl: './app/nav/nav.html'
          }, 
          '': {
            templateUrl: './app/content/tabcontent/tab-content.html', 
            controller: 'TabContentController', 
            controllerAs: 'vm'
          }, 
          'footer': {
            templateUrl: './app/footer/footer.html'
          }
        }
      })
      .state('services', {
        url: '/services', 
        views: {
          'nav': {
            templateUrl: './app/nav/nav.html'
          }, 
          '': {
            templateUrl: './app/content/backendcontent/backend-content.html', 
            controller: 'BackendContentController', 
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