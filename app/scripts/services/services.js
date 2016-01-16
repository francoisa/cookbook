'use strict';

var services = angular.module('cookbookApp.services', []);

services.factory('Recipe', ['$resource',
    function($resource) {
      return $resource('/recipes/:id', {id: '@id'});
}]);