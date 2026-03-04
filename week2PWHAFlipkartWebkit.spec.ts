//import {chromium, test} from "@playwright/test"
import {webkit, test} from "@playwright/test"

test('To verify the Page title', async()=>
{
    //Create a browser Instance
    const browserInstance = await webkit.launch();
    const browsercontext = await browserInstance.newContext({
     ignoreHTTPSErrors: true }); //webkit
    const page = await browsercontext.newPage();

    await page.goto("https://www.flipkart.com/");
    await page.waitForTimeout(5000);

   // pageTitle 
    const pageTitle = await page.title();
    console.log(pageTitle);
    if(pageTitle === 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')
    {
        console.log('pageTitle is verified');
    }
    
    //page URL 
    const pageURL= await page.url();
    console.log(pageURL);
    if(pageURL === 'https://www.flipkart.com/')
    {
        console.log('pageURL is verified');
    }
});