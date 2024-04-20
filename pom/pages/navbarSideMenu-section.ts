import { expect, type Locator, type Page } from '@playwright/test';
import { WEB_SITE, LOGIN_URL } from '../data/constants';

export class NavbarAndSideMenu {
  readonly page: Page;
  //Navbar elements
  readonly plusIconLocator: Locator;
  readonly searchBarLocator: Locator;
  readonly companySelectorLocator: Locator;
  readonly profilePictureLocator: Locator;
  readonly settingsOptionFromProfilePictureLocator: Locator;
  readonly logoutOptionFromProfilePictureLocator: Locator;

  //Side menu elements
  readonly dashboardLocator: Locator;
  readonly customersLocator: Locator;
  readonly itemsLocator: Locator;
  readonly estimatesLocator: Locator;
  readonly invoicesLocator: Locator;
  readonly recurringInvoicesLocator: Locator;
  readonly paymentsLocator: Locator;
  readonly expensesLocator: Locator;
  readonly modulesLocator: Locator;
  readonly usersLocator: Locator;
  readonly reportsLocator: Locator;
  readonly settingsLocator: Locator;


  constructor(page: Page) {
    this.page = page;
    //Navbar elements
    this.plusIconLocator = page.locator('#headlessui-menu-button-1');
    this.searchBarLocator = page.getByRole('textbox', { name: 'Search...' });
    this.companySelectorLocator = page.locator('li').filter({ hasText: 'Crater Invoice, Inc.' }).getByRole('img');    
    this.profilePictureLocator = page.locator('#headlessui-menu-button-3');
    this.settingsOptionFromProfilePictureLocator = page.getByRole('menuitem', { name: 'Settings' });
    this.logoutOptionFromProfilePictureLocator = page.getByRole('menuitem', { name: 'Logout' });

    //Side menu elements
    this.dashboardLocator = page.getByRole('link', { name: 'Dashboard' });
    this.customersLocator = page.getByRole('link', { name: 'Customers' }).first()
    this.itemsLocator = page.getByRole('link', { name: 'Items' }).first()
    this.estimatesLocator = page.getByRole('link', { name: 'Estimates' }).first();
    this.invoicesLocator = page.getByRole('link', { name: 'Invoices' }).first()
    this.recurringInvoicesLocator = page.getByRole('link', { name: 'Recurring Invoices' });
    this.paymentsLocator = page.getByRole('link', { name: 'Payments' }).first();
    this.expensesLocator = page.getByRole('link', { name: 'Expenses' }).first();
    this.modulesLocator = page.getByRole('link', { name: 'Modules' }).first();
    this.usersLocator = page.getByRole('link', { name: 'Users' }).first();
    this.reportsLocator = page.getByRole('link', { name: 'Reports' }).first();
    this.settingsLocator = page.getByRole('link', { name: 'Settings' }).first();
  }

  /**
   * fill the search bar from the navbar..
   */
  async fillSearchBar(text: string){
    await this.searchBarLocator.fill(text);
  }

  /**
   * Click to the "Settings" option from profile picture icon in the navbar.
   */
  async clickSettingsOptionFromProfilePicture(){
    await this.profilePictureLocator.click();
    await this.settingsOptionFromProfilePictureLocator.click();
  }

  /**
   * Click to the "Logout" option from profile picture icon in the navbar.
   */
  async clickLogoutOptionFromProfilePicture(){
    await this.profilePictureLocator.click();
    await this.logoutOptionFromProfilePictureLocator.click();
  }

}