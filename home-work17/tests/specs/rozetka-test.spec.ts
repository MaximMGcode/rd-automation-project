import { browser } from '@wdio/globals';
import { expect } from 'chai';
import { MainPage } from '../pageobjects/general-rozetka.page';
import { SearchProductPage } from '../pageobjects/search-category.page';
import { ProductPage } from '../pageobjects/product.page';
import { BasketPage } from '../pageobjects/basket.page';
import { SubCategoryPage } from '../pageobjects/sub-category.page';


describe('Test suite: add product to basket', () => {
    let generalRozetkaPage: MainPage;
    let searchRozetkaPage: SearchProductPage;
    let productRozetkaPage: ProductPage;
    let basketRozetkaPage: BasketPage;
    let subCategoryPage: SubCategoryPage;

    before(async () => {
        await browser.maximizeWindow();
        await browser.maximizeWindow();
        generalRozetkaPage = new MainPage();
        searchRozetkaPage =  new SearchProductPage();
        productRozetkaPage = new ProductPage();
        basketRozetkaPage = new BasketPage();
        subCategoryPage = new SubCategoryPage();
    });

    it('Test: search product that add to basket', async () => {
        await generalRozetkaPage.goToPage();
        await generalRozetkaPage.searchProduct('Asus Laptop');
        await searchRozetkaPage.pickProduct(1);
        const productUrl = await searchRozetkaPage.getCurretUrl();
        expect(await productUrl).to.include('asus');


        await productRozetkaPage.buyProduct();
        const productName = await productRozetkaPage.getProductName();
        const productNameInBasket = await basketRozetkaPage.GetProductNameFromBasket();
        expect(await productNameInBasket.toLowerCase()).to.include(productName.toLowerCase());
    });

    it('Test: add product from subcategory', async () => {
        await generalRozetkaPage.goToPage();
        await generalRozetkaPage.openCategory();

        const partOfUrl = 'telefony-tv-i-ehlektronika';
        expect(await subCategoryPage.getSubCategoryUrl()).to.include(partOfUrl);
        await subCategoryPage.choiceMobileCategory();


        await searchRozetkaPage.pickProduct(1);
        await productRozetkaPage.buyProduct();
        const productName = await productRozetkaPage.getProductName();
        const productNameInBasket = await basketRozetkaPage.GetProductNameFromBasket();
        expect(await productNameInBasket.toLowerCase()).to.include(productName.toLowerCase());

    });
});
