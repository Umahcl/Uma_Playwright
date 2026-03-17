import{ chromium, test , expect} from "@playwright/test";
import path from "path";
test.use({storageState:"Data/login_SF.json"})

test(`file upload`, async({page}) =>
{
     await page.goto('https://orgfarm-162b278cba-dev-ed.develop.lightning.force.com/lightning/page/home');
     await page.waitForTimeout(3000);
    await page.waitForTimeout(3000);
    await page.getByTitle(`App Launcher`, {exact:true}).click();
  //  await page.getByRole(`button`, {name:"View All Applications"} ).click();
    await page.getByRole(`combobox`, {name:"Search apps and items..."}).fill("Accounts");
    await page.locator(`//b[text() = 'Accounts']`).click();
    await page.getByRole(`button`, {name:"New"}).click();
    await page.getByRole(`textbox`, {name:"Account Name"}).fill("UmaSathyarajj")
    await page.getByRole(`combobox`, {name:"Rating"}).click()
    await page.locator(`//lightning-base-combobox-item[@data-value = 'Warm']`).click();
    await page.getByRole(`combobox`, {name:"Type"}).click()
    await page.getByRole(`option`, {name:"Prospect"}).click()
    await page.getByRole(`combobox`, {name:"Industry"}).click()
    await page.locator(`//lightning-base-combobox-item[@data-value = 'Banking']`).click();
    await page.getByRole(`combobox`, {name:"Ownership"}).click()
    await page.locator(`//lightning-base-combobox-item[@data-value = 'Public']`).click();
    await page.getByRole(`button`, {name:"Save", exact:true} ).click()
    const message = await page.locator("//span[contains(@class, 'toastMessage')]").innerText();
    console.log(message);
    expect.soft(message, `Account "UmaSathyarajj" was created.`)
    await page.waitForLoadState("domcontentloaded");
    await page.keyboard.press("End");
    const uploadfile = page.locator("//input[@type = 'file']")
   
   // await uploadfile.scrollIntoViewIfNeeded();
    await uploadfile.setInputFiles(path.join(__dirname,`../Data/TestLeaf Logo.png`))
    await page.waitForTimeout(3000);



})