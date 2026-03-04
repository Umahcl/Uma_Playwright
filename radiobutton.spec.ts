import{ chromium, test , expect} from "@playwright/test";

test(`Test for dropdown`, async({page}) =>
{

    await page.goto("https://leafground.com/radio.xhtml")
    await page.waitForTimeout(3000);
    //to check the checked state of a radio button
    await expect.soft(page.getByRole("radio", {name:"Safari"}).nth(1)).toBeChecked()
    //to click the chrome browser and verify it is enabled
    await page.locator(`//h5[text() = 'Your most favorite browser']/following::label[text() = 'Chrome'][1]
    /preceding::span[contains(@class, 'ui-radiobutton-icon')][1]`).click();
    await expect.soft(page.locator(`//h5[text() = 'Your most favorite browser']
    /following::label[text() = 'Chrome'][1]/preceding::span[contains(@class, 'ui-radiobutton-icon')][1]`)).toBeEnabled();
    //to select one of the cities
    await page.locator(`//label[text() = 'Chennai']/preceding::span[contains(@class, 'ui-radiobutton-icon')][1]`).click();
    //to verify the default selected age group
    await expect.soft(page.getByRole(`radio`, {name:`21-40 Years`})).toBeChecked();
    await page.locator(`//h5[contains(text(),'Select the age group')]/following::label[text() = '1-20 Years']/preceding::span[contains(@class, 'ui-radiobutton-icon')][1]`).click();

})