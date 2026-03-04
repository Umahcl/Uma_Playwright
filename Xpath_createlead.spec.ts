import{ chromium, test , expect} from "@playwright/test";

test(`Create Lead`, async({page}) =>
{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.waitForTimeout(3000);

    //Login
    await page.locator(`//input[@id = 'username']`).fill(`Demosalesmanager`);
    await page.locator(`//input[@id = 'password']`).fill(`crmsfa`);
    await page.locator(`//input[@class ='decorativeSubmit']`).click();
   // await page.waitForTimeout(3000);
   // await page.getByText('CRM/SFA').click();  //using getByText()
    await page.locator(`//a[contains(text() , 'CRM/SFA')]`).click();
    await page.waitForTimeout(5000);
    await page.locator('//a[@href = "/crmsfa/control/leadsMain"]').click();
    await page.locator('//a[text() = "Create Lead"]').click();
    await page.locator(`//input[@id = "createLeadForm_companyName"]`).fill(`Barclays`);
    await page.locator(`//input[@id = "createLeadForm_firstName"]`).fill(`Sathya`);
    await page.locator(`//input[@id = 'createLeadForm_lastName']`).fill(`Palanisamy`);
    //await page.selectOption('//select[@id = "createLeadForm_currencyUomId"]', {value:"DZD"});
    //await page.selectOption('//select[@id = "createLeadForm_currencyUomId"]', {label:"ARS - Argentina Peso"});
    await page.selectOption('//select[@id = "createLeadForm_currencyUomId"]', {index:2});
    await page.waitForTimeout(7000);
    await page.locator(`//input[@id = 'createLeadForm_personalTitle']`).fill(`Salutation`);
    await page.locator(`//input[@id = 'createLeadForm_generalProfTitle']`).fill(`Automation Developer`);
    await page.locator(`//input[@id = 'createLeadForm_annualRevenue']`).fill(`10000000`);
    await page.locator(`//input[@id = "createLeadForm_departmentName"]`).fill(`JBrdge`);
    await page.locator(`//input[@id = 'createLeadForm_primaryPhoneNumber']`).fill(`9876545678`);
    await page.waitForTimeout(7000);
    await page.locator(`//input[@name = "submitButton"]`).click();
})