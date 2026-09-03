import test from 'playwright/test';

test('skip login', async ({ page }) =>{

    await page.goto("https://polaris.nousinfo.com")
    await page.waitForTimeout(5000)

})