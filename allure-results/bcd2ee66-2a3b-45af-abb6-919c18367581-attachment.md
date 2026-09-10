# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login
- Location: tests\login.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Sign in with email and password')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - main [ref=e3]:
    - region [ref=e6]:
      - generic [ref=e7]:
        - img "ASTRA Insights" [ref=e10]
        - generic [ref=e11]:
          - heading "Welcome back" [level=1] [ref=e12]
          - paragraph [ref=e13]: Use your Microsoft work account to access ASTRA Insights.
        - button "Sign in with Microsoft" [ref=e14] [cursor=pointer]
  - region "Notifications alt+T"
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | test('Login', async({page}) =>{
  4  |     await page.goto("https://polaris.nousinfo.com/")
  5  |     await page.getByText('Login').click()
> 6  |     await page.getByText('Sign in with email and password').click()
     |                                                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  7  |     await page.getByPlaceholder('you@company.com').fill('admin@polaris.dev')
  8  |     await page.getByPlaceholder('Enter your password').fill('Admin123!')
  9  |     await page.locator("//button/span[.='Sign in']").click()
  10 |     await page.waitForTimeout(5000)
  11 | 
  12 | // storing the login cookies usingstorage state 
  13 | 
  14 |     await page.context().storageState({path: 'test-env/auth.json'})
  15 | })
  16 | 
```