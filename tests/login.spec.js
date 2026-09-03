import { test } from '@playwright/test';

test('Login', async({page}) =>{
    await page.goto("https://polaris.nousinfo.com/")
    await page.getByText('Login').click()
    await page.getByText('Sign in with email and password').click()
    await page.getByPlaceholder('you@company.com').fill('admin@polaris.dev')
    await page.getByPlaceholder('Enter your password').fill('Admin123!')
    await page.locator("//button/span[.='Sign in']").click()
    await page.waitForTimeout(5000)

// storing the login cookies usingstorage state 

    await page.context().storageState({path: 'test-env/auth.json'})
})
