'use strict';

describe('Service: wordGenerator', function () {

  // load the service's module
  beforeEach(module('testAngularApp'));

  // instantiate service
  var wordGenerator;
  beforeEach(inject(function (_wordGenerator_) {
    wordGenerator = _wordGenerator_;
  }));

  it('should do something', function () {
    expect(!!wordGenerator).toBe(true);
  });

});
