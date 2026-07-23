import { test, expect } from '@playwright/test';

test('Verify functionality of press sequence', async ({ page }) => {

    await page.goto('https://www.google.com/');

    await page.getByRole('combobox', { name: 'Search' }).pressSequentially('My first google search', { delay: 100 });

    await page.waitForTimeout(3000);
});