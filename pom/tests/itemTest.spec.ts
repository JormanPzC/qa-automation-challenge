import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { DashBoardPage } from '../pages/dashboard-page';
import { LOGIN_URL, DASHBOARD_URL } from '../data/constants';
import { validUSer } from '../data/dataTest';
import { ItemsPage } from '../pages/items-page';
import { ItemsCreatePage } from '../pages/items-create-page';
import { Item } from '../models/models.ts';


test.describe('Test Suite Items: Ensure that basic functionality for items is working properly', () => {

	test.beforeEach(async ({page}) => {
		await page.goto(LOGIN_URL);
		const loginPage = new LoginPage(page);
		const itemPage = new ItemsPage(page);

		await loginPage.fillEmailInput(validUSer.email);
		await loginPage.fillPasswordInput(validUSer.password);
		await loginPage.clickLoginButton();
		await page.waitForURL(DASHBOARD_URL);

		await itemPage.smItemsLocator.click();
	});

	test('TCE-003: Add an Item', async ({ page }) => {
		const itemPage = new ItemsPage(page);
		const itemCreatePage = new ItemsCreatePage(page);

		await itemPage.addItemButtonLocator.click();

		//GIVEN a item
		let item: Item = {
			name: 'Food',
			price: '$ 15.00',
			unit: 'box',
			description: 'Some item description'
		}; //Refactor this.
		
		//WHEN filling the inputs
		await itemCreatePage.createItem(item);

		//THEN loging successfully and user redirected to dashboard page.
		await page.waitForURL('https://demo.craterapp.com/admin/items'); //Refactor this.

		let currentPage = page.url();
		await expect(currentPage).toBe('https://demo.craterapp.com/admin/items'); //Refactor validation of item created.
		console.log("TCE-003 Test completed");
	});


});

