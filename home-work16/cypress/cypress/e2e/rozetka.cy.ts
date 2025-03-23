import 'cypress-xpath';

describe('Tests suite', () => {
    beforeEach(() => {
        cy.visit('https://rozetka.com.ua/');
        cy.document().its('readyState').should('eq', 'complete');
    });

    it('Test: search product that add to basket', () => {
        const searchInput = '//input[@name="search"]';
        cy.xpath(searchInput).should('be.visible').should('not.be.disabled');
        cy.xpath(searchInput).click().wait(1000).type('Asus Laptop');

        const searchSuggest = '//div[@class="search-suggest"]';
        cy.xpath(searchSuggest).should('be.visible').should('not.be.disabled');

        const findButton = '//button[contains(@class, "search-form__submit")]';
        cy.xpath(findButton).click();
        cy.document().its('readyState').should('eq', 'complete');
        const firstProduct = '//div[@class="item"][1]';

        cy.xpath(firstProduct).should('be.visible').should('not.be.disabled');
        cy.xpath(firstProduct).click();

        const subString = 'asus';
        cy.url().then((url) => {
            expect(url).to.include(subString);
        });

        let addedProductName: string;
        const nameOfProduct = '//div//h1';
        cy.xpath(nameOfProduct).should('be.visible').should('not.be.disabled');
        cy.xpath(nameOfProduct).invoke('text').then((text) => {
            addedProductName = text.trim().split(' +')[0];
            expect(text.trim().toLowerCase()).to.include(subString);
        });

        const buttonBuy = '(//button[@aria-label="Купити"])[1]';
        cy.xpath(buttonBuy).should('be.visible').should('not.be.disabled');
        cy.xpath(buttonBuy).click();

        const basketHeader = '//div[@data-testid="modal-header"]';
        cy.xpath(basketHeader).should('be.visible').should('not.be.disabled');

        const product = '//li//div//a//span';
        cy.xpath(product).should('be.visible').should('not.be.disabled');
        cy.xpath('(//div[@class="cart-product__main"]//span)[1]').invoke('text').then((text) => {
            expect(text.trim()).to.equal(addedProductName);
        });

        const crossBasketButton = '//button[@class="btn button button--icon"]';
        cy.xpath(crossBasketButton).should('be.visible').should('not.be.disabled');
        cy.xpath(crossBasketButton).click();

        const basketCounter = '//button//span[text()=" 1 "]';
        cy.document().its('readyState').should('eq', 'complete');
        cy.xpath(basketCounter).should('be.visible').should('not.be.disabled');

        const basketButton = '//button[@aria-label="Відкрити корзину"]';
        cy.xpath(basketButton).should('be.visible').should('not.be.disabled');
        cy.xpath(basketButton).click();

        cy.xpath(basketHeader).should('be.visible').should('not.be.disabled');
        cy.xpath(product).should('be.visible').should('not.be.disabled');
        cy.xpath('(//div[@class="cart-product__main"]//span)[1]').invoke('text').then((text) => {
            expect(text.trim()).to.equal(addedProductName);
        });

    });


    it('Test: add product from subcategory', () => {
        const phoneTvElectronicCategory = '//aside//ul[@class="sidebar-theme"]/li[2]';

        cy.xpath(phoneTvElectronicCategory).should('be.visible').should('not.be.disabled');
        cy.xpath(phoneTvElectronicCategory).click();
        cy.document().its('readyState').should('eq', 'complete');

        const mobilePhoneSubCategory = '//section[@class="portal-section"]//a[(contains(text(), "Мобільні телефони"))]';
        cy.xpath(phoneTvElectronicCategory).should('be.visible').should('not.be.disabled');
        cy.xpath(mobilePhoneSubCategory).click();
        const partOfUrl = '/mobile';
        cy.document().its('readyState').should('eq', 'complete');
        cy.url().then((url) => {
            expect(url).to.include(partOfUrl);
        });

        const firstProduct = '//div[@class="item"][1]';
        cy.xpath(firstProduct).should('be.visible').should('not.be.disabled');
        cy.xpath(firstProduct).click().wait(1000);


        let addedProductName: string;
        const nameOfProduct = '//div//div//h1';
        cy.xpath(nameOfProduct)
            .should('be.visible')
            .should('not.be.disabled')
            .invoke('text')
            .then((text) => {
                addedProductName = text.trim();
                expect(addedProductName.toLowerCase()).to.include('мобільний телефон');
            });

        const buttonBuy = '//div//button[@aria-label="Купити"]';
        cy.xpath(buttonBuy).should('be.visible').wait(2000);
        cy.xpath(buttonBuy).click();


        const basketHeader = '//div[@data-testid="modal-header"]';
        cy.xpath(basketHeader).should('be.visible').should('not.be.disabled');

        const product = '//li//div//a//span';
        cy.xpath(product).should('be.visible').should('not.be.disabled').wait(2000);;
        cy.xpath('(//div[@class="cart-product__main"]//span)[1]').invoke('text').then((text) => {
            expect(text.trim()).to.equal(addedProductName);
        });

        const crossBasketButton = '//button[@class="btn button button--icon"]';
        cy.xpath(crossBasketButton).should('be.visible').should('not.be.disabled');
        cy.xpath(crossBasketButton).click();

        const basketCounter = '//button//span[text()=" 1 "]';
        cy.document().its('readyState').should('eq', 'complete');
        cy.xpath(basketCounter).should('be.visible').should('not.be.disabled');

        const basketButton = '//button[@aria-label="Відкрити корзину"]';
        cy.xpath(basketButton).should('be.visible').should('not.be.disabled');
        cy.xpath(basketButton).click();


        cy.xpath(basketHeader).should('be.visible').should('not.be.disabled');
        cy.xpath(product).should('be.visible').should('not.be.disabled');
        cy.xpath('(//div[@class="cart-product__main"]//span)[1]').invoke('text').then((text) => {
            expect(text.trim()).to.equal(addedProductName);
        });
    });
});
