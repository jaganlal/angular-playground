(function() {
  'use strict';

  function HttpInterceptor($q, $log, $cookies) {
    var interceptor = {
      request: function(config) {
        return config;
      }, 

      requestError: function(rejection) {
        $log.log("HttpInterceptor::requestError");

        return $q.reject(rejection);
      },

      response: function(response) {
        $log.log("Response Token: "+$cookies.get('token'));

        return response;
      }, 

      responseError: function(rejection) {
        $log.log("HttpInterceptor::responseError");

        return $q.reject(rejection);
      }
    }

    return interceptor;
  }

  HttpInterceptor.$inject = ['$q', '$log', '$cookies'];

  angular.module('jtAngularPlayground').service('HttpInterceptor', HttpInterceptor);

}());