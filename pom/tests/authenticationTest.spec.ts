import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { DashBoardPage } from '../pages/dashboard-page';
import { LOGIN_URL, DASHBOARD_URL } from '../data/constants';
import { validUSer } from '../data/dataTest';

test.describe('Test Suite Authentication: Ensure that basic functionality for login and logout is working properly', () => {

	test.beforeEach(async ({page}) => {
		await page.goto(LOGIN_URL);
	});

	test('TCE-001: Valid credentials', async ({ page }) => {
		const loginPage = new LoginPage(page);

		//GIVEN valid credentials
		
		//WHEN filling the inputs
		await loginPage.fillEmailInput(validUSer.email);
		await loginPage.fillPasswordInput(validUSer.password);
		await loginPage.clickLoginButton();

		//THEN loging successfully and user redirected to dashboard page.
		await page.waitForURL(DASHBOARD_URL);

		let currentPage = page.url();
		await expect(currentPage).toBe(DASHBOARD_URL); 
		console.log("TCE-001 Test completed");
	});


	test('TCE-002: Logout', async ({ page }) => {
		const loginPage = new LoginPage(page);
		const dashboardPage = new DashBoardPage(page);

		//GIVEN a logged user
		await loginPage.fillEmailInput(validUSer.email);
		await loginPage.fillPasswordInput(validUSer.password);
		await loginPage.clickLoginButton();
		
		//WHEN clicking the logout button
		await page.waitForURL(DASHBOARD_URL);
		await dashboardPage.clickLogoutOptionFromProfilePicture();

		//THEN loging successfully and user redirected to dashboard page.
		await page.waitForURL(LOGIN_URL);

		let currentPage = page.url();
		await expect(currentPage).toBe(LOGIN_URL); 
		console.log("TCE-002 Test completed");
	});

});

