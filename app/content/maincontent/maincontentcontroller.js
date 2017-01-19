(function() {
  'use strict';

  function MainContentController($log, timingFactory, timingService) {
    this.today = moment().format('MMM Do YYYY, hh:mm:ss a');
    this.classTimings = [];
    this.timeAdded = moment();
    $log.log(this.today);

    this.constructClassTimingsToDisplay = function(classtime, status) {
      var timeselected = moment(classtime);
      timeselected.minutes(0);
      var hr = timeselected.format('h:mm A');
      var hrplus1 = timeselected.add(1, 'h').format('h:mm A');

      var ct = new timingFactory();
      ct.timing = hr + " - " + hrplus1;
      ct.status = status || 'Schedule';

      this.timeAdded = moment(timeselected);

      return ct;
    }

    this.add = function() {
      var ct = this.constructClassTimingsToDisplay(this.timeAdded);

      this.classTimings.push(ct);
    }
  }

  MainContentController.$inject = ['$log', 'timingFactory', 'timingService'];
  angular.module('jtAngularPlayground').controller('MainContentController', MainContentController);
}());