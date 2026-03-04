import {chromium, test} from "@playwright/test"

test('To verify the Page title', async()=>
{
    //Create a browser Instance
   const browserInstance = await chromium.launch({channel:'msedge'});
   const browsercontext = await browserInstance.newContext();
   const page = await browsercontext.newPage();

    await page.goto("https://www.redbus.in/");
    await page.waitForTimeout(5000);

   // pageTitle 
    const pageTitle = await page.title();
    console.log(pageTitle);
    if(pageTitle === 'Bus Booking Online and Train Tickets at Lowest Price - redBus')
    {
        console.log('pageTitle is verified');
    }
    
    //page URL 
    const pageURL= await page.url();
    console.log(pageURL);
    if(pageURL === 'https://www.redbus.in/')
    {
        console.log('pageURL is verified');
    }
});