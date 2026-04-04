import {test} from '@playwright/test'
test("Create Individuals", async({page})=>
{
    //Launch salesforce page
    await page.goto("https://login.salesforce.com");
    //Enter username
    await page.locator('//input[@id="username"]').fill("dilipkumar.rajendran@testleaf.com");
    //Enter password
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
    //Click on login button
    await page.locator('//input[@id="Login"]').click();
    await page.waitForTimeout(5000);
    //Click on toggle menu
    await page.locator('//button[@title="App Launcher"]').click();
    await page.waitForTimeout(10000);
    await page.locator('//button[contains(text(),"View All")]').click();
    await page.waitForTimeout(5000);
    await page.locator('//input[@placeholder="Search apps or items..."]').fill("individuals");
    await page.waitForTimeout(5000);
    //clicking on Individuals
    await page.locator('[data-label="Individuals"]').click();
    //Click on Individuals dropdown arrow
    await page.locator('//div[@class="slds-context-bar__label-action slds-p-left_none"]').nth(14).click();
    //Select New individuals
    await page.locator('//div[@title="New"]').click();
    await page.waitForTimeout(5000);
    //Enter last name
    await page.locator('//input[@placeholder="Last Name"]').fill("Rybakina");
    //Click on save button
    await page.locator('//span[text()="Save"]').click();
    await page.waitForTimeout(5000);
    //Click on details tab
    await page.locator('//span[text()="Details"]').click();

})