(function() {
  'use strict';

  function BackendContentController($log, $http, $cookies, $q) {
    this.$onInit = function () {
      this.beContent;
      this.defer;

      var me = this;
      $http.get('http://localhost:3000/services/token')
        .then(function successCallback(response) {
          $log.log("Token: "+$cookies.get('token'));
        }, 
        function errorCallback(response) {
          me.beContent = "Error";
        });
    }

    this.getName = function() {
      var me = this;
      this.defer = $q.defer();
      $http.get('http://localhost:3000/services/name', {timeout: this.defer.promise})
        .then(function successCallback(response) {
          if(response.data) {
            me.beContent = response.data.name;
          }
          else {
            me.beContent = "Invalid Response";
          }
        }, 
        function errorCallback(response) {
          me.beContent = "Error";
        })
        .catch(function(err) {
          me.beContent = "Response Error";
        })
        .finally(function(err) {
          $log.log("Finally Block");
        });
    }

    this.cancel = function() {
      this.defer.resolve("User Cancelled!!!");
    }
  }

  BackendContentController.$inject = ['$log', '$http', '$cookies', '$q'];
  angular.module('jtAngularPlayground').controller('BackendContentController', BackendContentController);
}());