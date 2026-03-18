import { test } from "@playwright/test";
import {parse} from "csv-parse/sync"
import fs from "fs"


test.describe.serial("Test to execute the scripts in serials mode",async () => {

let records : any[] = parse(fs.readFileSync("Data/createlead.csv"),{columns:true,skip_empty_lines:true})
    
for( let data of records){


test(`Learn to handle CSV data parameterization ${data.tcid}`, async ({ page }) => {


    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('//input[@id="username"]').fill(data.username);
    await page.locator('//input[@id="password"]').fill(data.password);
    await page.waitForTimeout(3000)
    await page.locator(`//input[@class="decorativeSubmit"]`).click();
    await page.locator(`//a[contains(text(),"CRM")]`).click();
    await page.locator('a[href = "/crmsfa/control/leadsMain"]').click();
    await page.locator('a[href = "/crmsfa/control/createLeadForm"]').click();
    await page.locator(`input[id = "createLeadForm_companyName"]`).fill(data.companyname);
    await page.locator(`input[id = "createLeadForm_firstNameLocal"]`).click();
    await page.locator(`input[id = "createLeadForm_firstName"]`).fill(data.firstname);
    await page.locator(`#createLeadForm_lastName`).fill(data.lastname);
    await page.selectOption('//select[@id = "createLeadForm_currencyUomId"]', {value:`${data.currency}`});
    await page.locator(`#createLeadForm_personalTitle`).fill(data.title);
    await page.selectOption('//select[@id = "createLeadForm_dataSourceId"]', {value:`${data.source}`});
    
    //to get marketing compaign count
    const marketingcompaignelements = page.locator(`//select[@id = "createLeadForm_marketingCampaignId"]/option`)
    const marketingcompaigncount = await marketingcompaignelements.count();
    console.log(`The marketing compaign options count is ${marketingcompaigncount}`)
    console.log("Values in Makerting Campaign is:",await marketingcompaignelements.allInnerTexts())
    // for(let i = 0; i < marketingcompaigncount; i++ )
    // {
    //     console.log(await marketingcompaignelements.nth(i).innerText());
    // }
    await page.selectOption('//select[@id = "createLeadForm_marketingCampaignId"]', {value:`${data.marketingcompaign}`});
    await page.selectOption('//select[@id = "createLeadForm_industryEnumId"]', {value:`${data.Industry}`});
    await page.selectOption('//select[@id = "createLeadForm_generalCountryGeoId"]', {value:`${data.country}`});

    //  const stateelements = page.locator(`//select[@id = "createLeadForm_generalStateProvinceGeoId"]/option`)
    //  const statecount = await stateelements.count();
    //  console.log("Values in Makerting Campaign is:",await stateelements.allInnerTexts())

    const State = page.locator(`#createLeadForm_generalStateProvinceGeoId option`)
    console.log("Total no of state is:",await State.count())
    console.log("states:",await State.allInnerTexts())

    await page.selectOption('//select[@id = "createLeadForm_generalStateProvinceGeoId"]', {value:`${data.state}`});
    await page.locator(`input[name = "submitButton"]`).click();

})
}
})
