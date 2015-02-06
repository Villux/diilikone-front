'use strict';

angular.module('diilikoneFront')
  .factory('DealService', ['$http', function($http) {
    return {
      postDeal: function(data) {
        return $http({
          url: '/deal',
          method: "POST",
          data: data
        })
        .then(function(data) {
          return data;
        });
      }
    };
  }]);
