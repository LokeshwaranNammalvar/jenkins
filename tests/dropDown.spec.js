import {test} from '@playwright/test'

test('select drop down', async({page}) => {
  await page.goto('https://demoqa.com/select-menu');
  await page.waitForTimeout(3000);
  // by using value means value = '4' here 4 is a value
  await page.locator('//select[@id="oldSelectMenu"]').selectOption("4");
  await page.waitForTimeout(3000);
  // by using label means visible text(black color)
  await page.locator('//select[@id="oldSelectMenu"]').selectOption({label : 'Indigo'});
  await page.waitForTimeout(3000);
  await page.locator('//select[@id="oldSelectMenu"]').selectOption({index : 6 });
  await page.waitForTimeout(3000);

  // multiple option:
  await page.locator('').selectOption(['4', '5', '1']);
  await page.locator('').selectOption([{label : 'Indigo'}, {label : 'Blue'}]);
  await page.locator('').selectOption([{index : 1}, {index : 7}]);
})

test('general drop down', async({page})=>{
  await page.goto("https://demoqa.com/select-menu");
  await page.locator('//div[@id="withOptGroup"]').click();
  await page.getByText('Group 1, option 2').click();
  await page.waitForTimeout(3000);
})