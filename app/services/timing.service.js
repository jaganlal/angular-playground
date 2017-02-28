(function() {
  'use strict';

  angular.module('jtAngularPlayground').service('timingService', timing);

  function timing() {
    this.timing = '',
    this.status = 'Schedule'
  }
}());