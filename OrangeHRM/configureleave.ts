import { Page } from '@playwright/test';

export class ConfigureTest {
    public page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async leavepoint(): Promise<void> {
        await this.page.getByRole('link', { name: 'Leave' }).click();
        await this.page.getByText('Configure').click();
    }
    async leavepointclick(): Promise<void> {
        await this.page.getByRole('listitem').filter({ hasText: 'Configure' }).click();
    }
    

}