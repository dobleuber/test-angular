'use strict';

/**
 * @ngdoc function
 * @name testAngularApp.controller:HangmanCtrl
 * @description
 * # HangmanCtrl
 * Controller of the testAngularApp
 */
angular.module('testAngularApp')
  .controller('HangmanCtrl', function ($scope, worldGenerator) {
      $scope.secretWord = worldGenerator.getWord();
      var secretWord = $scope.secretWord.toLowerCase();
    $scope.worldLength = function () {
      return $scope.secretWord.length;
    };

      $scope.isValid = function(){
        if(secretWord.indexOf($scope.chosenChar) > -1) {
          secretWord = secretWord.replace($scope.chosenChar, '');
          return true
        }

        errors++;
        return false;
      };

      var errors = 0;

      $scope.errorCount = function(){
        return errors;
      };

      $scope.getStatus = function() {
        return secretWord.length == 0
            ? 'win' :
            errors >= 5
                ? 'lose':
                progress;
      };

  });
