'use strict';

describe('Controller: CalculatorCtrl', function () {

  // load the controller's module
  beforeEach(module('testAngularApp'));

  var CalculatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalculatorCtrl = $controller('CalculatorCtrl', {
      $scope: scope
    });
  }));

  it('should be sum binary numbers 0 + 1', function(){
    scope.num1 = 0;
    scope.num2 = 1;
    scope.sum();
    expect(scope.result).toBe(1);
  });

  it('should be sum binary numbers 1 + 1', function(){
    scope.num1 = 1;
    scope.num2 = 1;
    scope.sum();
    expect(scope.result).toBe(10);
  });

});
