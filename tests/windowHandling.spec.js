import {test} from '@playwright/test'

test('amazon', async({browser})=>{
  const context1 = await browser.newContext({
    recordVideo : {
      dir : 'screenrecord/'
    }
  });
  const page1 = await context1.newPage();
  await page1.goto("https://www.amazon.in/");
  const newPage = context1.waitForEvent('page');
  await page1.locator('//input[@id="twotabsearchtextbox"]').type('Iphone 18 pro');
  await page1.locator('//input[@id="nav-search-submit-button"]').click();
  await page1.locator("(//span[text()='iPhone 18 Pro Max (2 TB) - Burgundy'])[2]").click();
  const page2 = await newPage;
  await page2.waitForLoadState();
  await page2.locator('//input[@name="2" and @aria-posinset="5"]').click();
  await page2.locator('//input[@id="buy-now-button"]').click();
  await page2.waitForTimeout(3000);

})