import { expect, test } from "@playwright/test";


test(`Playwright locators`, async ({ page }) => {


    await page.goto('https://login.salesforce.com/?locale=in');


  //  await expect(page.getByAltText("Salesforce")).toBeVisible()


    const isVisibile = await page.getByAltText("Salesforce").isVisible();
    console.log(isVisibile);
    


    // await page.getByRole(`textbox`, { name: "Username" }).fill(`ravindran.ramdas@testleaf.com`)
    // await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")


    await page.getByText("Username", { exact: true }).fill(`dilipkumar.rajendran@testleaf.com`)


    await page.getByRole(`textbox`, { name: "Password" }).fill(`TestLeaf@2025`)
    await page.getByRole(`button`, { name: "Log In" }).click();


   // await page.getByRole(`button`,{name:"App Launcher"}).click();


   await page.getByTitle("App Launcher",{exact:true}).click();


   await page.getByRole("button",{name:"View All Applications"}).click();


   await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Leads");


   await page.waitForTimeout(3000)





})