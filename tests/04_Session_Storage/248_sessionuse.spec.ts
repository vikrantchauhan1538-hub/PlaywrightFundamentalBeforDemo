import { test, expect } from '@playwright/test';

test.use({ storageState: 'sessionStorage.json' });

test('Verify functionality to check user navigates to dashboard page after login with valid credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});