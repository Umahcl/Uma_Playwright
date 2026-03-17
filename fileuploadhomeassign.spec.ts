import { test, expect } from "@playwright/test";
import path from "path";

test(`File Upload with and without input tag with type attribute`,async ({page}) => {
    
    await page.goto(`https://the-internet.herokuapp.com/upload`);

    //with input tag
    const uploadFile =  page.locator(`(//input[@type="file"])[1]`)
    await uploadFile.setInputFiles(path.join(__dirname,`../Data/TestLeaf Logo.png`))
    const value = await page.getByRole(`button`, {name:"Choose File"}).inputValue();
    expect(value).toContain("TestLeaf Logo.png")
    
    //without input tag
    const filePromise = page.waitForEvent("filechooser")
    await page.locator(`[id="drag-drop-upload"]`).click();
    const fileUpload = await filePromise
    await fileUpload.setFiles(path.join(__dirname,`../Data/Qeagle.png`))
    await page.waitForTimeout(3000)
    await expect(page.locator(`//span[contains(text(), 'Qeagle.png')]`)).toBeVisible();



})
