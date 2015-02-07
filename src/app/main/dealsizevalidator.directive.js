'use strict';

angular.module('diilikoneFront')
  .directive('dealsize', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.dealsize = function(modelValue, viewValue) {
          if (viewValue % 25 === 0) {
            return true;
          }
          else {
            return false;
          }
        };
      }
    };
  });
