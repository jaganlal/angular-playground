(function() {
  'use strict';

  function timing() {
    return function timingObject() {
      this.timing = '';
      this.status = 'Schedule';
    }
  }

  angular.module('jtAngularPlayground').factory('timingFactory', timing);
}());