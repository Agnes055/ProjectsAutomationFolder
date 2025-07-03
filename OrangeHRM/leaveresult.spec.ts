import {test, expect} from '@playwright/test'
import {ConfigureTest} from './configureleave'
import {LeavePeriod} from './leaveperiod'
import {LeaveType} from './leavetype'
import {Workweeks} from './workweek'
import { HolidayWeek } from './holidayweek'

test('Orange HRM testing', async ({page}) => {

    await test.step('login page', async () => {
        await page.goto('https://opensource-demo.orangehrmlive.com/')
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
    //assert page title
        const title: string = await page.title();
        console.log('Page title:', title);
        expect(title).toBe('OrangeHRM');
    // assert page 
        await expect(page.getByRole('heading')).toContainText('Dashboard');
        await expect(page.getByRole('link', { name: 'client brand banner' })).toBeVisible();
        await expect.soft(page).toHaveScreenshot()

    })
    
    
    await test.step('Leave period', async () => {
        const leave = new LeavePeriod(page);
        const leavecon = new ConfigureTest(page);
        await leavecon.leavepoint();
        await leave.leaveperiod()
        await expect.soft(page.locator('form')).toContainText('January 31 (Following Year)');
        await expect.soft(page.locator('form')).toContainText('2025-01-01 to 2026-31-01')
    })
    await test.step('Leave type', async () => {
        const leavetypes = new LeaveType(page);
        const leavecon = new ConfigureTest(page);
        await leavecon.leavepointclick();
        await leavetypes.leavetype('Wedding')
        await expect.soft(page.getByRole('heading', { name: 'Leave Types' })).toBeVisible();
        await expect.soft(page.locator('#app')).toContainText('Add Leave Type');
        await expect.soft(page.getByRole('cell', { name: 'Wedding', exact: true })).toBeVisible();
    })
    await test.step('work week', async () => {
        const leaveweek = new Workweeks(page);
        await leaveweek.workweeks();
        await expect.soft(page.getByText('Work WeekMondayFull')).toBeVisible();
        await expect.soft(page.locator('#app')).toContainText('Work Week');
    })
    await test.step('holiday', async () => {
        await page.pause()
        const holiday = new HolidayWeek(page);
        await holiday.holidayweeks();
        await expect.soft(page.getByRole('row', { name: ' National Republic Holiday 2025-07-02 Half Day Yes  ' })).toBeVisible();
        //await expect(page.locator('#app')).toContainText('Add Holiday');
        //await expect(page.getByText('June Day (Canada)')).toBeVisible();
        //await expect(page.getByRole('table')).toContainText('sg'); 
    })


})