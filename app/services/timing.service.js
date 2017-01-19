(function() {
  'use strict';

  function timing() {
    this.timing = '',
    this.status = 'Schedule'
  }

  angular.module('jtAngularPlayground').service('timingService', timing);
}());