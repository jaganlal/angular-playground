(function() {
  'use strict';

  function BackendContentController($log, $http, $cookies) {
    this.$onInit = function () {
      this.beContent;

      var me = this;
      $http.get('http://localhost:3000/services/token')
        .then(function successCallback(response) {
          $log.log("Token: "+$cookies.get('newtoken'));
          if(response.data) {
            me.beContent = response.data.name;
            me.beContent += ": "+$cookies.get('newtoken');
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

  BackendContentController.$inject = ['$log', '$http', '$cookies'];
  angular.module('jtAngularPlayground').controller('BackendContentController', BackendContentController);

  // angular.module('jtAngularPlayground')
  //   .controller('BackendContentController', ['$log', '$http', '$cookies', function($log, $http, $cookies) {
  //     // this.$onInit = function () {
  //       this.beContent;
  //       $log.log("token 1: "+$cookies.get('token'));

  //       var me = this;
  //       $http.get('http://localhost:3000/services/name')
  //         .then(function (response) {
  //           $log.log("token 2: "+$cookies.get('token'));
  //           me.beContent = "Token is: "+$cookies.get('token');
  //           if(response.data) {
  //             // me.beContent = response.data.name;
  //           }
  //           else {
  //             me.beContent = "Invalid Response";
  //           }
  //         }, 
  //         function (response) {
  //           me.beContent = "Error";
  //         });
  //     // };
  //   }]);
}());