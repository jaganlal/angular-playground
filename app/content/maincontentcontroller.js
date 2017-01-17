(function() {
  'use strict';

  function MainContentController($log) {
    this.today = moment();
    $log.log(this.today);
  }

  MainContentController.$inject = ['$log'];
  angular.module('jtAngularPlayground').controller('MainContentController', MainContentController);
}());