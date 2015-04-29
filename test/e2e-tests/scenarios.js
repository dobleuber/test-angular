// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('index.html');

    expect(browser.getTitle()).toEqual('Hangman');
  });

  it('should have a hangman page', function() {
    browser.get('index.html#/hangman');
    expect(browser.getTitle()).toEqual('Hangman');
  });

  describe('Test hangman page', function(){
    var chosenInput;
    var valButton;
    var resultLabel;
    beforeEach(function(){
      browser.get('index.html#/hangman');
      chosenInput = element(by.model('chosenChar'));
      valButton = element(by.css('.btn-primary'));
      resultLabel = element(by.binding('result'))
    });

    it('Should be exists one input[text]', function(){
      expect(chosenInput.getText()).toBeFalsy();
    });

    it('Should be validate one char when clicks the button', function(){
      chosenInput.sendKeys('a');
      valButton.click();
      expect(resultLabel.getText()).toBe('true');
    });

  });




});
