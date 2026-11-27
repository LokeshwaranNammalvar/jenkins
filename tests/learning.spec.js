import {test} from '@playwright/test'

test('learning', async({page}) => {
  await page.goto("https://www.amazon.in/");
  await page.waitForTimeout(3000);
  await page.screenshot({path : 'image2.png'});
  await page.goto("https://demoqa.com/");
  await page.waitForTimeout(3000);
  await page.screenshot({path : 'image1.png'});
  await page.goto("https://www.saucedemo.com/");
  await page.waitForTimeout(3000);
  await page.goBack();
  await page.goForward();
  await page.reload();
  const URL = await page.url();
  console.log(URL);
  const title = await page.title();
  console.log(title);
})