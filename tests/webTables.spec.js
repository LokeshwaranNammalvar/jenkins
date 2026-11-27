import {test} from '@playwright/test'

test('web table', async({page}) => {
  await page.goto("https://demoqa.com/webtables");
  const table = page.locator('table.table-striped tbody tr:nth-child(1)');

  // inner text 
  const innerTexts = await table.innerText();
  console.log(innerTexts);

  // all Inner text
  const allInnerText = await table.allInnerTexts();
  console.log(allInnerText);

  // text content
  const textContents = await table.textContent();
  console.log(textContents);

  // all text content
  const allTextcontent = await table.allTextContents();
  console.log(allTextcontent);

  const tableName = page.locator('table.table-striped tbody tr');
  const count = await tableName.count();
  console.log(count);

  const counts = await page.locator('table.table-striped tbody tr');
  const totalCount = await counts.count();
  console.log(totalCount);

  // to print all the data present in the table
  for(let j=0; j<totalCount; j++)
  {
    const row = counts.nth(j);
    const rowText = await row.innerText();
    console.log(rowText);
  }
})
