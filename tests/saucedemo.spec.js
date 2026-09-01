import {test,expect} from '@playwright/test'
import {sauceDemoPages} from '../Pages/sauceDemoPages'


var arrOfRequiredProducts = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Onesie']


// test("Login page", async({page}) =>{
//     const sauceDemoPage = new sauceDemoPages(page)
//     await page.goto("https://www.saucedemo.com/")
//     await page.waitForLoadState()
//     await sauceDemoPage.userName.fill("standard_user")
//     await sauceDemoPage.psswrd.fill("secret_sauce") 
//     await sauceDemoPage.btnLogin.click()
//     await page.waitForLoadState()
//     expect(await sauceDemoPage.titleProduct.textContent()).toEqual('Products')
// })

// test("Add to Cart", async({page}) => {
//     const sauceDemoPage = new sauceDemoPages(page)
//     await sauceDemoPage.mtdLogin("standard_user", "secret_sauce")
//     await sauceDemoPage.mtdAddToCart(arrOfRequiredProducts)
//     await page.waitForTimeout(5000)
//     for(let i=0 ; i<arrOfRequiredProducts.length ; i++)
//     {
//        expect(await sauceDemoPage.btnRemoveAfterCart(arrOfRequiredProducts[i])).toBeEnabled()
        
//     }
//     await sauceDemoPage.btnCart.click()

// })

// test("Testing alerts and dialog boxes", async ({page}) =>{
//     await page.goto("https://qaplayground.com/practice/alerts-dialogs")

//     await page.once('dialog', async(dialog) =>{
//         expect(await dialog.type()).toBe('alert')
//         await dialog.accept()
//     })

//     await page.getByRole('button',{name:'Simple Alert'}).click()

//     await page.once('dialog', async(dialog) =>{
//         expect(await dialog.type()).toBe('confirm')
//         console.log(await dialog.message())
//         await dialog.accept()
//     })
//     await page.getByRole('button',{name:'Confirm Alert'}).click()

// })

// test('Handling Frame', async ({page}) =>{
//     await page.goto("https://ui.vision/demo/webtest/frames/")
//     var noOfFrames = await page.frames()
//     console.log(noOfFrames.length)
//     var frame1 = await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_2.html'})
//     await frame1.fill("//input[@name='mytext2']", "Hello")

  
//     // var frame2 = await page.frame("mytext4")
//     // await frame2.fill("//input[@name='mytext4']", "I am Suprith")

//     await page.frameLocator("//frame[@src='frame_3.html']").locator("//input[@name='mytext3']").fill("Hey")
//     await page.waitForTimeout(5000)


//     var framnew = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
//     var arrOfFrames = await framnew.childFrames()
//     // console.log(arrOfFrames,"array of frames");
//     await page.waitForTimeout(3000)
//     await arrOfFrames[0].locator("//*[.='I am a human']//parent::div[@class='d7L4fc bJNwt  FXLARc aomaEc ECvBRb']").click()


// })

// test("Dropdowns", async({page}) => {
//     await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
//     await page.selectOption("//div[contains(@class, 'single_tab_div')]//select", 'India')
//     await page.waitForTimeout(4000)
// })

test("Navigatoin to polaris", async({page}) =>{
await page.goto("https://drnaverdsee5s.cloudfront.net/dashboard/")
await page.waitForLoadState()
// await page.locator("(//button[.='Sign in with Microsoft'])[1]").click()
await page.locator("//button[.='Sign in with Microsoft']").first().click()
await page.waitForTimeout(5000)
// await page.locator("//div[.='Suprith T P (BLR TT)']/parent::div").click()

})
test("Dropdowns", async({page}) => {
    await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
    await page.selectOption("//div[contains(@class, 'single_tab_div')]//select", 'India')
    await page.waitForTimeout(4000)
})

