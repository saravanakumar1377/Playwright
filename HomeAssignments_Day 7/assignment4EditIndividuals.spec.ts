import {test} from '@playwright/test'
test("Edit Individuals", async({page})=>
{
    
    //Launch salesforce page
    await page.goto("https://login.salesforce.com/?locale=in");
    //Enter username
    await page.locator('//input[@id="username"]').fill("dilipkumar.rajendran@testleaf.com");
    //Enter password
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
    //Click on login button
    await page.locator('//input[@id="Login"]').click();
    await page.waitForTimeout(12000);
    //Click on toggle menu
    await page.locator('//button[@title="App Launcher"]').click();
    //Click on View all button
    await page.waitForTimeout(10000);
    await page.locator('//button[contains(text(),"View All")]').click();
    await page.waitForTimeout(5000);
    await page.locator('//input[@placeholder="Search apps or items..."]').fill("individuals");
    await page.waitForTimeout(5000);
    //Click on Individuals
    await page.locator('[data-label="Individuals"]').click();
    //Click on individuals tab
    await page.locator('//span[text()="Individuals"]').click();
    //Search last name
    await page.locator('//input[@name="Individual-search-input"]').fill("Rybakina");
    await page.keyboard.press("Enter");
    //Click on dropdown button
    await page.waitForTimeout(5000);
    await page.locator('//button[@class="slds-button slds-button_icon-border slds-button_icon-x-small"]').click();
    //click on edit button
    await page.locator('(//a[@class="highlightButton"])[1]').click();
    //Select saluation as Mr
    await page.locator('//a[contains(text(),"None")]').first().click();
    await page.locator('//a[@title="Mr."]').click();
    //Enter first name
    await page.locator('//input[@placeholder="First Name"]').fill("Raj");
    //Click on save button
    await page.locator('//span[text()="Save"]').click();

    
}
)