(function() {
  'use strict';

  function timing() {
    return {
      // this.timing = '';
      // this.status = 'Schedule';
      timing: '', 
      status: ''
    }
  }

  angular.module('jtAngularPlayground').factory('timingFactory', timing);
}());