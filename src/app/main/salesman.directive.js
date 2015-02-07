'use strict';

angular.module('diilikoneFront')
  .directive('salesmanInfo', salesmanInfo);

  function salesmanInfo () {
    return {
      restrict: 'E',
      templateUrl: 'app/main/salesman-info.html'

    };
  }
