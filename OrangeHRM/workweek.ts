import { Page, Locator } from '@playwright/test';

export class Workweeks {
    private page: Page
    

    constructor(page: Page) {
        this.page = page;
    }


    async workweeks(): Promise<void> {
        await this.page.getByLabel('Topbar Menu').getByText('Configure').click();
        await this.page.getByRole('menuitem', { name: 'Work Week' }).click();
        await this.page.locator('.oxd-select-text--after > .oxd-icon').first().click();
        await this.page.getByRole('option', { name: 'Full Day' }).click();
        await this.page.locator('div:nth-child(2) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
        await this.page.getByRole('option', { name: 'Full Day' }).click();
        await this.page.locator('div:nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
        await this.page.locator('div:nth-child(3) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
        await this.page.getByText('Full Day').nth(3).click();
        await this.page.getByRole('option', { name: 'Full Day' }).locator('span').click();
        await this.page.locator('div:nth-child(5) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
        await this.page.getByRole('option', { name: 'Half Day' }).click();
        await this.page.locator('div:nth-child(6) > .oxd-grid-4 > .oxd-grid-item > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
        await this.page.getByRole('option', { name: 'Non-working Day' }).locator('span').click();
        await this.page.getByRole('button', { name: 'Save' }).click();

    }

}
