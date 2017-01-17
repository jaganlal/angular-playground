(function() {
  'use strict';

  function timingsController($log) {
    $log.log('timingsController');
  }

  let timings = {
    templateUrl: 'app/components/timings/timings.html', 
    bindings: {
      today: '<'
    }, 
    controller: timingsController
  }

  timings.$inject = ['$log'];
  angular.module('jtAngularPlayground').component('timings', timings);
}());