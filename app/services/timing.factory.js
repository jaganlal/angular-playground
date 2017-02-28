(function() {
  'use strict';

  angular.module('jtAngularPlayground').factory('timingFactory', timing);

  function timing() {
    return function timingObject() {
      this.timing = '';
      this.status = 'Schedule';
    }
  }
}());