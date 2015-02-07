'use strict';

angular.module('diilikoneFront')
  .directive('userForm', userForm);

  function userForm () {
    return {
      restrict: 'E',
      templateUrl: 'app/main/userform.html',
      scope: {
        user: '=user'
      },
      link: function(scope, elem, attr) {
        elem.find(".decrease-button").on('click', function() {
          if (scope.user.deal_size === 25) {
            return;
          }
          else {
            scope.user.deal_size -= 25;
          }
          scope.$apply();
        });
        elem.find(".increase-button").on('click', function() {
          scope.user.deal_size += 25;
          scope.$apply();
        });
      }

    };
  }
