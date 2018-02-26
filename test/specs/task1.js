
var expect = require('chai').expect;


describe('Navigate to the URL', function(){
    it('should have the right title', function(){
        browser.url('http://the-internet.herokuapp.com/login');
        var title = browser.getTitle()
            console.log('Title is: ' + title);
    });

    it('Enter Username & Password, Validate login', function(){
        browser.element('#username').setValue('tomsmith');
        browser.element('#password').setValue('SuperSecretPassword!');
        browser.element('#login').click('button*=Login');
        expect(browser.element('#flash').getText()).to.contain('You logged into a secure area!');
    })

    it('Logout & validating Logout', function(){
        browser.element('//*[@id="content"]/div/a/i').click();
        expect(browser.element('#flash').getText()).to.contain('You logged out of the secure area!');
    })
});