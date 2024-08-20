describe('My SauceDemo application', async() => {
    it('should login with valid credentials', async () => {

        await browser.url("https://rahulshettyacademy.com/angularpractice/shop")
        await browser.maximizeWindow()
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitle("ProtoCommerce")

        const El_Products = await $$("//div[@class='card h-100']")
        
        for (let i=0 ; i < await El_Products.length; i++) {
            const Product = await El_Products[i].$("div h4 a")
            console.log(await Product.getText())
        }
        await browser.pause(7000)
    })
})
