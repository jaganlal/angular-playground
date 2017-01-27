(function() {
  'use strict';

  function TabContentController($log) {
    this.zipcode = '';
    this.danger = 'My name is: <h1>Jaganlal Thoppe</h1>';

    this.tryit = function() {
      $log.log(this.text);
      var evalText = eval(this.text);
      $log.log("Evaluated String is: "+evalText);
    }
  }

  TabContentController.$inject = ['$log'];
  angular.module('jtAngularPlayground').controller('TabContentController', TabContentController);
}());