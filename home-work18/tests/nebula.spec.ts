
import { test, expect} from '@playwright/test';
import { LoginNebulaPage } from '../src/pages/login.page';
import { GeneralPage } from '../src/pages/general-main.page';
import { SettingPage } from '../src/pages/setting.page';

const userEmail = '';
const userPassword = '';
const newNikeName = 'Test User 1';

test.describe('Test suite: Nebula', () => {
    let loginPage: LoginNebulaPage;
    let mainPage: GeneralPage;
    let settingPage: SettingPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginNebulaPage(page);
        mainPage = new GeneralPage(page);
        settingPage = new SettingPage(page);
    });

    test('Test: Login to Nebula', async () => {
        await loginPage.loginToNebula(userEmail, userPassword);
        expect(await mainPage.getPageTitleText()).toBe('Choose your psychic');
    });

    test('Test: Change user Nickname', async () => {
        await loginPage.loginToNebula(userEmail, userPassword);
        await mainPage.openSettingPage();
        await settingPage.changeNikeName(newNikeName);
        expect(await settingPage.getNewUserNikeName()).toBe(newNikeName);

    });
});
