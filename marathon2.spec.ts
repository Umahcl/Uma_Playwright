import{expect, test} from "@playwright/test"

test("Marathon2", async({page, context})=>{

    await page.goto("https://dev362917.service-now.com/navpage.do")
    //Login
    await page.locator(`//input[@id = 'user_name']`).fill(`admin`);
    await page.locator(`//input[@id = 'user_password']`).fill(`sm5NFtfI6A%!`);
    await page.locator("//button[text() = 'Log in']").click();
    await page.waitForLoadState("domcontentloaded");

    const servicePagetitle = await page.title();
    console.log(`The service page title is ${servicePagetitle}`);
    expect(servicePagetitle, "servicePagetitle")

    await page.locator("div[role = 'menuitem'][aria-label = 'All']").click();
    await page.getByText("Service Catalog", {exact:true}).click();
    const framesrc = page.frameLocator(`#gsft_main`);
    await framesrc.getByAltText("Mobile").click();
    await framesrc.getByText("Apple iPhone 13 pro").click();
    await framesrc.locator("label").filter({hasText:'Yes'}).click();
    await framesrc.getByRole("textbox", {name:"What was the original phone number?"}).fill("99")
    //dropdown
    await framesrc.locator("select[name = 'IO:ff1f478e9747011021983d1e6253af68']").selectOption({value: `unlimited`})
    await framesrc.locator("label").filter({hasText:"Sierra Blue"}).click();
    await framesrc.locator("label").filter({hasText:"512 GB"}).click();
    await framesrc.locator("#oi_order_now_button").click();
    await expect(framesrc.locator("span").filter({hasText:"Thank you, your request has been submitted"})).toBeVisible();
     await page.screenshot({
      path: 'screenshot/FullPages.png',
      fullPage: true
     })

})