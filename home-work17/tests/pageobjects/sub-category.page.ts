import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';


export class SubCategoryPage {

    private get mobilePhoneSubCategory(): ChainablePromiseElement {
        return $('//section[@class="portal-section"]//a[(contains(text(), "Мобільні телефони"))]');
    }

    public async getSubCategoryUrl(): Promise<string> {
        await this.mobilePhoneSubCategory.waitForDisplayed();
        const currentUrl = await browser.getUrl();
        return currentUrl;
    }

    public async choiceMobileCategory():Promise<void> {
        await this.mobilePhoneSubCategory.waitForDisplayed({ timeout: 10000});
        await this.mobilePhoneSubCategory.waitForClickable;
        await this.mobilePhoneSubCategory.click();
    }
}
