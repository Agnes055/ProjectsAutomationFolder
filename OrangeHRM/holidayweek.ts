import { Page, Locator } from '@playwright/test';

export class HolidayWeek {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    async holidayweeks(): Promise<void> {
        await this.page.getByLabel('Topbar Menu').getByText('Configure').click();
        await this.page.getByRole('listitem').filter({ hasText: /^Holidays$/ }).click();
        await this.page.getByRole('button', { name: ' Add' }).click();
        await this.page.getByRole('textbox').nth(1).click();
        await this.page.getByRole('textbox').nth(1).fill('National Republic Holiday');
        await this.page.getByRole('textbox', { name: 'yyyy-mm-dd' }).click();
        await this.page.locator('form i').first().click();
        await this.page.getByText('2', { exact: true }).click();
        await this.page.getByText('Full Day', { exact: true }).click();
        await this.page.getByRole('option', { name: 'Half Day' }).click();
        await this.page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.locator('form i').first().click();
        await this.page.getByRole('listitem').filter({ hasText: 'January' }).click();
        await this.page.getByText('July').click();
        await this.page.getByText('2', { exact: true }).click();
        await this.page.locator('form i').nth(1).click();
        await this.page.getByRole('listitem').filter({ hasText: 'January' }).locator('i').click();
        await this.page.getByText('July').click();
        await this.page.getByText('2', { exact: true }).click();
        await this.page.getByRole('button', { name: 'Search' }).click();
        await this.page.getByText('National Republic Holiday').first().click();
    }

}