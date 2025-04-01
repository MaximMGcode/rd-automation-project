import {Locator, Page } from '@playwright/test';


export class LoginNebulaPage {


    private get email(): Locator {
        return this.page.locator('//div/input[@name="email"]');
    }

    private get password(): Locator {
        return this.page.locator('//div/input[@name="password"]');
    }

    private get loginButton(): Locator {
        return this.page.locator('//div//span[text()="Log in"]');
    }

    private get welcomeBackTitle(): Locator {
        return this.page.locator('//form/h2');
    }

    public constructor(private page: Page) {}

    private async goTo(): Promise<void> {
        await this.page.goto('https://asknebula.com/app/login');
        await this.welcomeBackTitle.waitFor({ state: 'visible' });
    }

    public async loginToNebula(email: string, password: string): Promise<void> {
        await this.goTo();
        await this.email.click();
        await this.email.fill(email);
        await this.password.click();
        await this.password.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('load');
    }
}
