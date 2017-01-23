(function() {
  'use strict';

  function isZipCodeValid () {
    return {
      restrict: 'A', 
      require: 'ngModel', 
      link: function(scope, elem, attr, ngModel){
        var view_value;
        ngModel.$parsers.push(function(value) {
          var return_value;

          if(value.length > 5) {
            return_value = view_value;
            ngModel.$setViewValue(view_value);
            ngModel.$render();
            ngModel.$setValidity('is_valid', false);
          }
          else if(parseInt(value, 10)) {
            var originalValue = value;
            value = parseInt(value, 10);
            return_value = value;
            view_value = return_value;
            ngModel.$setValidity('is_valid', true);

            if(originalValue !== value) {
              ngModel.$setViewValue(view_value);
              ngModel.$render();
            }
          }
          else {
            return_value = view_value;
            ngModel.$setViewValue(view_value);
            ngModel.$render();
            ngModel.$setValidity('is_valid', false);
          }

          return return_value;
        });

        ngModel.$formatters.push(function(value) {
        });
      }
    }
  }

  angular.module('jtAngularPlayground').directive('zipcode', isZipCodeValid)

}());