(function() {
  'use strict';

  function Config($httpProvider, $logProvider) {
    $httpProvider.interceptors.push('HttpInterceptor');
    $logProvider.debugEnabled(true);
  }

  Config.$inject = ['$httpProvider', '$logProvider'];

  angular.module('jtAngularPlayground').config(Config);
}());
