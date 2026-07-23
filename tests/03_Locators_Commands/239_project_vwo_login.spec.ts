import { test, expect } from '@playwright/test';

test('Verify the validation on invalid login credntials', async ({ page }) => {
    await page.goto('https://app.vwo.com');
    await page.locator('#login-username').fill('Test data');
    await page.locator('#login-password').fill('Test data');
    await page.locator('#js-login-btn').click();

    await expect(page.getByText('Your email, password, IP address or location did not match')).toBeVisible();
})