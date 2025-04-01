import {Locator, Page } from '@playwright/test';


export class SettingPage {


    private get nikeNameField(): Locator {
        return this.page.locator('//label[text()="Nickname"]/following-sibling::div/input');
    }

    private get editNikeNameButton(): Locator {
        return this.page.locator('//label[text()="Nickname"]/following-sibling::div//button');
    }

    private get changeNikeNameTittle(): Locator {
        return this.page.locator('//h3[text()="Change nickname"]');
    }

    private get formChangeNickNameField(): Locator {
        return this.page.locator('//form//div/input');
    }

    private get saveButton(): Locator {
        return this.page.locator('//button[@type="submit"]');
    }

    private get changeChecked(): Locator {
        return this.page.locator('//img[@alt="checked"]');
    }

    private get doneButton(): Locator {
        return this.page.locator('//span[text()="Done"]');
    }

    public constructor(private page: Page) {}

    public async changeNikeName(newNikeName: string): Promise<void> {
        await this.nikeNameField.waitFor({ state: 'visible' });
        await this.editNikeNameButton.click();
        await this.changeNikeNameTittle.waitFor({ state: 'visible' });
        await this.formChangeNickNameField.fill(newNikeName);
        await this.saveButton.click();
        await this.changeChecked.waitFor({ state: 'visible' });
        await this.doneButton.click();
        await this.doneButton.waitFor({ state: 'hidden' });

    }

    public async getNewUserNikeName(): Promise<string> {
        await this.nikeNameField.waitFor({ state: 'visible' });
        const text = await this.nikeNameField.getAttribute('value');;
        return text ?? '';
    }

}


