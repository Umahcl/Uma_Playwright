import{ chromium, test , expect} from "@playwright/test";

test(`Test for dropdown`, async({page}) =>
{

    await page.goto("https://leafground.com/select.xhtml")
    await page.waitForTimeout(3000);

    //UI automation tool
    //select playwright from UIautomation tool
    await page.selectOption(`//select[@class = 'ui-selectonemenu']`, {label:"Playwright"})

    //get the UI automation tool count 
    const uiautomationtool = await page.locator(`//select[@class = 'ui-selectonemenu']/option`)
    const uiautomationtoolcount = await uiautomationtool.count();

    for(let i = 0; i < uiautomationtoolcount; i++ )
    {
        console.log(await uiautomationtool.nth(i).innerText());
    }

    // let countryinput = process.argv[4]; //doubt how to get the input from console
    // console.log(`country input is ${countryinput}`)

    //preferred country
    await page.locator(`(//label[contains(@id, 'country_label')]/following::span[contains(@class, 'ui-icon-triangle')])[1]`).click();
    await page.locator(`//li[contains(text(), 'Germany')]`).click();

    //Verify Cities for country selected
    const countryselected = await page.locator(`//label[contains(@id, 'country_label')]`).innerText();
    console.log(`country selected is ${countryselected}`)

    await page.locator(`(//label[contains(@id, 'city_label')]/following::span[contains(@class, 'ui-icon-triangle')])[1]`).click();

    if(countryselected === "Germany")
    {
        const expectedCities = ['Select City', 'Berlin', 'Frankfurt', 'Munich'];
        const cityElements = await page.locator(`//div[contains(@class, 'selectonemenu')]/ul[contains(@id, 'city_items')]`);
        // const cityElementsCount = await cityElements.count(); //doubt, count is coming as 0.
        // console.log(`city count is ${cityElementsCount}`)
        const cityOptions = await cityElements.locator('li').allTextContents();
        for(let i = 0; i < cityOptions.length; i++)
        {
            console.log(`Actual cityOptions present are ${cityOptions[i]}`)
        }
        const cityoption1 = await cityOptions[1];
        console.log(`city option 1 ${cityoption1}`)

        for(const city of expectedCities)
        {
            console.log(`city inside foreach loop ${city}`);
            expect(cityOptions).toContain(city);
        }
  }
    


    //city
    await page.locator(`(//label[contains(@id, 'city_label')]/following::span[contains(@class, 'ui-icon-triangle')])[1]`).click();
    await page.locator(`//li[contains(text(), 'Frankfurt')]`).click();

    // . e.g in selenium we have gettext()
    const text = await page.locator('//label[contains(@id, "city_label")]').innerText();
    console.log(`The selected city is '${text}'`);

    const string = await expect(page.locator('//label[contains(@id, "city_label")]')).toHaveText("Frankfurt");

    //course
    await page.locator(`(//h5[contains(text(), 'Choose the Course')]/following::span[contains(@class, 'ui-icon-triangle')])[1]`).click();
    await page.locator(`//li[contains(text(), 'Playwright')]`).click();
    await page.locator(`(//h5[contains(text(), 'Choose the Course')]/following::span[contains(@class, 'ui-icon-triangle')])[1]`).click();
    await page.locator(`//li[contains(text(), 'RestAssured')]`).click();
    await page.locator(`(//h5[contains(text(), 'Choose the Course')]/following::span[contains(@class, 'ui-icon-triangle')])[1]`).click();
    await page.locator(`//li[contains(text(), 'PostMan')]`).click();

    //choose language randomly
    await page.locator(`(//h5[contains(text(), 'Choose language randomly')]/following::span)[1]`).click();
    await page.locator(`//li[contains(text(), 'English')]`).click();

    const languageelements = await page.locator(`(//div[contains(@class, 'ui-selectonemenu')]/ul)[2]/li`)
    const languagecount = await languageelements.count();

    for(let i = 0; i < languagecount; i++)
    {
        console.log(await languageelements.nth(i).innerText());
    }

    //select value
    await page.locator(`(//label[contains(text(), 'Select Values')]/following::span)[1]`).click();
    await page.locator(`//li[contains(text(), 'Two')]`).click();
})