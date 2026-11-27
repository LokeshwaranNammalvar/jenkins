import {test} from '@playwright/test'

test('download', async({page})=>{
  await page.goto('https://demoqa.com/upload-download');
  const downloadPromise = page.waitForEvent('download');
  await page.locator('//a[@id="downloadButton"]').click();
  const download = await downloadPromise;
  await download.saveAs(`downloads/${await download.suggestedFilename()}`);

  const checkFailure = await download.failure();
  console.log(checkFailure);

  const fileName = await download.suggestedFilename();
  console.log(fileName);
})

test('upload file', async({page})=>{
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
  await page.waitForTimeout(3000);
  //if you using backslace you need to give 2 backslace or you can give one frontslace
  await page.locator('//input[@id="filesToUpload"]').setInputFiles("C:/Users/HP/Downloads/wp2561288.jpg");
  await page.waitForTimeout(5000);
})

test('multiple file', async({page})=>{
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
  await page.waitForTimeout(3000);
  // to upload multiple files
  await page.locator('//input[@id="filesToUpload"]').setInputFiles(["C:\\Users\\HP\\Downloads\\wp2561288.jpg", "C:/Users/HP/Downloads/26439747.jpg"]);
  await page.waitForTimeout(5000);
})