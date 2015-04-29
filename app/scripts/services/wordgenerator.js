'use strict';

/**
 * @ngdoc service
 * @name testAngularApp.wordGenerator
 * @description
 * # wordGenerator
 * Service in the testAngularApp.
 */
angular.module('testAngularApp')
  .service('wordGenerator', function () {
    return {getWord : function(){
      return 'Hola';
    }};

  });
