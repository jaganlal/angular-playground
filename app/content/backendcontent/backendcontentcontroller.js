(function() {
  'use strict';

  function BackendContentController($log, $http, $cookies) {
    this.$onInit = function () {
      this.beContent;

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
      $http.get('http://localhost:3000/services/name')
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
        });
    }
  }

  BackendContentController.$inject = ['$log', '$http', '$cookies'];
  angular.module('jtAngularPlayground').controller('BackendContentController', BackendContentController);
}());