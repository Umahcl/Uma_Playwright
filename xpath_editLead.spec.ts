import{ chromium, test , expect} from "@playwright/test";

test(`Edit Lead`, async({page}) =>
{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.waitForTimeout(3000);
    //Login
    await page.locator(`//input[@id = 'username']`).fill(`Demosalesmanager`);
    await page.locator(`//input[@id = 'password']`).fill(`crmsfa`);
    await page.locator(`//input[@class ='decorativeSubmit']`).click();
    await page.locator(`//a[contains(text() , 'CRM/SFA')]`).click();
    await page.waitForTimeout(5000);
    await page.locator('//a[@href = "/crmsfa/control/leadsMain"]').click();
    await page.locator('//a[@href = "/crmsfa/control/findLeads"]').click();
    await page.locator(`//input[@id= "ext-gen248"]`).fill(`Sathya`);
    await page.locator(`//button[contains(text(), 'Find Leads')]`).click();
    await page.locator(`(//span[contains(text(), 'Lead List')]/following::a[text() = 'Sathya'])[1]`)
    .click();
    await page.getByText('Edit').click();
    await page.locator(`//input[@id = 'updateLeadForm_companyName']`).clear();
    await page.locator(`//input[@id = 'updateLeadForm_companyName']`).fill(`Barclaysnew`);
    await page.locator(`//input[@id = 'updateLeadForm_annualRevenue']`).clear();
    await page.locator(`//input[@id = 'updateLeadForm_annualRevenue']`).fill(`2000000`);
    await page.locator(`//input[@id = 'updateLeadForm_departmentName']`).clear();
    await page.locator(`//input[@id = 'updateLeadForm_departmentName']`).fill(`newjbridge`);
    await page.locator(`//textarea[@id = 'updateLeadForm_description']`).fill(`description`);
    await page.locator(`//input[@value = 'Update']`).click();

} );