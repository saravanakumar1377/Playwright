import {test} from '@playwright/test'

test("Create Lead", async({page}) =>
{
await page.goto('http://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill('Demosalesmanager')
await page.locator('#password').fill('crmsfa')
await page.locator('.decorativeSubmit').click()
await page.locator('text=CRM/SFA').click()
await page.locator('text=Lead').nth(3).click()
await page.locator('text=Create Lead').nth(1).click()
await page.locator('#createLeadForm_companyName').fill('Testleaf')
await page.locator('#createLeadForm_firstName').fill('Saravana')
await page.locator('#createLeadForm_lastName').fill('Kumar')
await page.locator('#createLeadForm_personalTitle').fill('Mr')
await page.locator('#createLeadForm_generalProfTitle').fill('Testing')
await page.locator('#createLeadForm_annualRevenue').fill('1000000USD')
await page.locator('#createLeadForm_departmentName').fill('QA')
await page.locator('#createLeadForm_primaryPhoneNumber').fill('1234512345')
await page.locator('.smallSubmit').click()

}
)
