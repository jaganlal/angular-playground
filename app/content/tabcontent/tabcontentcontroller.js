(function() {
  'use strict';

  function TabContentController($log) {
    this.zipcode = '';
  }

  TabContentController.$inject = ['$log'];
  angular.module('jtAngularPlayground').controller('TabContentController', TabContentController);
}());