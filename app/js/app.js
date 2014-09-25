'use strict';


// Declare app level module which depends on filters, and services
angular.module('angular_rest', [
  'ngRoute',
  'angular_rest.filters',
  'angular_rest.services',
  'angular_rest.directives',
  'angular_rest.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/movie-list.html', controller: 'MovieListCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
