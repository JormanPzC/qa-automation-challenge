import { expect, type Locator, type Page } from '@playwright/test';
import { WEB_SITE, LOGIN_URL } from '../data/constants';

export class LoginPage {
  readonly page: Page;
  readonly emailInputLocator: Locator;
  readonly passwordInputLocator: Locator;
  readonly forgotPasswordLinkTextLocator: Locator;
  readonly loginButtonLocator: Locator;


  constructor(page: Page) {
    this.page = page;
	  this.emailInputLocator = page.locator('input[name="email"]');
	  this.passwordInputLocator = page.locator('input[name="password"]');
	  this.forgotPasswordLinkTextLocator = page.getByRole('link', { name: 'Forgot Password?' });
	  this.loginButtonLocator = page.getByRole('button', { name: 'Login' });
  }

/**
 * Redirection to the login page.
 */
  async goto() {
    await this.page.goto(LOGIN_URL);
  }

  /**
   * Fill email input
   * @param email 
   */
  async fillEmailInput(email: string) {
    await this.emailInputLocator.fill(email);
  }

  /**
   * Fill password input.
   * @param password 
   */
  async fillPasswordInput(password: string) {
    await this.passwordInputLocator.fill(password);
  }

  /**
   * Click to the "Forgot Password?" link text.
   */
  async clickForgotPasswordLinkText() {
	  await this.forgotPasswordLinkTextLocator.click();
  }

  /**
   * Click to the login button.
   */
  async clickLoginButton() {
	  await this.loginButtonLocator.click();
  }

}