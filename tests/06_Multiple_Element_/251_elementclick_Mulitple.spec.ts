import { test, expect } from '@playwright/test';

test('basic verify how to handle multiple elements in playwright', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    // await page.getByRole('link', { name: 'Forgotten Password' }).first().click();
    await page.getByText('Forgotten Password').first().click();
    // await expect(page).toHaveURL(/.*Forgotten-password/);


});