import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();

    // Wait until logged in (Dashboard loads)
    await page.waitForURL('**/dashboard/index');
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

    // Save session cookies & local storage
    await page.context().storageState({ path: authFile });
});