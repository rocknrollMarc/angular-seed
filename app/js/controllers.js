'use strict';

/* Controllers */

angular.module('angular_rest.controllers', [])
  .controller('MovieListCtrl', ['$scope', 'rtmFactory',
             function($scope, rtmFactory) {
               $scope.countries = rtmFactory.getCountries();
}
  ])

