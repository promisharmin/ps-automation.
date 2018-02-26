var WebdriverIO = require('webdriverio');
var expect = require('chai').expect;

describe('this will do the 2nd task', function(){
    it('should sort by the due amount asc', function(){
        browser.url('http://the-internet.herokuapp.com/tables');
        browser.element('//*[@id="table1"]/thead/tr/th[4]/span').click();
        //browser.element('//*[@id="table1"]/thead/tr/th[4]/span').click();
        //browser.pause(5000);
        expect(browser.element('//*[@id="table1"]/tbody/tr[1]/td[4]').getText()).to.contain('$50.00'); 
    });

    it('should sort by the due amount desc', function(){
        browser.element('//*[@id="table1"]/thead/tr/th[4]/span').click();
        expect(browser.element('//*[@id="table1"]/tbody/tr[1]/td[4]').getText()).to.contain('$100.00');
    })
    });

