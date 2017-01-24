(function() {
  'use strict';

  function BackendContentController($log, $http) {
    this.$onInit = function () {
      this.beContent;

      var me = this;
      $http.get('http://172.25.5.175:3000/service/name')
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
    };
  }

  BackendContentController.$inject = ['$log', '$http'];
  angular.module('jtAngularPlayground').controller('BackendContentController', BackendContentController);
}());