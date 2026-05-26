class sauceDemoPages{
    constructor(page)
    {
        this.page=page
    }


get userName()
{
    return this.page.locator("#user-name")
}


get psswrd()
{
    return this.page.locator('#password')
}


get btnLogin()
{
    return this.page.locator("#login-button")
}

get appLogoSwagLabs()
{
    return this.page.locator("//div[@class = 'app_logo' and .='Swag Labs']")
}

get titleProduct()
{
    return this.page.locator("//span[@class='title']")
}
addToCartOfProduct(productName)
{
    return this.page.locator("//div[@data-test='inventory-item-name' and .='"+ productName +"']//parent::a/parent::div//following-sibling::div//button")
}

btnRemoveAfterCart(productName)
{
        return this.page.locator("//div[@data-test='inventory-item-name' and .='"+ productName +"']//parent::a/parent::div//following-sibling::div//button[.='Remove']")
}
get btnCart()
{
    return this.page.locator("//a[@data-test='shopping-cart-link']")
}


async mtdLogin(username, password)
{
    await this.page.goto("https://www.saucedemo.com/")
    await this.page.waitForLoadState()
    await this.userName.fill(username)
    await this.psswrd.fill(password) 
    await this.btnLogin.click()
    await this.page.waitForLoadState()
}

async mtdAddToCart(arrOfProducts)
{

    for(let i=0 ; i<arrOfProducts.length ; i++)
    {
        await this.addToCartOfProduct(arrOfProducts[i]).click()
    }

}

// async mtdRemoveBtnAfterCart(arrOfProducts)
// {
//     for(let i=0 ; i<arrOfProducts.length ; i++)
//     {
//         // await this.addToCartOfProduct(arrOfProducts[i]).click()
        
//     }
// }

}
module.exports ={sauceDemoPages}

