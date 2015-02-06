'use strict';

angular.module('diilikoneFront')
  .factory('ProvisionService', ['$http', function($http) {
    return {
      getProvision: function(data) {
        return $http({
          url: '/provision',
          method: "GET",
          params: data
        });
        .then(function(data) {
          return data;
        });
      }
    };
  }]);
