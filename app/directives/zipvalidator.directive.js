(function() {
  'use strict';

  function zipValidator() {
    return {
      restrict: 'A', 
      require: 'ngModel', 
      link: function(scope, elem, attr, ngModel) {
        var view_value;
        ngModel.$validators.zipValidator = function(value) {
          var isValid;
          if(value.length > 5) {
            isValid = false;
            value = view_value;
            ngModel.$viewValue = view_value;
            ngModel.$render();
          }
          else if(parseInt(value, 10)) {
            view_value = value;
            isValid = true;
          }
          else if(value.length) {
            isValid = false;
            ngModel.$viewValue = view_value;
            ngModel.$render();
          }

          return isValid;
        }
      }
    }
  }

  angular.module('jtAngularPlayground').directive('zipValidator', zipValidator)
}())