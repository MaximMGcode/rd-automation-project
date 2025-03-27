import { $ } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';

export class ProductPage {

    private get productName(): ChainablePromiseElement {
        return $('//div//h1');
    }

    private get buttonBuy(): ChainablePromiseElement {
        return $('(//button[@aria-label="Купити"])[1]');
    }

    private get inBasketButton(): ChainablePromiseElement {
        return $('(//button[@aria-label="В кошику"])[1]');
    }

    public async getProductName(): Promise<string> {
        const nameOfProduct = this.productName;
        await nameOfProduct.waitForDisplayed();
        const text = await nameOfProduct.getText();
        return text.trim();
    }

    public async buyProduct(): Promise<void> {
        await this.buttonBuy.waitForDisplayed();
        await this.buttonBuy.click();
        await this.inBasketButton.waitForDisplayed();

    }
}
