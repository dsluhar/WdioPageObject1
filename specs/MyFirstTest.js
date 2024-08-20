
describe('My SauceDemo application', async() => {
    it('should login with valid credentials', async () => {

        await browser.url("https://www.saucedemo.com/")
        await browser.maximizeWindow()
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitle("Swag Labs")

        const El_UserName = await $('#user-name')
        const El_Password = await $('#password')
        const El_LoginButton = await $('#login-button')

        await El_UserName.setValue('standard_user')
        await El_Password.setValue('secret_sauce')
        await El_LoginButton.click()

        await browser.pause(7000)

    })
})
