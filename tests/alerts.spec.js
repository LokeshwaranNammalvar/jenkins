import {test} from "@playwright/test";

test("Handling alerts", async({page})=>{
  await page.goto("https://demo.automationtesting.in/Alerts.html");

  page.on('dialog',(Dialog)=>{
    console.log(Dialog.message());
    console.log(Dialog.type());
    // await page.waitForTimeout(3000)
    if(Dialog.type() === "alert"){
      Dialog.accept()
    }
    else if(Dialog.type() === "confirm") {
      Dialog.dismiss();
    }
    else if(Dialog.type() === "prompt"){
      Dialog.accept("Ganesh");

    }
  });

  //Simple Alert
  await page.locator('//button[contains(text(),"alert box:")]').click();
  
  //Confirm Alert
  await page.getByRole("link", {name:"Alert with OK & Cancel "}).click();

  await page.getByText("click the button to display a confirm box ").click();

  //Prompt Alert
  await page.getByRole('link', {name:"Alert with Textbox "}).click();

  await page.getByText("click the button to demonstrate the prompt box ").click();


  await page.waitForTimeout(5000)
})


test("Handling DOM POpups", async({page})=>{
  await page.goto("https://www.flipkart.com");

  try{
    await page.waitForSelector(".b3wTlE",{timeout:5000});
    await page.click(".b3wTlE");
  }
  catch{
    console.log("Popup Not Came")
  }

})