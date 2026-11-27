import {test, expect} from '@playwright/test'

test('check', async({page})=>{
  await page.goto('https://www.saucedemo.com/');
  await expect(page.locator('//input[@id="login-button"]')).toBeVisible();
  await expect(page.locator('//input[@id="login-button"]')).toBeHidden();
  await expect.soft(page.locator('//input[@id="login-button"]')).toBeEnabled();
  await expect(page.locator("//h4[text()='Accepted usernames are:']")).toHaveText();
})

test('web table', async({page})=>{
  await page.goto("https://demoqa.com/webtables");
  await expect(page.locator("//h1[text()='Web Tables']")).toHaveText('Web Tables');
  await expect(page.locator("//h1[text()='Web Tables']")).toContainText('Tab');
  await page.locator('//input[@id="searchBox"]').fill("Javascript");
  await expect(page.locator('//input[@id="searchBox"]')).toHaveValue("Javascript");
  await expect(page).toHaveURL("https://demoqa.com/webtables");
  await expect(page).toHaveTitle("demosite");
  await expect(page.locator('[id="addNewRecordButton"]')).toHaveCount(3);
})

test('amazon', async({page})=>{
  await page.goto("https://www.amazon.in/");
  await expect(page.locator('//input[@class="nav-input nav-progressive-attribute"]')).toHaveCount(1);
})