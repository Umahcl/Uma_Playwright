import{test, expect} from "@playwright/test"
import path from "path"
import fs from "fs"

test(`file download`, async({page}) => {
    //filedownload
    await page.goto("https://the-internet.herokuapp.com/download")
    const [fdown] = await Promise.all([page.waitForEvent("download"), page.getByText(`file.json`).click()])
    await fdown.saveAs(path.join(__dirname,  `../Data/${fdown.suggestedFilename()}`))
    await page.waitForTimeout(3000)

    //Assertion - to verify file is downloaded at specified path
    const fullPath = path.join(process.cwd(), "Data", "file.json");
    console.log(`${fullPath}`)
    const fileexist =  fs.existsSync(fullPath)
    expect(fileexist).toBeTruthy()

})