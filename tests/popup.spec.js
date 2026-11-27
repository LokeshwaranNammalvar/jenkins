import {test} from '@playwright/test'

test('js alert', async({page})=>{
  await page.goto("https://demoqa.com/alerts");
  page.on('dialog', async alert =>{
    await page.waitForTimeout(3000);
    await alert.accept();
    const msg = await alert.message();
    console.log(msg);

    const alertType = await alert.type();
    console.log(alertType);
  })
  await page.locator('//button[@id="alertButton"]').click();
  await page.waitForTimeout(3000);
})

test('conform', async({page})=>{
  await page.goto("https://demoqa.com/alerts");
  page.on('dialog', async laptop => {
    await laptop.dismiss();
    const alertMessage = await laptop.message();
    console.log(alertMessage);
    const alertTypes = await laptop.type();
    console.log(alertTypes);
  })
  await page.locator('//button[@id="confirmButton"]').click();
  await page.waitForTimeout(3000);
})

test('prompt', async({page})=>{
  await page.goto("https://demoqa.com/alerts");
  page.on('dialog', async phone => {
    await phone.accept("playwright");
    const AlertMessage = await phone.message();
    console.log(AlertMessage);
    const AlertTypes = await phone.type();
    console.log(AlertTypes);
  })
  await page.locator('//button[@id="promtButton"]').click();
  await page.waitForTimeout(3000);
})

test('general', async({page})=>{
  await page.goto("https://www.flipkart.com/");
  await page.waitForTimeout(3000);
  try
  {
    await page.locator('//span[@class="b3wTlE"]').click();
  }
  catch
  {
    console.log("Popup is not displayed");
  }
  await page.waitForTimeout(3000);
})