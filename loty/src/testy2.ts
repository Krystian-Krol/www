import {Builder, Capabilities, By} from 'selenium-webdriver';

import { expect } from 'chai';

import { driver } from 'mocha-webdriver';


describe('testDrugi', function () {

    it('should say something', async function() {

        this.timeout(20000);

        await driver.get('file:///home/uzytkownik/Pulpit/Programming/WWW/www/loty/index.html');


        expect(await driver.findElement(By.id('dest')).getText()).to.include('Hanoi');

        await driver.find('input[type=text]').sendKeys('Jan Kowalski');

        await driver.find('button').doClick();

    });

})
