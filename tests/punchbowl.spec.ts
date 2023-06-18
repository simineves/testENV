import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.punchbowl.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('nevsimao@yahoo.com');
  await page.getByLabel('Password').fill('8Mj$e9@Q3dPBFtCk');
  await page.getByRole('button', { name: 'Sign in' }).press('Enter');
  await page.getByRole('link', { name: 'Pricing' }).click();
  await page.getByTitle('Start your Platinum free trial').click();
  await page.getByRole('listitem').filter({ hasText: '$7.99/month $0.00/month 1 Year Plan $95.88 per year $0.00 per year Select' }).locator('label').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('list').filter({ hasText: 'Credit Card' }).getByRole('img').click();
  await page.getByText('Online Invitations').click();
  await page.getByText('Greeting Cards').click();
  await page.locator('.css-ntb0y8').click();
  await page.locator('#component--global-header a').nth(3).click();
  await page.getByRole('link', { name: 'Sign Out' }).click();
});
