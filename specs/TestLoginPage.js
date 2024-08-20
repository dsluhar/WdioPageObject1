// const LoginPage = require ('../PageObjects2/LoginPage')
import LoginPage from '../PageObjects2/LoginPage.js';

describe('My SauceDemo Application with POM', async() => {

    before(async () => {
        try {
            await browser.url('https://www.saucedemo.com/');
            await browser.maximizeWindow();
        } catch (error) {
            console.error('Setup failed:', error);
            throw error;  // Rethrow error to fail the test suite if setup fails
        }
    });
    
    it('should login with valid credentials', async () => {

        console.log(await browser.getTitle())
        await expect(browser).toHaveTitle("Swag Labs")
        await LoginPage.Login("standard_user","secret_sauce")
        await browser.pause(7000)

    })
})
