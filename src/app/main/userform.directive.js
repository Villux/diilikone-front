'use strict';

angular.module('diilikoneFront')
  .directive('userForm', userForm);

  function userForm () {
    return {
      restrict: 'E',
      templateUrl: 'app/main/userform.html',
      scope: {
        user: '=user'
      }

    };
  }
