import{ chromium, test , expect} from "@playwright/test";

test(`Test for dropdown`, async({page}) =>
{

    await page.goto("https://leafground.com/button.xhtml")
    await page.waitForTimeout(3000);
    //to check the disabled state
    await expect(page.locator(`//h5[text() = "Confirm if the button is disabled."]/following::button[1]`)).toBeDisabled();
    //to clik and confirm the title
    await page.locator(`//h5[text() = "Click and Confirm title."]/following::span[text() = "Click"]`).click();
    await expect(page.locator(`//div[text() = "LEARNERS"]`)).toBeVisible();
    
})