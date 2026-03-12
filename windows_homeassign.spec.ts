import{expect, test} from "@playwright/test"

test("Windows handling", async({page, context})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    //Login
    await page.locator(`//input[@id = 'username']`).fill(`Demosalesmanager`);
    await page.locator(`//input[@id = 'password']`).fill(`crmsfa`);
    await page.locator(`//input[@class ='decorativeSubmit']`).click();
    await page.locator(`//a[contains(text() , 'CRM/SFA')]`).click();
    await page.waitForTimeout(5000);

    page.once("dialog", async (alert) => {
        
        const alertType = alert.type();
        console.log(`The alert type is ${alertType}`)

        if(alertType === "simple")
        {
            alert.accept();
        }
        else if(alertType === "confirm")
        {
            const message = alert.message();
            console.log(`The message is ${message}\n`)
            alert.accept();
           
        }
        else if(alertType === "prompt")
        {
            alert.accept("Enter some text");
        }
        else
            throw new Error(`unknown Alert type`);


    })

    await page.locator('//a[@href = "/crmsfa/control/leadsMain"]').click();
    await page.locator("//a[contains(text(), 'Merge Leads')]").click();

    // context.waitForEvent("page")

    // await page.locator("(//table[@name = 'ComboBox_partyIdFrom']/following::img)[1]").click();

    const [childpage] = await Promise.all([context.waitForEvent("page"), page.locator("(//table[@name = 'ComboBox_partyIdFrom']/following::img)[1]").click()])

    await childpage.waitForLoadState("domcontentloaded");

    await page.waitForTimeout(5000)

    await childpage.locator("(//table[contains(@class, 'row-table')]/tbody/tr/td/div/a)[1]").click();
   
    await page.waitForLoadState("domcontentloaded");

    await page.bringToFront();

    await page.waitForTimeout(5000);

    const [childpage2] = await Promise.all([context.waitForEvent("page"), page.locator("(//table[@name = 'ComboBox_partyIdTo']/following::img)[1]").click()])

    await childpage2.waitForLoadState("domcontentloaded");

    await childpage2.locator("(//table[contains(@class, 'row-table')]/following::tr/td/div/a)[1]").click();

    await page.waitForLoadState("domcontentloaded");

    await page.locator("//a[text() = 'Merge']").click();

    await page.waitForTimeout(3000);

  //  await page.locator("//a[text() = 'Merge']").click();

    const pageTitle = await page.title();
    console.log('Page Title:',pageTitle);

    //await expect(page.title()).toContain("View Lead | opentaps CRM");

    expect(pageTitle, "View Lead | opentaps CRM")

})