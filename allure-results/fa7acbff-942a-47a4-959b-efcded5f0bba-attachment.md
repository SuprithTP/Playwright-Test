# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: saucedemo.spec.js >> Testing alerts and dialog boxes
- Location: tests\saucedemo.spec.js:33:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Simple Alert' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - navigation "Main navigation" [ref=e3]:
    - generic [ref=e4]:
      - link "QA Playground home" [ref=e5] [cursor=pointer]:
        - /url: /
        - generic [ref=e7]: QA Playground
      - list [ref=e8]:
        - listitem [ref=e9]:
          - link "Home" [ref=e10] [cursor=pointer]:
            - /url: /
        - listitem [ref=e11]:
          - link "Practice" [ref=e12] [cursor=pointer]:
            - /url: /practice
        - listitem [ref=e13]:
          - link "Demo Apps" [ref=e14] [cursor=pointer]:
            - /url: /demo
        - listitem [ref=e15]:
          - link "Challenges" [ref=e16] [cursor=pointer]:
            - /url: /challenges
        - listitem [ref=e17]:
          - link "Blogs" [ref=e18] [cursor=pointer]:
            - /url: /blog
      - generic [ref=e19]:
        - button "Switch to dark mode" [ref=e20] [cursor=pointer]
        - link "Log in / Sign up" [ref=e24] [cursor=pointer]:
          - /url: /auth/sign-in
  - main [ref=e25]:
    - generic [ref=e28]:
      - generic [ref=e30]:
        - navigation "Breadcrumb" [ref=e31]:
          - generic [ref=e32]:
            - link "Home" [ref=e33] [cursor=pointer]:
              - /url: /
            - generic [ref=e34]: /
          - generic [ref=e35]:
            - link "Practice" [ref=e36] [cursor=pointer]:
              - /url: /practice
            - generic [ref=e37]: /
          - generic [ref=e38]: Alerts & Dialogs
        - generic [ref=e40]:
          - heading "Alerts & Dialogs Automation Practice" [level=1] [ref=e41]
          - paragraph [ref=e42]: Master dialog interactions — open, close, confirm, cancel, backdrop dismiss, Escape key, accessibility assertions, and scoped dialog locators in Selenium, Playwright, and Cypress.
          - generic [ref=e43]:
            - generic [ref=e44]:
              - generic [aria-hidden] [ref=e45]: "02"
              - text: Intermediate
            - generic [ref=e46]: 15 min
            - generic [ref=e47]: 8 scenarios
            - generic [ref=e48]: 16 test cases
      - generic [ref=e49]:
        - tablist "Practice page tabs" [ref=e50]:
          - generic [ref=e51]:
            - tab "Practice 8" [selected] [ref=e52]:
              - generic [ref=e55]: Practice
              - generic [ref=e56]: "8"
            - tab "Test Cases 16" [ref=e57]:
              - generic [ref=e61]: Test Cases
              - generic [ref=e62]: "16"
            - tab "Learn" [ref=e63]
        - tabpanel "Practice 8" [ref=e67]:
          - generic [ref=e69]:
            - region "Interactive Scenarios" [ref=e70]:
              - paragraph [ref=e71]: Interactive Scenarios
              - generic [ref=e72]:
                - generic [ref=e73]:
                  - generic [ref=e74]:
                    - generic [ref=e75]: S01
                    - generic [ref=e76]: Close Info Alert Dialog
                  - generic [ref=e78]:
                    - button "Open Info Dialog" [ref=e79] [cursor=pointer]
                    - generic [ref=e80]: No action yet
                    - button "💡 Show Hint" [ref=e81]
                - generic [ref=e82]:
                  - generic [ref=e83]:
                    - generic [ref=e84]: S02
                    - generic [ref=e85]: Confirm Action in Dialog
                  - generic [ref=e87]:
                    - button "Open Confirm Dialog" [ref=e88] [cursor=pointer]
                    - generic [ref=e89]: Awaiting confirmation
                    - button "💡 Show Hint" [ref=e90]
                - generic [ref=e91]:
                  - generic [ref=e92]:
                    - generic [ref=e93]: S03
                    - generic [ref=e94]: Cancel and Stay on Page
                  - generic [ref=e96]:
                    - button "Open Unsaved Dialog" [ref=e97] [cursor=pointer]
                    - generic [ref=e98]: Dialog not opened
                    - button "💡 Show Hint" [ref=e99]
                - generic [ref=e100]:
                  - generic [ref=e101]:
                    - generic [ref=e102]: S04
                    - generic [ref=e103]: Destructive Delete Confirm
                    - generic [ref=e104]: DANGER
                  - generic [ref=e106]:
                    - button "Open Delete Dialog" [ref=e107] [cursor=pointer]
                    - generic [ref=e108]: No deletion yet
                    - button "💡 Show Hint" [ref=e109]
                - generic [ref=e110]:
                  - generic [ref=e111]:
                    - generic [ref=e112]: S05
                    - generic [ref=e113]: Backdrop Click to Dismiss
                  - generic [ref=e115]:
                    - button "Open Backdrop Dialog" [ref=e116] [cursor=pointer]
                    - generic [ref=e117]: Dialog not opened
                    - button "💡 Show Hint" [ref=e118]
                - generic [ref=e119]:
                  - generic [ref=e120]:
                    - generic [ref=e121]: S06
                    - generic [ref=e122]: Escape Key to Dismiss
                  - generic [ref=e124]:
                    - button "Open Keyboard Dialog" [ref=e125] [cursor=pointer]
                    - generic [ref=e126]: Dialog not opened
                    - button "💡 Show Hint" [ref=e127]
                - generic [ref=e128]:
                  - generic [ref=e129]:
                    - generic [ref=e130]: S07
                    - generic [ref=e131]: Assert Dialog Content
                  - generic [ref=e133]:
                    - button "Open Notification" [ref=e134] [cursor=pointer]
                    - generic [ref=e135]: Awaiting acknowledgement
                    - button "💡 Show Hint" [ref=e136]
                - generic [ref=e137]:
                  - generic [ref=e138]:
                    - generic [ref=e139]: S08
                    - generic [ref=e140]: Scoped Dismiss — Repeated Triggers
                    - generic [ref=e141]: CHALLENGE
                  - generic [ref=e143]:
                    - generic [ref=e144]:
                      - generic [ref=e145]:
                        - generic [ref=e146]: ⚠️ Low Disk Space
                        - button "Dismiss" [ref=e147] [cursor=pointer]
                      - generic [ref=e148]:
                        - generic [ref=e149]: ℹ️ Session Expiring Soon
                        - button "Dismiss" [ref=e150] [cursor=pointer]
                      - generic [ref=e151]:
                        - generic [ref=e152]: 🔒 Security Alert
                        - button "Dismiss" [ref=e153] [cursor=pointer]
                    - generic [ref=e154]: No notification dismissed
                    - button "💡 Show Hint" [ref=e155]
            - complementary [ref=e156]:
              - generic [ref=e157]:
                - generic [ref=e158]:
                  - generic [ref=e159]: Your Progress
                  - generic [ref=e160]: 0 / 8
                - generic [ref=e161]:
                  - progressbar "Practice progress"
                - generic [ref=e162]:
                  - generic [ref=e163]:
                    - generic [aria-hidden] [ref=e164]: ✓
                    - generic [ref=e165]: Close Info Alert Dialog
                  - generic [ref=e166]:
                    - generic [aria-hidden] [ref=e167]: ✓
                    - generic [ref=e168]: Confirm Action in Dialog
                  - generic [ref=e169]:
                    - generic [aria-hidden] [ref=e170]: ✓
                    - generic [ref=e171]: Cancel and Stay on Page
                  - generic [ref=e172]:
                    - generic [aria-hidden] [ref=e173]: ✓
                    - generic [ref=e174]: Destructive Delete Confirm
                  - generic [ref=e175]:
                    - generic [aria-hidden] [ref=e176]: ✓
                    - generic [ref=e177]: Backdrop Click to Dismiss
                  - generic [ref=e178]:
                    - generic [aria-hidden] [ref=e179]: ✓
                    - generic [ref=e180]: Escape Key to Dismiss
                  - generic [ref=e181]:
                    - generic [aria-hidden] [ref=e182]: ✓
                    - generic [ref=e183]: Assert Dialog Content
                  - generic [ref=e184]:
                    - generic [aria-hidden] [ref=e185]: ✓
                    - generic [ref=e186]: Scoped Dismiss — Repeated Triggers
              - generic [ref=e187]:
                - generic [ref=e188]: What You'll Learn
                - generic [ref=e193]:
                  - generic [ref=e194]:
                    - button "Selenium" [ref=e195]
                    - button "Playwright" [ref=e196]
                    - button "Cypress" [ref=e197]
                  - generic [ref=e198]:
                    - generic [ref=e199]: Selenium (Java)
                    - list [ref=e200]:
                      - listitem [ref=e201]:
                        - code [ref=e203]: findElement(By.css('[role=dialog]'))
                      - listitem [ref=e204]:
                        - code [ref=e206]: isDisplayed()
                      - listitem [ref=e207]:
                        - code [ref=e209]: sendKeys(Keys.ESCAPE)
                      - listitem [ref=e210]:
                        - code [ref=e212]: findElement(By.cssSelector("[aria-label]"))
                      - listitem [ref=e213]:
                        - code [ref=e215]: Actions.moveToElement()
                  - generic [ref=e216]: Tutorial video coming soon
              - link "☑️ Radio & Checkbox Toggle radio buttons and checkboxes across different states ›" [ref=e223] [cursor=pointer]:
                - /url: /practice/radio-checkbox
                - generic [ref=e224]: ☑️
                - generic [ref=e225]:
                  - generic [ref=e226]: Radio & Checkbox
                  - generic [ref=e227]: Toggle radio buttons and checkboxes across different states
                - generic [ref=e228]: ›
  - contentinfo [ref=e229]:
    - generic [ref=e230]:
      - generic [ref=e231]:
        - generic [ref=e232]:
          - link "QA Playground home" [ref=e233] [cursor=pointer]:
            - /url: /
            - generic [ref=e235]: QA Playground
          - paragraph [ref=e236]: A purpose-built platform for QA engineers. Learn Selenium, Playwright and Cypress through practice on real UI elements, demo apps. Rehearse interviews with AI agents, and track every job application through to the offer.
          - list "Social links" [ref=e237]:
            - listitem [ref=e238]:
              - link "YouTube" [ref=e239] [cursor=pointer]:
                - /url: https://youtube.com
            - listitem [ref=e242]:
              - link "GitHub" [ref=e243] [cursor=pointer]:
                - /url: https://github.com/kundalik-dev
            - listitem [ref=e246]:
              - link "X / Twitter" [ref=e247] [cursor=pointer]:
                - /url: https://x.com
            - listitem [ref=e250]:
              - link "Telegram" [ref=e251] [cursor=pointer]:
                - /url: https://t.me
        - generic [ref=e254]:
          - generic [ref=e255]: Platform
          - list [ref=e256]:
            - listitem [ref=e257]:
              - link "Practice Elements" [ref=e258] [cursor=pointer]:
                - /url: /practice
            - listitem [ref=e259]:
              - link "AI Mock Interviews" [ref=e260] [cursor=pointer]:
                - /url: /interview-practice
            - listitem [ref=e261]:
              - link "Job Hub & CRM" [ref=e262] [cursor=pointer]:
                - /url: /job-crm
            - listitem [ref=e263]:
              - link "Bank Demo" [ref=e264] [cursor=pointer]:
                - /url: /demo/bank
            - listitem [ref=e265]:
              - link "Dashboard" [ref=e266] [cursor=pointer]:
                - /url: /dashboard
            - listitem [ref=e267]:
              - link "QA Tools" [ref=e268] [cursor=pointer]:
                - /url: /qa-tools
        - generic [ref=e269]:
          - generic [ref=e270]: Learn
          - list [ref=e271]:
            - listitem [ref=e272]:
              - link "Blog & Tutorials" [ref=e273] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e274]:
              - link "Resources" [ref=e275] [cursor=pointer]:
                - /url: /resources
            - listitem [ref=e276]:
              - link "Interview Questions" [ref=e277] [cursor=pointer]:
                - /url: /interview-questions
            - listitem [ref=e278]:
              - link "Automation Framework" [ref=e279] [cursor=pointer]:
                - /url: https://github.com/kundalik5545/QA_PlayGround_Automation_Framework
        - generic [ref=e280]:
          - generic [ref=e281]: Company
          - list [ref=e282]:
            - listitem [ref=e283]:
              - link "About Us" [ref=e284] [cursor=pointer]:
                - /url: /about-us
            - listitem [ref=e285]:
              - link "Contact" [ref=e286] [cursor=pointer]:
                - /url: /contact-us
            - listitem [ref=e287]:
              - link "Report an Issue" [ref=e288] [cursor=pointer]:
                - /url: https://github.com/kundalik-dev/qaplayground-support/issues
            - listitem [ref=e289]:
              - link "Privacy Policy" [ref=e290] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e291]:
              - link "Login" [ref=e292] [cursor=pointer]:
                - /url: /auth/sign-in
      - generic [ref=e293]:
        - generic [ref=e294]:
          - text: © 2026 QA Playground. Built by
          - link "Kundalik Jadhav" [ref=e295] [cursor=pointer]:
            - /url: https://github.com/kundalik-dev
          - text: "- Pune, India 🇮🇳"
        - generic [ref=e296]: All rights reserved.
  - alert [ref=e297]
  - button "Send feedback or report an issue" [ref=e298] [cursor=pointer]
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | import {sauceDemoPages} from '../Pages/sauceDemoPages'
  3  | 
  4  | 
  5  | var arrOfRequiredProducts = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Onesie']
  6  | 
  7  | 
  8  | test("Login page", async({page}) =>{
  9  |     const sauceDemoPage = new sauceDemoPages(page)
  10 |     await page.goto("https://www.saucedemo.com/")
  11 |     await page.waitForLoadState()
  12 |     await sauceDemoPage.userName.fill("standard_user")
  13 |     await sauceDemoPage.psswrd.fill("secret_sauce") 
  14 |     await sauceDemoPage.btnLogin.click()
  15 |     await page.waitForLoadState()
  16 |     expect(await sauceDemoPage.titleProduct.textContent()).toEqual('Products')
  17 | })
  18 | 
  19 | test("Add to Cart", async({page}) => {
  20 |     const sauceDemoPage = new sauceDemoPages(page)
  21 |     await sauceDemoPage.mtdLogin("standard_user", "secret_sauce")
  22 |     await sauceDemoPage.mtdAddToCart(arrOfRequiredProducts)
  23 |     await page.waitForTimeout(5000)
  24 |     for(let i=0 ; i<arrOfRequiredProducts.length ; i++)
  25 |     {
  26 |        expect(await sauceDemoPage.btnRemoveAfterCart(arrOfRequiredProducts[i])).toBeEnabled()
  27 |         
  28 |     }
  29 |     await sauceDemoPage.btnCart.click()
  30 | 
  31 | })
  32 | 
  33 | test("Testing alerts and dialog boxes", async ({page}) =>{
  34 |     await page.goto("https://qaplayground.com/practice/alerts-dialogs")
  35 | 
  36 |     await page.once('dialog', async(dialog) =>{
  37 |         expect(await dialog.type()).toBe('alert')
  38 |         await dialog.accept()
  39 |     })
  40 | 
> 41 |     await page.getByRole('button',{name:'Simple Alert'}).click()
     |                                                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  42 | 
  43 |     await page.once('dialog', async(dialog) =>{
  44 |         expect(await dialog.type()).toBe('confirm')
  45 |         console.log(await dialog.message())
  46 |         await dialog.accept()
  47 |     })
  48 |     await page.getByRole('button',{name:'Confirm Alert'}).click()
  49 | 
  50 | })
  51 | 
  52 | test('Handling Frame', async ({page}) =>{
  53 |     await page.goto("https://ui.vision/demo/webtest/frames/")
  54 |     var noOfFrames = await page.frames()
  55 |     console.log(noOfFrames.length)
  56 |     var frame1 = await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_2.html'})
  57 |     await frame1.fill("//input[@name='mytext2']", "Hello")
  58 | 
  59 |   
  60 |     // var frame2 = await page.frame("mytext4")
  61 |     // await frame2.fill("//input[@name='mytext4']", "I am Suprith")
  62 | 
  63 |     await page.frameLocator("//frame[@src='frame_3.html']").locator("//input[@name='mytext3']").fill("Hey")
  64 |     await page.waitForTimeout(5000)
  65 | 
  66 | 
  67 |     var framnew = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
  68 |     var arrOfFrames = await framnew.childFrames()
  69 |     // console.log(arrOfFrames,"array of frames");
  70 |     await page.waitForTimeout(3000)
  71 |     await arrOfFrames[0].locator("//*[.='I am a human']//parent::div[@class='d7L4fc bJNwt  FXLARc aomaEc ECvBRb']").click()
  72 | 
  73 | 
  74 | })
  75 | 
  76 | test("Dropdowns", async({page}) => {
  77 |     await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
  78 |     await page.selectOption("//div[contains(@class, 'single_tab_div')]//select", 'India')
  79 |     await page.waitForTimeout(4000)
  80 | })
  81 | 
  82 | 
  83 | 
  84 | 
  85 | 
  86 | 
  87 | 
  88 | 
  89 | 
  90 | 
  91 | 
```