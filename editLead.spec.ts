import{ chromium, test , expect} from "@playwright/test";

test(`Edit Lead`, async({page}) =>
{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.waitForTimeout(3000);

    //Login
    await page.locator(`#username`).fill(`Demosalesmanager`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.locator(`.decorativeSubmit`).click();
    await page.waitForTimeout(3000);
    await page.getByText('CRM/SFA').click(); 
    await page.waitForTimeout(5000);
    await page.locator('a[href = "/crmsfa/control/leadsMain"]').click();
    await page.locator('a[href = "/crmsfa/control/findLeads"]').click();
    await page.locator(`input[id= "ext-gen248"]`).fill(`Sathya`);
    await page.getByText('Find Leads').click();

    //To check how to identify an element with the attribute value containing this text
    //To Click on the first link
    await page.getByText('Edit').click();
    await page.locator(`#updateLeadForm_companyName`).clear();
    await page.locator(`#updateLeadForm_companyName`).fill(`Barclaysnew`);
    await page.locator(`#updateLeadForm_annualRevenue`).clear();
    await page.locator(`#updateLeadForm_annualRevenue`).fill(`2000000`);
    await page.locator(`#updateLeadForm_departmentName`).clear();
    await page.locator(`#updateLeadForm_departmentName`).fill(`newjbridge`);
    await page.locator(`#updateLeadForm_description`).fill(`description`);
    await page.locator(`input[value = 'Update']`).click();




} );