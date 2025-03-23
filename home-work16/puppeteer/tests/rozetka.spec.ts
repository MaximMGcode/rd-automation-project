import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';


function getXpathWay(xpath: string): string {
    return `::-p-xpath(${xpath})`;
}

describe('Tests suite', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;


    before(async () => {
        browser = await puppeteer.launch({headless: false, defaultViewport: {width: 1200, height: 900}});
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();
        await page.goto('https://rozetka.com.ua/', {waitUntil: 'domcontentloaded'});
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });

    it('Test: search product that add to basket', async () => {
        const searchInput = getXpathWay('//input[@name="search"]');
        const flagOfEmptyState = getXpathWay('//input[@placeholder="Я шукаю..."]');
        await page.waitForSelector(searchInput, { visible: true });
        await page.locator(searchInput).click();
        await page.locator(searchInput).hover();
        await page.type(searchInput, 'Asus Laptop');
        await page.waitForSelector(flagOfEmptyState, { visible: false });

        const searchSuggest = getXpathWay('//div[@class="search-suggest"]');
        await page.waitForSelector(searchSuggest, { visible: true });
        const findButton = getXpathWay('//button[contains(@class, "search-form__submit")]');
        await page.waitForSelector(searchSuggest, { visible: true });
        await page.waitForSelector(findButton, { visible: true });
        await page.locator(findButton).click();

        const firstProduct = getXpathWay('//div[@class="item"][1]');
        await page.locator(firstProduct).click();
        const currentUrl = page.url();
        const subString = 'asus';

        await page.waitForSelector(firstProduct, { visible: true });
        expect(currentUrl).to.include(subString);

        const nameOfProduct = getXpathWay('//div//h1');
        await page.waitForSelector(nameOfProduct, { visible: true });

        const addedProductNameElement = await page.$(nameOfProduct);
        if (addedProductNameElement) {
            const actualText = await addedProductNameElement.evaluate(el => el.textContent?.trim());
            expect(actualText?.toLowerCase()).to.include(subString);
        }

        const buttonBuy = getXpathWay('(//button[@aria-label="Купити"])[1]');
        await page.reload({ waitUntil: 'domcontentloaded' });
        await page.waitForSelector(buttonBuy, { visible: true });
        await page.locator(buttonBuy).click();

        const basketCounter = getXpathWay('//button//span[text()=" 1 "]');
        const basketButton = getXpathWay('//button[@aria-label="Відкрити корзину"]');
        await page.waitForSelector(basketCounter, { visible: true });
        await page.locator(basketButton).click();

        const basketHeader = getXpathWay('//div[@data-testid="modal-header"]');
        await page.waitForSelector(basketHeader, { visible: true });

        const product = getXpathWay('//li//div//a//span[@class="cart-product__title"]');
        const addedProductName = await page.$(product);
        if (addedProductName) {
            const actualText = await addedProductName.evaluate(el => el.textContent?.trim());
            expect(actualText?.toLowerCase()).to.include(subString);
        }

    });


    it('Test: add product from subcategory', async () => {
        const phoneTvElectronicCategory = getXpathWay('//aside//ul[@class="sidebar-theme"]/li[2]');
        await page.locator(phoneTvElectronicCategory).click();
        const mobilePhoneSubCategory = getXpathWay('//section[@class="portal-section"]//a[(contains(text(), "Мобільні телефони"))]');
        await page.locator(mobilePhoneSubCategory).click();
        const subCat = page.url();
        const partOfUrl = 'telefony-tv-i-ehlektronika';
        expect(subCat).to.include(partOfUrl);

        const firstProduct = getXpathWay('//div[@class="item"][1]');
        await page.locator(firstProduct).click();

        const nameOfProduct = getXpathWay('//div//h1');
        await page.waitForSelector(nameOfProduct, { visible: true });

        const buttonBuy = getXpathWay('(//button[@aria-label="Купити"])[1]');
        await page.reload({ waitUntil: 'domcontentloaded' });
        await page.waitForSelector(buttonBuy, { visible: true });
        await page.locator(buttonBuy).click();

        const basketCounter = getXpathWay('//button//span[text()=" 1 "]');
        const basketButton = getXpathWay('//button[@aria-label="Відкрити корзину"]');
        await page.waitForSelector(basketCounter, { visible: true });
        await page.locator(basketButton).click();

        const basketHeader = getXpathWay('//div[@data-testid="modal-header"]');
        await page.waitForSelector(basketHeader, { visible: true });

        const product = getXpathWay('//li//div//a//span[@class="cart-product__title"]');
        const addedProductName = await page.$(product);
        if (addedProductName) {
            const actualText = await addedProductName.evaluate(el => el.textContent?.trim());
            expect(actualText?.toLowerCase()).to.include('Мобільний телефон');
        }
    });
});
