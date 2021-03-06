(function() {
  'use strict';

  angular.module('jtAngularPlayground').config(Config);

  function Config($httpProvider, $logProvider, TimingFactoryProvider) {

    // notice how timingFactory is injected as provider and also consumed
    var tfp = new (TimingFactoryProvider.$get())();
    tfp.timings = Date();

    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push('HttpInterceptor');
    $logProvider.debugEnabled(true);
  }

  Config.$inject = ['$httpProvider', '$logProvider', 'TimingFactoryProvider'];
}());
