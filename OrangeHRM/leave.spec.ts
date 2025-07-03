import {test, expect} from '@playwright/test'

test("leave process", async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/')
    
    //login screen
    //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    // navigate to leave section
    //await page.pause()
    await page.getByRole('link', { name: 'Leave' }).click();
    await page.getByText('Configure').click();
    // leave period
    
    
    // await page.getByRole('menuitem', { name: 'Leave Period' }).click();
    // await page.locator('form i').first().click();
    // await page.getByRole('option', { name: 'January' }).click();
    // await page.locator('form i').nth(1).click();
    // await page.getByRole('option', { name: '01' }).locator('span').click();
    // await page.getByText('December').click();
    // await page.getByText('-01-01 to 2025-31-12').click();
    // await page.getByRole('button', { name: 'Save' }).click();
    // //
    // await page.getByRole('button', { name: 'Reset' }).click();
    // await page.locator('form i').first().click();
    // await page.getByRole('option', { name: 'January' }).click();
    // await page.locator('form i').nth(1).click();
    // await page.getByRole('option', { name: '02' }).click();
    // await page.getByText('-01-01 to 2025-31-12').click();
    // await page.locator('form i').nth(1).click();
    // await page.getByRole('option', { name: '01' }).click();
    // await page.getByRole('button', { name: 'Save' }).click();

    // await page.getByRole('listitem').filter({ hasText: 'Configure' }).click();
    // // leave type
    // await page.getByRole('menuitem', { name: 'Leave Types' }).click();
    // await page.getByRole('button', { name: ' Add' }).click();
    // await page.locator('form').getByRole('textbox').click();
    // await page.locator('form').getByRole('textbox').fill('funneral');
    // await page.getByText('Is Entitlement Situational?').click();
    // await page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
    // await page.getByRole('button', { name: 'Save' }).click();
    // // work week type
    
    // await page.getByLabel('Topbar Menu').getByText('Configure').click();
    // await page.getByRole('menuitem', { name: 'Work Week' }).click();
    // await page.locator('.oxd-select-text--after > .oxd-icon').first().click();
    // await page.getByRole('option', { name: 'Full Day' }).click();
    // await page.locator('div:nth-child(2) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    // await page.getByRole('option', { name: 'Full Day' }).click();
    // await page.locator('div:nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    // await page.locator('div:nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    // await page.getByText('Full Day').nth(3).click();
    // await page.getByRole('option', { name: 'Full Day' }).locator('span').click();
    // await page.locator('div:nth-child(5) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    // await page.getByRole('option', { name: 'Half Day' }).click();
    // await page.locator('div:nth-child(6) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    // await page.getByRole('option', { name: 'Non-working Day' }).locator('span').click();
    // await page.getByRole('button', { name: 'Save' }).click();
    // holiday
    await page.pause()
    await page.getByLabel('Topbar Menu').getByText('Configure').click();
    await page.getByRole('listitem').filter({ hasText: /^Holidays$/ }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('National Republic Holiday');
    await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).click();
    await page.getByText('2', { exact: true }).click();
    await page.getByText('Full Day', { exact: true }).click();
    await page.getByRole('option', { name: 'Full Day' }).click();
    await page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).first().click();
    await page.locator('div').filter({ hasText: /^January$/ }).click();
    await page.getByText('July').click();
    await page.getByText('2', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1).click();
    await page.locator('.orangehrm-horizontal-padding').click();
    await page.getByRole('cell', { name: 'National Republic Holiday' }).click();
    await page.getByLabel('Topbar Menu').getByText('Configure').click();
    await page.getByText('Entitlements').click();
    await page.getByRole('menuitem', { name: 'Add Entitlements' }).click();
    await page.getByRole('textbox', { name: 'Type for hints...' }).click();
    await page.getByRole('textbox', { name: 'Type for hints...' }).fill('s');
    await page.getByText('SGfxvwizIP drCtB').click();
    await page.locator('form i').first().click();
    await page.getByText('-- Select --').first().click();
    await page.locator('form i').first().click();
    await page.getByRole('option', { name: 'funneral' }).click();
    await page.locator('div').filter({ hasText: /^2025-01-01 - 2025-31-12$/ }).nth(2).click();
    await page.getByRole('option', { name: '-01-01 - 2020-31-12' }).click();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('p');
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('2');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    // await expect(page.locator('#app')).toContainText('(1) Record Found');
    await page.getByRole('textbox', { name: 'Type for hints...' }).click();
    await page.locator('form div').filter({ hasText: /^funneral$/ }).nth(2).click();
    await page.getByText('-01-01 - 2020-31-12').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByLabel('Topbar Menu').getByText('Entitlements').click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.locator('label').filter({ hasText: 'Multiple Employees' }).locator('span').click();
    await page.locator('form i').first().click();
    await page.locator('.oxd-select-text').first().click();
    await page.getByText('-- Select --').first().click();
    await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text').first().click();
    await page.getByText('Administration').click();
    await page.locator('.oxd-select-text').first().click();
    await page.getByText('-- Select --').nth(1).click();
    await page.getByRole('option', { name: 'CAN - Matternity' }).click();
    await page.locator('form i').nth(3).click();
    await page.getByRole('option', { name: '-01-01 - 2021-31-12' }).click();
    await page.locator('form').getByRole('textbox').click();
    await page.locator('form').getByRole('textbox').fill('1');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: '×' }).click();
    await page.locator('form').getByRole('textbox').click();
    await page.locator('form').getByRole('textbox').fill('0');
    await page.getByRole('button', { name: 'Save' }).click();
    // await expect(page.getByText('No matching employees')).toBeVisible();
    await page.getByText('×No matching employeesNo').click();
    // await expect(page.getByText('No employees match the')).toBeVisible();
    await page.getByRole('button', { name: 'Ok' }).click();
    await page.locator('form').getByRole('textbox').click();
    await page.locator('form').getByRole('textbox').fill('2');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: '×' }).click();
    await page.locator('form i').nth(1).click();
    await page.getByText('Engineering').click();
    await page.locator('form i').nth(3).click();
    await page.getByText('-01-01 - 2020-31-12').click();
    await page.locator('form i').nth(1).click();
    await page.getByText('Administration').click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByText('×No matching employeesNo').click();
    await page.getByRole('button', { name: '×' }).click();
    await page.getByText('-- Select --').click();
    await page.locator('form i').nth(1).click();
    await page.getByText('Development').click();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.locator('span').filter({ hasText: 'God Universe' }).click();
    await page.getByRole('menuitem', { name: 'Change Password' }).click();
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('admin123');
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('admin1234@');
    await page.getByRole('textbox').nth(3).click();
    await page.getByRole('textbox').nth(3).fill('admin1234@');
    await page.getByRole('button', { name: 'Save' }).click();
})

  //await expect(page.getByRole('row', { name: ' National Republic Holiday 2025-07-02 Half Day Yes  ' })).toBeVisible();

  // ---------------------
