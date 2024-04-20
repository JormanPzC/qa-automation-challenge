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
  readonly smDashboardLocator: Locator;
  readonly smCustomersLocator: Locator;
  readonly smItemsLocator: Locator;
  readonly smEstimatesLocator: Locator;
  readonly smInvoicesLocator: Locator;
  readonly smRecurringInvoicesLocator: Locator;
  readonly smPaymentsLocator: Locator;
  readonly smExpensesLocator: Locator;
  readonly smModulesLocator: Locator;
  readonly smUsersLocator: Locator;
  readonly smReportsLocator: Locator;
  readonly smSettingsLocator: Locator;


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
    this.smDashboardLocator = page.getByRole('link', { name: 'Dashboard' });
    this.smCustomersLocator = page.getByRole('link', { name: 'Customers' }).first()
    this.smItemsLocator = page.getByRole('link', { name: 'Items' }).first()
    this.smEstimatesLocator = page.getByRole('link', { name: 'Estimates' }).first();
    this.smInvoicesLocator = page.getByRole('link', { name: 'Invoices' }).first()
    this.smRecurringInvoicesLocator = page.getByRole('link', { name: 'Recurring Invoices' });
    this.smPaymentsLocator = page.getByRole('link', { name: 'Payments' }).first();
    this.smExpensesLocator = page.getByRole('link', { name: 'Expenses' }).first();
    this.smModulesLocator = page.getByRole('link', { name: 'Modules' }).first();
    this.smUsersLocator = page.getByRole('link', { name: 'Users' }).first();
    this.smReportsLocator = page.getByRole('link', { name: 'Reports' }).first();
    this.smSettingsLocator = page.getByRole('link', { name: 'Settings' }).first();
  }

  /**
   * fill the search bar from the navbar.
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