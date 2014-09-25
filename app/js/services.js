'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('angular_rest.services', []).
  value('version', '0.1')
  
  .factory('rtmFactory', function() {
    var countries = [
      {name: 'USA', code: 'us'},
      {name: 'UK', code: 'uk'},
      {name: 'France', code: 'fr'}
    ];
    return {
      getCountries: function() {
        return countries;
      }
    }
  })
