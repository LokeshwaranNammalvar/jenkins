import {test} from '@playwright/test'

test('locators learning', async({page}) =>{
  await page.goto("https://www.saucedemo.com/");
  await page.locator('#user-name').fill("standard_user");
})

test('browsers', async({browser})=>{
  const browser1 = await browser.newContext();
  const page1 = await browser1.newPage();
  await page1.goto("https://www.saucedemo.com/");

  const page2 = await browser1.newPage();
  await page2.goto('https://www.amazon.in/');

  const page3 = await browser1.newPage();
  await page3.goto('https://www.flipkart.com/');

  const browser2 = await browser.newContext();
  const myntra = await browser2.newPage();
  await myntra.goto('https://www.myntra.com/');
})