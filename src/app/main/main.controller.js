'use strict';

angular.module('diilikoneFront')
  .controller('MainCtrl', function ($scope) {
    $scope.deal = {};
    $scope.deal.users = [{}];
    $scope.addingUser = false;

    $scope.openAddUserForm = function() {
      $scope.addingUser = true;
    };
  });
