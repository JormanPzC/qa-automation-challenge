import { expect, type Locator, type Page } from '@playwright/test';
import { NavbarAndSideMenu } from './navbarSideMenu-section.ts'
import { Item } from '../models/models.ts';

export class ItemsCreatePage extends NavbarAndSideMenu {
	readonly breadCrumbHomeLocator: Locator;
	readonly breadCrumbItemsLocator: Locator;
	
	readonly nameInputLocator: Locator;
	readonly priceInputLocator: Locator;
	readonly unitInputLocator: Locator;
	readonly descriptionInputLocator: Locator;
	readonly saveItemButtonLocator: Locator;

	constructor(page: Page) {
		super(page)
		this.breadCrumbHomeLocator = page.getByRole('link', { name: 'Home' });
		this.breadCrumbItemsLocator = page.getByRole('navigation').getByRole('link', { name: 'Items' });
		this.nameInputLocator = page.getByRole('textbox').nth(1); //refactor this locator.
		this.priceInputLocator = page.locator('[id="\\30 "]'); //refactor this locator.
		this.unitInputLocator = page.locator('.bg-multiselect-caret');
		this.descriptionInputLocator = page.locator('textarea[name="description"]');
		this.saveItemButtonLocator = page.getByRole('button', { name: 'Save Item' });
		
	} 

	async createItem(item : Item){
		await this.nameInputLocator.fill(item.name);
		await this.priceInputLocator.fill(item.price);
		await this.unitInputLocator.click();
		let unitOptionsLocator = this.page.locator('li').filter({ hasText: item.unit });
		await unitOptionsLocator.click();
		await this.descriptionInputLocator.fill(item.description);
		await this.saveItemButtonLocator.click();
	}

}