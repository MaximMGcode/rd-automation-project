import {Locator, Page } from '@playwright/test';


export class GeneralPage {


    private get pageTitle(): Locator {
        return this.page.locator('//div//h1[text()="Choose your psychic"]');
    }

    private get userProfileMenuButton(): Locator {
        return this.page.locator('(//header//div)[1]');
    }

    private get settingsButton(): Locator {
        return this.page.locator('//div//ul//li/a[text()="Settings"]');
    }

    public constructor(private page: Page) {}


    public async openSettingPage(): Promise<void> {
        await this.pageTitle.waitFor({ state: 'visible' });
        await this.userProfileMenuButton.click();
        await this.settingsButton.waitFor({ state: 'visible' });
        await this.settingsButton.click();
        await this.page.waitForLoadState('load');
    }

    public async getPageTitleText(): Promise<string> {
        await this.pageTitle.waitFor({ state: 'visible' });
        const text = await this.pageTitle.textContent();
        return text ?? '';
    }

}
