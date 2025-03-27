import { $, browser } from '@wdio/globals';
import { ChainablePromiseElement } from 'webdriverio';


export class MainPage {

    private get searchField(): ChainablePromiseElement {
        return $('//input[@name="search"]');
    }

    private get searchSuggest(): ChainablePromiseElement {
        return $('//div[@class="search-suggest"]');
    }

    private get findButton(): ChainablePromiseElement {
        return $('//button[contains(@class, "search-form__submit")]');
    }

    private get flagOfEmptyState(): ChainablePromiseElement {
        return $('//input[@placeholder="Я шукаю..."]');
    }

    private get electronicCategory(): ChainablePromiseElement{
        return $('//aside//ul[@class="sidebar-theme"]/li[2]');
    }


    public async goToPage(): Promise<void> {
        await browser.url('https://rozetka.com.ua/');

    }

    public async searchProduct(productName: string): Promise<void> {
        await this.searchField.setValue(productName);
        if (!await this.flagOfEmptyState.isDisplayed()) {
            await this.searchField.setValue(productName);
        }
        await this.searchField.waitForDisplayed({ timeout: 10000 });
        await this.searchSuggest.waitForDisplayed({ timeout: 10000 });
        await this.findButton.click();
    }

    public async openCategory(): Promise<void> {
        await this.electronicCategory.waitForDisplayed({ timeout: 10000 });
        await this.electronicCategory.click();
    }

}
