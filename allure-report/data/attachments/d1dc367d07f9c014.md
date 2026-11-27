# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: assertions.spec.js >> web table
- Location: tests\assertions.spec.js:11:1

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('[id="addNewRecordButton"]')
Expected: 3
Received: 1
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" locator('[id="addNewRecordButton"]') with timeout 5000ms
  - waiting for locator('[id="addNewRecordButton"]')
    12 × locator resolved to 1 element
       - unexpected value "1"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e13] [cursor=pointer]: Elements
        - list [ref=e25]:
          - listitem [ref=e26] [cursor=pointer]:
            - link "Text Box" [ref=e27]:
              - /url: /text-box
          - listitem [ref=e30] [cursor=pointer]:
            - link "Check Box" [ref=e31]:
              - /url: /checkbox
          - listitem [ref=e34] [cursor=pointer]:
            - link "Radio Button" [ref=e35]:
              - /url: /radio-button
          - listitem [ref=e38] [cursor=pointer]:
            - link "Web Tables" [ref=e39]:
              - /url: /webtables
          - listitem [ref=e42] [cursor=pointer]:
            - link "Buttons" [ref=e43]:
              - /url: /buttons
          - listitem [ref=e46] [cursor=pointer]:
            - link "Links" [ref=e47]:
              - /url: /links
          - listitem [ref=e50] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e51]:
              - /url: /broken
          - listitem [ref=e54] [cursor=pointer]:
            - link "Upload and Download" [ref=e55]:
              - /url: /upload-download
          - listitem [ref=e58] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e59]:
              - /url: /dynamic-properties
      - generic [ref=e62]: Forms
      - generic [ref=e75]: Alerts, Frame & Windows
      - generic [ref=e87]: Widgets
      - generic [ref=e100]: Interactions
      - generic [ref=e112]: Book Store Application
    - generic [ref=e125]:
      - heading "Web Tables" [level=1] [ref=e128]
      - generic [ref=e129]:
        - generic [ref=e130]:
          - button "Add" [ref=e132] [cursor=pointer]
          - generic [ref=e134]:
            - textbox "Type to search" [active] [ref=e135]: Javascript
            - button [ref=e136] [cursor=pointer]
        - table [ref=e139]:
          - rowgroup [ref=e140]:
            - row [ref=e141]:
              - columnheader "First Name" [ref=e142]
              - columnheader "Last Name" [ref=e143]
              - columnheader "Age" [ref=e144]
              - columnheader "Email" [ref=e145]
              - columnheader "Salary" [ref=e146]
              - columnheader "Department" [ref=e147]
              - columnheader "Action" [ref=e148]
          - rowgroup
        - generic [ref=e150]:
          - group [ref=e152]:
            - button "First" [disabled]
            - button "Previous" [disabled]
            - button "Next" [disabled]
            - button "Last" [disabled]
          - generic [ref=e153]:
            - text: Page
            - strong [ref=e154]: 1 of 0
          - combobox [ref=e156]:
            - option "Show 10" [selected]
            - option "Show 20"
            - option "Show 30"
            - option "Show 40"
            - option "Show 50"
  - contentinfo [ref=e163]:
    - generic [ref=e164]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test('check', async({page})=>{
  4  |   await page.goto('https://www.saucedemo.com/');
  5  |   await expect(page.locator('//input[@id="login-button"]')).toBeVisible();
  6  |   await expect(page.locator('//input[@id="login-button"]')).toBeHidden();
  7  |   await expect.soft(page.locator('//input[@id="login-button"]')).toBeEnabled();
  8  |   await expect(page.locator("//h4[text()='Accepted usernames are:']")).toHaveText();
  9  | })
  10 | 
  11 | test('web table', async({page})=>{
  12 |   await page.goto("https://demoqa.com/webtables");
  13 |   await expect(page.locator("//h1[text()='Web Tables']")).toHaveText('Web Tables');
  14 |   await expect(page.locator("//h1[text()='Web Tables']")).toContainText('Tab');
  15 |   await page.locator('//input[@id="searchBox"]').fill("Javascript");
  16 |   await expect(page.locator('//input[@id="searchBox"]')).toHaveValue("Javascript");
  17 |   await expect(page).toHaveURL("https://demoqa.com/webtables");
  18 |   await expect(page).toHaveTitle("demosite");
> 19 |   await expect(page.locator('[id="addNewRecordButton"]')).toHaveCount(3);
     |                                                           ^ Error: expect(locator).toHaveCount(expected) failed
  20 | })
  21 | 
  22 | test('amazon', async({page})=>{
  23 |   await page.goto("https://www.amazon.in/");
  24 |   await expect(page.locator('//input[@class="nav-input nav-progressive-attribute"]')).toHaveCount(1);
  25 | })
```