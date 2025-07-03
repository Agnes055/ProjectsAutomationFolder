import { Page, Locator } from '@playwright/test';

//leave period
export class LeavePeriod {
    private page: Page;
    private startmonth_textbox: Locator;
    private startdate_textbox: Locator;
    private enddate_textbox: Locator;
    private currentLeavePeriod_textbox: Locator;
    private save_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.startmonth_textbox = page.getByRole('menuitem', { name: 'Leave Period' });
        this.startdate_textbox = page.locator('form i').first();
        this.enddate_textbox = page.getByRole('option', { name: 'February' });
        this.currentLeavePeriod_textbox = page.locator('form i').nth(1);
        this.save_button = page.getByRole('button', { name: 'Save' });
    }


    async leaveperiod(): Promise<void> {
        await this.startmonth_textbox.click();
        await this.startdate_textbox.click();
        await this.enddate_textbox.click();
        await this.currentLeavePeriod_textbox.click();
        await this.save_button.click()
    }

}


