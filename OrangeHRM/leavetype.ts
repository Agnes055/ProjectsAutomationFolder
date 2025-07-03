import { Page, Locator } from '@playwright/test';

export class LeaveType {
    private page: Page;
    private leavetype_textbox: Locator;
    private leavetypeclick_textbox: Locator;
    private leavetypename_textbox: Locator;
    private entitlement_radiobutton: Locator;
    private save_buttonType: Locator;

    constructor(page: Page) {
        this.page = page;
        this.leavetype_textbox = page.getByRole('menuitem', { name: 'Leave Types' });
        this.leavetypeclick_textbox =  page.getByRole('button', { name: ' Add' });
        this.leavetypename_textbox = page.locator('form').getByRole('textbox');
        this.entitlement_radiobutton = page.locator('label').filter({ hasText: 'Yes' }).locator('span');
        this.save_buttonType = page.getByRole('button', { name: 'Save' });
    }


    async leavetype(leaavetypename): Promise<void> {
        await this.leavetype_textbox.click();
        await this.leavetypeclick_textbox.click();
        await this.leavetypename_textbox.fill(leaavetypename);
        await this.entitlement_radiobutton.click();
        await this.save_buttonType.click()
    }

}