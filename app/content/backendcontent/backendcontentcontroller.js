(function() {
  'use strict';

  function BackendContentController($log, $http, $cookies, $q, $window) {
    this.$onInit = function () {
      this.beContent;
      this.defer;
      this.user = {
        username: '', 
        password: ''
      }

      var me = this;
      // $http.get('http://localhost:3000/services/token')
      //   .then(function successCallback(response) {
      //     $log.log("Token: "+$cookies.get('token'));
      //   }, 
      //   function errorCallback(response) {
      //     me.beContent = "Error";
      //   });
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
    }, 

    this.login = function(form) {
      $http.post('http://localhost:3000/authenticate', {username: this.user.username, password: this.user.password})
      .then(function successCallback(result) {
        $window.sessionStorage.token = result.data.token;
        $log.log(result.data.token);
      }, function errorCallback (result) {
        $log.log("authenticate failed");
      })
      .catch(function (err) {
        $log.log("authenticate throwed expection!!!");
      })
    }
  }

  BackendContentController.$inject = ['$log', '$http', '$cookies', '$q', '$window'];
  angular.module('jtAngularPlayground').controller('BackendContentController', BackendContentController);
}());