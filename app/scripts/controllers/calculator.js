'use strict';

/**
 * @ngdoc function
 * @name testAngularApp.controller:CalculatorCtrl
 * @description
 * # CalculatorCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
  .controller('CalculatorCtrl', function ($scope) {
    $scope.sum = function(){
      var value = $scope.num1 + $scope.num2;

      $scope.result = (value <= 1) ? value : 10;
    };
  });
