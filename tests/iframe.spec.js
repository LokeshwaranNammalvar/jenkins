import {test} from '@playwright/test'

test('frame', async({page})=>{
  await page.goto("https://practice-automation.com/iframes/");
  await page.frameLocator('//iframe[@id="iframe-1"]')
            .locator('//span[@class="DocSearch-Button-Placeholder"]')
            .click();
  await page.frameLocator('//iframe[@id="iframe-1"]')
            .locator('//input[@id="docsearch-input"]')
            .type('Locator');
  await page.frameLocator('//iframe[@id="iframe-1"]')
            .getByText('Filtering ')
            .click();
  await page.waitForTimeout(3000);
  await page.frameLocator('//iframe[@id="iframe-1"]')
            .getByText('MCP')
            .click();
  await page.waitForTimeout(3000);
})
test('iframe', async({page})=>{
  await page.goto("https://practice-automation.com/iframes/");

  //creating a variable and assining a frame locator xpath
  const frame = page.frameLocator('//iframe[@id="iframe-1"]')

  await frame.locator('//span[@class="DocSearch-Button-Placeholder"]').click();
  await frame.locator('//input[@id="docsearch-input"]').type('Locator');
  await frame.getByText('Filtering ').click();
  await page.waitForTimeout(3000);
  await frame.getByText('MCP').click();
  await page.waitForTimeout(3000);
})