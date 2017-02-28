(function() {
  'use strict';  

  angular.module('jtAngularPlayground').config(RouteConfig);

  function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/main');

    $stateProvider
      .state('home', {
        url: '/', 
        abstract: true,
        views: {
          'nav': {
            templateUrl: './app/nav/nav.html'
          }, 
          'footer': {
            templateUrl: './app/footer/footer.html'
          }
        }
      })
      .state('home.main', {
        url: 'main', 
        views: {
          '@': {
            templateUrl: './app/content/maincontent/main-content.html', 
            controller: 'MainContentController', 
            controllerAs: 'vm'
          }
        }
      })
      .state('home.almanac', {
        url: 'almanac', 
        views: {
          '@': {
            templateUrl: './app/content/tabcontent/tab-content.html', 
            controller: 'TabContentController', 
            controllerAs: 'vm'
          }
        }
      })
      .state('home.services', {
        url: 'services', 
        views: {
          '@': {
            templateUrl: './app/content/backendcontent/backend-content.html', 
            controller: 'BackendContentController', 
            controllerAs: 'vm'
          }
        }
      });
  }

  RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  
}());