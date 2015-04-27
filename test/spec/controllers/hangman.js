'use strict';

describe('Controller: HangmanCtrl', function () {

  // load the controller's module
  beforeEach(module('testAngularApp'));

  var HangmanCtrl,
    scope,
      worldGenerator = {
        getWord : function(){
          return 'Hola';
        }
      };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HangmanCtrl = $controller('HangmanCtrl', {
      $scope: scope,
      worldGenerator : worldGenerator
    });
  }));

  it('Should be generate a word', function () {
        expect(scope.secretWord).toBeDefined();
      }
  );

  it('Should be generate a word and return its length', function(){
    expect(scope.worldLength()).toBeGreaterThan(0);
    expect(scope.secretWord.length).toBe(scope.worldLength());
  });

  it('The generater world must be "Hola"', function(){
    expect(scope.secretWord).toBe('Hola');
  });

  it('The char exists in the generated word', function(){
    scope.chosenChar = 'a';
    expect(scope.isValid()).toBeTruthy();
  });

  it('The char does not exist in the generated word', function(){
    scope.chosenChar = 'z';
    expect(scope.isValid()).toBeFalsy();
  });

  it('if the char does not exist in the generated word, the fails number must be increment by one', function(){
    expect(scope.errorCount()).toBe(0)
    scope.chosenChar = 'z';
    expect(scope.isValid()).toBeFalsy();
    expect(scope.errorCount()).toBe(1)
  });

  it('if select the correct chars wins the game', function(){
    var chars = ['a', 'o', 'h', 'l'];
    var i;
    for(i = 0; i <= 4; i++) {
      scope.chosenChar = chars[i];
      scope.isValid();
    }

    expect(scope.getStatus()).toBe('win');
  });

  it('if select 5 incorrect chars it loses', function(){
      var chars = ['e', 'p', 'r', 'z', 'j'];
      var i;
      for(i = 0; i <= 5; i++) {
        scope.chosenChar = chars[i];
        scope.isValid();
      }

      expect(scope.getStatus()).toBe('lose');
    });

});
