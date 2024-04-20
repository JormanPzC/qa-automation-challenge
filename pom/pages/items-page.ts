import { expect, type Locator, type Page } from '@playwright/test';
import { WEB_SITE, LOGIN_URL } from '../data/constants';
import { NavbarAndSideMenu } from './navbarSideMenu-section.ts'

export class ItemsPage extends NavbarAndSideMenu {
	readonly breadCrumbHomeLocator: Locator;
	readonly breadCrumbItemsLocator: Locator;
	readonly filterButtonLocator: Locator;
	readonly addItemButtonLocator: Locator;
	readonly nameFieldHeaderLocator: Locator;
	readonly unitFieldHeaderLocator: Locator;
	readonly priceFieldHeaderLocator: Locator;
	readonly addedonFieldHeaderLocator: Locator;

	constructor(page: Page) {
		super(page)
		this.breadCrumbHomeLocator = page.getByRole('link', { name: 'Home' });
		this.breadCrumbItemsLocator = page.getByRole('navigation').getByRole('link', { name: 'Items' });
		this.filterButtonLocator = page.getByRole('button', { name: 'Filter' });
		this.addItemButtonLocator = page.getByRole('button', { name: 'Add Item' });
		this.nameFieldHeaderLocator = page.getByRole('cell', { name: 'Name' });
		this.unitFieldHeaderLocator = page.getByRole('cell', { name: 'Unit' });
		this.priceFieldHeaderLocator = page.getByRole('cell', { name: 'Price' });
		this.addedonFieldHeaderLocator = page.getByRole('cell', { name: 'Added On' });
	} 

	async clickAddItemButton(){
		await this.addItemButtonLocator.click();
	}

}