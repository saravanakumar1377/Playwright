import {test} from '@playwright/test'
test("Edit Lead", async({page})=>
{
await page.goto("http://leaftaps.com/opentaps/control/main");
 //Enter username
 await page.locator('//input[@id="username"]').fill("Demosalesmanager");
 //Enter password
 await page.locator('//input[@id="password"]').fill("crmsfa");
 //Click on login button
 await page.locator('//input[@class="decorativeSubmit"]').click();
 //Clickon CRM/SFA button
 await page.locator('//a[contains(text(),"CRM")]').click();
 //Click on Lead button
 await page.locator('//a[text()="Leads"]').click();
 //Click on Create lead button
 await page.locator('//a[text()="Create Lead"]').click()
  //Enter company name
 await page.locator('//input[@id="createLeadForm_companyName"]').fill("CTS");
 //Enter first name
 await page.locator('//input[@id="createLeadForm_firstName"]').first().fill("Jerome");
 //Enter last name
 await page.locator('//input[@id="createLeadForm_lastName"]').first().fill("Harris");
 //Click on create lead button
 await page.locator('//input[@class="smallSubmit"]').click();
 await page.waitForTimeout(5000);
 //Click on Edit button
 await page.locator('//a[contains(text(),"Edit")]').click();
 //Clear company name
 await page.locator('//input[@id="updateLeadForm_companyName"]').fill("");
 //Update company value
 await page.locator('//input[@id="updateLeadForm_companyName"]').fill("Qeagle");
 //Click on update button
 await page.locator('//input[@value="Update"]').click();
})