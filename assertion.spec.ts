import{ chromium, test , expect} from "@playwright/test";

test(`Test for dropdown`, async({page}) =>
{

    await page.goto("https://leafground.com/input.xhtml")
    await page.waitForTimeout(3000);

    //input[@id = "j_idt88:j_idt93"]
    await expect(page.locator(`//h5[contains(text(), 'Verify if text box is disabled')]/following::input[1]`)).toBeDisabled();
    await expect(page.locator(`//h5[contains(text(), 'Type your name')]/following::input[@placeholder = 'Babu Manickam']`)).toBeEditable();
    await expect.soft(page.locator(`//h5[contains(text(), 'Type your name')]/following::input[@placeholder = 'Babu Manickam']`)).toBeDisabled();
    await page.locator(`//h5[text() = 'Append Country to this City.']/following::input[1]`).fill("Coimbatore");

})