'use strict';

/**
 * @ngdoc function
 * @name cookbookApp.controller:ContactCtrl
 * @description
 * # CreateCtrl, IngredientCtrl
 * Controller of the cookbookApp
 */
angular.module('cookbookApp')
  .controller('CreateCtrl', ['$scope', 'Recipe', 
    function ($scope, Recipe) {
      $scope.recipe = new Recipe({ ingredients: [ {} ] });
  }])
  .controller('IngredientsCtrl', ['$scope', function($scope) {
    $scope.addIngredient = function() {
      var ingredients = $scope.recipe.ingredients;
      ingredients[ingredients.length] = {};
    };
    $scope.removeIngredient = function(index) {
      $scope.recipe.ingredients.splice(index, 1);
    };
  }]);
