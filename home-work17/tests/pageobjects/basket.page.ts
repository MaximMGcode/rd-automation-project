import { $, browser} from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';


export class BasketPage {


    private get basketHeader(): ChainablePromiseElement {
        return $('//div[@data-testid="modal-header"]');
    }

    private get basketCounter(): ChainablePromiseElement {
        return $('//button//span[text()=" 1 "]');
    }

    private get basketButton(): ChainablePromiseElement {
        return $('//button[@aria-label="Відкрити корзину"]');
    }

    private get productNameInBasket(): ChainablePromiseElement {
        return $('//li//div//a//span[@class="cart-product__title"]');
    }

    public async GetProductNameFromBasket(): Promise<string> {
        if (!this.basketCounter.isDisplayed()) {
            await browser.refresh();
            await this.basketCounter.waitForDisplayed({ timeout: 10000 });
        }
        await this.basketButton.waitForDisplayed();
        await this.basketButton.click();
        await this.basketHeader.waitForDisplayed();
        await this.productNameInBasket.waitForDisplayed();
        const text = await this.productNameInBasket.getText();
        return text.trim();
    }
}
