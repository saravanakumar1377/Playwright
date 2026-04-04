import {test} from '@playwright/test'
test("Create Lead", async({page})=>
{
    //Launch salesforce.com
    await page.goto("https://login.salesforce.com/");
    //Enter username
    await page.locator('//input[@id="username"]').fill("dilipkumar.rajendran@testleaf.com");
    //Enter password
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
    //Click on login button
    await page.locator('//input[@id="Login"]').click();
    await page.waitForTimeout(12000);
    //Click on toggle menu
    await page.locator('//button[@class="slds-button slds-context-bar__button slds-icon-waffle_container slds-show"]').click();
    //Click on View all button
    await page.locator('//button[text()="View All"]').click();
    //Click on sales link from App Launcher
    await page.locator('//p[text()="Sales"]').click();
    //Click on Leads tab
    await page.locator('//span[text()="Leads"]').first().click();
    //Click on New button
    await page.locator('//div[@title="New"]').click();
    //Select Salutation value from dropdown
    await page.locator('//button[@name="salutation"]').click();
    await page.locator('[data-value="Mrs."]').click();
    //Enter last name
    await page.locator('//input[@placeholder="Last Name"]').fill("James");
    //enter company name
    await page.locator('//input[@name="Company"]').fill("TestLeaf");
    //Click on save button
    await page.locator('//button[text()="Save"]').last().click();
    await page.waitForTimeout(5000);

    //Navigate to details and verifying the lead details
    await page.locator('//a[@id="detailTab__item"]').click();

})