test.only('holiday', async ({page}) => {
  
    await page.goto('https://opensource-demo.orangehrmlive.com/')

    //login screen
    //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    // navigate to leave section
    //await page.pause()
    await page.getByRole('link', { name: 'Leave' }).click();
    await page.getByText('Configure').click();
    // leave period
    await page.getByRole('textbox').nth(1).fill('National Republic Holiday');
    await page.getByRole('textbox', { name: 'yyyy-mm-dd' }).click();
    await page.getByText('3', { exact: true }).click();
    await page.locator('form i').first().click();
    await page.getByText('2', { exact: true }).click();
    await page.getByText('Full Day', { exact: true }).click();
    await page.getByRole('option', { name: 'Half Day' }).click();
    await page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.locator('form i').first().click();
    await page.getByRole('listitem').filter({ hasText: 'January' }).click();
    await page.getByText('August').click();
    await page.getByText('7', { exact: true }).click();
    await page.locator('form i').first().click();
    await page.getByRole('listitem').filter({ hasText: 'August' }).locator('i').click();
    await page.getByText('July').click();
    await page.getByText('2', { exact: true }).click();
    await page.locator('form i').nth(1).click();
    await page.getByRole('listitem').filter({ hasText: 'January' }).locator('i').click();
    await page.getByText('July').click();
    await page.getByText('2', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByText('National Republic Holiday').first().click();
    // await expect(page.getByRole('row', { name: ' National Republic Holiday 2025-07-02 Half Day Yes  ' })).toBeVisible();

    // ---------------------

});