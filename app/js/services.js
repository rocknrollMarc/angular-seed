'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('angular_rest.services', []).
  value('version', '0.1')
.constant('API_KEY', 'jgqgdavk2923hwwk4ysqnjw2')

.factory('rtmFactory', function() {
    var countries = [
      {name: 'USA',code: 'us'},
      {name: 'UK',code: 'uk'},
      {name: 'France',code: 'fr'}
    ];
    return {
      getCountries: function() {
        return countries;
      },
      getMovies: function(countryCode) {
        var key = '';
        return
        $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=10&country='+countryCode+'&callback=JSON_CALLBACK&apikey='+API_KEY); 
      }
    };
  });
