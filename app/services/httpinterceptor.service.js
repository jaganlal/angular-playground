(function() {
  'use strict';

  function HttpInterceptor($q, $log) {
    var interceptor = {
      request: function(config) {
        $log.log("HttpInterceptor::request");
        return config;
      }, 

      requestError: function(rejection) {
        $log.log("HttpInterceptor::requestError");

        return $q.reject(rejection);
      },

      response: function(response) {
        $log.log("HttpInterceptor::response");

        return response;
      }, 

      responseError: function(rejection) {
        $log.log("HttpInterceptor::responseError");

        return $q.reject(rejection);
      }
    }

    return interceptor;
  }

  HttpInterceptor.$inject = ['$q', '$log'];

  angular.module('jtAngularPlayground').service('HttpInterceptor', HttpInterceptor);

}());