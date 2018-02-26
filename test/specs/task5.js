var WebdriverIO = require('webdriverio');
var expect = require('chai').expect;

describe('This test should test the dropdown functionality', function(){
    it('Should get the total dropdown option', function(){
  
        browser.url('http://the-internet.herokuapp.com/dropdown');
    //var count = browser.element('#dropdown').
        //console.log(count.getValue());

        
            browser.element('#dropdown').click();
            browser.element('#dropdown > option:nth-child(3)').click();

    })

 });
