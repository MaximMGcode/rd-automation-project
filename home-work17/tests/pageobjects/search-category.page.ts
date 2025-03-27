import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';


export class SearchProductPage {

    private getProductElement(position: number): ChainablePromiseElement {
        return $(`//div[@class="item"][${position}]`);
    }

    public async pickProduct(productPosition: number ): Promise<void> {
        const productElement = this.getProductElement(productPosition);
        await productElement.waitForDisplayed({ timeout: 10000});
        if (await productElement.isDisplayed()) {
            await productElement.click();
        } else {
            throw new Error('Product did not find');
        }
    }

    public async getCurretUrl(): Promise<string> {
        const currentUrl = await browser.getUrl();
        return currentUrl;
    }
}
